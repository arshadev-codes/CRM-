import React from "react";
import PdfHeader from "./components/PdfHeader";
import PdfFooter from "./components/PdfFooter";
import { useProposalStore } from "../store/proposalStore";

export default function TechnicalPage10Pdf() {
  const pageData = useProposalStore(
    (state) => state.technicalPages?.page10
  );

  const sections = pageData?.sections || [];

  const section10 = sections[0] || {};
  const section11 = sections[1] || {};

  const images =
    section11?.images?.length > 0
      ? section11.images
      : section10?.images?.length > 0
      ? section10.images
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
        {/* SECTION 10 */}
        {section10?.title && (
          <>
            <h3
              style={{
                fontSize: "13.5px",
                fontWeight: "700",
                color: "#000000",
                margin: "0 0 3mm 0",
              }}
            >
              {section10.title}
            </h3>

            <p
              style={{
                fontSize: "13px",
                lineHeight: "1.6",
                textAlign: "justify",
                color: "#000000",
                margin: "0 0 6mm 0",
              }}
            >
              {section10.description}
            </p>
          </>
        )}

        {/* SECTION 11 */}
        {section11?.title && (
          <>
            <h3
              style={{
                fontSize: "13.5px",
                fontWeight: "700",
                color: "#000000",
                margin: "0 0 3mm 0",
              }}
            >
              {section11.title}
            </h3>

            <p
              style={{
                fontSize: "13px",
                lineHeight: "1.6",
                textAlign: "justify",
                color: "#000000",
                margin: "0 0 8mm 0",
              }}
            >
              {section11.description}
            </p>
          </>
        )}

        {/* IMAGES */}
        {images.length > 0 && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr",
              gap: "8mm",
              alignItems: "start",
              marginTop: "2mm",
            }}
          >
            {/* LEFT IMAGE */}
            {images[0] && (
              <div>
                <img
                  src={images[0].src}
                  alt=""
                  style={{
                    width: "100%",
                    height: "70mm",
                    objectFit: "cover",
                    display: "block",
                  }}
                />

                {images[0].caption && (
                  <div
                    style={{
                      textAlign: "center",
                      fontSize: "13px",
                      fontStyle: "italic",
                      marginTop: "2mm",
                    }}
                  >
                    {images[0].caption}
                  </div>
                )}
              </div>
            )}

            {/* RIGHT IMAGE */}
            {images[1] && (
              <div>
                <img
                  src={images[1].src}
                  alt=""
                  style={{
                    width: "100%",
                    height: "70mm",
                    objectFit: "cover",
                    display: "block",
                  }}
                />

                {images[1].caption && (
                  <div
                    style={{
                      textAlign: "center",
                      fontSize: "13px",
                      fontStyle: "italic",
                      marginTop: "2mm",
                    }}
                  >
                    {images[1].caption}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      <PdfFooter pageNumber={10} />
    </div>
  );
}