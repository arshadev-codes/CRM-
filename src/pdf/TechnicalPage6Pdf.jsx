import React from "react";
import PdfHeader from "./components/PdfHeader";
import PdfFooter from "./components/PdfFooter";
import { useProposalStore } from "../store/proposalStore";

export default function TechnicalPage6Pdf() {
  const pageData = useProposalStore(
    (state) => state.technicalPages?.page6
  );

  const sections = pageData?.sections || [];

  const introSection =
    sections.find((s) => s.type === "intro") || {};

  const subsystemSection =
    sections.find((s) => s.type !== "intro") || {};

  const images = subsystemSection?.images || [];

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
            "3. Generator Panels, HT and LT Breaker panels"}
        </h2>

        {/* DESCRIPTION */}
        <p
          style={{
            fontSize: "13px",
            lineHeight: "1.55",
            color: "#000",
            textAlign: "justify",
            margin: "0 0 8mm 0",
          }}
        >
          {subsystemSection?.description ||
            introSection?.description ||
            introSection?.text ||
            ""}
        </p>

        {/* TOP IMAGE ROW */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "10mm",
            marginBottom: "4mm",
          }}
        >
          {images[0] && (
            <div style={{ textAlign: "center" }}>
              <img
                src={images[0].src}
                alt=""
                style={{
                  width: "90%",
                  height: "100mm",
                  objectFit: "cover",
                  border: "1px solid #ddd",
                }}
              />
              <div
                style={{
                  fontSize: "13px",
                  color: "#000000",
                  fontStyle: "italic",
                  marginTop: "1.5mm",
                }}
              >
                {images[0].caption || "↑ Generator Panel ↑"}
              </div>
            </div>
          )}

          {images[1] && (
            <div style={{ textAlign: "center" }}>
              <img
                src={images[1].src}
                alt=""
                style={{
                  width: "90%",
                  height: "100mm",
                  objectFit: "cover",
                  border: "1px solid #ddd",
                }}
              />
              <div
                style={{
                  fontSize: "13px",
                  color: "#000000",
                  fontStyle: "italic",
                  marginTop: "1.5mm",
                }}
              >
                {images[1].caption || "↑ HT Breaker panel ↑"}
              </div>
            </div>
          )}
        </div>

        {/* BOTTOM IMAGE ROW */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "8mm",
          }}
        >
          {images[2] && (
            <div style={{ textAlign: "center" }}>
              <img
                src={images[2].src}
                alt=""
                style={{
                  width: "80%",
                  height: "65mm",
                  objectFit: "cover",
                  border: "1px solid #ddd",
                }}
              />
              <div
                style={{
                  fontSize: "13px",
                  color: "#000000",
                  fontStyle: "italic",
                  marginTop: "1.5mm",
                }}
              >
                {images[2].caption || "↑ LT Breaker Panel ↑"}
              </div>
            </div>
          )}

          {images[3] && (
            <div style={{ textAlign: "center" }}>
              <img
                src={images[3].src}
                alt=""
                style={{
                  width: "80%",
                  height: "65mm",
                  objectFit: "cover",
                  border: "1px solid #ddd",
                }}
              />
              <div
                style={{
                  fontSize: "13px",
                  color: "#000000",
                  fontStyle: "italic",
                  marginTop: "1.5mm",
                }}
              >
                {images[3].caption || "↑ Excitation control Panel ↑"}
              </div>
            </div>
          )}
        </div>
      </div>

      <PdfFooter pageNumber={6} />
    </div>
  );
}