import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import logo from "../../assets/logo.png";
import technicalPagesData from "../../data/technicalPagesData";
import { useProposalStore } from "../../store/proposalStore";
import { Pencil, ImagePlus } from "lucide-react";

export default function Page4() {
  const navigate = useNavigate();
  const location = useLocation();

  // Check if we're in print/export mode
  const isPrintMode = location.search.includes('print=true') || window.location.pathname.includes('/print');

  const { 
    proposal, 
    technicalPages,
    updateTechnicalPage 
  } = useProposalStore();

  const systemType = proposal.systemType || "Advanced";

  // Get data from store or fallback to technicalPagesData
  const storeData = technicalPages.page4 || {};
  const initialData = technicalPagesData[systemType]?.page4?.sections || [];

  // Initialize local state from store or fallback
  const [sections, setSections] = useState(() => {
    if (storeData.sections && storeData.sections.length > 0) {
      return storeData.sections;
    }
    return initialData;
  });

  // Sync local state with store when component mounts or systemType changes
  useEffect(() => {
    if (technicalPages.page4?.sections && technicalPages.page4.sections.length > 0) {
      setSections(technicalPages.page4.sections);
    } else {
      setSections(initialData);
      // Save to store if using fallback data
      if (initialData.length > 0 && !technicalPages.page4?.sections) {
        updateTechnicalPage("page4", { sections: initialData });
      }
    }
  }, [systemType, technicalPages.page4, initialData]);

  // Save to store whenever sections change
  const updateSections = (newSections) => {
    setSections(newSections);
    updateTechnicalPage("page4", { sections: newSections });
  };

  /* =====================================================
     UPDATE FIELD
  ===================================================== */

  const updateField = (sectionIndex, field, value) => {
    const updated = [...sections];
    updated[sectionIndex][field] = value;
    updateSections(updated);
  };

  /* =====================================================
     UPDATE IMAGE
  ===================================================== */

  const updateImage = (sectionIndex, imageIndex, file) => {
    if (!file) return;
    
    const updated = [...sections];
    updated[sectionIndex].images[imageIndex].src = URL.createObjectURL(file);
    updateSections(updated);
  };

  /* =====================================================
     RENDER CONTENT BASED ON MODE
  ===================================================== */

  const renderIntroSection = (section, sectionIndex) => {
    if (isPrintMode) {
      return (
        <div key={sectionIndex} className="mb-8">
          <h2 className="text-[22px] font-bold italic leading-[38px] mb-4">
            {section.heading}
          </h2>
          <div className="text-[18px] leading-[38px] text-black mb-4">
            {section.text}
          </div>
          {section.note && (
            <div className="text-[14px] italic text-[#555] leading-[26px]">
              {section.note}
            </div>
          )}
        </div>
      );
    }

    return (
      <div key={sectionIndex} className="mb-8">
        {/* HEADING */}
        <div className="relative">
          <textarea
            value={section.heading}
            onChange={(e) => updateField(sectionIndex, "heading", e.target.value)}
            rows={1}
            className="w-full resize-none overflow-hidden border-none outline-none bg-transparent text-[22px] font-bold italic leading-[38px]"
          />
          <Pencil size={16} className="absolute right-0 top-3 text-slate-400" />
        </div>

        {/* TEXT */}
        <textarea
          value={section.text}
          onChange={(e) => updateField(sectionIndex, "text", e.target.value)}
          rows={3}
          className="mt-4 w-full resize-none overflow-hidden border-none outline-none bg-transparent text-[18px] leading-[38px] text-black"
        />

        {/* NOTE */}
        <textarea
          value={section.note}
          onChange={(e) => updateField(sectionIndex, "note", e.target.value)}
          rows={2}
          className="w-full resize-none overflow-hidden border-none outline-none bg-transparent text-[14px] italic text-[#555] leading-[26px] mt-2"
        />
      </div>
    );
  };

  const renderSubsystemSection = (section, sectionIndex) => {
    if (isPrintMode) {
      return (
        <div key={sectionIndex} className="mb-10">
          <h2 className="text-[24px] font-bold leading-[38px] mb-4">
            {section.title}
          </h2>
          <div className="text-[18px] leading-[42px] text-[#202020] mb-6">
            {section.description}
          </div>
          
          {section.layout === "single-image" && section.images?.[0]?.src && (
            <div className="mt-8 flex justify-center">
              <img src={section.images[0].src} alt="" className="w-[700px] object-contain" />
            </div>
          )}
        </div>
      );
    }

    return (
      <div key={sectionIndex} className="mb-10">
        {/* TITLE */}
        <div className="relative">
          <textarea
            value={section.title}
            onChange={(e) => updateField(sectionIndex, "title", e.target.value)}
            rows={2}
            className="w-full resize-none overflow-hidden border-none outline-none bg-transparent text-[24px] font-bold leading-[38px]"
          />
          <Pencil size={16} className="absolute right-0 top-3 text-slate-400" />
        </div>

        {/* DESCRIPTION */}
        <div className="relative mt-5">
          <textarea
            value={section.description}
            onChange={(e) => updateField(sectionIndex, "description", e.target.value)}
            rows={12}
            className="w-full resize-none overflow-hidden border-none outline-none bg-transparent text-[18px] leading-[42px] text-[#202020]"
          />
          <Pencil size={16} className="absolute right-0 top-3 text-slate-400" />
        </div>

        {/* IMAGE */}
        {section.layout === "single-image" && section.images?.[0]?.src && (
          <div className="mt-8 flex justify-center">
            <div className="relative">
              <img src={section.images[0].src} alt="" className="w-[700px] object-contain" />
              
              {/* CHANGE IMAGE */}
              <label className="absolute top-3 right-3 bg-white border border-slate-200 p-3 rounded-full shadow-md cursor-pointer">
                <ImagePlus size={18} />
                <input
                  type="file"
                  hidden
                  onChange={(e) => updateImage(sectionIndex, 0, e.target.files[0])}
                />
              </label>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-full min-h-screen bg-[#eef2f7] flex justify-center py-8 overflow-auto">
      {/* PAGE */}
      <div className={`w-[1150px] min-h-[1400px] bg-white border border-slate-300 shadow-xl rounded-xl px-[70px] pt-[55px] pb-[120px] relative ${isPrintMode ? 'shadow-none' : ''}`}>
        
        {/* HEADER */}
        <div className="flex justify-between items-start">
          {/* LEFT */}
          <div className="flex items-start gap-5">
            <img src={logo} alt="" className="w-[90px] object-contain" />
            <div>
              <h1 className="text-[34px] font-bold leading-[42px] text-[#7d7d7d]">
                Electrosoft Automation
              </h1>
              <h2 className="text-[34px] font-bold leading-[42px] text-[#8b8b8b]">
                Private Limited
              </h2>
            </div>
          </div>

          {/* RIGHT */}
          <div className="text-right italic font-semibold text-[28px] leading-[40px]">
            <h2>Techno-commercial</h2>
            <h2>Proposal</h2>
          </div>
        </div>

        {/* CONTENT */}
        <div className="mt-8">
          {sections.map((section, sectionIndex) => {
            if (section.type === "intro") {
              return renderIntroSection(section, sectionIndex);
            }
            return renderSubsystemSection(section, sectionIndex);
          })}
        </div>

        {/* PAGE NAVIGATION - Hide in print mode */}
        {!isPrintMode && (
          <div className="flex justify-between items-center mt-12">
            <button
              onClick={() => navigate("/system-overview")}
              className="px-8 py-4 rounded-full border border-[#0d4c7f] text-[#0d4c7f] hover:bg-[#0d4c7f] hover:text-white text-[14px] font-semibold transition-all duration-300"
            >
              ← Previous Page
            </button>

            <button
              onClick={() => navigate("/technical/page5")}
              className="px-8 py-4 rounded-full bg-[#0d4c7f] hover:bg-[#083454] text-white text-[14px] font-semibold transition-all duration-300 shadow-lg"
            >
              Next Page →
            </button>
          </div>
        )}

        {/* FOOTER */}
        <div className="absolute bottom-8 left-[70px] right-[70px] flex justify-between items-end">
          {/* LEFT */}
          <div className="text-[13px] italic leading-7 text-[#9a9a9a]">
            <p>a: S7-1, Jai Matadi Compound, Kalher, Thane, Maharashtra, INDIA 421302</p>
            <p>e: info@electrosoftindia.com</p>
            <p>m: +91-9089-888-444</p>
          </div>

          {/* RIGHT */}
          <div className="text-right text-[13px] italic leading-7 text-[#9a9a9a]">
            <p>GST: 27AAFCE4353G1ZP</p>
            <p>CIN: U31900MH2019PTC323431</p>
            <p className="text-[15px] font-semibold text-[#003f77] not-italic mt-2">
              Page 4 of 24
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}