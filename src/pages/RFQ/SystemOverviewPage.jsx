import { useNavigate, useLocation } from "react-router-dom";

import logo from "../../assets/logo.png";
import { useProposalStore } from "../../store/proposalStore";
import { page3Data } from "../../data/systemTypeData";

export default function SystemOverviewPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // Check if we're in print/export mode
  const isPrintMode = location.search.includes('print=true') || window.location.pathname.includes('/print');

  const { 
    proposal, 
    systemOverview,
    updateSystemOverview 
  } = useProposalStore();

  const selectedSystem = proposal.systemType;
  const data = page3Data[selectedSystem];

  if (!data) {
    return (
      <div className="p-10">
        No data found for: {selectedSystem}
      </div>
    );
  }

  // Get data from store if available, otherwise fallback to page3Data
  const title = systemOverview.heading || data.title || data.heading;
  const tagline = systemOverview.tagline || data.tagline;
  const intro = systemOverview.intro || data.intro;
  const projectTitle = systemOverview.project || data.project || data.realWorldProven?.title;
  const projectBody = systemOverview.description || data.description || data.realWorldProven?.body;
  const highlights = systemOverview.highlights.length > 0 ? systemOverview.highlights : (data.highlights || data.keyHighlights || []);

  return (
    <div className={`max-w-[1200px] mx-auto ${isPrintMode ? 'print-mode' : ''}`}>
      {/* TOPBAR - Hide in print mode */}
      {!isPrintMode && (
        <div className="flex justify-between items-center mb-5">
          <div>
            <h1 className="text-2xl font-semibold text-slate-800">
              System Overview
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Configure system overview page
            </p>
          </div>

          {/* <div className="flex gap-3">
            <button
              onClick={() => navigate("/requirement")}
              className="h-11 px-6 rounded-2xl border border-slate-300 bg-white hover:bg-slate-100 transition-all"
            >
              ← Previous
            </button>
            <button
              onClick={() => navigate("/technical/page4")}
              className="h-11 px-6 rounded-2xl bg-gradient-to-r from-[#5B5FFF] to-[#7B61FF] text-white font-medium"
            >
              Save & Next →
            </button>
          </div> */}
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

        {/* TITLE - Static text in print mode, editable in edit mode */}
        <div className="mb-10">
          {isPrintMode ? (
            <>
              <h1 className="text-[30px] font-bold text-[#0b4f75] mb-3">
                {title}
              </h1>
              <p className="italic font-semibold text-[16px]">
                {tagline}
              </p>
            </>
          ) : (
            <>
              <input
                type="text"
                value={title}
                onChange={(e) => updateSystemOverview({ heading: e.target.value })}
                className="text-[30px] font-bold text-[#0b4f75] mb-3 w-full border border-slate-300 rounded px-2 py-1 focus:outline-none focus:border-indigo-500"
                placeholder="Enter title"
              />
              <input
                type="text"
                value={tagline}
                onChange={(e) => updateSystemOverview({ tagline: e.target.value })}
                className="italic font-semibold text-[16px] w-full border border-slate-300 rounded px-2 py-1 focus:outline-none focus:border-indigo-500"
                placeholder="Enter tagline"
              />
            </>
          )}
        </div>

        {/* CONTENT */}
        <div className="space-y-8 text-[15px] leading-8 text-slate-700">
          {/* INTRO */}
          {isPrintMode ? (
            <p>{intro}</p>
          ) : (
            <textarea
              value={intro}
              onChange={(e) => updateSystemOverview({ intro: e.target.value })}
              className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-indigo-500"
              rows={4}
              placeholder="Enter introduction"
            />
          )}

          {/* REAL WORLD */}
          <div>
            {isPrintMode ? (
              <h3 className="font-bold text-[17px] mb-3">{projectTitle}</h3>
            ) : (
              <input
                type="text"
                value={projectTitle}
                onChange={(e) => updateSystemOverview({ project: e.target.value })}
                className="font-bold text-[17px] mb-3 w-full border border-slate-300 rounded px-2 py-1 focus:outline-none focus:border-indigo-500"
                placeholder="Enter project title"
              />
            )}
            
            {isPrintMode ? (
              <p>{projectBody}</p>
            ) : (
              <textarea
                value={projectBody}
                onChange={(e) => updateSystemOverview({ description: e.target.value })}
                className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-indigo-500"
                rows={6}
                placeholder="Enter project description"
              />
            )}
          </div>

          {/* HIGHLIGHTS */}
          <div>
            <h3 className="font-bold italic mb-5">Key Highlights:</h3>
            
            {/* Show in view mode (print or not editing) */}
            <ol className="space-y-8">
              {highlights.map((item, index) => (
                <li key={index}>
                  {isPrintMode ? (
                    <>
                      <h4 className="font-bold mb-3">
                        {index + 1}. {item.title}
                      </h4>
                      <p>{item.text || item.body}</p>
                    </>
                  ) : (
                    <>
                      <div className="flex gap-2 items-start mb-2">
                        <span className="font-bold mt-1">{index + 1}.</span>
                        <input
                          type="text"
                          value={item.title}
                          onChange={(e) => {
                            const newHighlights = [...highlights];
                            newHighlights[index] = { ...item, title: e.target.value };
                            updateSystemOverview({ highlights: newHighlights });
                          }}
                          className="font-bold mb-3 flex-1 border border-slate-300 rounded px-2 py-1 focus:outline-none focus:border-indigo-500"
                          placeholder="Enter highlight title"
                        />
                        {!isPrintMode && (
                          <button
                            onClick={() => {
                              const newHighlights = highlights.filter((_, i) => i !== index);
                              updateSystemOverview({ highlights: newHighlights });
                            }}
                            className="text-red-500 hover:text-red-700 text-sm"
                          >
                            Remove
                          </button>
                        )}
                      </div>
                      <textarea
                        value={item.text || item.body}
                        onChange={(e) => {
                          const newHighlights = [...highlights];
                          newHighlights[index] = { ...item, text: e.target.value };
                          updateSystemOverview({ highlights: newHighlights });
                        }}
                        className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-indigo-500 mb-4"
                        rows={3}
                        placeholder="Enter highlight description"
                      />
                    </>
                  )}
                </li>
              ))}
            </ol>

            {/* Add new highlight button - Hide in print mode */}
            {!isPrintMode && (
              <button
                onClick={() => {
                  const newHighlights = [...highlights, { title: "New Highlight", text: "Description here" }];
                  updateSystemOverview({ highlights: newHighlights });
                }}
                className="mt-4 text-indigo-600 hover:text-indigo-800 text-sm font-medium"
              >
                + Add Highlight
              </button>
            )}
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex justify-between mt-20 text-[12px] text-slate-400 italic">
          <div className="space-y-1">
            <p>a: S7-1, Jai MataDi Compound, Kalher, Maharashtra, INDIA 421302</p>
            <p>e: info@electrosoftindia.com</p>
            <p>m: +91-909-888-444</p>
          </div>
          <div className="space-y-1 text-right">
            <p>GST: 27AAFCE4353G1ZP</p>
            <p>CIN: U31900MH2019PTC323431</p>
            <p className="font-semibold text-slate-600 not-italic">
              Page 3 of 24
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}