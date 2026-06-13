import React from "react";

export default function PrintLayout({ children }) {
  return (
    <>
      <style>{`
        /* ── Global Reset ─────────────────────────────────────────── */
        *, *::before, *::after {
          box-sizing: border-box;
        }

        html, body {
          margin: 0;
          padding: 0;
          width: 100%;
        }

        body {
          background-color: #f1f5f9;
          font-family: 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        /* ── Print Media ──────────────────────────────────────────── */
        @media print {
          body {
            background-color: #ffffff;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          @page {
            size: A4;
            margin: 0mm !important;
          }

          .no-print {
            display: none !important;
          }

          .print-layout-container {
            padding: 0 !important;
            gap: 0 !important;
            background: transparent !important;
          }

          .pdf-page {
            box-shadow: none !important;
            margin: 0 !important;
          }
        }

        /* ── Screen Preview Container ─────────────────────────────── */
        .print-layout-container {
          display: flex;
          flex-direction: column;
          align-items: center;      /* horizontally centers each .pdf-page */
          gap: 32px;
          padding: 32px 0;
          background-color: #374151; /* dark grey — matches Image 2 */
          min-height: 100vh;
          width: 100%;
        }

        /* ── Core PDF Page ────────────────────────────────────────── */
        .pdf-page {
          position: relative;

          /* Hard-lock to A4 — nothing can widen this */
          width: 210mm !important;
          height: 297mm !important;

          min-width: 210mm !important;
          min-height: 297mm !important;

          max-width: 210mm !important;
          max-height: 297mm !important;

          box-sizing: border-box !important;
          background-color: #ffffff !important;

          overflow: hidden;

          page-break-after: always;
          page-break-inside: avoid;
          break-after: page;
          break-inside: avoid;

          /*
           * Padding values derived from PyMuPDF measurements:
           *   Header height  = 28mm  → pad-top  33mm (28mm header + 5mm gap)
           *   Footer height  = ~10mm → pad-bot  16mm
           *   Left / Right   = 10mm
           */
          padding-top: 33mm;
          padding-bottom: 16mm;
          padding-left: 10mm;
          padding-right: 10mm;

          /* Screen-only shadow to look like a page */
          box-shadow:
            0 4px 6px -1px rgb(0 0 0 / 0.3),
            0 2px 4px -2px rgb(0 0 0 / 0.2);
        }

        /* ── Prevent any child from breaking the fixed width ──────── */
        .pdf-page > * {
          max-width: 100%;
        }
      `}</style>

      <div className="print-layout-container">
        {children}
      </div>
    </>
  );
}