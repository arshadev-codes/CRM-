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
 * 2. /print  →  Flat previews (Each template internally implements PrintLayout)
 *    ├── /print/technical         ← TechnicalPreview
 *    ├── /print/commercial        ← CommercialPreview  (future)
 *    └── /print/full              ← FullProposalPreview (future)
 */

import { createBrowserRouter } from "react-router-dom";

// Layouts
import MainLayout from "../layouts/MainLayout";

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
import Page14 from "../pages/commercial/CommercialPage14"; // Future commercial page
import Page15 from "../pages/commercial/CommercialPage15"; // Future commercial page
import Page16 from "../pages/commercial/CommercialPage16"; // Future commercial page
import Page17 from "../pages/Commercial/CommercialPage17"; // Future commercial page
import Page18 from "../pages/Commercial/CommercialPage18"; // Future commercial page
import Page19 from "../pages/Commercial/CommercialPage19"; // Future commercial page
import Page20 from "../pages/Commercial/CommercialPage20"; // Future commercial page
import Page21 from "../pages/Commercial/CommercialPage21"; // Future commercial page
import Page22 from "../pages/Commercial/CommercialPage22"; // Future commercial page
import Page23 from "../pages/Commercial/CommercialPage23"; // Future commercial page
import Page24 from "../pages/Commercial/CommercialPage24"; // Future commercial page


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
      { path: "commercial/CommercialPage14", element: <Page14 /> },
      { path: "commercial/CommercialPage15", element: <Page15 /> },
      { path: "commercial/CommercialPage16", element: <Page16 /> },
      { path: "commercial/CommercialPage17", element: <Page17 /> },
      { path: "commercial/CommercialPage18", element: <Page18 /> },
      { path: "commercial/CommercialPage19", element: <Page19 /> },  
      {path: "commercial/CommercialPage20", element: <Page20 /> },
      {path: "commercial/CommercialPage21", element: <Page21 /> },
      {path: "commercial/CommercialPage22", element: <Page22 /> },
      {path: "commercial/CommercialPage23", element: <Page23 /> },
      {path: "commercial/CommercialPage24", element: <Page24 /> },
    ],
  },

  // ── PRINT / PUPPETEER ROUTES ──────────────────────────────────
  // Flattened directly to avoid React Router <Outlet /> rendering issues.
  // Previews internally manage their bare canvas using <PrintLayout>.
  {
    path: "/print/technical",
    element: <TechnicalPreview />,
  },
  // Future Previews:
  // {
  //   path: "/print/commercial",
  //   element: <CommercialPreview />,
  // },
  // {
  //   path: "/print/full",
  //   element: <FullProposalPreview />,
  // },
]);