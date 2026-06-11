import React from "react";
import PdfHeader from "./components/PdfHeader";
import PdfFooter from "./components/PdfFooter";

import { useProposalStore } from "../store/proposalStore";

export default function CommercialPage17Pdf() {
  const commercialPages = useProposalStore((state) => state.commercialPages);
  // Also pull the SLD pdf link from page12 of technicalPages (same store)
  const technicalPages = useProposalStore((state) => state.technicalPages);
  const pageData = commercialPages?.page17;
  const sldPdf = technicalPages?.page12?.sldPdf;

  if (!pageData) return null;

  const offsiteItems = pageData.offsiteItems || [];
  const onsiteItems = pageData.onsiteItems || [];
  const deliveryItems = pageData.deliverySchedule || [];
  const notesList = pageData.notes || [];

  // Shared cell styles
  const headerCell = {
    border: "1px solid #b6b6b6",
    padding: "0.8mm 1mm",
    fontWeight: 700,
    textAlign: "center",
    fontSize: "11px",
  };
  const bodyCell = (extra = {}) => ({
    border: "1px solid #b6b6b6",
    padding: "0.6mm 1.5mm",
    fontSize: "11px",
    color: "#000",
    ...extra,
  });

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
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* HEADER */}
      <PdfHeader />

      {/* CONTENT — flex-grows to fill space between header and footer */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          marginTop: "4mm",
          overflow: "hidden",
        }}
      >
        {/* PAGE TITLE */}
        <div style={{ marginBottom: "3mm" , marginTop: "8mm"}}>
          <div style={{ fontSize: "18px", fontWeight: 900, color: "#09385f", textTransform: "uppercase", letterSpacing: "0.3px" , marginTop: "12mm" }}>
            {pageData.title || "ELECTROSOFT'S SCOPE OF SERVICES"}
          </div>
        </div>

        {/* ── TABLE 1: OFF-SITE ── */}
        <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed", marginBottom: "3mm" }}>
          <colgroup>
            <col style={{ width: "8%" }} />
            <col style={{ width: "64%" }} />
            <col style={{ width: "12%" }} />
            <col style={{ width: "16%" }} />
          </colgroup>
          <thead>
            <tr>
              <th
                colSpan={4}
                style={{
                  background: "#0b5576", color: "#fff",
                  border: "1px solid #b6b6b6",
                  padding: "0.8mm 1mm",
                  fontSize: "11px", fontWeight: 700, fontStyle: "italic",
                  textAlign: "center", textTransform: "uppercase",
                }}
              >
                {pageData.offsiteTitle || "OFF-SITE: DELIVERABLE DOCUMENTS"}
              </th>
            </tr>
            <tr style={{ background: "#d8eef8" }}>
              <th style={headerCell}>Sr. No.</th>
              <th style={headerCell}>Description</th>
              <th style={headerCell}>Quantity</th>
              <th style={headerCell}>Price (INR)</th>
            </tr>
          </thead>
          <tbody>
            {offsiteItems.map((item, idx) => (
              <tr key={idx}>
                <td style={bodyCell({ textAlign: "center", fontWeight: 600 })}>{idx + 1}</td>
                <td style={bodyCell({ whiteSpace: "normal", wordBreak: "break-word" })}>{item.description}</td>
                <td style={bodyCell({ textAlign: "center" })}>{item.quantity || "---"}</td>
                <td style={bodyCell({ textAlign: "center" })}>{item.price || "---"}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* ── TABLE 2: ON-SITE ── */}
        <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed", marginBottom: "3mm" }}>
          <colgroup>
            <col style={{ width: "8%" }} />
            <col style={{ width: "64%" }} />
            <col style={{ width: "12%" }} />
            <col style={{ width: "16%" }} />
          </colgroup>
          <thead>
            <tr>
              <th
                colSpan={4}
                style={{
                  background: "#0b5576", color: "#fff",
                  border: "1px solid #b6b6b6",
                  padding: "0.8mm 1mm",
                  fontSize: "11px", fontWeight: 700, fontStyle: "italic",
                  textAlign: "center", textTransform: "uppercase",
                }}
              >
                {pageData.onsiteTitle || "ON-SITE"}
              </th>
            </tr>
            <tr style={{ background: "#d8eef8" }}>
              <th style={headerCell}>Sr. No.</th>
              <th style={headerCell}>Description</th>
              <th style={headerCell}>Quantity</th>
              <th style={headerCell}>Price (INR)</th>
            </tr>
          </thead>
          <tbody>
            {onsiteItems.map((item, idx) => (
              <tr key={idx}>
                <td style={bodyCell({ textAlign: "center", fontWeight: 600 })}>{idx + 1}</td>
                <td style={bodyCell({ whiteSpace: "normal", wordBreak: "break-word" })}>{item.description}</td>
                <td style={bodyCell({ textAlign: "center" })}>{item.quantity || "---"}</td>
                <td style={bodyCell({ textAlign: "center" })}>{item.price || "---"}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* ── DELIVERY SCHEDULE ── */}
        <div style={{ marginBottom: "2mm" }}>
          <div style={{ fontSize: "14px", fontWeight: 900, color: "#09385f", textTransform: "uppercase", letterSpacing: "0.3px" }}>
            {pageData.deliveryTitle || "DELIVERY SCHEDULE"}
          </div>
        </div>

        <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed", marginBottom: "3mm" }}>
          <colgroup>
            <col style={{ width: "8%" }} />
            <col style={{ width: "56%" }} />
            <col style={{ width: "36%" }} />
          </colgroup>
          <thead>
            <tr style={{ background: "#d8eef8" }}>
              <th style={headerCell}>Sr. No.</th>
              <th style={headerCell}>Details</th>
              <th style={headerCell}>Duration</th>
            </tr>
          </thead>
          <tbody>
            {deliveryItems.map((item, idx) => (
              <tr key={idx}>
                <td style={bodyCell({ textAlign: "center", fontWeight: 600 })}>{idx + 1}</td>
                <td style={bodyCell({ whiteSpace: "normal" })}>{item.details}</td>
                <td style={bodyCell({ textAlign: "center", whiteSpace: "normal" })}>
                  {item.duration || "To be discussed later"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* ── NOTES ── */}
        <div style={{ fontSize: "11px", marginTop: "1mm", width: "100%" }}>
          <div style={{ fontWeight: 700, fontStyle: "italic", marginBottom: "1mm", color: "#000" }}>Note:</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.2mm", width: "100%" }}>
            {notesList.map((note, index) => (
              <div key={index} style={{ display: "flex", alignItems: "flex-start", width: "100%", lineHeight: "1.3" }}>
                <div style={{ minWidth: "5mm", width: "5mm", textAlign: "right", paddingRight: "1.5mm", fontWeight: 600, color: "#111", flexShrink: 0 }}>
                  {index + 1}.
                </div>
                <div style={{ color: "#333", fontStyle: "italic", whiteSpace: "normal", wordBreak: "break-word", flex: 1 }}>
                  {note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <PdfFooter pageNumber={17} />
    </div>
  );
}