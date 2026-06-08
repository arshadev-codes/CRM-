import React from "react";
import PdfHeader from "./components/PdfHeader";
import PdfFooter from "./components/PdfFooter";
import { useProposalStore } from "../store/proposalStore";

export default function TechnicalPage8Pdf() {
  const pageData = useProposalStore(
    (state) => state.technicalPages?.page8
  );

  const sections = pageData?.sections || [];

  const section5 = sections[0] || {};
  const section6 = sections[1] || {};

  const imageSrc =
    section5?.images?.[0]?.src ||
    null;

  return (
    <div className="pdf-page">
      <PdfHeader />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        {/* SECTION 5 TITLE */}
        <h2
          style={{
            fontSize: "13.5px",
            fontWeight: "700",
            color: "#000000",
            margin: "0 0 8px 0",
          }}
        >
          {section5?.title ||
            "5. CT-PT Rack with Pneumatic Knife Switches"}
        </h2>

        {/* SECTION 5 DESCRIPTION */}
        <p
          style={{
            fontSize: "13px",
            lineHeight: "1.55",
            textAlign: "justify",
            color: "#000000",
            margin: "0 0 8mm 0",
          }}
        >
          {section5?.description || ""}
        </p>

        {/* IMAGE */}
        {imageSrc && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "8mm",
            }}
          >
            <img
              src={imageSrc}
              alt=""
              style={{
                width: "115mm",
                height: "auto",
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>
        )}

        {/* SECTION 6 TITLE */}
        <h2
          style={{
            fontSize: "13.5px",
            fontWeight: "700",
            color: "#000000",
            margin: "0 0 8px 0",
          }}
        >
          {section6?.title ||
            "6. HT Capacitor bank"}
        </h2>

        {/* SECTION 6 DESCRIPTION */}
        <p
          style={{
            fontSize: "13px",
            lineHeight: "1.55",
            textAlign: "justify",
            color: "#000000",
            margin: "0 0 8mm 0",
          }}
        >
          {section6?.description || ""}
        </p>
      </div>

      <PdfFooter pageNumber={8} />
    </div>
  );
}