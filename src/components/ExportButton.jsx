/**
 * ExportButton.jsx
 *
 * Unified export button that triggers PDF generation via the
 * Express backend. Handles all three export types:
 *   - "technical"   → /print/technical
 *   - "commercial"  → /print/commercial  (future)
 *   - "full"        → /print/full        (future)
 *
 * Flow:
 * 1. User clicks "Export Technical PDF"
 * 2. Frontend serializes current Zustand state to JSON
 * 3. POST /api/export/technical  { proposalData: {...} }
 * 4. Backend spins up Puppeteer, navigates to /print/technical
 * 5. Backend injects proposalData via page.evaluate()
 *    so Zustand is pre-populated before render
 * 6. Puppeteer waits for window.__PROPOSAL_READY__ === true
 * 7. Backend calls page.pdf() and streams the buffer back
 * 8. Frontend receives blob → triggers browser download
 *
 * Props:
 *   type: "technical" | "commercial" | "full"
 *   label?: string  (button label override)
 *   className?: string
 */

import { useProposalStore } from "../store/proposalStore";
import { FileDown, Loader2, CheckCircle, AlertCircle } from "lucide-react";

const API_BASE = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

const EXPORT_CONFIG = {
  technical: {
    endpoint: "/api/export/technical",
    defaultLabel: "Export Technical PDF",
    filename: (proposalNumber) => `Technical-Proposal-${proposalNumber || "Draft"}.pdf`,
  },
  commercial: {
    endpoint: "/api/export/commercial",
    defaultLabel: "Export Commercial PDF",
    filename: (proposalNumber) => `Commercial-Proposal-${proposalNumber || "Draft"}.pdf`,
  },
  full: {
    endpoint: "/api/export/full",
    defaultLabel: "Export Full Proposal PDF",
    filename: (proposalNumber) => `Full-Proposal-${proposalNumber || "Draft"}.pdf`,
  },
};

export default function ExportButton({ type = "technical", label, className = "" }) {
  const serialize = useProposalStore((s) => s.serialize);
  const meta = useProposalStore((s) => s.meta);
  const exportStatus = useProposalStore((s) => s.exportStatus[type]);
  const setExportStatus = useProposalStore((s) => s.setExportStatus);

  const config = EXPORT_CONFIG[type];

  const handleExport = async () => {
    if (exportStatus === "loading") return;

    setExportStatus(type, "loading");

    try {
      // 1. Serialize full Zustand state
      const proposalData = serialize();

      // 2. POST to backend
      const response = await fetch(`${API_BASE}${config.endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ proposalData }),
      });

      if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        throw new Error(error.message || `Server error: ${response.status}`);
      }

      // 3. Receive PDF blob
      const blob = await response.blob();

      // 4. Trigger browser download
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = config.filename(meta.proposalNumber);
      anchor.click();
      URL.revokeObjectURL(url);
      // Note: createObjectURL is intentionally used HERE for the download
      // anchor only — it is never stored in React state or Zustand.

      setExportStatus(type, "success");

      // Reset to idle after 3s
      setTimeout(() => setExportStatus(type, "idle"), 3000);
    } catch (err) {
      console.error("[ExportButton] PDF generation failed:", err);
      setExportStatus(type, "error");
      setTimeout(() => setExportStatus(type, "idle"), 4000);
    }
  };

  // ── Render ────────────────────────────────────────────────

  const buttonLabel = label ?? config.defaultLabel;

  const isLoading = exportStatus === "loading";
  const isSuccess = exportStatus === "success";
  const isError   = exportStatus === "error";

  return (
    <button
      onClick={handleExport}
      disabled={isLoading}
      className={`
        inline-flex items-center gap-2
        px-5 py-2.5
        rounded-full
        font-semibold text-[12px]
        transition-all duration-200
        disabled:opacity-60 disabled:cursor-not-allowed
        ${isSuccess
          ? "bg-green-600 text-white"
          : isError
          ? "bg-red-600 text-white"
          : "bg-[#0d4c7f] text-white hover:bg-[#0a3d6b]"
        }
        ${className}
      `}
    >
      {isLoading && <Loader2 size={14} className="animate-spin" />}
      {isSuccess && <CheckCircle size={14} />}
      {isError   && <AlertCircle size={14} />}
      {!isLoading && !isSuccess && !isError && <FileDown size={14} />}

      {isLoading  ? "Generating PDF…"
        : isSuccess ? "PDF Downloaded!"
        : isError   ? "Export Failed — Retry"
        : buttonLabel}
    </button>
  );
}