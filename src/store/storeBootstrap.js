/**
 * storeBootstrap.js
 *
 * This module exposes the Zustand store's hydrate() function to the
 * global window object so Puppeteer can inject proposal data before
 * React renders the print preview.
 *
 * IMPORT THIS ONCE at the top of main.jsx, before ReactDOM.render().
 *
 * Usage in main.jsx:
 *   import "./store/storeBootstrap";
 *   import App from "./App";
 *   ...
 *
 * How it works:
 * 1. On import, we expose window.__hydrateProposalStore__
 * 2. Puppeteer calls this function via page.evaluate() with proposalData
 * 3. Zustand store is populated before TechnicalPreview mounts
 * 4. All pages read from pre-populated store → correct data in PDF
 *
 * Fallback: If Puppeteer fires before React loads, data is stored in
 * window.__PROPOSAL_INITIAL_DATA__ and the store picks it up on first
 * useEffect in App.jsx or PrintLayout.
 */

import { useProposalStore } from "./proposalStore";

// Expose hydration function to Puppeteer
window.__hydrateProposalStore__ = (data) => {
  useProposalStore.getState().hydrate(data);
};

// If Puppeteer injected data before React mounted, pick it up now
if (window.__PROPOSAL_INITIAL_DATA__) {
  useProposalStore.getState().hydrate(window.__PROPOSAL_INITIAL_DATA__);
  delete window.__PROPOSAL_INITIAL_DATA__;
}

// Dev convenience: expose store to window for debugging
if (import.meta.env.DEV) {
  window.__proposalStore__ = useProposalStore;
}