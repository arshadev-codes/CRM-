import React from "react";
import PdfHeader from "./components/PdfHeader";
import PdfFooter from "./components/PdfFooter";
import { useProposalStore } from "../store/proposalStore";

export default function TechnicalPage5Pdf() {
  const pageData = useProposalStore(
    (state) => state.technicalPages?.page5
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
              margin: "0 0 18px 0",
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

        {/* Main Image */}
      {subsystemSection?.images?.length > 0 && (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      marginTop: "10px",
      width: "100%",
    }}
  >
   {/* Images Layout */}
{subsystemSection?.images?.length > 0 && (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "6mm",
      marginTop: "4mm",
      width: "100%",
    }}
  >
    {/* Large top image */}
    {subsystemSection.images[0] && (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={subsystemSection.images[0].src}
          alt=""
          style={{
            width: "155mm",
            height: "auto",
            display: "block",
            border: "1px solid #d1d5db",
          }}
        />
      </div>
    )}

    {/* Bottom two images */}
    {(subsystemSection.images[1] || subsystemSection.images[2]) && (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "6mm",
          alignItems: "start",
        }}
      >
        {subsystemSection.images[1] && (
          <img
            src={subsystemSection.images[1].src}
            alt=""
            style={{
              width: "100%",
              height: "58mm",
              objectFit: "contain",
              border: "1px solid #d1d5db",
            }}
          />
        )}

        {subsystemSection.images[2] && (
          <img
            src={subsystemSection.images[2].src}
            alt=""
            style={{
              width: "100%",
              height: "58mm",
              objectFit: "contain",
              border: "1px solid #d1d5db",
            }}
          />
        )}
      </div>
    )}
  </div>
)}
  </div>
)}
      </div>

      <PdfFooter pageNumber={5} />
    </div>
  );
}