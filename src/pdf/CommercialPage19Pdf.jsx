import React from "react";
import PdfHeader from "./components/PdfHeader";
import PdfFooter from "./components/PdfFooter";
import { useProposalStore } from "../store/proposalStore";

export default function CommercialPage19Pdf() {
  const commercialPages = useProposalStore((state) => state.commercialPages);
  const pageData = commercialPages?.page19;

  if (!pageData) return null;

  const exclusions = pageData.exclusions || [];
  const makes = pageData.makes || [];

  return (
    <div
      className="pdf-page"
      style={{
        position: "relative",
        boxSizing: "border-box",
        width: "210mm",
        height: "297mm",
        padding: "12mm 15mm 20mm 15mm",
        overflow: "hidden",
        backgroundColor: "#fff",
      }}
    >
      <PdfHeader />

      <div
        style={{
          height: "220mm",
          display: "flex",
          flexDirection: "column",
          marginTop: "18mm",
        }}
      >
        {/* ── LIST OF EXCLUSIONS ── */}
        <div
          style={{
            fontSize: "18px",
            fontWeight: 900,
            color: "#09385f",
            textTransform: "uppercase",
            letterSpacing: "0.3px",
            marginBottom: "2.5mm",
          }}
        >
          {pageData.exclusionsTitle || "LIST OF EXCLUSIONS"}
        </div>

        <div style={{ fontSize: "13.5px", color: "#000000", marginBottom: "2mm" }}>
          {pageData.exclusionsIntro}
        </div>

        <ol
          style={{
            margin: "0 0 0 5mm",
            padding: 0,
            fontSize: "13px",
            color: "#000000",
            lineHeight: "1.6",
            listStyleType: "decimal",
            paddingLeft: "5mm",
          }}
        >
          {exclusions.map((item, idx) => (
            <li key={idx} style={{ marginBottom: "0.8mm" }}>
              {item}
            </li>
          ))}
        </ol>

        {/* ── LIST OF MAKES OF SUPPLY ── */}
        <div style={{ marginTop: "7mm" }}>
          <div
            style={{
              fontSize: "18px",
              fontWeight: 900,
              color: "#09385f",
              textTransform: "uppercase",
              letterSpacing: "0.3px",
              marginBottom: "2mm",
            }}
          >
            {pageData.makesTitle || "LIST OF MAKES OF SUPPLY"}
          </div>

          <div style={{ fontSize: "13.5px", color: "#000000", marginBottom: "3mm" }}>
            {pageData.makesIntro}
          </div>

          <table
            style={{
              width: "82%",
              borderCollapse: "collapse",
              fontSize: "13px",
              tableLayout: "fixed",
            }}
          >
            <colgroup>
              <col style={{ width: "55%" }} />
              <col style={{ width: "45%" }} />
            </colgroup>
            <thead>
              <tr style={{ background: "#d8eef8" }}>
                <th
                  style={{
                    border: "1px solid #b6b6b6",
                    padding: "1.5mm 2mm",
                    fontWeight: 700,
                    textAlign: "center",
                  }}
                >
                  Description
                </th>
                <th
                  style={{
                    border: "1px solid #b6b6b6",
                    padding: "1.5mm 2mm",
                    fontWeight: 700,
                    textAlign: "center",
                  }}
                >
                  Make
                </th>
              </tr>
            </thead>
            <tbody>
              {makes.map((row, idx) => (
                <tr key={idx}>
                  <td
                    style={{
                      border: "1px solid #b6b6b6",
                      padding: "1mm 2mm",
                      color: "#000000",
                      whiteSpace: "normal",
                      wordBreak: "break-word",
                    }}
                  >
                    {row.description}
                  </td>
                  <td
                    style={{
                      border: "1px solid #b6b6b6",
                      padding: "1mm 2mm",
                      color: "#000000",
                      textAlign: "center",
                    }}
                  >
                    {row.make}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <PdfFooter pageNumber={19} />
    </div>
  );
}