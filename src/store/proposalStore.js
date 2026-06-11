import { create } from "zustand";
import { devtools } from "zustand/middleware";
import technicalPagesData from "../Data/technicalPagesData";
import commercialPagesData from "../Data/commercialPagesData";
import commercialPages19to24Data from "../Data/commercialPages19to24Data"; // ← ADD THIS IMPORT

/* ─────────────────────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────────────────────── */

export async function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function hydrateTechnicalPages(systemType) {
  const raw = technicalPagesData?.[systemType] ?? {};
  // Deep-clone so mutations in editable pages don't mutate the static import.
  // NOTE: page13 connection images will be Vite asset URLs at this point.
  // Page13.jsx converts them to base64 data URLs on mount via
  // updateTechnicalPage("page13", ...) so that serialize() captures
  // Puppeteer-compatible image data. Do NOT attempt to store blob URLs here.
  return JSON.parse(JSON.stringify(raw));
}

function hydrateCommercialPages(systemType) {
  // Deep-clone base pages (15–18) from commercialPagesData
  const base = JSON.parse(JSON.stringify(commercialPagesData?.[systemType] ?? {}));
  // Deep-clone extension pages (19–24) from commercialPages19to24Data
  const ext  = JSON.parse(JSON.stringify(commercialPages19to24Data?.[systemType] ?? {}));
  // Merge: ext keys (page19–page24) are added on top of base keys (page15–page18)
  return { ...base, ...ext };
}

/*
 * buildSections()
 *
 * Converts the technicalPages keyed object into a flat array for
 * TechnicalPreview.jsx to iterate with .map().
 *
 * REAL DATA SHAPE (from technicalPagesData.js):
 *   page4: { sections: [ { type, title, description, layout, images }, ... ] }
 *   page12: { title, description, sldPdf, layoutImage, ... }   ← special shape
 *   page13: { title, connections: [...], footerNote }           ← special shape
 *
 * Each entry in the output array:
 *   { pageKey, pageType, data }
 *
 *   pageType: "sections"    → pages 4–11 (array of section blocks)
 *             "schematic"   → page 12
 *             "connections" → page 13
 */
function buildSections(technicalPages) {
  if (!technicalPages || typeof technicalPages !== "object") return [];

  return Object.entries(technicalPages)
    .sort(([a], [b]) => {
      const numA = parseInt(a.replace(/\D/g, ""), 10) || 0;
      const numB = parseInt(b.replace(/\D/g, ""), 10) || 0;
      return numA - numB;
    })
    .map(([pageKey, pageData]) => {
      // page13: has connections array
      if (Array.isArray(pageData?.connections)) {
        return { pageKey, pageType: "connections", data: pageData };
      }
      // page12: has sldPdf key
      if (pageData?.sldPdf !== undefined) {
        return { pageKey, pageType: "schematic", data: pageData };
      }
      // pages 4–11: have a sections array
      if (Array.isArray(pageData?.sections)) {
        return { pageKey, pageType: "sections", data: pageData };
      }
      // fallback: render raw
      return { pageKey, pageType: "raw", data: pageData };
    });
}

/* ─────────────────────────────────────────────────────────────
   INITIAL STATE
───────────────────────────────────────────────────────────── */

function makeInitialMeta() {
  return {
    systemType: "Advanced",
    transformerRating: "500 MVA",
    voltageClass: "765 kV",
    preparedBy: [],
    proposalDate: "",
    proposalNumber: "",
    revisionNumber: "R0",
    customerRef: "",
  };
}

function makeInitialRfq() {
  return {
    rfqNumber: "",
    rfqDate: "",
    customerName: "",
    customerAddress: "",
    contactPerson: "",
    contactEmail: "",
    contactPhone: "",
    projectTitle: "",
    projectLocation: "",
    deliveryPeriod: "",
  };
}

