/**
 * TechnicalPreview.jsx
 *
 * Renders all technical proposal pages together in print mode.
 *
 * This component is the single source of truth for what goes
 * into the Technical PDF. It is rendered at /print/technical.
 *
 * Architecture:
 * - Each page component receives printMode={true}
 * - In printMode, all edit controls, upload buttons, navigation
 *   buttons, and add/remove controls are hidden
 * - Pages read data from Zustand (same store as editable pages)
 *   so the PDF always reflects the latest live-edited state
 * - Puppeteer takes a screenshot/PDF of this route
 *
 * Page order:
 *   1. RFQ page
 *   2. Requirement page
 *   3. System Overview (page 3)
 *   4. Page 4 → Page 13
 *
 * To add pages to the PDF: just import and add to the
 * TECHNICAL_PAGES array below. No other changes needed.
 *
 * Future: CommercialPreview and FullProposalPreview follow
 * the exact same pattern, just with different page arrays.
 */

import { useEffect } from "react";
import { useProposalStore } from "../store/proposalStore";

// Editable page components — reused in print mode
import RFQPage from "../pages/RFQ/RFQPage";
import RequirementPage from "../pages/RFQ/RequirementPage";
import SystemOverviewPage from "../pages/RFQ/SystemOverviewPage";
import Page4 from "../pages/technical/Page4";
import Page5 from "../pages/technical/Page5";
import Page6 from "../pages/technical/Page6";
import Page7 from "../pages/technical/Page7";
import Page8 from "../pages/technical/Page8";
import Page9 from "../pages/technical/Page9";
import Page10 from "../pages/technical/Page10";
import Page11 from "../pages/technical/Page11";
import Page12 from "../pages/technical/Page12";
import Page13 from "../pages/technical/Page13";

// ─────────────────────────────────────────────────────────────
// Page registry
// Add/remove/reorder pages here only.
// ─────────────────────────────────────────────────────────────
const TECHNICAL_PAGES = [
  { key: "rfq",           Component: RFQPage },
  { key: "requirement",   Component: RequirementPage },
  { key: "systemOverview",Component: SystemOverviewPage },
  { key: "page4",         Component: Page4 },
  { key: "page5",         Component: Page5 },
  { key: "page6",         Component: Page6 },
  { key: "page7",         Component: Page7 },
  { key: "page8",         Component: Page8 },
  { key: "page9",         Component: Page9 },
  { key: "page10",        Component: Page10 },
  { key: "page11",        Component: Page11 },
  { key: "page12",        Component: Page12 },
  { key: "page13",        Component: Page13 },
];

export default function TechnicalPreview() {
  // Signal to Puppeteer that all React rendering is complete.
  // Puppeteer waits for window.__PROPOSAL_READY__ === true
  // before calling page.pdf().
  useEffect(() => {
    // Give React one more tick to flush all image renders
    const timer = setTimeout(() => {
      window.__PROPOSAL_READY__ = true;
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="technical-preview" data-testid="technical-preview">
      {TECHNICAL_PAGES.map(({ key, Component }) => (
        <div key={key} className="print-page">
          {/*
            printMode={true} tells each page to:
            - Hide all edit controls (Pencil icons, textarea borders)
            - Hide upload buttons (ImagePlus labels)
            - Hide navigation buttons (← Previous / Next →)
            - Hide add/remove section controls
            - Render read-only final content only
          */}
          <Component printMode={true} />
        </div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Future previews follow the same pattern:
//
// CommercialPreview.jsx  →  /print/commercial
//   const COMMERCIAL_PAGES = [
//     { key: "page14", Component: Page14 },
//     ...
//   ];
//
// FullProposalPreview.jsx  →  /print/full
//   const FULL_PAGES = [...TECHNICAL_PAGES, ...COMMERCIAL_PAGES, ...TERMS_PAGES];
// ─────────────────────────────────────────────────────────────