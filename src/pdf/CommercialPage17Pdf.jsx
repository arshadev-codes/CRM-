import React from "react";
import PdfHeader from "./components/PdfHeader";
import PdfFooter from "./components/PdfFooter";

import { useProposalStore } from "../store/proposalStore";

export default function CommercialPage17Pdf() {
  const commercialPages = useProposalStore((state) => state.commercialPages);
  const pageData = commercialPages?.page17;

  if (!pageData) return null;

  const offsiteItems = pageData.offsiteItems || [];
  const onsiteItems = pageData.onsiteItems || [];
  const deliveryItems = pageData.deliverySchedule || [];
  const notesList = pageData.notes || [];

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
        backgroundColor: "#fff"
      }}
    >
      {/* HEADER COMPONENT */}
        <PdfHeader />

      {/* MAIN CONTENT WINDOW */}
      <div 
        style={{ 
          height: "228mm", 
          display: "flex", 
          flexDirection: "column",
          marginTop: "18mm"
        }}
      >
        {/* PAGE TITLE */}
        <div style={{ marginBottom: "4mm" }}>
          <div 
            style={{ 
              fontSize: "15px", 
              fontWeight: 700, 
              color: "#08477a", 
              textTransform: "uppercase", 
              letterSpacing: "0.3px" 
            }}
          >
            {pageData.title || "ELECTROSOFT'S SCOPE OF SERVICES"}
          </div>
        </div>

        {/* =========================================
            TABLE 1: OFF-SITE: DELIVERABLE DOCUMENTS
        ========================================= */}
        <table 
          style={{ 
            width: "100%", 
            borderCollapse: "collapse", 
            tableLayout: "fixed", 
            fontSize: "10.5px", 
            marginBottom: "4mm" 
          }}
        >
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
                  background: "#0b5576", 
                  color: "#fff", 
                  border: "1px solid #b6b6b6", 
                  padding: "1.2mm 1mm", 
                  fontSize: "11px", 
                  fontWeight: 700, 
                  fontStyle: "italic", 
                  textAlign: "center", 
                  textTransform: "uppercase" 
                }}
              >
                {pageData.offsiteTitle || "OFF-SITE: DELIVERABLE DOCUMENTS"}
              </th>
            </tr>
            <tr style={{ background: "#d8eef8" }}>
              <th style={{ border: "1px solid #b6b6b6", padding: "1mm", fontWeight: 700, textAlign: "center" }}>Sr. No.</th>
              <th style={{ border: "1px solid #b6b6b6", padding: "1mm", fontWeight: 700, textAlign: "center" }}>Description</th>
              <th style={{ border: "1px solid #b6b6b6", padding: "1mm", fontWeight: 700, textAlign: "center" }}>Quantity</th>
              <th style={{ border: "1px solid #b6b6b6", padding: "1mm", fontWeight: 700, textAlign: "center" }}>Price (INR)</th>
            </tr>
          </thead>
          <tbody>
            {offsiteItems.map((item, idx) => (
              <tr key={idx}>
                <td style={{ border: "1px solid #b6b6b6", textAlign: "center", padding: "1mm 0.5mm", fontWeight: 600 }}>{idx + 1}</td>
                <td style={{ border: "1px solid #b6b6b6", padding: "1mm 2mm", color: "#222", whiteSpace: "normal", wordBreak: "break-word" }}>{item.description}</td>
                <td style={{ border: "1px solid #b6b6b6", textAlign: "center", padding: "1mm 0.5mm", color: "#222" }}>{item.quantity || "---"}</td>
                <td style={{ border: "1px solid #b6b6b6", textAlign: "center", padding: "1mm 0.5mm", color: "#222" }}>{item.price || "---"}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* =========================================
            TABLE 2: ON-SITE
        ========================================= */}
        <table 
          style={{ 
            width: "100%", 
            borderCollapse: "collapse", 
            tableLayout: "fixed", 
            fontSize: "10.5px", 
            marginBottom: "4mm" 
          }}
        >
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
                  background: "#0b5576", 
                  color: "#fff", 
                  border: "1px solid #b6b6b6", 
                  padding: "1.2mm 1mm", 
                  fontSize: "11px", 
                  fontWeight: 700, 
                  fontStyle: "italic", 
                  textAlign: "center", 
                  textTransform: "uppercase" 
                }}
              >
                {pageData.onsiteTitle || "ON-SITE"}
              </th>
            </tr>
            <tr style={{ background: "#d8eef8" }}>
              <th style={{ border: "1px solid #b6b6b6", padding: "1mm", fontWeight: 700, textAlign: "center" }}>Sr. No.</th>
              <th style={{ border: "1px solid #b6b6b6", padding: "1mm", fontWeight: 700, textAlign: "center" }}>Description</th>
              <th style={{ border: "1px solid #b6b6b6", padding: "1mm", fontWeight: 700, textAlign: "center" }}>Quantity</th>
              <th style={{ border: "1px solid #b6b6b6", padding: "1mm", fontWeight: 700, textAlign: "center" }}>Price (INR)</th>
            </tr>
          </thead>
          <tbody>
            {onsiteItems.map((item, idx) => (
              <tr key={idx}>
                <td style={{ border: "1px solid #b6b6b6", textAlign: "center", padding: "1mm 0.5mm", fontWeight: 600 }}>{idx + 1}</td>
                <td style={{ border: "1px solid #b6b6b6", padding: "1mm 2mm", color: "#222", whiteSpace: "normal", wordBreak: "break-word" }}>{item.description}</td>
                <td style={{ border: "1px solid #b6b6b6", textAlign: "center", padding: "1mm 0.5mm", color: "#222" }}>{item.quantity || "---"}</td>
                <td style={{ border: "1px solid #b6b6b6", textAlign: "center", padding: "1mm 0.5mm", color: "#222" }}>{item.price || "---"}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* =========================================
            SECTION 3: DELIVERY SCHEDULE
        ========================================= */}
        <div style={{ marginBottom: "2mm" }}>
          <div 
            style={{ 
              fontSize: "13.5px", 
              fontWeight: 700, 
              color: "#08477a", 
              textTransform: "uppercase", 
              letterSpacing: "0.3px" 
            }}
          >
            {pageData.deliveryTitle || "DELIVERY SCHEDULE"}
          </div>
        </div>

        <table 
          style={{ 
            width: "100%", 
            borderCollapse: "collapse", 
            tableLayout: "fixed", 
            fontSize: "10.5px", 
            marginBottom: "4mm" 
          }}
        >
          <colgroup>
            <col style={{ width: "8%" }} />
            <col style={{ width: "56%" }} />
            <col style={{ width: "36%" }} />
          </colgroup>
          <thead>
            <tr style={{ background: "#d8eef8" }}>
              <th style={{ border: "1px solid #b6b6b6", padding: "1mm", fontWeight: 700, textAlign: "center" }}>Sr. No.</th>
              <th style={{ border: "1px solid #b6b6b6", padding: "1mm", fontWeight: 700, textAlign: "center" }}>Details</th>
              <th style={{ border: "1px solid #b6b6b6", padding: "1mm", fontWeight: 700, textAlign: "center" }}>Duration</th>
            </tr>
          </thead>
          <tbody>
            {deliveryItems.map((item, idx) => (
              <tr key={idx}>
                <td style={{ border: "1px solid #b6b6b6", textAlign: "center", padding: "1mm 0.5mm", fontWeight: 600 }}>{idx + 1}</td>
                <td style={{ border: "1px solid #b6b6b6", padding: "1mm 2mm", color: "#222", whiteSpace: "normal" }}>{item.details}</td>
                <td style={{ border: "1px solid #b6b6b6", textAlign: "center", padding: "1mm 2mm", color: "#222", whiteSpace: "normal" }}>
                  {item.duration || "To be discussed later"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* =========================================
            SECTION 4: NOTES
        ========================================= */}
        <div style={{ fontSize: "10px", marginTop: "1mm", width: "100%" }}>
          <div style={{ fontWeight: 700, fontStyle: "italic", marginBottom: "1.5mm", color: "#000" }}>Note:</div>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "1.8mm", width: "100%" }}>
            {notesList.map((note, index) => (
              <div key={index} style={{ display: "flex", alignItems: "flex-start", width: "100%", lineHeight: "1.35" }}>
                <div style={{ minWidth: "5mm", width: "5mm", textAlign: "right", paddingRight: "2mm", fontWeight: 600, color: "#111" }}>
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

      {/* ABSOLUTELY POSITIONED WRAPPER TO LOCK NATIVE FOOTER AT BOTTOM BOUNDARY */}
      {/* <div 
        style={{ 
          position: "absolute", 
          bottom: "12mm", 
          left: "15mm", 
          right: "15mm" 
        }}
      >
        <PdfFooter pageNumber={17} />
      </div>
       */}
    <PdfFooter pageNumber={17} />

    </div>
  );
}