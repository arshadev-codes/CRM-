import React from "react";
import PdfHeader from "./components/PdfHeader";
import PdfFooter from "./components/PdfFooter";

import { useProposalStore } from "../store/proposalStore";

const DEFAULT_PAGE18 = {
  title: "M/S NEOTRAFO SOLUTIONS INDIA PRIVATE LIMITED'S SCOPE",
  tableTitle: "OTHER EQUIPMENT",
  instrumentTitle: "TESTING INSTRUMENTS",
  items: [],
  instruments: [],
};

export default function CommercialPage18Pdf() {
  const commercialPages = useProposalStore((state) => state.commercialPages);

  // Merge stored data with defaults so the page always renders
  // even when commercialPages.page18 is undefined (no entry in commercialPagesData.js)
  const pageData = {
    ...DEFAULT_PAGE18,
    ...(commercialPages?.page18 || {}),
  };

  // Field names match the editable UI: items / instruments
  const otherEquipmentItems = (pageData.items || []).filter(
    (item) => item.description?.trim()
  );
  const testingInstrumentsItems = (pageData.instruments || []).filter(
    (item) => item.description?.trim()
  );

  const maxOtherEquipmentRows = 8;
  const maxTestingRows = 4;

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
      {/* HEADER */}
      <PdfHeader />

      {/* MAIN CONTENT WINDOW */}
      <div
        style={{
          height: "220mm",
          display: "flex",
          flexDirection: "column",
          marginTop: "18mm",
        }}
      >
        {/* PAGE TITLE */}
        <div style={{ marginBottom: "4mm" }}>
          <div
            style={{
              fontSize: "18px",
              fontWeight: 900,
              color: "#09385f",
              textTransform: "uppercase",
              letterSpacing: "0.3px",
            }}
          >
            {pageData.title}
          </div>
        </div>

        {/* =========================================
            TABLE 1: OTHER EQUIPMENT
        ========================================= */}
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            tableLayout: "fixed",
            fontSize: "13.5px",
            marginBottom: "4mm",
          }}
        >
          <colgroup>
            <col style={{ width: "8%" }} />
            <col style={{ width: "76%" }} />
            <col style={{ width: "16%" }} />
          </colgroup>
          <thead>
            <tr>
              <th
                colSpan={3}
                style={{
                  background: "#0b5576",
                  color: "#fff",
                  border: "1px solid #b6b6b6",
                  padding: "1.2mm 1mm",
                  fontSize: "11px",
                  fontWeight: 700,
                  fontStyle: "italic",
                  textAlign: "center",
                  textTransform: "uppercase",
                }}
              >
                {pageData.tableTitle}
              </th>
            </tr>
            <tr style={{ background: "#d8eef8" }}>
              <th style={{ border: "1px solid #b6b6b6", padding: "1mm", fontWeight: 700, textAlign: "center" }}>Sr. No.</th>
              <th style={{ border: "1px solid #b6b6b6", padding: "1mm", fontWeight: 700, textAlign: "center" }}>Description</th>
              <th style={{ border: "1px solid #b6b6b6", padding: "1mm", fontWeight: 700, textAlign: "center" }}>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {otherEquipmentItems.length === 0 ? (
              <tr>
                <td style={{ border: "1px solid #b6b6b6", textAlign: "center", padding: "1mm 0.5mm", fontWeight: 600 }}>—</td>
                <td style={{ border: "1px solid #b6b6b6", padding: "1mm 2mm", color: "#888", fontStyle: "italic" }}>No items added</td>
                <td style={{ border: "1px solid #b6b6b6", textAlign: "center", padding: "1mm 0.5mm", color: "#888" }}>—</td>
              </tr>
            ) : (
              otherEquipmentItems.slice(0, maxOtherEquipmentRows).map((item, idx) => (
                <tr key={idx}>
                  <td style={{ border: "1px solid #b6b6b6", textAlign: "center", padding: "1mm 0.5mm", fontWeight: 600 }}>{idx + 1}</td>
                  <td style={{ border: "1px solid #b6b6b6", padding: "1mm 2mm", color: "#222", whiteSpace: "normal", wordBreak: "break-word" }}>{item.description}</td>
                  <td style={{ border: "1px solid #b6b6b6", textAlign: "center", padding: "1mm 0.5mm", color: "#222" }}>{item.quantity || "—"}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {/* =========================================
            TABLE 2: TESTING INSTRUMENTS
        ========================================= */}
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            tableLayout: "fixed",
            fontSize: "13.5px",
            marginBottom: "4mm",
          }}
        >
          <colgroup>
            <col style={{ width: "8%" }} />
            <col style={{ width: "76%" }} />
            <col style={{ width: "16%" }} />
          </colgroup>
          <thead>
            <tr>
              <th
                colSpan={3}
                style={{
                  background: "#0b5576",
                  color: "#fff",
                  border: "1px solid #b6b6b6",
                  padding: "1.2mm 1mm",
                  fontSize: "11px",
                  fontWeight: 700,
                  fontStyle: "italic",
                  textAlign: "center",
                  textTransform: "uppercase",
                }}
              >
                {pageData.instrumentTitle}
              </th>
            </tr>
            <tr style={{ background: "#d8eef8" }}>
              <th style={{ border: "1px solid #b6b6b6", padding: "1mm", fontWeight: 700, textAlign: "center" }}>Sr. No.</th>
              <th style={{ border: "1px solid #b6b6b6", padding: "1mm", fontWeight: 700, textAlign: "center" }}>Description</th>
              <th style={{ border: "1px solid #b6b6b6", padding: "1mm", fontWeight: 700, textAlign: "center" }}>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {testingInstrumentsItems.length === 0 ? (
              <tr>
                <td style={{ border: "1px solid #b6b6b6", textAlign: "center", padding: "1mm 0.5mm", fontWeight: 600 }}>—</td>
                <td style={{ border: "1px solid #b6b6b6", padding: "1mm 2mm", color: "#888", fontStyle: "italic" }}>No items added</td>
                <td style={{ border: "1px solid #b6b6b6", textAlign: "center", padding: "1mm 0.5mm", color: "#888" }}>—</td>
              </tr>
            ) : (
              testingInstrumentsItems.slice(0, maxTestingRows).map((item, idx) => (
                <tr key={idx}>
                  <td style={{ border: "1px solid #b6b6b6", textAlign: "center", padding: "1mm 0.5mm", fontWeight: 600 }}>{idx + 1}</td>
                  <td style={{ border: "1px solid #b6b6b6", padding: "1mm 2mm", color: "#222", whiteSpace: "normal", wordBreak: "break-word" }}>{item.description}</td>
                  <td style={{ border: "1px solid #b6b6b6", textAlign: "center", padding: "1mm 0.5mm", color: "#222" }}>{item.quantity || "1"}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* FOOTER */}
      <PdfFooter pageNumber={18} />
    </div>
  );
}