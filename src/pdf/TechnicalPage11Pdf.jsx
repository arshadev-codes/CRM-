import React from "react";
import PdfHeader from "./components/PdfHeader";
import PdfFooter from "./components/PdfFooter";
import { useProposalStore } from "../store/proposalStore";

export default function TechnicalPage11Pdf() {
  const pageData = useProposalStore(
    (state) => state.technicalPages?.page11
  );

  const sections = pageData?.sections || [];

  const section12 = sections[0] || {};
  const customizationSection = sections[1] || {};

  const image =
    section12?.images?.[0]?.src ||
    customizationSection?.images?.[0]?.src ||
    null;

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
        {/* TITLE */}
        <h3
          style={{
            fontSize: "13.5px",
            fontWeight: "700",
            color: "#000000",
            margin: "0 0 4mm 0",
          }}
        >
          {section12.title}
        </h3>

        {/* DESCRIPTION */}
        <p
          style={{
            fontSize: "13px",
            lineHeight: "1.55",
            textAlign: "justify",
            color: "#000000",
            margin: "0 0 5mm 0",
          }}
        >
          {section12.description}
        </p>

        {/* MAIN IMAGE */}
        {image && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "8mm",
            }}
          >
            <img
              src={image}
              alt=""
              style={{
                width: "95mm",
                height: "70mm",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        )}

        

        {/* CUSTOMIZATION HEADING */}
        <div
  style={{
    fontSize: "13.5px",
    fontWeight: "700",
    fontStyle: "italic",
    marginBottom: "4mm",
  }}
>
  {customizationSection.heading || "Proposed customizations:"}
</div>

        {/* SUB HEADING */}
        <div
          style={{
            fontSize: "13px",
            fontWeight: "700",
            fontStyle: "italic",
            marginLeft: "8mm",
            marginBottom: "4mm",
          }}
        >
          I. Additional safety measures incorporated for Power transformer testing
        </div>

        {/* CUSTOMIZATION CONTENT */}
        {/* CUSTOMIZATION CONTENT */}
{customizationSection?.bullets?.length > 0 && (
  <div
    style={{
      marginLeft: "12mm",
      fontSize: "13px",
      lineHeight: "1.55",
      textAlign: "justify",
      color: "#000000",
    }}
  >
    {customizationSection.bullets.map((bullet, index) => (
      <div
        key={index}
        style={{
          marginBottom: "4mm",
        }}
      >
        <div
          style={{
            fontWeight: "700",
            marginBottom: "1.5mm",
          }}
        >
          {bullet.title}
        </div>

        <div>
          {bullet.body}
        </div>
      </div>
    ))}
  </div>
)}
      </div>

      <PdfFooter pageNumber={11} />
    </div>
  );
}