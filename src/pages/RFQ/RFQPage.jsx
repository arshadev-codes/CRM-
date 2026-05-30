import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import EditableText from "../../components/EditableText.jsx";

import { useProposalStore } from "../../store/proposalStore";

import {
  preparedByList,
  titleSuggestions,
  systemTypes,
} from "../../data/masterData";

import logo from "../../assets/logo.png";

export default function RFQPage() {

  /* ---------------- RFQ ---------------- */

  const generatedRFQ = useMemo(() => {
    return "Q001/2025-26/Neo/TTS/R0";
  }, []);

  const navigate = useNavigate();

  /* ---------------- GLOBAL STORE ---------------- */

  const {
    proposal,
    updateProposal,
  } = useProposalStore();

  /* ---------------- LOCAL FORM ---------------- */

  const [formData, setFormData] = useState({
    title: "Mr.",

    to: "VC Krishna",

    companyName:
      "M/s Neotrafo Solutions India Private Limited",

    reference: generatedRFQ,

    date: "24th November 2025",

    preparedBy: "J.M. Krishna",

    checkedBy: "Sabir Baig",

    revision: "Rev. 0",

    revisionDate: "24.11.2025",

    address: `Electrosoft Automation Pvt. Ltd.
S7-1&2, Jai Mata di Compound, Thane-Bhiwandi Road,
Kalher, Thane District, Maharashtra, India – 421302
Tel. No. +91 8692 888 444`,
  });

  /* ---------------- PREPARED BY ---------------- */

  const selectedPreparedBy =
    preparedByList.find(
      (p) => p.name === formData.preparedBy
    ) || preparedByList[0];

  /* ---------------- UPDATE ---------------- */

  const updateField = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="max-w-[1200px] mx-auto">

      {/* TOPBAR */}
      <div className="flex items-center justify-between mb-5">

        <div>
          <h1 className="text-2xl font-semibold text-slate-800">
            Proposal Cover Page
          </h1>

          <p className="text-sm text-slate-500 mt-1">
            Configure proposal first page
          </p>
        </div>

        <div
          className="
            bg-white
            border
            border-slate-200
            rounded-2xl
            px-5
            py-3
            shadow-sm
          "
        >
          <p className="text-xs text-slate-500">
            RFQ Number
          </p>

          <h2 className="text-lg font-semibold text-indigo-600">
            {generatedRFQ}
          </h2>
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
          p-[48px]
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

              <h1 className="text-[34px] font-bold leading-[38px] text-slate-700">
                Electrosoft Automation
              </h1>

              <h2 className="text-[34px] font-bold leading-[38px] text-slate-500">
                Private Limited
              </h2>
            </div>
          </div>

          {/* RIGHT */}
          <div className="text-right italic">

            <h2 className="text-[30px] font-semibold text-slate-800">
              Techno-commercial
            </h2>

            <h2 className="text-[30px] font-semibold text-slate-800">
              Proposal
            </h2>
          </div>
        </div>

        {/* TABLE */}
        <table className="w-full border-collapse border border-slate-400 mb-8">

          <tbody>

            {/* TO */}
            <EditableRow
              title="To"
              value={
                <>
                  <EditableText
                    value={formData.title}
                    onChange={(value) =>
                      updateField("title", value)
                    }
                    suggestions={titleSuggestions}
                  />

                  <span className="mx-2" />

                  <EditableText
                    value={formData.to}
                    onChange={(value) =>
                      updateField("to", value)
                    }
                    suggestions={preparedByList.map(
                      (p) => p.name
                    )}
                  />
                </>
              }
            />

            {/* COMPANY */}
            <EditableRow
              title="Name of the company"
              value={
                <EditableText
                  value={formData.companyName}
                  onChange={(value) =>
                    updateField(
                      "companyName",
                      value
                    )
                  }
                />
              }
            />

            {/* SUBJECT */}
            <EditableRow
              title="Subject"
              value={
                <div className="leading-7">

                  Techno-commercial offer for{" "}

                  <EditableText
                    value={proposal.transformerRating}
                    onChange={(value) =>
                      updateProposal({
                        transformerRating: value,
                      })
                    }
                  />

                  ,{" "}

                  <EditableText
                    value={proposal.voltageClass}
                    onChange={(value) =>
                      updateProposal({
                        voltageClass: value,
                      })
                    }
                  />

                  {" "}Transformer Testing System -{" "}

                  <EditableText
                    value={proposal.systemType}
                    onChange={(value) =>
                      updateProposal({
                        systemType: value,
                      })
                    }
                    suggestions={systemTypes}
                    dropdown
                    className="font-semibold"
                  />
                </div>
              }
            />

            {/* REF */}
            <EditableRow
              title="Our reference"
              value={formData.reference}
            />

            {/* DATE */}
            <EditableRow
              title="Date"
              value={
                <EditableText
                  value={formData.date}
                  onChange={(value) =>
                    updateField("date", value)
                  }
                />
              }
            />

          </tbody>
        </table>

        {/* SECOND TABLE */}
        <table className="w-full border-collapse border border-slate-400 mb-12">

          <tbody>

            <EditableRow
              title="Prepared by"
              value={
                <EditableText
                  value={formData.preparedBy}
                  onChange={(value) =>
                    updateField(
                      "preparedBy",
                      value
                    )
                  }
                  suggestions={preparedByList.map(
                    (p) => p.name
                  )}
                />
              }
            />

            <EditableRow
              title="Checked by"
              value={
                <EditableText
                  value={formData.checkedBy}
                  onChange={(value) =>
                    updateField(
                      "checkedBy",
                      value
                    )
                  }
                  suggestions={preparedByList.map(
                    (p) => p.name
                  )}
                />
              }
            />

            {/* REVISION */}
            <tr>

              <td
                className="
                  w-[240px]
                  border
                  border-slate-400
                  px-4
                  py-3
                  font-semibold
                  text-[15px]
                "
              >
                Revision no. & date
              </td>

              <td className="border border-slate-400 p-0">

                <div className="grid grid-cols-2">

                  <div className="px-4 py-3 border-r border-slate-400">

                    <EditableText
                      value={formData.revision}
                      onChange={(value) =>
                        updateField(
                          "revision",
                          value
                        )
                      }
                    />
                  </div>

                  <div className="px-4 py-3">

                    <EditableText
                      value={formData.revisionDate}
                      onChange={(value) =>
                        updateField(
                          "revisionDate",
                          value
                        )
                      }
                    />
                  </div>
                </div>
              </td>
            </tr>

            {/* ADDRESS */}
            <tr>

              <td
                className="
                  w-[240px]
                  border
                  border-slate-400
                  px-4
                  py-3
                  font-semibold
                  text-[15px]
                "
              >
                Contact Address
              </td>

              <td className="border border-slate-400 px-4 py-3 leading-7 text-[15px] whitespace-pre-line">
                {formData.address}
              </td>
            </tr>

          </tbody>
        </table>

        {/* LETTER */}
        <div className="space-y-7 text-[16px] leading-8 text-slate-700 mb-14">

          <p>Dear Sir,</p>

          <p>
            With reference to your inquiry, we are pleased to submit our
            Techno-Commercial Offer for{" "}

            <EditableText
              value={proposal.transformerRating}
              onChange={(value) =>
                updateProposal({
                  transformerRating: value,
                })
              }
            />

            ,{" "}

            <EditableText
              value={proposal.voltageClass}
              onChange={(value) =>
                updateProposal({
                  voltageClass: value,
                })
              }
            />

            {" "}Transformer Testing System.
          </p>

          <p>
            Electrosoft Automation Pvt. Ltd. specializes in the design,
            development, and manufacturing of a wide range of Transformer
            Testing Systems.
          </p>

          <p>
            Our solutions are used by power utilities,
            transformer manufacturers, and research institutes across the globe.
          </p>

          <p>
            We offer testing systems that range from conventional to fully
            automated and advanced, tailored to suit diverse application needs.
          </p>

          <p>
            We trust the enclosed offer meets your expectations and technical
            requirements.
          </p>

          <p>
            Thank you for considering Electrosoft Automation Pvt. Ltd.
          </p>
        </div>

        {/* FOOTER */}
        <div className="flex justify-between items-end mb-14">

          {/* SIGN */}
          <div className="text-[15px] leading-7 text-slate-700">

            <p>Sincerely,</p>

            <p className="italic mt-4">
              {formData.preparedBy}
            </p>

            <p>
              {selectedPreparedBy.designation}
            </p>

            <p>
              Electrosoft Automation Pvt. Ltd.
            </p>

            <p>
              {selectedPreparedBy.mobile}
            </p>
          </div>

          {/* CONFIDENTIAL */}
          <div
            className="
              w-[430px]
              border-2
              border-red-500
              p-5
              text-center
              text-[13px]
              leading-6
              font-semibold
              text-red-600
            "
          >
            This techno-commercial proposal, including all pages,
            literature, photographs, and linked documents, is the confidential
            property of Electrosoft Automation Pvt. Ltd.
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex justify-between text-[12px] text-slate-400 italic">

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
              Page 1 of 24
            </p>
          </div>
        </div>
      </div>

      {/* NEXT */}
      <div className="flex justify-end mt-6">

        <button
          onClick={() =>
            navigate("/requirement")
          }
          className="
            h-12
            px-8
            rounded-2xl
            bg-gradient-to-r
            from-[#5B5FFF]
            to-[#7B61FF]
            text-white
            font-semibold
            shadow-lg
            shadow-indigo-500/20
            hover:scale-[1.02]
            transition-all
          "
        >
          Next Page →
        </button>
      </div>
    </div>
  );
}

/* ---------------- ROW ---------------- */

function EditableRow({
  title,
  value,
}) {
  return (
    <tr>

      <td
        className="
          w-[240px]
          border
          border-slate-400
          px-4
          py-3
          font-semibold
          text-[15px]
          align-top
        "
      >
        {title}
      </td>

      <td
        className="
          border
          border-slate-400
          px-4
          py-3
          text-[15px]
          leading-7
        "
      >
        {value}
      </td>
    </tr>
  );
}