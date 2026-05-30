import { create } from "zustand";
import { devtools } from "zustand/middleware";
import technicalPagesData from "../data/technicalPagesData";

/* ─────────────────────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────────────────────── */

export async function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () =>
      resolve(reader.result);

    reader.onerror = reject;

    reader.readAsDataURL(file);
  });
}

function hydrateTechnicalPages(
  systemType
) {
  const raw =
    technicalPagesData?.[
      systemType
    ] ?? {};

  return JSON.parse(
    JSON.stringify(raw)
  );
}

/* ─────────────────────────────────────────────────────────────
   INITIAL STATE
───────────────────────────────────────────────────────────── */

function makeInitialMeta() {
  return {
    systemType: "Advanced",
    transformerRating:
      "500 MVA",
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

function makeInitialRequirement() {
  return {
    tests: [],
    additionalNotes: "",
    trolleyType:
      "Automatic",
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

export const useProposalStore =
  create(
    devtools(
      (set, get) => ({

        /* =====================================================
           BACKWARD COMPATIBILITY
        ===================================================== */

        proposal: {
          systemType:
            "Advanced",

          transformerRating:
            "500 MVA",

          voltageClass:
            "765 kV",
        },

        updateProposal:
          (patch) =>
            set((s) => ({

              proposal: {
                ...s.proposal,
                ...patch,
              },

              meta: {
                ...s.meta,
                ...patch,
              },
            })),

        /* =====================================================
           META
        ===================================================== */

        meta:
          makeInitialMeta(),

        updateMeta:
          (patch) =>
            set((s) => ({

              meta: {
                ...s.meta,
                ...patch,
              },
            })),

        setSystemType:
          (systemType) =>
            set((s) => {

              if (
                s.meta
                  .systemType ===
                systemType
              ) {
                return {};
              }

              return {

                proposal: {
                  ...s.proposal,
                  systemType,
                },

                meta: {
                  ...s.meta,
                  systemType,
                },

                technicalPages:
                  hydrateTechnicalPages(
                    systemType
                  ),
              };
            }),

        /* =====================================================
           COVER
        ===================================================== */

        cover: {
          companyName:
            "Electrosoft Automation Private Limited",

          logoBase64: null,

          tagline:
            "Transforming Transformer Testing",
        },

        updateCover:
          (patch) =>
            set((s) => ({

              cover: {
                ...s.cover,
                ...patch,
              },
            })),

        setCoverLogo:
          async (file) => {

            const base64 =
              await fileToBase64(
                file
              );

            set((s) => ({

              cover: {
                ...s.cover,
                logoBase64:
                  base64,
              },
            }));
          },

        /* =====================================================
           RFQ
        ===================================================== */

        rfq:
          makeInitialRfq(),

        updateRfq:
          (patch) =>
            set((s) => ({

              rfq: {
                ...s.rfq,
                ...patch,
              },
            })),

        /* =====================================================
           REQUIREMENT
        ===================================================== */

        requirement:
          makeInitialRequirement(),

        updateRequirement:
          (patch) =>
            set((s) => ({

              requirement: {
                ...s.requirement,
                ...patch,
              },
            })),

        setRequirementTests:
          (tests) =>
            set((s) => ({

              requirement: {
                ...s.requirement,
                tests,
              },
            })),

        /* =====================================================
           SYSTEM OVERVIEW
        ===================================================== */

        systemOverview:
          makeInitialSystemOverview(),

        updateSystemOverview:
          (patch) =>
            set((s) => ({

              systemOverview: {
                ...s.systemOverview,
                ...patch,
              },
            })),

        /* =====================================================
           TECHNICAL PAGES
        ===================================================== */

        technicalPages:
          hydrateTechnicalPages(
            "Advanced"
          ),

        updateTechnicalPage:
          (
            pageKey,
            patch
          ) =>
            set((s) => ({

              technicalPages: {
                ...s.technicalPages,

                [pageKey]: {
                  ...s
                    .technicalPages[
                    pageKey
                  ],

                  ...patch,
                },
              },
            })),

        /* =====================================================
           EXPORT STATUS
        ===================================================== */

        exportStatus: {
          technical:
            "idle",

          commercial:
            "idle",

          full: "idle",
        },

        setExportStatus:
          (
            type,
            status
          ) =>
            set((s) => ({

              exportStatus: {
                ...s.exportStatus,

                [type]:
                  status,
              },
            })),

        /* =====================================================
           RESET
        ===================================================== */

        resetProposal:
          () =>
            set({

              proposal: {
                systemType:
                  "Advanced",

                transformerRating:
                  "500 MVA",

                voltageClass:
                  "765 kV",
              },

              meta:
                makeInitialMeta(),

              rfq:
                makeInitialRfq(),

              requirement:
                makeInitialRequirement(),

              systemOverview:
                makeInitialSystemOverview(),

              technicalPages:
                hydrateTechnicalPages(
                  "Advanced"
                ),

              exportStatus: {
                technical:
                  "idle",

                commercial:
                  "idle",

                full: "idle",
              },
            }),

        /* =====================================================
           SERIALIZE
        ===================================================== */

        serialize: () => {

          const s = get();

          return {

            proposal:
              s.proposal,

            meta: s.meta,

            cover:
              s.cover,

            rfq: s.rfq,

            requirement:
              s.requirement,

            systemOverview:
              s.systemOverview,

            technicalPages:
              s.technicalPages,
          };
        },

        /* =====================================================
           HYDRATE
        ===================================================== */

        hydrate:
          (
            savedData
          ) =>
            set({

              proposal: {

                systemType:
                  savedData
                    ?.meta
                    ?.systemType ??
                  "Advanced",

                transformerRating:
                  savedData
                    ?.meta
                    ?.transformerRating ??
                  "500 MVA",

                voltageClass:
                  savedData
                    ?.meta
                    ?.voltageClass ??
                  "765 kV",
              },

              meta:
                savedData
                  ?.meta ??
                makeInitialMeta(),

              cover:
                savedData
                  ?.cover ??
                {},

              rfq:
                savedData
                  ?.rfq ??
                makeInitialRfq(),

              requirement:
                savedData
                  ?.requirement ??
                makeInitialRequirement(),

              systemOverview:
                savedData
                  ?.systemOverview ??
                makeInitialSystemOverview(),

              technicalPages:
                savedData
                  ?.technicalPages ??
                hydrateTechnicalPages(
                  "Advanced"
                ),
            }),
      }),
      {
        name:
          "ProposalStore",
      }
    )
  );