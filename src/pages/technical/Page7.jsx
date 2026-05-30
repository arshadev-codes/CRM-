import { useState } from "react";

import logo from "../../assets/logo.png";

import technicalPagesData
  from "../../data/technicalPagesData";

import { useProposalStore }
  from "../../store/proposalStore";

import { useNavigate }
  from "react-router-dom";

import {
  Pencil,
  ImagePlus,
} from "lucide-react";

export default function Page7() {

  const navigate =
    useNavigate();

  const { proposal } =
    useProposalStore();

  const systemType =
    proposal.systemType || "Advanced";

  const initialData =
    technicalPagesData[
      systemType
    ].page7.sections;

  const [sections, setSections] =
    useState(initialData);

  /* =====================================================
     UPDATE FIELD
  ===================================================== */

  const updateField = (
    sectionIndex,
    field,
    value
  ) => {

    const updated =
      [...sections];

    updated[
      sectionIndex
    ][field] = value;

    setSections(updated);
  };

  /* =====================================================
     UPDATE IMAGE
  ===================================================== */

  const updateImage = (
    sectionIndex,
    imageIndex,
    file
  ) => {

    if (!file) return;

    const updated =
      [...sections];

    updated[
      sectionIndex
    ].images[
      imageIndex
    ].src =
      URL.createObjectURL(file);

    setSections(updated);
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

      {/* =====================================================
         PAGE
      ===================================================== */}

      <div
        className="
          w-[1150px]
          bg-white
          border
          border-slate-300
          shadow-xl
          rounded-xl
          px-[70px]
          pt-[55px]
          pb-[120px]
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

          {/* LEFT */}

          <div
            className="
              flex
              items-start
              gap-5
            "
          >

            <img
              src={logo}
              alt=""
              className="
                w-[90px]
                object-contain
              "
            />

            <div>

              <h1
                className="
                  text-[34px]
                  font-bold
                  leading-[42px]
                  text-[#7d7d7d]
                "
              >
                Electrosoft Automation
              </h1>

              <h2
                className="
                  text-[34px]
                  font-bold
                  leading-[42px]
                  text-[#8b8b8b]
                "
              >
                Private Limited
              </h2>
            </div>
          </div>

          {/* RIGHT */}

          <div
            className="
              text-right
              italic
              font-semibold
              text-[28px]
              leading-[40px]
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
           CONTENT
        ===================================================== */}

        <div className="mt-12">

          {sections.map(
            (
              section,
              sectionIndex
            ) => (

              <div
                key={sectionIndex}
                className="mb-16"
              >

                {/* TITLE */}

                <div className="relative">

                  <textarea
                    value={
                      section.title
                    }
                    onChange={(e) =>
                      updateField(
                        sectionIndex,
                        "title",
                        e.target.value
                      )
                    }
                    rows={2}
                    className="
                      w-full
                      resize-none
                      overflow-hidden
                      border-none
                      outline-none
                      bg-transparent
                      text-[24px]
                      font-bold
                      leading-[38px]
                    "
                  />

                  <Pencil
                    size={16}
                    className="
                      absolute
                      right-0
                      top-3
                      text-slate-400
                    "
                  />
                </div>

                {/* DESCRIPTION */}

                <div className="relative mt-5">

                  <textarea
                    value={
                      section.description
                    }
                    onChange={(e) =>
                      updateField(
                        sectionIndex,
                        "description",
                        e.target.value
                      )
                    }
                    rows={10}
                    className="
                      w-full
                      resize-none
                      overflow-hidden
                      border-none
                      outline-none
                      bg-transparent
                      text-[18px]
                      leading-[42px]
                      text-[#202020]
                    "
                  />

                  <Pencil
                    size={16}
                    className="
                      absolute
                      right-0
                      top-3
                      text-slate-400
                    "
                  />
                </div>

                {/* =====================================================
                   MAIN IMAGE
                ===================================================== */}

                {section.images?.[0]
                  ?.src && (

                  <div
                    className="
                      mt-10
                      flex
                      justify-center
                    "
                  >

                    <div className="relative">

                      <img
                        src={
                          section
                            .images[0]
                            .src
                        }
                        alt=""
                        className="
                          w-[760px]
                          object-cover
                          border
                          border-slate-300
                        "
                      />

                      {/* CHANGE IMAGE */}

                      <label
                        className="
                          absolute
                          top-3
                          right-3
                          bg-white
                          border
                          border-slate-200
                          p-3
                          rounded-full
                          shadow-md
                          cursor-pointer
                        "
                      >

                        <ImagePlus
                          size={18}
                        />

                        <input
                          type="file"
                          hidden
                          onChange={(e) =>
                            updateImage(
                              sectionIndex,
                              0,
                              e.target
                                .files[0]
                            )
                          }
                        />
                      </label>
                    </div>
                  </div>
                )}
              </div>
            )
          )}
        </div>

        {/* =====================================================
           NAVIGATION
        ===================================================== */}

        <div
          className="
            flex
            justify-between
            items-center
            mt-12
          "
        >

          {/* PREVIOUS */}

          <button
            onClick={() =>
              navigate(
                "/technical/page6"
              )
            }
            className="
              px-8
              py-4
              rounded-full
              border
              border-[#0d4c7f]
              text-[#0d4c7f]
              hover:bg-[#0d4c7f]
              hover:text-white
              text-[14px]
              font-semibold
              transition-all
              duration-300
            "
          >
            ← Previous Page
          </button>

          {/* NEXT */}

          <button
            onClick={() =>
              navigate(
                "/technical/page8"
              )
            }
            className="
              px-8
              py-4
              rounded-full
              bg-[#0d4c7f]
              hover:bg-[#083454]
              text-white
              text-[14px]
              font-semibold
              transition-all
              duration-300
              shadow-lg
            "
          >
            Next Page →
          </button>
        </div>

        {/* =====================================================
           FOOTER
        ===================================================== */}

        <div
          className="
            mt-20
            flex
            justify-between
            items-end
          "
        >

          {/* LEFT */}

          <div
            className="
              text-[13px]
              italic
              leading-7
              text-[#9a9a9a]
            "
          >

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

          {/* RIGHT */}

          <div
            className="
              text-right
              text-[13px]
              italic
              leading-7
              text-[#9a9a9a]
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
                text-[15px]
                font-semibold
                text-[#003f77]
                not-italic
                mt-2
              "
            >
              Page 7 of 24
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}