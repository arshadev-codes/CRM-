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

      {section.footer && (
        <div style={{ fontSize: "14.67px", color: "#000000", lineHeight: "1.45", marginTop: "0.8mm" }}>
          {section.footer}
        </div>
      )}
    </div>
  );
}

export default function CommercialPage24Pdf() {
  const commercialPages = useProposalStore((state) => state.commercialPages);
  const pageData = commercialPages?.page24;

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

        {/* END OF DOCUMENT — matches dashed line in screenshot */}
        {pageData.endOfDocument && (
          <div
            style={{
              marginTop: "10mm",
              textAlign: "center",
              fontSize: "15.5px",
              color: "#000000",
              letterSpacing: "0.5px",
              fontFamily: "monospace",
            }}
          >
            - - - - - - - - - - - - - - -&nbsp;&nbsp;[&nbsp;END OF DOCUMENT&nbsp;]&nbsp;&nbsp;- - - - - - - - - - - - - - -
          </div>
        )}
      </div>

      <PdfFooter pageNumber={24} />
    </div>
  );
}