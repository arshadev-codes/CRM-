import express from "express";
import cors from "cors";
import puppeteer from "puppeteer";

const app = express();

const PORT =
  process.env.PORT || 3001;

const FRONTEND_URL =
  process.env.FRONTEND_URL ||
  "http://localhost:5173";

process.on(
  "uncaughtException",
  console.error
);

process.on(
  "unhandledRejection",
  console.error
);

// ─────────────────────────────────────
// Middleware
// ─────────────────────────────────────

app.use(
  cors({
    origin: FRONTEND_URL,
  })
);

app.use(
  express.json({
    limit: "100mb",
  })
);

// ─────────────────────────────────────
// Browser Pool
// ─────────────────────────────────────

let browserInstance = null;

async function getBrowser() {

  if (
    !browserInstance ||
    !browserInstance.connected
  ) {

    browserInstance =
      await puppeteer.launch({

        headless: true,

        args: [

          "--disable-extensions",
          "--disable-background-networking",
          "--disable-sync",

          "--no-sandbox",
          "--disable-setuid-sandbox",
          "--disable-dev-shm-usage",

          "--disable-gpu",

          "--window-size=1200,900",
        ],
      });
  }

  return browserInstance;
}

// ─────────────────────────────────────
// Generate PDF
// ─────────────────────────────────────

async function generatePdf(
  printRoute,
  proposalData
) {

  const browser =
    await getBrowser();

  const page =
    await browser.newPage();

  try {

    await page.setViewport({
      width: 794,
      height: 1123,
      deviceScaleFactor: 1,
    });

    const url =
      `${FRONTEND_URL}${printRoute}`;

    console.log(
      `[PDF] Opening ${url}`
    );

    await page.goto(url, {
      waitUntil: "networkidle0",
      timeout: 60000,
    });

    // Inject Zustand state
    await page.evaluate(
      (data) => {

        if (
          typeof window.__hydrateProposalStore__ ===
          "function"
        ) {

          window.__hydrateProposalStore__(
            data
          );

        } else {

          window.__PROPOSAL_INITIAL_DATA__ =
            data;
        }
      },
      proposalData
    );

    // Wait for render ready
    await page.waitForFunction(
      () =>
        window.__PROPOSAL_READY__ ===
        true,
      {
        timeout: 30000,
      }
    );

    // Wait for all images
    await page.evaluate(
      async () => {

        const images =
          Array.from(
            document.images
          );

        await Promise.all(

          images.map(
            (img) => {

              if (
                img.complete
              ) {
                return Promise.resolve();
              }

              return new Promise(
                (resolve) => {

                  img.onload =
                    resolve;

                  img.onerror =
                    resolve;
                }
              );
            }
          )
        );
      }
    );

    // Generate PDF
    const pdfBuffer =
      await page.pdf({

        format: "A4",

        printBackground: true,

        preferCSSPageSize: true,

        margin: {
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
        },
      });

    return pdfBuffer;

  } finally {

    await page.close();
  }
}

// ─────────────────────────────────────
// Technical Export
// ─────────────────────────────────────

app.post(
  "/api/export/technical",
  async (req, res) => {

    try {

      const {
        proposalData,
      } = req.body;

      if (
        !proposalData
      ) {

        return res
          .status(400)
          .json({
            message:
              "proposalData is required",
          });
      }

      console.log(
        "[PDF] Generating Technical PDF..."
      );

      const pdfBuffer =
        await generatePdf(
          "/print/technical",
          proposalData
        );

      const filename =
        `Technical-Proposal-${
          proposalData.meta
            ?.proposalNumber ||
          "Draft"
        }.pdf`;

      res.setHeader(
        "Content-Type",
        "application/pdf"
      );

      res.setHeader(
        "Content-Disposition",
        `attachment; filename="${filename}"`
      );

      res.setHeader(
        "Content-Length",
        pdfBuffer.length
      );

      // IMPORTANT
      res.end(pdfBuffer);

      console.log(
        `[PDF] PDF sent successfully (${pdfBuffer.length} bytes)`
      );

    } catch (err) {

      console.error(
        "[PDF] Export error:",
        err
      );

      res
        .status(500)
        .json({
          message:
            err.message ||
            "PDF generation failed",
        });
    }
  }
);

// ─────────────────────────────────────
// Health Check
// ─────────────────────────────────────

app.get(
  "/health",
  (_, res) => {

    res.json({
      status: "ok",
    });
  }
);

// ─────────────────────────────────────
// Shutdown
// ─────────────────────────────────────

process.on(
  "SIGTERM",
  async () => {

    if (
      browserInstance
    ) {

      await browserInstance.close();
    }

    process.exit(0);
  }
);

// ─────────────────────────────────────
// Start Server
// ─────────────────────────────────────

app.listen(
  PORT,
  () => {

    console.log(
      `[Server] PDF export server running on http://localhost:${PORT}`
    );
  }
);

export default app;