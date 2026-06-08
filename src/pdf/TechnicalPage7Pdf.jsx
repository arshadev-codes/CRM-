import React from "react";
import PdfHeader from "./components/PdfHeader";
import PdfFooter from "./components/PdfFooter";
import { useProposalStore } from "../store/proposalStore";

export default function TechnicalPage7Pdf() {
  const pageData = useProposalStore(
    (state) => state.technicalPages?.page7
  );

  const sections = pageData?.sections || [];

  const introSection =
    sections.find((s) => s.type === "intro") || {};

  const subsystemSection =
    sections.find((s) => s.type !== "intro") || {};

  const imageSrc =
    subsystemSection?.images?.[0]?.src ||
    introSection?.images?.[0]?.src ||
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
        {/* TITLE */}
        <h2
          style={{
            fontSize: "13.5px",
            fontWeight: "700",
            color: "#000000",
            margin: "0 0 8px 0",
          }}
        >
          {subsystemSection?.title ||
            introSection?.title ||
            introSection?.heading ||
            "4. Fully Automatic LV Test Trolley"}
        </h2>

        {/* DESCRIPTION */}
        <p
          style={{
            fontSize: "13px",
            lineHeight: "1.55",
            color: "#000000",
            textAlign: "justify",
            margin: "0 0 8mm 0",
          }}
        >
          {subsystemSection?.description ||
            introSection?.description ||
            introSection?.text ||
            ""}
        </p>

        {/* MAIN IMAGE */}
        {imageSrc && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              marginTop: "2mm",
            }}
          >
            <img
              src={imageSrc}
              alt=""
              style={{
                width: "150mm",
                maxWidth: "100%",
                height: "auto",
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>
        )}
      </div>

      <PdfFooter pageNumber={7} />
    </div>
  );
}