function makeInitialRfqCover() {
  return {
    title: "Mr.",
    to: "VC Krishna",
    companyName: "M/s Neotrafo Solutions India Private Limited",
    reference: "",
    date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
    preparedBy: "J.M. Krishna",
    checkedBy: "Sabir Baig",
    revision: "Rev. 0",
    revisionDate: new Date().toLocaleDateString("en-GB"),
    address: "S7-1&2, Jai Matadi Compound, Thane-Bhiwandi Road,\nKalher, Thane District, Maharashtra, India – 421302\nTel. No. +91 8692 888 444",
  };
}

function makeInitialRequirement() {
  return {
    tests: [],
    additionalNotes: "",
    trolleyType: "Automatic",
  };
}

function makeInitialSystemOverview() {
  return {
    heading: "",
    tagline: "",
    intro: "",
    project: "",
    description: "",
    highlights: [],
  };
}

/* ─────────────────────────────────────────────────────────────
   STORE
───────────────────────────────────────────────────────────── */

export const useProposalStore = create(
  devtools(
    (set, get) => ({

      /* =====================================================
         BACKWARD COMPATIBILITY
      ===================================================== */
      proposal: {
        systemType: "Advanced",
        transformerRating: "500 MVA",
        voltageClass: "765 kV",
      },

      updateProposal: (patch) =>
        set((s) => ({
          proposal: { ...s.proposal, ...patch },
          meta: { ...s.meta, ...patch },
        })),

      /* =====================================================
         META
      ===================================================== */
      meta: makeInitialMeta(),

      updateMeta: (patch) =>
        set((s) => ({ meta: { ...s.meta, ...patch } })),

      setSystemType: (systemType) =>
        set((s) => {
          if (s.meta.systemType === systemType) return {};

          const technicalPages = hydrateTechnicalPages(systemType);
          const commercialPages = hydrateCommercialPages(systemType); // ← now includes pages 19–24

          return {
            proposal: {
              ...s.proposal,
              systemType,
            },
            meta: {
              ...s.meta,
              systemType,
            },
            technicalPages,
            commercialPages,
          };
        }),

      /* =====================================================
         COVER
      ===================================================== */
      cover: {
        companyName: "Electrosoft Automation Private Limited",
        logoBase64: null,
        tagline: "Transforming Transformer Testing",
      },

      updateCover: (patch) =>
        set((s) => ({ cover: { ...s.cover, ...patch } })),

      setCoverLogo: async (file) => {
        const base64 = await fileToBase64(file);
        set((s) => ({ cover: { ...s.cover, logoBase64: base64 } }));
      },

      /* =====================================================
         RFQ COVER
      ===================================================== */
      rfqCover: makeInitialRfqCover(),

      updateRfqCover: (patch) =>
        set((s) => ({ rfqCover: { ...s.rfqCover, ...patch } })),

      /* =====================================================
         RFQ
      ===================================================== */
      rfq: makeInitialRfq(),

      updateRfq: (patch) =>
        set((s) => ({ rfq: { ...s.rfq, ...patch } })),

      /* =====================================================
         REQUIREMENT
      ===================================================== */
      requirement: makeInitialRequirement(),

      updateRequirement: (patch) =>
        set((s) => ({ requirement: { ...s.requirement, ...patch } })),

      setRequirementTests: (tests) =>
        set((s) => ({ requirement: { ...s.requirement, tests } })),

      /* =====================================================
         SYSTEM OVERVIEW
      ===================================================== */
      systemOverview: makeInitialSystemOverview(),

      updateSystemOverview: (patch) =>
        set((s) => ({ systemOverview: { ...s.systemOverview, ...patch } })),

      /* =====================================================
         TECHNICAL PAGES
         ─────────────────────────────────────────────────────
         updateTechnicalPage replaces the entire page entry with
         a shallow merge. For page13 this means the full
         { title, connections, footerNote } object is replaced.
         Editable pages (e.g. Page13.jsx) call this after every
         mutation so that serialize() always captures the latest
         live state, including base64 image data URLs.
      ===================================================== */
      technicalPages: hydrateTechnicalPages("Advanced"),

      // commercialPages now includes pages 15–18 (base) + 19–24 (ext) merged
      commercialPages: hydrateCommercialPages("Advanced"),

      updateTechnicalPage: (pageKey, patch) =>
        set((s) => ({
          technicalPages: {
            ...s.technicalPages,
            [pageKey]: { ...s.technicalPages[pageKey], ...patch },
          },
        })),

      updateCommercialPage: (pageKey, patch) =>
        set((s) => ({
          commercialPages: {
            ...s.commercialPages,
            [pageKey]: {
              ...s.commercialPages[pageKey],
              ...patch,
            },
          },
        })),

      /* =====================================================
         EXPORT STATUS
      ===================================================== */
      exportStatus: {
        technical: "idle",
        commercial: "idle",
        full: "idle",
      },

      setExportStatus: (type, status) =>
        set((s) => ({ exportStatus: { ...s.exportStatus, [type]: status } })),

      /* =====================================================
         RESET
      ===================================================== */
      resetProposal: () =>
        set({
          proposal: {
            systemType: "Advanced",
            transformerRating: "500 MVA",
            voltageClass: "765 kV",
          },
          meta: makeInitialMeta(),
          rfq: makeInitialRfq(),
          rfqCover: makeInitialRfqCover(),
          requirement: makeInitialRequirement(),
          systemOverview: makeInitialSystemOverview(),
          technicalPages: hydrateTechnicalPages("Advanced"),
          commercialPages: hydrateCommercialPages("Advanced"), // ← includes 19–24
          exportStatus: {
            technical: "idle",
            commercial: "idle",
            full: "idle",
          },
        }),

      /* =====================================================
         SERIALIZE
         ─────────────────────────────────────────────────────
         Captures the full current state into a plain JSON-safe
         object that is POSTed to the Express backend.
         The backend injects this into Puppeteer via
         page.evaluate() before the print route renders.

         IMPORTANT: technicalPages.page13.connections[*].image
         must be base64 data URLs at this point, not blob/object
         URLs. Page13.jsx ensures this by converting all images
         to base64 before calling updateTechnicalPage.
      ===================================================== */
      serialize: () => {
        const s = get();
        return {
          proposal: s.proposal,
          meta: s.meta,
          cover: s.cover,
          rfq: s.rfq,
          rfqCover: s.rfqCover,
          requirement: s.requirement,
          systemOverview: s.systemOverview,
          technicalPages: s.technicalPages,
          commercialPages: s.commercialPages, // ← pages 19–24 now included
          sections: buildSections(s.technicalPages),
        };
      },

      /* =====================================================
         HYDRATE
         Called by the backend-injected script on the print
         route to pre-populate Zustand before React renders.
      ===================================================== */
      hydrate: (savedData) =>
        set({
          proposal: {
            systemType: savedData?.meta?.systemType ?? "Advanced",
            transformerRating: savedData?.meta?.transformerRating ?? "500 MVA",
            voltageClass: savedData?.meta?.voltageClass ?? "765 kV",
          },
          meta: savedData?.meta ?? makeInitialMeta(),
          cover: savedData?.cover ?? {},
          rfq: savedData?.rfq ?? makeInitialRfq(),
          rfqCover: savedData?.rfqCover ?? makeInitialRfqCover(),
          requirement: savedData?.requirement ?? makeInitialRequirement(),
          systemOverview: savedData?.systemOverview ?? makeInitialSystemOverview(),
          technicalPages:
            savedData?.technicalPages ??
            hydrateTechnicalPages(savedData?.meta?.systemType ?? "Advanced"),
          commercialPages:
            savedData?.commercialPages ??
            hydrateCommercialPages(savedData?.meta?.systemType ?? "Advanced"), // ← includes 19–24
        }),
    }),
    { name: "ProposalStore" }
  )
);