import React from "react";

export default function PrintLayout({ children }) {
  return (
    <>
      <style>{`
        /* ── Global Reset ─────────────────────────────────────────── */
        *, *::before, *::after {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          padding: 0;
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
          align-items: center;
          gap: 40px;
          padding: 40px 0;
          background-color: #f1f5f9;
        }

        /* ── Core PDF Page ────────────────────────────────────────── */
        .pdf-page {
          position: relative;

          width: 210mm;
          height: 297mm;

          min-width: 210mm;
          min-height: 297mm;

          max-width: 210mm;
          max-height: 297mm;

          box-sizing: border-box;
          background-color: #ffffff;

          overflow: hidden;

          page-break-after: always;
          page-break-inside: avoid;
          break-after: page;
          break-inside: avoid;

          /*
           * Updated measurements:
           *
           * Header:
           *   PdfHeader height = 28mm
           *   Content starts directly below it.
           *
           * Footer:
           *   Footer positioned near page bottom.
           *   Reserve enough room so body never overlaps footer.
           */

          padding-top: 33mm;
          padding-bottom: 16mm;

          padding-left: 17.7mm;
          padding-right: 17.7mm;

          box-shadow:
            0 4px 6px -1px rgb(0 0 0 / 0.1),
            0 2px 4px -2px rgb(0 0 0 / 0.1);
        }
      `}</style>

      <div className="print-layout-container">
        {children}
      </div>
    </>
  );
}