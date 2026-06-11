import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useProposalStore } from "../../store/proposalStore";

function TcEntry({ section }) {
  const isBare = !section.title && section.body;
  if (isBare) {
    return (
      <div className="mb-2 text-[12px] text-[#333] leading-relaxed">
        <span className="font-semibold">{section.number} </span>{section.body}
      </div>
    );
  }
  return (
    <div className="mb-3">
      <div className="font-bold text-[12.5px] text-[#111] mb-1">{section.number} {section.title}</div>
      {section.intro && <p className="text-[12px] text-[#333] leading-relaxed mb-1">{section.intro}</p>}
      {section.body && <p className="text-[12px] text-[#333] leading-relaxed mb-1">{section.body}</p>}
      {section.bullets && (
        <ul className="ml-4 mb-1 space-y-0.5">
          {section.bullets.map((b, i) => <li key={i} className="text-[12px] text-[#333]">• {b}</li>)}
        </ul>
      )}
      {section.footer && <p className="text-[12px] text-[#333] leading-relaxed mt-1">{section.footer}</p>}
      {(section.subsections || []).map((sub, i) => (
        <div key={i} className="mb-1.5 text-[12px] text-[#333] leading-relaxed">
          <span className="font-semibold">{sub.number} </span>
          {sub.title && <span className="font-bold">{sub.title} </span>}
          {sub.body}
          {sub.bullets && (
            <ul className="ml-4 mt-0.5 space-y-0.5">
              {sub.bullets.map((b, j) => <li key={j}>• {b}</li>)}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default function CommercialPage22() {
  const navigate = useNavigate();
  const { commercialPages } = useProposalStore();
  const pageData = commercialPages?.page22;

  const sections = pageData?.sections || pageData?.items || [];
  const isPage21 = 22 === 21;

  return (
    <div className="w-full min-h-screen bg-[#eef2f7] flex justify-center py-8">
      <div className="w-[1150px] bg-white border border-[#d9d9d9] shadow-lg px-[40px] pt-[25px] pb-[60px]">

        <div className="flex justify-between items-start">
          <div className="flex gap-4 items-start">
            <img src={logo} alt="" className="w-[70px]" />
            <div>
              <h1 className="text-[18px] font-bold text-[#7b7b7b] leading-[24px]">Electrosoft Automation</h1>
              <h2 className="text-[18px] font-bold text-[#7b7b7b] leading-[24px]">Private Limited</h2>
            </div>
          </div>
          <div className="italic font-semibold text-right text-[16px] leading-[24px]">
            <div>Techno-commercial</div><div>Proposal</div>
          </div>
        </div>

        {pageData ? (
          <div className="mt-5">
            {isPage21 && (
              <>
                <h2 className="text-center text-[18px] font-bold uppercase text-[#111] mb-4">{pageData.title}</h2>
                <p className="text-[12px] mb-0.5"><span className="font-bold">Effective date: </span>{pageData.effectiveDate}</p>
                <p className="text-[12px] mb-3"><span className="font-bold">Company: </span>{pageData.company}</p>
                <p className="text-[12px] text-[#333] leading-relaxed mb-4">{pageData.intro}</p>
              </>
            )}
            {sections.map((s, i) => <TcEntry key={i} section={s} />)}
            {pageData.endOfDocument && (
              <div className="mt-10 text-center text-[13px] tracking-widest text-[#222] font-mono">
                - - - - - - - - - - - - - - -  [ END OF DOCUMENT ]  - - - - - - - - - - - - - - -
              </div>
            )}
          </div>
        ) : (
          <div className="mt-6 text-[13px] text-gray-400 italic">No data found for page 22. Check commercialPages19to24Data.js.</div>
        )}

        <div className="mt-5 p-3 bg-amber-50 border border-amber-300 rounded text-[11px] text-amber-700">
          ℹ️ Pages 21–24 contain General T&amp;C legal text. To modify content, edit <code className="bg-amber-100 px-1 rounded">commercialPages19to24Data.js</code>.
        </div>

        <div className="mt-8 flex justify-between items-end text-[10px] italic text-[#8d8d8d]">
          <div>
            <p>a: S7-1, Jai Matadi Compound, Kalher, Thane, Maharashtra, INDIA 421302</p>
            <p>e: info@electrosoftindia.com</p>
            <p>m: +91-9089-888-444</p>
          </div>
          <div className="text-right">
            <p>GST: 27AAFCE4353G1ZP</p>
            <p>CIN: U31900MH2019PTC323431</p>
            <p className="text-[#003f77] font-semibold not-italic mt-1">Page 22 of 24</p>
          </div>
        </div>

        {/* <div className="flex justify-between mt-8">
          <button onClick={() => navigate("/Commercial/CommercialPage21")} className="px-5 py-2 rounded-full border border-[#0d4c7f] text-[#0d4c7f] text-[12px] font-semibold bg-white hover:bg-gray-50">← Previous Page</button>
          <button onClick={() => navigate("/Commercial/CommercialPage23")} className="px-5 py-2 rounded-full bg-[#0d4c7f] text-white text-[12px] font-semibold hover:bg-[#0b3f6a]">Next →</button>
        </div> */}

      </div>
    </div>
  );
}