import express from "express";
import cors from "cors";
import puppeteer from "puppeteer";

const app = express();

const PORT = process.env.PORT || 3001;
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";

process.on("uncaughtException", console.error);
process.on("unhandledRejection", console.error);

app.use(cors({ origin: FRONTEND_URL }));
app.use(express.json({ limit: "100mb" }));

let browserInstance = null;

async function getBrowser() {
  if (!browserInstance || !browserInstance.connected) {
    browserInstance = await puppeteer.launch({
      executablePath:
        "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
      headless: "new",
      protocolTimeout: 120_000,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
        "--disable-gpu",
        "--disable-extensions",
        "--disable-background-networking",
        "--disable-sync",
        "--disable-web-security",
        "--font-render-hinting=none",
        "--disable-lcd-text",
      ],
    });
  }
  return browserInstance;
}

async function generatePdf(printRoute, proposalData) {
  const browser = await getBrowser();
  const page = await browser.newPage();

  page.on("console", (msg) =>
    console.log(`[Browser] ${msg.type().toUpperCase()}: ${msg.text()}`)
  );
  page.on("pageerror", (err) =>
    console.error(`[Browser CRASH] ${err.toString()}`)
  );

  try {
    await page.emulateMediaType("print");
    await page.setViewport({ width: 794, height: 1123, deviceScaleFactor: 1 });

    // ── KEY FIX ──────────────────────────────────────────────────────────────
    // Log exactly what scope we are injecting so we can confirm the frontend
    // button is sending the right value.
    console.log(`[PDF] exportScope being injected: "${proposalData.exportScope}"`);
    console.log(`[PDF] commercialPages keys: ${Object.keys(proposalData.commercialPages || {}).length}`);

    // Inject BEFORE navigation — this is correct and working.
    await page.evaluateOnNewDocument((data) => {
      window.__PROPOSAL_INITIAL_DATA__ = data;

      // ── ADDITIONAL FIX ───────────────────────────────────────────────────
      // Also expose the exportScope on window directly so TechnicalPreview
      // can read it with zero ambiguity, no JSON parsing, no try/catch.
      window.__EXPORT_SCOPE__ = data.exportScope || "full";
    }, proposalData);

    const url = `${FRONTEND_URL}${printRoute}`;
    console.log(`[PDF] Opening: ${url}`);

    await page.goto(url, { waitUntil: "networkidle0", timeout: 60_000 });

    // Fallback hydration
    await page.evaluate((data) => {
      if (typeof window.__hydrateProposalStore__ === "function") {
        window.__hydrateProposalStore__(data);
      }
    }, proposalData);

    console.log("[PDF] Waiting for __PROPOSAL_READY__...");
    await page.waitForFunction(() => window.__PROPOSAL_READY__ === true, {
      timeout: 60_000,
      polling: 200,
    });

    console.log("[PDF] Settling repaints...");
    await new Promise((resolve) => setTimeout(resolve, 600));

    console.log("[PDF] Verifying images...");
    await page.evaluate(async () => {
      const timeout = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
      await Promise.all(
        Array.from(document.images).map((img) => {
          if (img.complete && img.naturalWidth > 0) return Promise.resolve();
          return Promise.race([
            new Promise((resolve) => {
              img.onload  = resolve;
              img.onerror = resolve;
            }),
            timeout(5000),
          ]);
        })
      );
    });

    // ── CONFIRM what the browser actually rendered ───────────────────────────
    const renderedScope = await page.evaluate(() => window.__EXPORT_SCOPE__);
    const commercialVisible = await page.evaluate(() => {
      return !!document.querySelector(".commercial-pages-group");
    });
    console.log(`[PDF] Browser __EXPORT_SCOPE__: "${renderedScope}"`);
    console.log(`[PDF] commercial-pages-group in DOM: ${commercialVisible}`);

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,
      scale: 1.0,
      margin: { top: "0mm", right: "0mm", bottom: "0mm", left: "0mm" },
      displayHeaderFooter: false,
    });

    console.log(`[PDF] Generated ${pdfBuffer.length} bytes`);
    return pdfBuffer;
  } finally {
    await page.close();
  }
}

app.post("/api/export/technical", async (req, res) => {
  try {
    const { proposalData } = req.body;
    if (!proposalData)
      return res.status(400).json({ message: "proposalData is required" });

    console.log("[PDF] Technical export started...");
    console.log(`[PDF] Received exportScope: "${proposalData.exportScope}"`);

    const pdfBuffer = await generatePdf("/print/technical", proposalData);
    const filename  = `Technical-Proposal-${proposalData.meta?.proposalNumber || "Draft"}.pdf`;

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);
    res.setHeader("Content-Length", pdfBuffer.length);
    res.end(pdfBuffer);

    console.log(`[PDF] Technical export complete: ${filename}`);
  } catch (err) {
    console.error("[PDF] Technical export failed:", err);
    res.status(500).json({ message: err.message || "PDF generation failed" });
  }
});

app.post("/api/export/commercial", async (req, res) => {
  try {
    const { proposalData } = req.body;
    if (!proposalData)
      return res.status(400).json({ message: "proposalData is required" });

    const pdfBuffer = await generatePdf("/print/commercial", proposalData);
    const filename  = `Commercial-Proposal-${proposalData.meta?.proposalNumber || "Draft"}.pdf`;

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);
    res.setHeader("Content-Length", pdfBuffer.length);
    res.end(pdfBuffer);
  } catch (err) {
    console.error("[PDF] Commercial export failed:", err);
    res.status(500).json({ message: err.message || "PDF generation failed" });
  }
});

app.post("/api/export/full", async (req, res) => {
  try {
    const { proposalData } = req.body;
    if (!proposalData)
      return res.status(400).json({ message: "proposalData is required" });

    const pdfBuffer = await generatePdf("/print/full", proposalData);
    const filename  = `Full-Proposal-${proposalData.meta?.proposalNumber || "Draft"}.pdf`;

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);
    res.setHeader("Content-Length", pdfBuffer.length);
    res.end(pdfBuffer);
  } catch (err) {
    console.error("[PDF] Full export failed:", err);
    res.status(500).json({ message: err.message || "PDF generation failed" });
  }
});

app.get("/health", (_req, res) => res.json({ status: "ok" }));

process.on("SIGTERM", async () => {
  if (browserInstance) await browserInstance.close();
  process.exit(0);
});

app.listen(PORT, () => {
  console.log(`[Server] Running on http://localhost:${PORT}`);
});

export default app;