import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import logo from "../../assets/logo.png";
import technicalPagesData from "../../data/technicalPagesData";
import { useProposalStore } from "../../store/proposalStore";
import { Pencil, ImagePlus } from "lucide-react";

export default function Page11() {
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
  const storeData = technicalPages.page11 || {};
  const initialData = technicalPagesData[systemType]?.page11?.sections || [];

  // Initialize local state from store or fallback
  const [sections, setSections] = useState(() => {
    if (storeData.sections && storeData.sections.length > 0) {
      return storeData.sections;
    }
    return initialData;
  });

  // Sync local state with store when component mounts or systemType changes
  useEffect(() => {
    if (technicalPages.page11?.sections && technicalPages.page11.sections.length > 0) {
      setSections(technicalPages.page11.sections);
    } else {
      setSections(initialData);
      // Save to store if using fallback data
      if (initialData.length > 0 && !technicalPages.page11?.sections) {
        updateTechnicalPage("page11", { sections: initialData });
      }
    }
  }, [systemType, technicalPages.page11, initialData]);

  // Save to store whenever sections change
  const updateSections = (newSections) => {
    setSections(newSections);
    updateTechnicalPage("page11", { sections: newSections });
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
     UPDATE POINT
  ===================================================== */

  const updatePointTitle = (sectionIndex, pointIndex, value) => {
    const updated = [...sections];
    updated[sectionIndex].points[pointIndex].title = value;
    updateSections(updated);
  };

  const updateSubpoint = (sectionIndex, pointIndex, subIndex, value) => {
    const updated = [...sections];
    updated[sectionIndex].points[pointIndex].subpoints[subIndex].text = value;
    updateSections(updated);
  };

  /* =====================================================
     RENDER SECTION BASED ON MODE
  ===================================================== */

  const renderSection = (section, sectionIndex) => {
    if (isPrintMode) {
      return (
        <div key={sectionIndex} className="mb-16">
          {/* TITLE */}
          <h2 className="text-[24px] font-bold leading-[38px] mb-4">
            {section.title}
          </h2>

          {/* DESCRIPTION */}
          <div className="text-[18px] leading-[42px] text-[#202020] mb-6">
            {section.description}
          </div>

          {/* IMAGE */}
          {section.images?.[0]?.src && (
            <div className="mt-10 flex justify-center">
              <img 
                src={section.images[0].src} 
                alt="" 
                className="w-[520px] object-cover border border-slate-300" 
              />
            </div>
          )}

          {/* CUSTOMIZATION TITLE */}
          {section.customizationTitle && (
            <div className="mt-14">
              <h3 className="text-[20px] italic font-bold leading-[34px]">
                {section.customizationTitle}
              </h3>
            </div>
          )}

          {/* POINTS */}
          {section.points?.map((point, pointIndex) => (
            <div key={pointIndex} className="mt-10">
              <div className="flex gap-5">
                <div className="text-[20px] font-bold italic pt-1">
                  {point.number}.
                </div>
                <div className="flex-1">
                  <h4 className="text-[20px] italic font-bold leading-[34px] mb-4">
                    {point.title}
                  </h4>
                  
                  {/* SUB POINTS */}
                  {point.subpoints?.map((subpoint, subIndex) => (
                    <div key={subIndex} className="flex gap-4 mt-6">
                      <div className="font-bold text-[18px]">
                        {subpoint.label}.
                      </div>
                      <div className="flex-1 text-[18px] leading-[40px]">
                        {subpoint.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }

    return (
      <div key={sectionIndex} className="mb-16">
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
            rows={10}
            className="w-full resize-none overflow-hidden border-none outline-none bg-transparent text-[18px] leading-[42px] text-[#202020]"
          />
          <Pencil size={16} className="absolute right-0 top-3 text-slate-400" />
        </div>

        {/* IMAGE */}
        {section.images?.[0]?.src && (
          <div className="mt-10 flex justify-center">
            <div className="relative">
              <img 
                src={section.images[0].src} 
                alt="" 
                className="w-[520px] object-cover border border-slate-300" 
              />
              
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

        {/* CUSTOMIZATION TITLE */}
        {section.customizationTitle !== undefined && (
          <div className="mt-14">
            <div className="relative">
              <textarea
                value={section.customizationTitle || ""}
                onChange={(e) => updateField(sectionIndex, "customizationTitle", e.target.value)}
                rows={1}
                className="w-full resize-none overflow-hidden border-none outline-none bg-transparent text-[20px] italic font-bold leading-[34px]"
                placeholder="Enter customization title (optional)"
              />
              <Pencil size={16} className="absolute right-0 top-2 text-slate-400" />
            </div>
          </div>
        )}

        {/* POINTS */}
        {section.points?.map((point, pointIndex) => (
          <div key={pointIndex} className="mt-10">
            <div className="flex gap-5">
              <div className="text-[20px] font-bold italic pt-1">
                {point.number}.
              </div>
              <div className="flex-1">
                {/* MAIN POINT */}
                <div className="relative">
                  <textarea
                    value={point.title}
                    onChange={(e) => updatePointTitle(sectionIndex, pointIndex, e.target.value)}
                    rows={2}
                    className="w-full resize-none overflow-hidden border-none outline-none bg-transparent text-[20px] italic font-bold leading-[34px]"
                  />
                  <Pencil size={15} className="absolute right-0 top-2 text-slate-400" />
                </div>

                {/* SUB POINTS */}
                {point.subpoints?.map((subpoint, subIndex) => (
                  <div key={subIndex} className="flex gap-4 mt-6">
                    <div className="font-bold text-[18px]">
                      {subpoint.label}.
                    </div>
                    <div className="flex-1 relative">
                      <textarea
                        value={subpoint.text}
                        onChange={(e) => updateSubpoint(sectionIndex, pointIndex, subIndex, e.target.value)}
                        rows={5}
                        className="w-full resize-none overflow-hidden border-none outline-none bg-transparent text-[18px] leading-[40px]"
                      />
                      <Pencil size={15} className="absolute right-0 top-2 text-slate-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full min-h-screen bg-[#eef2f7] flex justify-center py-8">
      {/* PAGE */}
      <div className={`w-[1150px] bg-white border border-slate-300 shadow-xl rounded-xl px-[70px] pt-[55px] pb-[120px] relative ${isPrintMode ? 'shadow-none' : ''}`}>
        
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
        <div className="mt-12">
          {sections.map((section, sectionIndex) => renderSection(section, sectionIndex))}
        </div>

        {/* NAVIGATION - Hide in print mode
        {!isPrintMode && (
          <div className="flex justify-between items-center mt-12">
            <button
              onClick={() => navigate("/technical/page10")}
              className="px-8 py-4 rounded-full border border-[#0d4c7f] text-[#0d4c7f] hover:bg-[#0d4c7f] hover:text-white text-[14px] font-semibold transition-all duration-300"
            >
              ← Previous Page
            </button>

            <button
              onClick={() => navigate("/technical/page12")}
              className="px-8 py-4 rounded-full bg-[#0d4c7f] hover:bg-[#083454] text-white text-[14px] font-semibold transition-all duration-300 shadow-lg"
            >
              Commercial Offer →
            </button>
          </div>
        )} */}

        {/* FOOTER */}
        <div className={`${isPrintMode ? 'mt-20' : 'mt-20'} flex justify-between items-end`}>
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
              Page 11 of 24
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}