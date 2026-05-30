/**
 * router.jsx
 *
 * Two route trees:
 *
 * 1. /  →  MainLayout (sidebar, nav, edit controls visible)
 *    ├── /rfq
 *    ├── /requirement
 *    ├── /system-overview
 *    ├── /technical/page4 … /technical/page13
 *    ├── /commercial/page14 … (future)
 *    └── /terms (future)
 *
 * 2. /print  →  PrintLayout (bare white canvas, no chrome)
 *    ├── /print/technical        ← TechnicalPreview
 *    ├── /print/commercial       ← CommercialPreview  (future)
 *    └── /print/full             ← FullProposalPreview (future)
 *
 * PrintLayout is intentionally a separate root so Puppeteer
 * navigates to /print/technical and gets a clean DOM with zero
 * navigation chrome or Tailwind utility classes that affect layout.
 */

import { createBrowserRouter } from "react-router-dom";

// Layouts
import MainLayout from "../layouts/MainLayout";
import PrintLayout from "../layouts/PrintLayout";

// Editable pages — RFQ section
import RFQPage from "../pages/RFQ/RFQPage";
import RequirementPage from "../pages/RFQ/RequirementPage";
import SystemOverviewPage from "../pages/RFQ/SystemOverviewPage";

// Editable pages — Technical section
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

// Print/Preview pages
import TechnicalPreview from "../print/TechnicalPreview";
// Future imports:
// import CommercialPreview from "../print/CommercialPreview";
// import FullProposalPreview from "../print/FullProposalPreview";

console.log("ROUTER FILE LOADED");

export const router = createBrowserRouter([
  // ── EDITABLE ROUTES ──────────────────────────────────────────
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <RFQPage /> },
      { path: "rfq", element: <RFQPage /> },
      { path: "requirement", element: <RequirementPage /> },
      { path: "system-overview", element: <SystemOverviewPage /> },
      // Technical pages
      { path: "technical/page4",  element: <Page4 /> },
      { path: "technical/page5",  element: <Page5 /> },
      { path: "technical/page6",  element: <Page6 /> },
      { path: "technical/page7",  element: <Page7 /> },
      { path: "technical/page8",  element: <Page8 /> },
      { path: "technical/page9",  element: <Page9 /> },
      { path: "technical/page10", element: <Page10 /> },
      { path: "technical/page11", element: <Page11 /> },
      { path: "technical/page12", element: <Page12 /> },
      { path: "technical/page13", element: <Page13 /> },
      // Commercial pages — add here when built:
      // { path: "commercial/page14", element: <Page14 /> },
    ],
  },

  // ── PRINT / PUPPETEER ROUTES ──────────────────────────────────
  // These render under PrintLayout which is a bare <div> with no
  // navigation, no sidebar, no edit controls — just white pages.
  {
    path: "/print",
    element: <PrintLayout />,
    children: [
      {
        path: "technical",
        element: <TechnicalPreview />,
      },
      // Future:
      // { path: "commercial",  element: <CommercialPreview /> },
      // { path: "full",        element: <FullProposalPreview /> },
    ],
  },
]);