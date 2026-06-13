import React from "react";
import PdfHeader from "./components/PdfHeader";
import PdfFooter from "./components/PdfFooter";
import { useProposalStore } from "../store/proposalStore";

/* ─── Reusable section renderer ─── */
function TcSection({ section }) {
  return (
    <div style={{ marginBottom: "2.8mm" }}>
      {/* Section heading e.g. "1. Definitions" or "3.1." subsection */}
      <div style={{ fontWeight: 700, fontSize: "13.5px", marginBottom: "0.8mm" }}>
        {section.number}&nbsp;{section.title}
      </div>

      {section.body && (
        <div style={{ fontSize: "13.5px", color: "#000000", lineHeight: "1.45", marginBottom: "0.8mm" }}>
          {section.body}
        </div>
      )}

      {section.bullets && (
        <div style={{ paddingLeft: "3mm", marginBottom: "0.5mm" }}>
          {section.bullets.map((b, i) => (
            <div key={i} style={{ fontSize: "13.5px", color: "#000000", lineHeight: "1.45", marginBottom: "0.3mm" }}>
              &bull;&nbsp;{b}
            </div>
          ))}
        </div>
      )}

      {section.subsections && section.subsections.map((sub, i) => (
        <div key={i} style={{ marginBottom: "1mm", fontSize: "13.5px", color: "#000000", lineHeight: "1.45" }}>
          <span style={{ fontWeight: 600 }}>{sub.number}&nbsp;</span>
          {sub.body}
          {sub.bullets && (
            <div style={{ paddingLeft: "3mm", marginTop: "0.3mm" }}>
              {sub.bullets.map((b, j) => (
                <div key={j} style={{ marginBottom: "0.3mm" }}>&bull;&nbsp;{b}</div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function CommercialPage21Pdf() {
  const commercialPages = useProposalStore((state) => state.commercialPages);
  const pageData = commercialPages?.page21;

  if (!pageData) return null;

  return (
    <div
      className="pdf-page"
      style={{
        position: "relative",
        boxSizing: "border-box",
        width: "210mm",
        height: "297mm",
        padding: "12mm 15mm 20mm 15mm",
        overflow: "hidden",
        backgroundColor: "#fff",
      }}
    >
      <PdfHeader />

      <div
        style={{
          height: "220mm",
          display: "flex",
          flexDirection: "column",
          marginTop: "5mm",
        }}
      >
        {/* CENTERED TITLE */}
        <div style={{ textAlign: "center", marginBottom: "4mm" }}>
          <div
            style={{
              fontSize: "18.67px",
              fontWeight: 700,
              color: "#09385f",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            {pageData.title}
          </div>
        </div>

        {/* EFFECTIVE DATE + COMPANY */}
        <div style={{ fontSize: "14.67px", marginBottom: "1.5mm" }}>
          <span style={{ fontWeight: 700 }}>Effective date:&nbsp;</span>
          {pageData.effectiveDate}
        </div>
        <div style={{ fontSize: "14.67px", marginBottom: "3mm" }}>
          <span style={{ fontWeight: 700 }}>Company:&nbsp;</span>
          {pageData.company}
        </div>

        {/* INTRO PARAGRAPH */}
        <div style={{ fontSize: "14.67px", color: "#000000", lineHeight: "1.45", marginBottom: "4mm" }}>
          {pageData.intro}
        </div>

        {/* NUMBERED SECTIONS */}
        <div style={{ flex: 1, overflow: "hidden" }}>
          {(pageData.sections || []).map((section, idx) => (
            <TcSection key={idx} section={section} />
          ))}
        </div>
      </div>

      <PdfFooter pageNumber={21} />
    </div>
  );
}