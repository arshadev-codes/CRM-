/**
 * PrintLayout.jsx
 *
 * Bare-bones layout used exclusively by /print/* routes.
 * Contains NO navigation, NO sidebar, NO edit controls.
 *
 * Puppeteer navigates here and gets a pure DOM of proposal
 * pages, each separated by CSS page-break rules.
 *
 * The layout injects global print CSS that:
 *  - Sets A4 page size
 *  - Hides scrollbars
 *  - Removes default margins
 *  - Forces exact @page dimensions so Puppeteer measures correctly
 */

import { Outlet } from "react-router-dom";

export default function PrintLayout() {
  return (
    <>
      <style>{`
        /* ── Global print/preview reset ── */
        * {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
          box-sizing: border-box;
        }

        html, body {
          margin: 0;
          padding: 0;
          background: #ffffff;
          font-family: 'Segoe UI', Arial, sans-serif;
        }

        /* Each .print-page maps to exactly one PDF page */
        .print-page {
          width: 1122px;        /* A4 @ 96dpi: 210mm */
          min-height: 1587px;   /* A4 @ 96dpi: 297mm */
          background: #ffffff;
          position: relative;
          overflow: hidden;
          page-break-after: always;
          break-after: page;
        }

        .print-page:last-child {
          page-break-after: avoid;
          break-after: avoid;
        }

        @media print {
          @page {
            size: A4 portrait;
            margin: 0;
          }
          html, body {
            width: 210mm;
          }
        }
      `}</style>

      {/* PrintLayout renders directly under <body> with no wrapping chrome */}
      <Outlet />
    </>
  );
}