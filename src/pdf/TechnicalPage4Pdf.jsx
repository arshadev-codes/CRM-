import React from "react";
import PdfHeader from "./components/PdfHeader";
import PdfFooter from "./components/PdfFooter";
import { useProposalStore } from "../store/proposalStore";

export default function TechnicalPage4Pdf() {
  const pageData = useProposalStore(
    (state) => state.technicalPages?.page4
  );

  const sections = pageData?.sections || [];

  const introSection =
    sections.find((s) => s.type === "intro") || {};

  const subsystemSection =
    sections.find((s) => s.type !== "intro") || {};

  const imageSrc =
    subsystemSection?.images?.[0]?.src || null;

  return (
    <div className="pdf-page">
      <PdfHeader />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "235mm",
        }}
      >
        {/* Intro Heading */}
        {introSection?.heading && (
          <h2
            style={{
              fontSize: "14.67px",
              fontWeight: "700",
              fontStyle: "italic",
              color: "#000000",
              margin: "0 0 12px 0",
            }}
          >
            {introSection.heading}
          </h2>
        )}

        {/* Intro Text */}
        {introSection?.text && (
          <p
            style={{
              fontSize: "14.67px",
              color: "#000000",
              lineHeight: "1.45",
              textAlign: "justify",
              margin: "0 0 12px 0",
            }}
          >
            {introSection.text}
          </p>
        )}

        {/* Optional Note */}
        {introSection?.note && (
          <p
            style={{
              fontSize: "12.67px",
              color: "#000000",
              fontStyle: "italic",
              margin: "0 0 18px 0",
            }}
          >
            {introSection.note}
          </p>
        )}

        {/* Subsystem Title */}
        {subsystemSection?.title && (
          <h3
            style={{
              fontSize: "14.67px",
              fontWeight: "700",
              color: "#000000",
              margin: "0 0 12px 0",
            }}
          >
            {subsystemSection.title}
          </h3>
        )}

        {/* Description */}
        {subsystemSection?.description && (
          <p
            style={{
              fontSize: "14.67px",
              color: "#000000",
              lineHeight: "1.45",
              textAlign: "justify",
              margin: "0 0 20px 0",
            }}
          >
            {subsystemSection.description}
          </p>
        )}

        {/* Image */}
        {imageSrc && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              marginTop: "8px",
            }}
          >
            <img
              src={imageSrc}
              alt=""
              style={{
                width: "125mm",
                maxWidth: "100%",
                height: "auto",
                display: "block",
                objectFit: "contain",
              }}
            />
          </div>
        )}
      </div>

      <PdfFooter pageNumber={4} />
    </div>
  );
}