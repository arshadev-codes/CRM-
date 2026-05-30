import { useState } from "react";
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


export default function Page13() {

  const navigate = useNavigate();

  const { proposal } =
    useProposalStore();

  const systemType =
    proposal.systemType || "Advanced";

  /* =====================================================
     DATA
  ===================================================== */

  const fallbackData = {

    title:
      "CONNECTIONS AND TESTS",

    connections: [

      {
        name:
          "Connection A",

        image:
          connectionA,

        tests: [

          "Measurement of No-load Loss (Watt)",

          "Measurement of No-load Current",

          "Induced Overvoltage Withstand Test",
        ],
      },

      {
        name:
          "Connection B",

        image:
          connectionB,

        tests: [

          "Measurement of Impedance Voltage",

          "Measurement of Load Loss (Watt)",

          "Temperature Rise Test",

          "Calculation of Efficiency and Regulation",
        ],
      },

      {
        name:
          "Connection C",

        image:
          connectionC,

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

  const proposalData =
    technicalPagesData?.[
      systemType
    ]?.page13;

  const initialData =
    proposalData || fallbackData;

  /* =====================================================
     FORCE IMAGES
  ===================================================== */

  const finalConnections =
    initialData.connections.map(
      (
        connection,
        index
      ) => {

        let image =
          connectionA;

        if (index === 1) {
          image = connectionB;
        }

        if (index === 2) {
          image = connectionC;
        }

        return {

          ...connection,

          image,
        };
      }
    );

  const [pageData, setPageData] =
    useState({

      ...initialData,

      connections:
        finalConnections,
    });

  /* =====================================================
     UPDATE FUNCTIONS
  ===================================================== */

  const updateTitle = (
    value
  ) => {

    setPageData({

      ...pageData,

      title: value,
    });
  };

  const updateConnection = (
    index,
    field,
    value
  ) => {

    const updated =
      [...pageData.connections];

    updated[index][field] =
      value;

    setPageData({

      ...pageData,

      connections:
        updated,
    });
  };

  const updateTest = (
    connectionIndex,
    testIndex,
    value
  ) => {

    const updated =
      [...pageData.connections];

    updated[
      connectionIndex
    ].tests[
      testIndex
    ] = value;

    setPageData({

      ...pageData,

      connections:
        updated,
    });
  };

  const updateImage = (
    index,
    file
  ) => {

    if (!file) return;

    const updated =
      [...pageData.connections];

    updated[index].image =
      URL.createObjectURL(file);

    setPageData({

      ...pageData,

      connections:
        updated,
    });
  };

  const addTest = (
    connectionIndex
  ) => {

    const updated =
      [...pageData.connections];

    updated[
      connectionIndex
    ].tests.push(
      "New Test"
    );

    setPageData({

      ...pageData,

      connections:
        updated,
    });
  };

  const removeTest = (
    connectionIndex,
    testIndex
  ) => {

    const updated =
      [...pageData.connections];

    updated[
      connectionIndex
    ].tests.splice(
      testIndex,
      1
    );

    setPageData({

      ...pageData,

      connections:
        updated,
    });
  };

  const addConnection = () => {

    setPageData({

      ...pageData,

      connections: [

        ...pageData.connections,

        {
          name:
            "New Connection",

          image:
            connectionA,

          tests: [
            "New Test",
          ],
        },
      ],
    });
  };

  const removeConnection = (
    index
  ) => {

    const updated =
      [...pageData.connections];

    updated.splice(index, 1);

    setPageData({

      ...pageData,

      connections:
        updated,
    });
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
              setPageData({

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