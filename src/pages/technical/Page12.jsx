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
  FileText,
} from "lucide-react";

export default function Page12() {

  const navigate =
    useNavigate();

  const { proposal } =
    useProposalStore();

  /* =====================================================
     SAME METHOD AS PAGE 11
  ===================================================== */

  const systemType =
    proposal.systemType || "Advanced";

  const initialData =
    technicalPagesData[
      systemType
    ].page12;

  const [pageData, setPageData] =
    useState(initialData);

  /* =====================================================
     UPDATE FIELD
  ===================================================== */

  const updateField = (
    field,
    value
  ) => {

    setPageData({
      ...pageData,
      [field]: value,
    });
  };

  /* =====================================================
     CHANGE IMAGE
  ===================================================== */

  const updateImage = (
    file
  ) => {

    if (!file) return;

    setPageData({
      ...pageData,
      layoutImage:
        URL.createObjectURL(file),
    });
  };

  /* =====================================================
     CHANGE PDF
  ===================================================== */

  const updatePdf = (
    file
  ) => {

    if (!file) return;

    setPageData({
      ...pageData,
      sldPdf:
        URL.createObjectURL(file),

      pdfName:
        file.name,
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
           TITLE
        ===================================================== */}

        <div className="mt-14 relative">

          <textarea
            value={
              pageData.title
            }
            onChange={(e) =>
              updateField(
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
              text-[30px]
              font-bold
              text-[#0d4c7f]
              leading-[45px]
            "
          />

          <Pencil
            size={18}
            className="
              absolute
              right-0
              top-3
              text-slate-400
            "
          />
        </div>

        {/* =====================================================
           DESCRIPTION
        ===================================================== */}

        <div className="mt-8 relative">

          <textarea
            value={
              pageData.description
            }
            onChange={(e) =>
              updateField(
                "description",
                e.target.value
              )
            }
            rows={7}
            className="
              w-full
              resize-none
              overflow-hidden
              border-none
              outline-none
              bg-transparent
              text-[17px]
              leading-[38px]
              text-[#d10000]
              font-semibold
            "
          />

          <Pencil
            size={16}
            className="
              absolute
              right-0
              top-2
              text-slate-400
            "
          />
        </div>

        {/* =====================================================
           PDF BUTTON
        ===================================================== */}

        <div
          className="
            mt-12
            flex
            justify-center
          "
        >

          <div className="relative">

            <a
              href={
                pageData.sldPdf
              }
              target="_blank"
              rel="noreferrer"
              className="
                w-[470px]
                h-[150px]
                rounded-[25px]
                border-[2px]
                border-[#0077c8]
                bg-gradient-to-b
                from-[#8cc6f0]
                to-[#66afe5]
                flex
                flex-col
                items-center
                justify-center
                text-center
                shadow-lg
                hover:scale-[1.02]
                transition-all
              "
            >

              <div
                className="
                  text-[25px]
                  font-black
                  leading-[42px]
                  text-black
                "
              >
                CLICK HERE TO OPEN SLD
              </div>

              <div
                className="
                  text-[25px]
                  font-black
                  leading-[42px]
                  text-black
                "
              >
                (SINGLE LINE DIAGRAM)
              </div>

              <div
                className="
                  text-[29px]
                  font-black
                  leading-[42px]
                  text-black
                "
              >
                OF OFFERED SYSTEM
              </div>

              <div
                className="
                  text-[24px]
                  font-black
                  text-red-600
                  mt-2
                "
              >
                [CONFIDENTIAL]
              </div>
            </a>

            {/* CHANGE PDF */}

            <label
              className="
                absolute
                -right-16
                top-1/2
                -translate-y-1/2
                bg-white
                border
                border-slate-300
                rounded-full
                p-4
                shadow-lg
                cursor-pointer
              "
            >

              <FileText
                size={24}
              />

              <input
                type="file"
                accept=".pdf"
                hidden
                onChange={(e) =>
                  updatePdf(
                    e.target.files[0]
                  )
                }
              />
            </label>
          </div>
        </div>

        {/* =====================================================
           PDF NAME
        ===================================================== */}

        <div
          className="
            text-center
            mt-5
            text-[15px]
            text-slate-500
            italic
          "
        >
          Current PDF:
          {" "}
          {pageData.pdfName}
        </div>

        {/* =====================================================
           LAYOUT TITLE
        ===================================================== */}

        <div className="mt-14 relative">

          <textarea
            value={
              pageData.layoutTitle
            }
            onChange={(e) =>
              updateField(
                "layoutTitle",
                e.target.value
              )
            }
            rows={1}
            className="
              w-full
              resize-none
              overflow-hidden
              border-none
              outline-none
              bg-transparent
              text-[24px]
              italic
              font-bold
            "
          />

          <Pencil
            size={16}
            className="
              absolute
              right-0
              top-2
              text-slate-400
            "
          />
        </div>

        {/* =====================================================
           IMAGE
        ===================================================== */}

        <div
          className="
            mt-8
            flex
            justify-center
          "
        >

          <div className="relative">

            <img
              src={
                pageData.layoutImage
              }
              alt=""
              className="
                w-[900px]
                object-contain
                border
                border-slate-300
              "
            />

            {/* CHANGE IMAGE */}

            <label
              className="
                absolute
                top-4
                right-4
                bg-white
                border
                border-slate-300
                rounded-full
                p-4
                shadow-lg
                cursor-pointer
              "
            >

              <ImagePlus
                size={22}
              />

              <input
                type="file"
                hidden
                onChange={(e) =>
                  updateImage(
                    e.target.files[0]
                  )
                }
              />
            </label>
          </div>
        </div>

        {/* =====================================================
           NAVIGATION
        ===================================================== */}

        <div
          className="
            flex
            justify-between
            items-center
            mt-16
          "
        >

          <button
            onClick={() =>
              navigate(
                "/technical/page11"
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

          <button
            onClick={() =>
              navigate(
                "/technical/page13"
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
            Commercial Offer →
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
              Page 12 of 24
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}