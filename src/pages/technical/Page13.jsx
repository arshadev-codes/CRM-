import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  Pencil,
  ImagePlus,
  Plus,
  Trash2,
} from "lucide-react";

import logo from "../../assets/logo.png";

import connectionA from "../../assets/connection-a.png";
import connectionB from "../../assets/connection-b.png";
import connectionC from "../../assets/connection-c.png";

import technicalPagesData from "../../data/technicalPagesData";

import { useProposalStore } from "../../store/proposalStore";

import ExportButton from "../../components/ExportButton";

/* ─────────────────────────────────────────────────────────────
   HELPER — convert a File object to a base64 data URL
   This is used instead of URL.createObjectURL() so the image
   survives serialization and is accessible inside Puppeteer.
───────────────────────────────────────────────────────────── */
async function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

/* ─────────────────────────────────────────────────────────────
   HELPER — convert a static imported PNG (module URL / blob URL
   produced at build time by Vite) to a base64 data URL so it
   can be serialized into Zustand and sent to Puppeteer.
   We fetch the asset URL and read it as a blob → base64.
───────────────────────────────────────────────────────────── */
async function assetUrlToBase64(assetUrl) {
  try {
    const res = await fetch(assetUrl);
    const blob = await res.blob();
    return await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch {
    // If fetch fails (e.g. already a data URL) return as-is
    return assetUrl;
  }
}

export default function Page13() {

  const navigate = useNavigate();

  // ── Zustand ───────────────────────────────────────────────
  const { proposal, technicalPages, updateTechnicalPage } =
    useProposalStore();

  const systemType = proposal.systemType || "Advanced";

  /* =====================================================
     FALLBACK DATA (used only if Zustand page13 is empty)
  ===================================================== */
  const fallbackData = {
    title: "CONNECTIONS AND TESTS",
    connections: [
      {
        name: "Connection A",
        // image will be replaced with base64 in useEffect below
        image: connectionA,
        tests: [
          "Measurement of No-load Loss (Watt)",
          "Measurement of No-load Current",
          "Induced Overvoltage Withstand Test",
        ],
      },
      {
        name: "Connection B",
        image: connectionB,
        tests: [
          "Measurement of Impedance Voltage",
          "Measurement of Load Loss (Watt)",
          "Temperature Rise Test",
          "Calculation of Efficiency and Regulation",
        ],
      },
      {
        name: "Connection C",
        image: connectionC,
        tests: [
          "Measurement Of Winding Resistances",
          "Measurement Of Voltage Ratio and Check of Phase Displacement",
          "Measurement Of Insulation Resistance",
          "Measurement of Magnetizing Current",
          "Magnetic Balance Test",
          "Verification Of Vector Group",
          "LV Short Circuit Test",
          "Polarity Test",
          "Applied Voltage Withstand Test (HV Test)",
        ],
      },
    ],
    footerNote:
      "++ OLTC Test, Core-Tank Insulation Test, Pressure Tightness Test, Measurement of zero sequence reactance (Z₀ test)",
  };

  /* =====================================================
     DERIVE INITIAL DATA
     Priority: live Zustand technicalPages.page13
               → technicalPagesData static fallback
               → hardcoded fallbackData
  ===================================================== */
  const zustandPage13 = technicalPages?.page13;
  const staticPage13  = technicalPagesData?.[systemType]?.page13;

  // The "best" source for initial data — prefer Zustand live state
  const sourceData = zustandPage13 || staticPage13 || fallbackData;

  /* =====================================================
     LOCAL STATE
     We keep a local copy for the UI so that each keystroke
     doesn't cause a full store re-render. We flush to Zustand
     on every meaningful change (see flushToStore below).
  ===================================================== */
  const [pageData, setPageData] = useState(() => {
    // Ensure connections have the correct static image assets as
    // fallbacks when no base64 has been stored yet.
    const connections = (sourceData.connections || []).map(
      (conn, index) => {
        // If the stored image is already a data URL keep it.
        // Otherwise substitute the correct static asset.
        const isDataUrl =
          typeof conn.image === "string" &&
          conn.image.startsWith("data:");

        if (isDataUrl) return conn;

        const defaultImages = [connectionA, connectionB, connectionC];
        return { ...conn, image: defaultImages[index] ?? connectionA };
      }
    );

    return { ...sourceData, connections };
  });

  /* =====================================================
     BOOTSTRAP — convert static asset URLs → base64 once
     so that Puppeteer can access them.
     Only runs when the stored image is NOT already a data URL.
  ===================================================== */
  useEffect(() => {
    let cancelled = false;

    async function convertDefaultImages() {
      const updated = await Promise.all(
        pageData.connections.map(async (conn) => {
          const isDataUrl =
            typeof conn.image === "string" &&
            conn.image.startsWith("data:");

          if (isDataUrl) return conn;

          const base64 = await assetUrlToBase64(conn.image);
          return { ...conn, image: base64 };
        })
      );

      if (!cancelled) {
        const newData = { ...pageData, connections: updated };
        setPageData(newData);
        updateTechnicalPage("page13", newData);
      }
    }

    convertDefaultImages();

    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // intentionally run once on mount

  /* =====================================================
     FLUSH TO ZUSTAND
     Called after every mutation so serialize() captures the
     latest state when ExportButton is clicked.
  ===================================================== */
  function flushToStore(newData) {
    setPageData(newData);
    updateTechnicalPage("page13", newData);
  }

  /* =====================================================
     UPDATE FUNCTIONS
  ===================================================== */
  const updateTitle = (value) => {
    flushToStore({ ...pageData, title: value });
  };

  const updateConnection = (index, field, value) => {
    const updated = pageData.connections.map((conn, i) =>
      i === index ? { ...conn, [field]: value } : conn
    );
    flushToStore({ ...pageData, connections: updated });
  };

  const updateTest = (connectionIndex, testIndex, value) => {
    const updated = pageData.connections.map((conn, i) => {
      if (i !== connectionIndex) return conn;
      const tests = conn.tests.map((t, j) =>
        j === testIndex ? value : t
      );
      return { ...conn, tests };
    });
    flushToStore({ ...pageData, connections: updated });
  };

  // FIX: convert to base64 instead of createObjectURL
  const updateImage = async (index, file) => {
    if (!file) return;
    const base64 = await fileToBase64(file);
    const updated = pageData.connections.map((conn, i) =>
      i === index ? { ...conn, image: base64 } : conn
    );
    flushToStore({ ...pageData, connections: updated });
  };

  const addTest = (connectionIndex) => {
    const updated = pageData.connections.map((conn, i) => {
      if (i !== connectionIndex) return conn;
      return { ...conn, tests: [...conn.tests, "New Test"] };
    });
    flushToStore({ ...pageData, connections: updated });
  };

  const removeTest = (connectionIndex, testIndex) => {
    const updated = pageData.connections.map((conn, i) => {
      if (i !== connectionIndex) return conn;
      const tests = conn.tests.filter((_, j) => j !== testIndex);
      return { ...conn, tests };
    });
    flushToStore({ ...pageData, connections: updated });
  };

  const addConnection = () => {
    flushToStore({
      ...pageData,
      connections: [
        ...pageData.connections,
        {
          name: "New Connection",
          image: connectionA,
          tests: ["New Test"],
        },
      ],
    });
  };

  const removeConnection = (index) => {
    const updated = pageData.connections.filter((_, i) => i !== index);
    flushToStore({ ...pageData, connections: updated });
  };

  return (

    <div
      className="
        w-full
        min-h-screen
        bg-[#eef2f7]
        flex
        justify-center
        py-8
      "
    >

      <div
        className="
          w-[1150px]
          bg-white
          border
          border-[#d9d9d9]
          shadow-lg
          px-[48px]
          pt-[28px]
          pb-[55px]
          relative
        "
      >

        {/* =====================================================
           HEADER
        ===================================================== */}

        <div
          className="
            flex
            justify-between
            items-start
          "
        >

          <div
            className="
              flex
              items-start
              gap-4
            "
          >

            <img
              src={logo}
              alt=""
              className="
                w-[68px]
              "
            />

            <div>

              <h1
                className="
                  text-[18px]
                  font-bold
                  leading-[26px]
                  text-[#7c7c7c]
                "
              >
                Electrosoft Automation
              </h1>

              <h2
                className="
                  text-[18px]
                  font-bold
                  leading-[26px]
                  text-[#7c7c7c]
                "
              >
                Private Limited
              </h2>
            </div>
          </div>

          <div
            className="
              text-right
              italic
              font-semibold
              text-[16px]
              leading-[28px]
            "
          >

            <h2>
              Techno-commercial
            </h2>

            <h2>
              Proposal
            </h2>
          </div>
        </div>

        {/* =====================================================
           TITLE
        ===================================================== */}

        <div className="mt-7 relative">

          <textarea
            value={
              pageData.title
            }
            onChange={(e) =>
              updateTitle(
                e.target.value
              )
            }
            rows={1}
            className="
              w-full
              resize-none
              border-none
              outline-none
              bg-transparent
              text-[20px]
              font-bold
              text-[#0d4c7f]
            "
          />

          <Pencil
            size={14}
            className="
              absolute
              right-0
              top-2
              text-slate-400
            "
          />
        </div>

        {/* =====================================================
           TOP IMAGES
        ===================================================== */}

        <div
          className="
            mt-5
            flex
            justify-between
            px-2
          "
        >

          {pageData.connections
            .slice(0, 2)
            .map(
              (
                connection,
                index
              ) => (

                <div
                  key={index}
                  className="
                    flex
                    flex-col
                    items-center
                  "
                >

                  <div className="relative">

                    <img
                      src={
                        connection.image
                      }
                      alt=""
                      className="
                        w-[260px]
                        object-contain
                      "
                    />

                    <label
                      className="
                        absolute
                        top-2
                        right-2
                        bg-white
                        rounded-full
                        p-1.5
                        shadow-md
                        cursor-pointer
                      "
                    >

                      <ImagePlus
                        size={13}
                      />

                      <input
                        type="file"
                        hidden
                        accept="image/*"
                        onChange={(e) =>
                          updateImage(
                            index,
                            e.target
                              .files[0]
                          )
                        }
                      />
                    </label>
                  </div>

                  <textarea
                    value={
                      connection.name
                    }
                    onChange={(e) =>
                      updateConnection(
                        index,
                        "name",
                        e.target.value
                      )
                    }
                    rows={1}
                    className="
                      mt-1
                      text-center
                      italic
                      text-[12px]
                      bg-transparent
                      border-none
                      outline-none
                      resize-none
                    "
                  />
                </div>
              )
            )}
        </div>

        {/* =====================================================
           CONNECTION C
        ===================================================== */}

        <div
          className="
            mt-4
            flex
            justify-center
          "
        >

          <div
            className="
              flex
              flex-col
              items-center
            "
          >

            <div className="relative">

              <img
                src={
                  pageData.connections[2]
                    ?.image
                }
                alt=""
                className="
                  w-[260px]
                  object-contain
                "
              />

              <label
                className="
                  absolute
                  top-2
                  right-2
                  bg-white
                  rounded-full
                  p-1.5
                  shadow-md
                  cursor-pointer
                "
              >

                <ImagePlus
                  size={13}
                />

                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={(e) =>
                    updateImage(
                      2,
                      e.target
                        .files[0]
                    )
                  }
                />
              </label>
            </div>

            <textarea
              value={
                pageData.connections[2]
                  ?.name
              }
              onChange={(e) =>
                updateConnection(
                  2,
                  "name",
                  e.target.value
                )
              }
              rows={1}
              className="
                mt-1
                text-center
                italic
                text-[12px]
                bg-transparent
                border-none
                outline-none
                resize-none
              "
            />
          </div>
        </div>

        {/* =====================================================
           TEST LIST
        ===================================================== */}

        <div className="mt-8 px-10">

          {pageData.connections.map(
            (
              connection,
              index
            ) => (

              <div
                key={index}
                className="mb-6"
              >

                <h3
                  className="
                    italic
                    font-bold
                    text-[13px]
                    mb-2
                  "
                >
                  {connection.name}
                </h3>

                {connection.tests.map(
                  (
                    test,
                    testIndex
                  ) => (

                    <div
                      key={testIndex}
                      className="
                        flex
                        items-start
                        gap-2
                        mb-1
                      "
                    >

                      <div
                        className="
                          text-[12px]
                          w-[18px]
                        "
                      >
                        {testIndex + 1}.
                      </div>

                      <div className="flex-1 relative">

                        <textarea
                          value={test}
                          onChange={(e) =>
                            updateTest(
                              index,
                              testIndex,
                              e.target
                                .value
                            )
                          }
                          rows={1}
                          className="
                            w-full
                            resize-none
                            border-none
                            outline-none
                            bg-transparent
                            text-[12px]
                            leading-[18px]
                          "
                        />

                        <button
                          onClick={() =>
                            removeTest(
                              index,
                              testIndex
                            )
                          }
                          className="
                            absolute
                            right-0
                            top-0
                            text-red-500
                          "
                        >
                          <Trash2
                            size={11}
                          />
                        </button>
                      </div>
                    </div>
                  )
                )}

                <div className="flex gap-3 mt-2">

                  <button
                    onClick={() =>
                      addTest(index)
                    }
                    className="
                      flex
                      items-center
                      gap-1
                      text-[#0d4c7f]
                      text-[11px]
                      font-semibold
                    "
                  >
                    <Plus size={11} />
                    Add Test
                  </button>

                  <button
                    onClick={() =>
                      removeConnection(
                        index
                      )
                    }
                    className="
                      flex
                      items-center
                      gap-1
                      text-red-500
                      text-[11px]
                      font-semibold
                    "
                  >
                    <Trash2 size={11} />
                    Delete Connection
                  </button>
                </div>
              </div>
            )
          )}
        </div>

        {/* =====================================================
           ADD CONNECTION
        ===================================================== */}

        <div className="px-10">

          <button
            onClick={addConnection}
            className="
              flex
              items-center
              gap-2
              px-4
              py-2
              rounded-md
              bg-[#0d4c7f]
              text-white
              text-[11px]
              font-semibold
            "
          >
            <Plus size={12} />
            Add Connection
          </button>
        </div>

        {/* =====================================================
           FOOTER NOTE
        ===================================================== */}

        <div className="mt-7 px-10">

          <textarea
            value={
              pageData.footerNote
            }
            onChange={(e) =>
              flushToStore({
                ...pageData,
                footerNote:
                  e.target.value,
              })
            }
            rows={2}
            className="
              w-full
              resize-none
              border-none
              outline-none
              bg-transparent
              italic
              text-[11px]
              leading-[18px]
            "
          />
        </div>

        {/* =====================================================
           FOOTER
        ===================================================== */}

        <div
          className="
            mt-8
            flex
            justify-between
            items-end
            text-[10px]
            italic
            text-[#8a8a8a]
          "
        >

          <div className="leading-5">

            <p>
              a: S7-1, Jai Matadi Compound, Kalher, Thane, Maharashtra, INDIA 421302
            </p>

            <p>
              e: info@electrosoftindia.com
            </p>

            <p>
              m: +91-9089-888-444
            </p>
          </div>

          <div
            className="
              text-right
              leading-5
            "
          >

            <p>
              GST: 27AAFCE4353G1ZP
            </p>

            <p>
              CIN: U31900MH2019PTC323431
            </p>

            <p
              className="
                mt-1
                text-[#003f77]
                font-semibold
                not-italic
                text-[11px]
              "
            >
              Page 13 of 24
            </p>
          </div>
        </div>

        {/* =====================================================
           NAVIGATION
        ===================================================== */}

        <div
          className="
            flex
            justify-between
            mt-8
          "
        >

          <button
            onClick={() =>
              navigate(
                "/technical/page12"
              )
            }
            className="
              px-5
              py-2
              rounded-full
              border
              border-[#0d4c7f]
              text-[#0d4c7f]
              text-[11px]
              font-semibold
            "
          >
            ← Previous Page
          </button>

          <ExportButton
            type="technical"
          />

          <button
            onClick={() =>
              navigate(
                "/commercial-offer"
              )
            }
            className="
              px-5
              py-2
              rounded-full
              bg-[#0d4c7f]
              text-white
              text-[11px]
              font-semibold
            "
          >
            Commercial Offer →
          </button>
        </div>
      </div>
    </div>
  );
}