import React from "react";
import { useNavigate } from "react-router-dom";
import { Plus, Trash2 } from "lucide-react";
import logo from "../../assets/logo.png";
import { useProposalStore } from "../../store/proposalStore";

export default function CommercialPage19() {
  const navigate = useNavigate();
  const { commercialPages, updateCommercialPage } = useProposalStore();

  const pageData = commercialPages?.page19 || {
    exclusionsTitle: "LIST OF EXCLUSIONS",
    exclusionsIntro:
      "Given below is list of exclusions for Electrosoft unless explicitly stated otherwise:",
    exclusions: [],
    makesTitle: "LIST OF MAKES OF SUPPLY",
    makesIntro:
      "Makes of various items considered in Electrosoft\u2019s scope of supply are as under (only where applicable):",
    makes: [],
  };

  const update = (field, value) =>
    updateCommercialPage("page19", { ...pageData, [field]: value });

  const updateExclusion = (index, value) => {
    const exclusions = [...(pageData.exclusions || [])];
    exclusions[index] = value;
    update("exclusions", exclusions);
  };
  const addExclusion = () =>
    update("exclusions", [...(pageData.exclusions || []), ""]);
  const deleteExclusion = (index) =>
    update("exclusions", (pageData.exclusions || []).filter((_, i) => i !== index));

  const updateMake = (index, field, value) => {
    const makes = [...(pageData.makes || [])];
    makes[index] = { ...makes[index], [field]: value };
    update("makes", makes);
  };
  const addMake = () =>
    update("makes", [...(pageData.makes || []), { description: "", make: "" }]);
  const deleteMake = (index) =>
    update("makes", (pageData.makes || []).filter((_, i) => i !== index));

  return (
    <div className="w-full min-h-screen bg-[#eef2f7] flex justify-center py-8">
      <div className="w-[1150px] bg-white border border-[#d9d9d9] shadow-lg px-[40px] pt-[25px] pb-[60px]">

        {/* PAGE HEADER */}
        <div className="flex justify-between items-start">
          <div className="flex gap-4 items-start">
            <img src={logo} alt="" className="w-[70px]" />
            <div>
              <h1 className="text-[18px] font-bold text-[#7b7b7b] leading-[24px]">
                Electrosoft Automation
              </h1>
              <h2 className="text-[18px] font-bold text-[#7b7b7b] leading-[24px]">
                Private Limited
              </h2>
            </div>
          </div>
          <div className="italic font-semibold text-right text-[16px] leading-[24px]">
            <div>Techno-commercial</div>
            <div>Proposal</div>
          </div>
        </div>

        {/* ── LIST OF EXCLUSIONS ── */}
        <div className="mt-6">
          <input
            value={pageData.exclusionsTitle || ""}
            onChange={(e) => update("exclusionsTitle", e.target.value)}
            className="text-[#0d4c7f] text-[20px] font-bold uppercase bg-transparent outline-none w-full mb-2"
          />
          <input
            value={pageData.exclusionsIntro || ""}
            onChange={(e) => update("exclusionsIntro", e.target.value)}
            className="w-full text-[12px] text-[#333] bg-transparent outline-none border-b border-dashed border-gray-300 mb-3"
          />

          <ol className="list-decimal pl-6 space-y-1.5">
            {(pageData.exclusions || []).map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <input
                  type="text"
                  value={item}
                  onChange={(e) => updateExclusion(idx, e.target.value)}
                  className="flex-1 text-[12px] border-b border-dashed border-gray-300 outline-none bg-transparent py-0.5"
                />
                <button onClick={() => deleteExclusion(idx)}>
                  <Trash2 size={15} className="text-red-400" />
                </button>
              </li>
            ))}
          </ol>

          <button
            onClick={addExclusion}
            className="mt-3 flex items-center gap-2 px-4 py-2 bg-[#0d4c7f] text-white rounded text-[12px] font-semibold"
          >
            <Plus size={14} /> Add Exclusion
          </button>
        </div>

        {/* ── LIST OF MAKES OF SUPPLY ── */}
        <div className="mt-8">
          <input
            value={pageData.makesTitle || ""}
            onChange={(e) => update("makesTitle", e.target.value)}
            className="text-[#0d4c7f] text-[20px] font-bold uppercase bg-transparent outline-none w-full mb-2"
          />
          <input
            value={pageData.makesIntro || ""}
            onChange={(e) => update("makesIntro", e.target.value)}
            className="w-full text-[12px] text-[#333] bg-transparent outline-none border-b border-dashed border-gray-300 mb-3"
          />

          <table className="w-[75%] border-collapse text-[12px]">
            <thead>
              <tr className="bg-[#d9eef8]">
                <th className="border border-[#aaa] p-2 text-left font-bold">Description</th>
                <th className="border border-[#aaa] p-2 text-left font-bold">Make</th>
                <th className="border border-[#aaa] p-2 w-[50px]"></th>
              </tr>
            </thead>
            <tbody>
              {(pageData.makes || []).map((row, idx) => (
                <tr key={idx}>
                  <td className="border border-[#aaa] p-1">
                    <input
                      type="text"
                      value={row.description || ""}
                      onChange={(e) => updateMake(idx, "description", e.target.value)}
                      className="w-full outline-none bg-transparent text-[12px]"
                    />
                  </td>
                  <td className="border border-[#aaa] p-1">
                    <input
                      type="text"
                      value={row.make || ""}
                      onChange={(e) => updateMake(idx, "make", e.target.value)}
                      className="w-full outline-none bg-transparent text-[12px]"
                    />
                  </td>
                  <td className="border border-[#aaa] p-1 text-center">
                    <button onClick={() => deleteMake(idx)}>
                      <Trash2 size={15} className="text-red-400 mx-auto" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button
            onClick={addMake}
            className="mt-3 flex items-center gap-2 px-4 py-2 bg-[#0d4c7f] text-white rounded text-[12px] font-semibold"
          >
            <Plus size={14} /> Add Make Row
          </button>
        </div>

        {/* PAGE FOOTER */}
        <div className="mt-10 flex justify-between items-end text-[10px] italic text-[#8d8d8d]">
          <div>
            <p>a: S7-1, Jai Matadi Compound, Kalher, Thane, Maharashtra, INDIA 421302</p>
            <p>e: info@electrosoftindia.com</p>
            <p>m: +91-9089-888-444</p>
          </div>
          <div className="text-right">
            <p>GST: 27AAFCE4353G1ZP</p>
            <p>CIN: U31900MH2019PTC323431</p>
            <p className="text-[#003f77] font-semibold not-italic mt-1">Page 19 of 24</p>
          </div>
        </div>

        {/* NAVIGATION */}
        {/* <div className="flex justify-between mt-8">
          <button
            onClick={() => navigate("/Commercial/CommercialPage18")}
            className="px-5 py-2 rounded-full border border-[#0d4c7f] text-[#0d4c7f] text-[12px] font-semibold bg-white hover:bg-gray-50"
          >
            ← Previous Page
          </button>
          <button
            onClick={() => navigate("/Commercial/CommercialPage20")}
            className="px-5 py-2 rounded-full bg-[#0d4c7f] text-white text-[12px] font-semibold hover:bg-[#0b3f6a]"
          >
            Next →
          </button>
        </div> */}

      </div>
    </div>
  );
}