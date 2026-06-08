import React from "react";

export default function PdfFooter({ pageNumber }) {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "16mm",
        left: "17.7mm",
        right: "17.7mm",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          fontSize: "8.5px",
          fontStyle: "italic",
          color: "#64748b",
          lineHeight: "1.45",
          fontFamily: "'Segoe UI', Arial, sans-serif",
          width: "100%",
        }}
      >
        <div>
          a: S7-1, Jai Matadi Compound, Kalher, Thane, Maharashtra, INDIA 421302
        </div>

        <div>
          e: info@electrosoftindia.com&nbsp;&nbsp;&nbsp;GST: 27AAFCE4353G1ZP
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            width: "100%",
          }}
        >
          <span>
            m: +91-9089-888-444&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CIN:
            U31900MH2019PTC323431
          </span>

          <span
            style={{
              fontWeight: 700,
              fontStyle: "italic",
              color: "#0f172a",
              whiteSpace: "nowrap",
              marginLeft: "12px",
              fontSize: "8.5px",
            }}
          >
            Page {pageNumber} of 24
          </span>
        </div>
      </div>
    </div>
  );
}