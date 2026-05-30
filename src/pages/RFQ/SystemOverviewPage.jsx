import { useNavigate } from "react-router-dom";

import logo from "../../assets/logo.png";

import { useProposalStore } from "../../store/proposalStore";

import { page3Data } from "../../data/systemTypeData";

export default function SystemOverviewPage() {

  const navigate = useNavigate();

  const { proposal } =
    useProposalStore();

  const selectedSystem =
    proposal.systemType;

  const data =
    page3Data[selectedSystem];

  if (!data) {
    return (
      <div className="p-10">
        No data found for:
        {selectedSystem}
      </div>
    );
  }

  /* ---------------- DYNAMIC FIELDS ---------------- */

  const title =
    data.title || data.heading;

  const projectTitle =
    data.project ||
    data.realWorldProven?.title;

  const projectBody =
    data.description ||
    data.realWorldProven?.body;

  const highlights =
    data.highlights ||
    data.keyHighlights ||
    [];

  return (
    <div className="max-w-[1200px] mx-auto">

      {/* TOPBAR */}
      <div className="flex justify-between items-center mb-5">

        <div>

          <h1 className="text-2xl font-semibold text-slate-800">
            System Overview
          </h1>

          <p className="text-sm text-slate-500 mt-1">
            Configure system overview page
          </p>
        </div>

        <div className="flex gap-3">

          <button
            onClick={() =>
              navigate("/requirement")
            }
            className="
              h-11
              px-6
              rounded-2xl
              border
              border-slate-300
              bg-white
              hover:bg-slate-100
              transition-all
            "
          >
            ← Previous
          </button>

          <button
            onClick={() =>
              navigate("/technical/page4")
            }
            className="
              h-11
              px-6
              rounded-2xl
              bg-gradient-to-r
              from-[#5B5FFF]
              to-[#7B61FF]
              text-white
              font-medium
            "
          >
            Save & Next →
          </button>
        </div>
      </div>

      {/* DOCUMENT */}
      <div
        className="
          bg-white
          border
          border-slate-300
          shadow-xl
          rounded-md
          p-[42px]
        "
      >

        {/* HEADER */}
        <div className="flex justify-between items-start mb-10">

          {/* LEFT */}
          <div className="flex items-start gap-4">

            <img
              src={logo}
              alt="Logo"
              className="w-[75px] object-contain"
            />

            <div>

              <h1 className="text-[32px] font-bold leading-[36px] text-slate-700">
                Electrosoft Automation
              </h1>

              <h2 className="text-[32px] font-bold leading-[36px] text-slate-500">
                Private Limited
              </h2>
            </div>
          </div>

          {/* RIGHT */}
          <div className="text-right italic">

            <h2 className="text-[28px] font-semibold text-slate-800">
              Techno-commercial
            </h2>

            <h2 className="text-[28px] font-semibold text-slate-800">
              Proposal
            </h2>
          </div>
        </div>

        {/* TITLE */}
        <div className="mb-10">

          <h1 className="text-[30px] font-bold text-[#0b4f75] mb-3">
            {title}
          </h1>

          <p className="italic font-semibold text-[16px]">
            {data.tagline}
          </p>
        </div>

        {/* CONTENT */}
        <div className="space-y-8 text-[15px] leading-8 text-slate-700">

          {/* INTRO */}
          <p>
            {data.intro}
          </p>

          {/* REAL WORLD */}
          <div>

            <h3 className="font-bold text-[17px] mb-3">
              {projectTitle}
            </h3>

            <p>
              {projectBody}
            </p>
          </div>

          {/* HIGHLIGHTS */}
          <div>

            <h3 className="font-bold italic mb-5">
              Key Highlights:
            </h3>

            <ol className="space-y-8">

              {highlights.map(
                (item, index) => (

                  <li key={index}>

                    <h4 className="font-bold mb-3">
                      {index + 1}.{" "}
                      {item.title}
                    </h4>

                    <p>
                      {item.text || item.body}
                    </p>
                  </li>
                )
              )}
            </ol>
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex justify-between mt-20 text-[12px] text-slate-400 italic">

          <div className="space-y-1">

            <p>
              a: S7-1, Jai MataDi Compound, Kalher, Maharashtra, INDIA 421302
            </p>

            <p>
              e: info@electrosoftindia.com
            </p>

            <p>
              m: +91-909-888-444
            </p>
          </div>

          <div className="space-y-1 text-right">

            <p>
              GST: 27AAFCE4353G1ZP
            </p>

            <p>
              CIN: U31900MH2019PTC323431
            </p>

            <p className="font-semibold text-slate-600 not-italic">
              Page 3 of 24
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}