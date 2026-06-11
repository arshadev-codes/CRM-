/**
 * ExportTechnicalOnlyButton.jsx
 *
 * Exports ONLY the Technical Offer PDF (pages 1–13).
 * Sends exportScope: "technical" so TechnicalPreview skips
 * all commercial pages and avoids the blank trailing page.
 */

import { useProposalStore } from "../store/proposalStore";
import { FileDown, Loader2, CheckCircle, AlertCircle } from "lucide-react";

const API_BASE = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

export default function ExportTechnicalOnlyButton({ label, className = "" }) {
  const serialize       = useProposalStore((s) => s.serialize);
  const meta            = useProposalStore((s) => s.meta);
  const exportStatus    = useProposalStore((s) => s.exportStatus.technicalOnly);
  const setExportStatus = useProposalStore((s) => s.setExportStatus);

  const handleExport = async () => {
    if (exportStatus === "loading") return;

    setExportStatus("technicalOnly", "loading");

    try {
      const full = serialize();

      // Strip commercial data and mark scope so TechnicalPreview
      // only renders pages 1–13.
      const proposalData = {
        ...full,
        commercialPages: {},
        exportScope: "technical",  // ← key flag read by TechnicalPreview
      };

      const response = await fetch(`${API_BASE}/api/export/technical`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ proposalData }),
      });

      if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        throw new Error(error.message || `Server error: ${response.status}`);
      }

      const blob   = await response.blob();
      const url    = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href     = url;
      anchor.download = `Technical-Proposal-${meta?.proposalNumber || "Draft"}.pdf`;
      anchor.click();
      URL.revokeObjectURL(url);

      setExportStatus("technicalOnly", "success");
      setTimeout(() => setExportStatus("technicalOnly", "idle"), 3000);
    } catch (err) {
      console.error("[ExportTechnicalOnlyButton] PDF generation failed:", err);
      setExportStatus("technicalOnly", "error");
      setTimeout(() => setExportStatus("technicalOnly", "idle"), 4000);
    }
  };

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
        : (label ?? "Export Technical PDF")}
    </button>
  );
}