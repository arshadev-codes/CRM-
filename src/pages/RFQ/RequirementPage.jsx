import { useMemo, useState} from "react";
import { useNavigate, useLocation } from "react-router-dom";

import EditableText from "../../components/EditableText";
import { testsData } from "../../data/testData";
import { useProposalStore } from "../../store/proposalStore";
import logo from "../../assets/logo.png";
import { Pencil, Check } from "lucide-react";

export default function RequirementPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // Check if we're in print/export mode
  const isPrintMode = location.search.includes('print=true') || window.location.pathname.includes('/print');

  /* ---------------- GLOBAL STORE ---------------- */
  const {
    proposal,
    updateProposal,
    requirement,
    updateRequirement,
    setRequirementTests,
  } = useProposalStore();

  /* ---------------- LOCAL STATES (UI only) ---------------- */
  const [editingTests, setEditingTests] = useState(false);

  // Helper to render either EditableText or plain text
  const renderEditableOrText = (value, onChange, options = {}) => {
    if (isPrintMode) {
      return <span className={options.className || ''}>{value || '-'}</span>;
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

  /* ---------------- TOGGLE TEST ---------------- */
  const toggleTest = (test) => {
    if (isPrintMode) return;
    
    const currentTests = requirement.tests;
    if (currentTests.includes(test)) {
      setRequirementTests(currentTests.filter((t) => t !== test));
    } else {
      setRequirementTests([...currentTests, test]);
    }
  };

  return (
    <div className={`max-w-[1200px] mx-auto ${isPrintMode ? 'print-mode' : ''}`}>
      {/* TOPBAR - Hide in print mode */}
      {!isPrintMode && (
        <div className="flex items-center justify-between mb-5">
          <div>
            <h1 className="text-2xl font-semibold text-slate-800">
              Statement of Requirements
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Configure proposal requirement page
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => navigate("/")}
              className="h-11 px-6 rounded-2xl border border-slate-300 bg-white hover:bg-slate-100 transition-all"
            >
              ← Previous
            </button>
            <button
              onClick={() => navigate("/system-overview")}
              className="h-11 px-6 rounded-2xl bg-gradient-to-r from-[#5B5FFF] to-[#7B61FF] text-white font-medium"
            >
              Save & Next →
            </button>
          </div>
        </div>
      )}

      {/* DOCUMENT */}
      <div className={`bg-white border border-slate-300 shadow-xl rounded-md p-[42px] ${isPrintMode ? 'shadow-none' : ''}`}>
        {/* HEADER */}
        <div className="flex justify-between items-start mb-10">
          {/* LEFT */}
          <div className="flex items-start gap-4">
            <img src={logo} alt="Logo" className="w-[75px] object-contain" />
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

        {/* REQUIREMENT HEADER */}
        <div className="bg-[#dfeaf6] px-4 py-2 font-bold italic text-[16px] text-slate-800 mb-7">
          Statement of Requirements:
        </div>

        {/* INTRO */}
        <div className="text-[15px] leading-8 text-slate-700 mb-8">
          <p>
            Esteemed M/s{" "}
            {renderEditableOrText(
              requirement.customerName || "Neotrafo Solutions India Pvt. Ltd.",
              (value) => updateRequirement({ customerName: value }),
              { className: "font-medium" }
            )}
            {" "}has outlined the requirement of a comprehensive
            transformer testing system suitable for Extra High Voltage (EHV)
            transformers rated up to{" "}
            {renderEditableOrText(
              proposal.transformerRating,
              (value) => updateProposal({ transformerRating: value }),
              { className: "font-bold" }
            )}
            ,{" "}
            {renderEditableOrText(
              proposal.voltageClass,
              (value) => updateProposal({ voltageClass: value }),
              { className: "font-bold" }
            )}
            .
          </p>
          <p className="mt-2">
            The required test capabilities are as follows:
          </p>
        </div>

        {/* TEST SECTION */}
        <div className="mb-10">
          {/* TOP */}
          <div className="flex justify-between items-center mb-5">
            <h3 className="font-semibold text-slate-700">
              Selected Tests
            </h3>
            
            {/* Edit button - Hide in print mode */}
            {!isPrintMode && (
              <button
                onClick={() => setEditingTests(!editingTests)}
                className="flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-800 transition-all"
              >
                {editingTests ? (
                  <>
                    <Check size={16} />
                    Save Tests
                  </>
                ) : (
                  <>
                    <Pencil size={16} />
                    Edit Tests
                  </>
                )}
              </button>
            )}
          </div>

          {/* EDIT MODE - Only show when editing and not in print mode */}
          {!isPrintMode && editingTests ? (
            <div className="grid grid-cols-2 gap-4 bg-slate-50 border border-slate-200 rounded-2xl p-5">
              {testsData.map((test) => (
                <label
                  key={test}
                  className="flex items-start gap-3 cursor-pointer text-[14px] leading-6"
                >
                  <input
                    type="checkbox"
                    checked={requirement.tests.includes(test)}
                    onChange={() => toggleTest(test)}
                    className="mt-1"
                  />
                  <span>{test}</span>
                </label>
              ))}
            </div>
          ) : (
            /* VIEW MODE */
            <ol className="list-decimal pl-10 space-y-2 marker:font-semibold marker:text-slate-700">
              {(requirement.tests.length > 0 ? requirement.tests : [
                "Measurement of voltage ratio and check of phase displacement (vector group)",
                "Measurement of winding resistance",
                "Measurement of insulation resistance",
                "Measurement of capacitance and dissipation factor (tan delta)",
                "Measurement of short-circuit impedance and load loss",
                "Measurement of no-load loss and current",
                "Induced over-voltage withstand test with partial discharge measurement",
                "Separate source AC withstand voltage test",
                "Dielectric tests on on-load tap-changer (if applicable)",
                "Tests on auxiliary wiring and control circuits",
                "Measurement of zero-sequence impedance(s) for three-phase transformers",
                "Verification of correct polarity of current transformers (if applicable)",
                "Measurement of dynamic resistance of on-load tap-changer",
                "Measurement of sweep frequency response analysis (SFRA)",
                "Measurement of magnetic balance (for three-phase transformers)",
                "Measurement of OLTC transition resistance",
                "Measurement of transformer turns ratio (TTR)",
                "Measurement of excitation current"
              ]).map((test, index) => (
                <li key={test} className="text-[15px] leading-7 text-slate-700 pl-2">
                  {test}
                </li>
              ))}
            </ol>
          )}
        </div>

        {/* NOTE */}
        <div className="mb-10 text-[15px]">
          <span className="font-bold">Note:</span>
          <span className="font-semibold">
            {" "}Impulse generator and PD detector are in customer scope
          </span>
        </div>

        {/* PROPOSED SOLUTION HEADER */}
        <div className="bg-[#dcefd4] px-4 py-2 font-bold italic text-[16px] text-slate-800 mb-7">
          Proposed solution:
        </div>

        {/* SOLUTION TEXT */}
        <div className="text-[15px] leading-8 text-slate-700">
          <p>
            Electrosoft proposes an{" "}
            {renderEditableOrText(
              proposal.systemType,
              (value) => updateProposal({ systemType: value }),
              { className: "font-bold" }
            )}
            {" "}engineered to meet the complete range of tests
            requested by{" "}
            {renderEditableOrText(
              requirement.customerName || "Neotrafo Solutions India Pvt. Ltd.",
              (value) => updateRequirement({ customerName: value }),
              { className: "font-bold" }
            )}
            {" "}for transformers up to{" "}
            {renderEditableOrText(
              proposal.transformerRating,
              (value) => updateProposal({ transformerRating: value }),
              { className: "font-bold" }
            )}
            ,{" "}
            {renderEditableOrText(
              proposal.voltageClass,
              (value) => updateProposal({ voltageClass: value }),
              { className: "font-bold" }
            )}
            .
          </p>

          <p className="mt-3">
            The solution integrates intelligent automation,
            precise measurement instruments,
            robust safety interlocks,
            and seamless test execution through our proprietary{" "}
            {renderEditableOrText(
              requirement.softwareName || "X'Mer Edge™",
              (value) => updateRequirement({ softwareName: value }),
              { className: "font-bold" }
            )}
            {" "}software.
          </p>
        </div>

        {/* FOOTER */}
        <div className="flex justify-between mt-16 text-[12px] text-slate-400 italic">
          <div className="space-y-1">
            <p>a: S7-1, Jai MataDi Compound, Kalher, Thane, Maharashtra, INDIA 421302</p>
            <p>e: info@electrosoftindia.com</p>
            <p>m: +91-909-888-444</p>
          </div>
          <div className="space-y-1 text-right">
            <p>GST: 27AAFCE4353G1ZP</p>
            <p>CIN: U31900MH2019PTC323431</p>
            <p className="font-semibold text-slate-600 not-italic">
              Page 2 of 24
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}