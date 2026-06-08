import { useMemo, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import EditableText from "../../components/EditableText.jsx";
import { useProposalStore } from "../../store/proposalStore";
import {
  preparedByList,
  titleSuggestions,
  systemTypes,
} from "../../data/masterData";
import logo from "../../assets/logo.png";

export default function RFQPage() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Check if we're in print/export mode (you can set this via query param or state)
  const isPrintMode = location.search.includes('print=true') || window.location.pathname.includes('/print');

  /* ---------------- GLOBAL STORE ---------------- */
  const {
    proposal,
    updateProposal,
    rfqCover,
    updateRfqCover,
  } = useProposalStore();

  // Generate RFQ number (memoized)
  const generatedRFQ = useMemo(() => {
    return rfqCover.reference || `Q001/${new Date().getFullYear()}-${(new Date().getFullYear() + 1).toString().slice(-2)}/Neo/TTS/R0`;
  }, [rfqCover.reference]);

  // ✅ FIXED: Safely update global state inside useEffect instead of useMemo
  useEffect(() => {
    if (!rfqCover.reference && generatedRFQ) {
      updateRfqCover({ reference: generatedRFQ });
    }
  }, [generatedRFQ, rfqCover.reference, updateRfqCover]);

  const selectedPreparedBy =
    preparedByList.find((p) => p.name === rfqCover.preparedBy) ||
    preparedByList[0];

  const updateField = (field, value) => {
    if (!isPrintMode) {
      updateRfqCover({ [field]: value });
    }
  };

  // Helper to render either EditableText or plain text
  const renderEditableOrText = (value, onChange, options = {}) => {
    if (isPrintMode) {
      return <span className={options.className}>{value || '-'}</span>;
    }
    return (
      <EditableText
        value={value}
        onChange={onChange}
        suggestions={options.suggestions}
        dropdown={options.dropdown}
        className={options.className}
      />
    );
  };

  return (
    <div className={`max-w-[1200px] mx-auto ${isPrintMode ? 'print-mode' : ''}`}>
      {/* TOPBAR - Hide in print mode */}
      {!isPrintMode && (
        <div className="flex items-center justify-between mb-5">
          <div>
            <h1 className="text-2xl font-semibold text-slate-800">
              Proposal Cover Page
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Configure proposal first page
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl px-5 py-3 shadow-sm">
            <p className="text-xs text-slate-500">RFQ Number</p>
            <h2 className="text-lg font-semibold text-indigo-600">
              {generatedRFQ}
            </h2>
          </div>
        </div>
      )}

      {/* DOCUMENT */}
      <div className={`bg-white border border-slate-300 shadow-xl rounded-md p-[48px] ${isPrintMode ? 'shadow-none' : ''}`}>
        {/* HEADER */}
        <div className="flex justify-between items-start mb-10">
          <div className="flex items-start gap-4">
            <img src={logo} alt="Logo" className="w-[75px] object-contain" />
            <div>
              <h1 className="text-[34px] font-bold leading-[38px] text-slate-700">
                Electrosoft Automation
              </h1>
              <h2 className="text-[34px] font-bold leading-[38px] text-slate-500">
                Private Limited
              </h2>
            </div>
          </div>
          <div className="text-right italic">
            <h2 className="text-[30px] font-semibold text-slate-800">
              Techno-commercial
            </h2>
            <h2 className="text-[30px] font-semibold text-slate-800">
              Proposal
            </h2>
          </div>
        </div>

        {/* TABLE 1 */}
        <table className="w-full border-collapse border border-slate-400 mb-8">
          <tbody>
            {/* TO */}
            <EditableRow
              title="To"
              value={
                <>
                  {renderEditableOrText(
                    rfqCover.title,
                    (value) => updateField("title", value),
                    { suggestions: titleSuggestions }
                  )}
                  <span className="mx-2" />
                  {renderEditableOrText(
                    rfqCover.to,
                    (value) => updateField("to", value),
                    { suggestions: preparedByList.map((p) => p.name) }
                  )}
                </>
              }
            />

            {/* COMPANY */}
            <EditableRow
              title="Name of the company"
              value={renderEditableOrText(
                rfqCover.companyName,
                (value) => updateField("companyName", value)
              )}
            />

            {/* SUBJECT */}
            <EditableRow
              title="Subject"
              value={
                <div className="leading-7">
                  Techno-commercial offer for{" "}
                  {renderEditableOrText(
                    proposal.transformerRating,
                    (value) => updateProposal({ transformerRating: value })
                  )}
                  ,{" "}
                  {renderEditableOrText(
                    proposal.voltageClass,
                    (value) => updateProposal({ voltageClass: value })
                  )}
                  {" "}Transformer Testing System -{" "}
                  {renderEditableOrText(
                    proposal.systemType,
                    (value) => updateProposal({ systemType: value }),
                    { suggestions: systemTypes, dropdown: true, className: "font-semibold" }
                  )}
                </div>
              }
            />

            {/* REF */}
            <EditableRow title="Our reference" value={generatedRFQ} />

            {/* DATE */}
            <EditableRow
              title="Date"
              value={renderEditableOrText(
                rfqCover.date,
                (value) => updateField("date", value)
              )}
            />
          </tbody>
        </table>

        {/* TABLE 2 */}
        <table className="w-full border-collapse border border-slate-400 mb-12">
          <tbody>
            <EditableRow
              title="Prepared by"
              value={renderEditableOrText(
                rfqCover.preparedBy,
                (value) => updateField("preparedBy", value),
                { suggestions: preparedByList.map((p) => p.name) }
              )}
            />

            <EditableRow
              title="Checked by"
              value={renderEditableOrText(
                rfqCover.checkedBy,
                (value) => updateField("checkedBy", value),
                { suggestions: preparedByList.map((p) => p.name) }
              )}
            />

            {/* REVISION */}
            <tr>
              <td className="w-[240px] border border-slate-400 px-4 py-3 font-semibold text-[15px]">
                Revision no. & date
              </td>
              <td className="border border-slate-400 p-0">
                <div className="grid grid-cols-2">
                  <div className="px-4 py-3 border-r border-slate-400">
                    {renderEditableOrText(
                      rfqCover.revision,
                      (value) => updateField("revision", value)
                    )}
                  </div>
                  <div className="px-4 py-3">
                    {renderEditableOrText(
                      rfqCover.revisionDate,
                      (value) => updateField("revisionDate", value)
                    )}
                  </div>
                </div>
              </td>
            </tr>

            {/* ADDRESS */}
            <tr>
              <td className="w-[240px] border border-slate-400 px-4 py-3 font-semibold text-[15px]">
                Contact Address
              </td>
              <td className="border border-slate-400 px-4 py-3 leading-7 text-[15px] whitespace-pre-line">
                {rfqCover.address}
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
            {renderEditableOrText(
              proposal.transformerRating,
              (value) => updateProposal({ transformerRating: value })
            )}
            ,{" "}
            {renderEditableOrText(
              proposal.voltageClass,
              (value) => updateProposal({ voltageClass: value })
            )}
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
          <div className="text-[15px] leading-7 text-slate-700">
            <p>Sincerely,</p>
            <p className="italic mt-4">{rfqCover.preparedBy}</p>
            <p>{selectedPreparedBy.designation}</p>
            <p>Electrosoft Automation Pvt. Ltd.</p>
            <p>{selectedPreparedBy.mobile}</p>
          </div>

          <div className="w-[430px] border-2 border-red-500 p-5 text-center text-[13px] leading-6 font-semibold text-red-600">
            This techno-commercial proposal, including all pages,
            literature, photographs, and linked documents, is the confidential
            property of Electrosoft Automation Pvt. Ltd.
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex justify-between text-[12px] text-slate-400 italic">
          <div className="space-y-1">
            <p>a: S7-1, Jai MataDi Compound, Kalher, Maharashtra, INDIA 421302</p>
            <p>e: info@electrosoftindia.com</p>
            <p>m: +91-909-888-444</p>
          </div>
          <div className="space-y-1 text-right">
            <p>GST: 27AAFCE4353G1ZP</p>
            <p>CIN: U31900MH2019PTC323431</p>
            <p className="font-semibold text-slate-600 not-italic">
              Page 1 of 24
            </p>
          </div>
        </div>
      </div>

      {/* NEXT BUTTON - Hide in print mode */}
      {!isPrintMode && (
        <div className="flex justify-end mt-6">
          <button
            onClick={() => navigate("/requirement")}
            className="h-12 px-8 rounded-2xl bg-gradient-to-r from-[#5B5FFF] to-[#7B61FF] text-white font-semibold shadow-lg shadow-indigo-500/20 hover:scale-[1.02] transition-all"
          >
            Next Page →
          </button>
        </div>
      )}
    </div>
  );
}

function EditableRow({ title, value }) {
  return (
    <tr>
      <td className="w-[240px] border border-slate-400 px-4 py-3 font-semibold text-[15px] align-top">
        {title}
      </td>
      <td className="border border-slate-400 px-4 py-3 text-[15px] leading-7">
        {value}
      </td>
    </tr>
  );
}