import React from "react";
import PdfHeader from "./components/PdfHeader";
import PdfFooter from "./components/PdfFooter";
import { useProposalStore } from "../store/proposalStore";

function TcSection({ section }) {
  return (
    <div style={{ marginBottom: "2.8mm" }}>
      <div style={{ fontWeight: 700, fontSize: "14.67px", marginBottom: "0.8mm" }}>
        {section.number}&nbsp;{section.title}
      </div>

      {section.body && (
        <div style={{ fontSize: "14.67px", color: "#000000", lineHeight: "1.45", marginBottom: "0.8mm" }}>
          {section.body}
        </div>
      )}

      {section.bullets && (
        <div style={{ paddingLeft: "3mm", marginBottom: "0.5mm" }}>
          {section.bullets.map((b, i) => (
            <div key={i} style={{ fontSize: "14.67px", color: "#000000", lineHeight: "1.45", marginBottom: "0.3mm" }}>
              &bull;&nbsp;{b}
            </div>
          ))}
        </div>
      )}

      {section.subsections && section.subsections.map((sub, i) => (
        <div key={i} style={{ marginBottom: "1mm", fontSize: "14.67px", color: "#000000", lineHeight: "1.45" }}>
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

export default function CommercialPage22Pdf() {
  const commercialPages = useProposalStore((state) => state.commercialPages);
  const pageData = commercialPages?.page22;

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
        <div style={{ flex: 1, overflow: "hidden" }}>
          {(pageData.sections || []).map((section, idx) => (
            <TcSection key={idx} section={section} />
          ))}
        </div>
      </div>

      <PdfFooter pageNumber={22} />
    </div>
  );
}