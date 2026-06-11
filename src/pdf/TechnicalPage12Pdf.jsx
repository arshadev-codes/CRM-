import React from "react";
import PdfHeader from "./components/PdfHeader";
import PdfFooter from "./components/PdfFooter";
import { useProposalStore } from "../store/proposalStore";

export default function TechnicalPage12Pdf() {
  const pageData = useProposalStore(
    (state) => state.technicalPages?.page12
  );

  if (!pageData) return null;

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
        <h2
          style={{
            fontSize: "18px",
            fontWeight: "900",
            color: "#09385f",
            margin: "0 0 4mm 0",
            lineHeight: "1.4",
          }}
        >
          {pageData.title}
        </h2>

        {/* DESCRIPTION */}
        <div
          style={{
            fontSize: "13px",
            color: "#d10000",
            lineHeight: "1.5",
            marginBottom: "8mm",
            textAlign: "justify",
            fontWeight: "600",
          }}
        >
          {pageData.description}
        </div>

        {/* BLUE BUTTON */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "4mm",
          }}
        >
          <div
            style={{
              width: "95mm",
              height: "32mm",
              border: "1px solid #0077c8",
              borderRadius: "4mm",
              background:
                "linear-gradient(to bottom,#8cc6f0,#66afe5)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              padding: "3mm",
            }}
          >
            <div
              style={{
                fontSize: "16px",
                fontWeight: "800",
                color: "#000",
              }}
            >
              CLICK HERE TO OPEN SLD
            </div>

            <div
              style={{
                fontSize: "13px",
                fontWeight: "800",
                color: "#000",
              }}
            >
              (SINGLE LINE DIAGRAM)
            </div>

            <div
              style={{
                fontSize: "13px",
                fontWeight: "800",
                color: "#000",
              }}
            >
              OF OFFERED SYSTEM
            </div>

            <div
              style={{
                fontSize: "13px",
                fontWeight: "800",
                color: "#c00000",
                marginTop: "1mm",
              }}
            >
              [CONFIDENTIAL]
            </div>
          </div>
        </div>

        {/* PDF NAME */}
        {pageData.pdfName && (
          <div
            style={{
              textAlign: "center",
              fontSize: "13px",
              color: "#64748b",
              fontStyle: "italic",
              marginBottom: "6mm",
            }}
          >
            PDF: {pageData.pdfName}
          </div>
        )}

        {/* LAYOUT TITLE */}
        <div
          style={{
            fontSize: "13px",
            fontWeight: "700",
            fontStyle: "italic",
            marginBottom: "4mm",
            color: "#000",
          }}
        >
          {pageData.layoutTitle}
        </div>

        {/* IMAGE */}
        {pageData.layoutImage && (
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <img
              src={pageData.layoutImage}
              alt=""
              style={{
                width: "170mm",
                maxHeight: "120mm",
                objectFit: "contain",
                display: "block",
                border: "1px solid #cbd5e1",
              }}
            />
          </div>
        )}
      </div>

      <PdfFooter pageNumber={12} />
    </div>
  );
}