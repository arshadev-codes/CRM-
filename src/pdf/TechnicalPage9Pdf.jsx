import React from "react";
import PdfHeader from "./components/PdfHeader";
import PdfFooter from "./components/PdfFooter";
import { useProposalStore } from "../store/proposalStore";

export default function TechnicalPage9Pdf() {
  const pageData = useProposalStore(
    (state) => state.technicalPages?.page9
  );

  const sections = pageData?.sections || [];

  const section7 = sections[0] || {};
  const section8 = sections[1] || {};
  const section9 = sections[2] || {};

  // Find images from whichever section contains them
  const images =
    section7?.images?.length > 0
      ? section7.images
      : section8?.images?.length > 0
      ? section8.images
      : section9?.images?.length > 0
      ? section9.images
      : [];

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
        {/* SECTION 7 */}
        {section7?.title && (
          <>
            <h3
              style={{
                fontSize: "13.5px",
                fontWeight: "700",
                color: "#000000",
                margin: "0 0 3mm 0",
              }}
            >
              {section7.title}
            </h3>

            <p
              style={{
                fontSize: "13px",
                lineHeight: "1.55",
                textAlign: "justify",
                margin: "0 0 5mm 0",
                color: "#000000",
              }}
            >
              {section7.description}
            </p>
          </>
        )}

        {/* SECTION 8 */}
        {section8?.title && (
          <>
            <h3
              style={{
                fontSize: "13.5px",
                fontWeight: "700",
                color: "#000000",
                margin: "0 0 3mm 0",
              }}
            >
              {section8.title}
            </h3>

            <p
              style={{
                fontSize: "13px",
                lineHeight: "1.55",
                textAlign: "justify",
                margin: "0 0 5mm 0",
                color: "#000000",
              }}
            >
              {section8.description}
            </p>
          </>
        )}

        {/* IMAGES */}
        {images.length > 0 && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4mm",
              marginBottom: "6mm",
              alignItems: "start",
            }}
          >
            {images.slice(0, 2).map((image, index) => (
              <div
                key={index}
                style={{
                  width: "100%",
                  textAlign: "center",
                }}
              >
                <img
                  src={image?.src}
                  alt={`Page9-${index}`}
                  style={{
                    width: "100%",
                    height: "70mm",
                    objectFit: "contain",
                    display: "block",
                  }}
                />

                {image?.caption && (
                  <div
                    style={{
                      marginTop: "2mm",
                      fontSize: "8px",
                      fontStyle: "italic",
                      color: "#444",
                    }}
                  >
                    {image.caption}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* SECTION 9 */}
        {section9?.title && (
          <>
            <h3
              style={{
                fontSize: "13.5px",
                fontWeight: "700",
                color: "#000000",
                margin: "0 0 3mm 0",
              }}
            >
              {section9.title}
            </h3>

            <p
              style={{
                fontSize: "13px",
                lineHeight: "1.55",
                textAlign: "justify",
                color: "#000000",
                margin: 0,
              }}
            >
              {section9.description}
            </p>
          </>
        )}
      </div>

      <PdfFooter pageNumber={9} />
    </div>
  );
}