import React from "react";
import PdfHeader from "./components/PdfHeader";
import PdfFooter from "./components/PdfFooter";
import { useProposalStore } from "../store/proposalStore";

export default function CommercialPage20Pdf() {
  const commercialPages = useProposalStore((state) => state.commercialPages);
  const pageData = commercialPages?.page20;

  if (!pageData) return null;

  const items = pageData.items || [];

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
        {/* TITLE */}
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
          {pageData.title || "INVESTMENT DETAILS (PRICE BID)"}
        </div>

        {/* INTRO */}
        <div style={{ fontSize: "13.5px", color: "#000000", marginBottom: "3mm" }}>
          {pageData.intro}
        </div>

        {/* PRICE TABLE */}
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            tableLayout: "fixed",
            fontSize: "13px",
            marginBottom: "4mm",
          }}
        >
          <colgroup>
            <col style={{ width: "10%" }} />
            <col style={{ width: "50%" }} />
            <col style={{ width: "16%" }} />
            <col style={{ width: "16%" }} />
          </colgroup>
          <thead>
            <tr style={{ background: "#d8eef8" }}>
              <th style={{ border: "1px solid #b6b6b6", padding: "1.2mm 1mm", fontWeight: 700, textAlign: "center" }}>
                Sr. No.
              </th>
              <th style={{ border: "1px solid #b6b6b6", padding: "1.2mm 2mm", fontWeight: 700, textAlign: "center" }}>
                Description
              </th>
              <th style={{ border: "1px solid #b6b6b6", padding: "1.2mm 1mm", fontWeight: 700, textAlign: "center" }}>
                Quantity
              </th>
              <th style={{ border: "1px solid #b6b6b6", padding: "1.2mm 1mm", fontWeight: 700, textAlign: "center" }}>
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, idx) => (
              <tr key={idx}>
                <td style={{ border: "1px solid #b6b6b6", textAlign: "center", padding: "1mm 0.5mm", fontWeight: 600, verticalAlign: "top" }}>
                  {item.srNo}
                </td>
                <td style={{ border: "1px solid #b6b6b6", padding: "1mm 2mm", color: "#000000", verticalAlign: "top" }}>
                  {/* Support both plain description and multi-line descriptionLines */}
                  {item.descriptionLines ? (
                    item.descriptionLines.map((line, i) => (
                      <div key={i}>{line}</div>
                    ))
                  ) : (
                    item.description
                  )}
                </td>
                <td style={{ border: "1px solid #b6b6b6", textAlign: "center", padding: "1mm 0.5mm", color: "#000000", verticalAlign: "top" }}>
                  {item.quantity}
                </td>
                <td style={{ border: "1px solid #b6b6b6", textAlign: "center", padding: "1mm 0.5mm", color: "#000000", verticalAlign: "top" }}>
                  {item.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* TERMS BLOCKS — match exact visual layout from screenshot */}
        <div style={{ fontSize: "13.5px", color: "#000000", lineHeight: "1.5" }}>

          {/* Packing */}
          <div style={{ marginBottom: "2.5mm" }}>
            <span style={{ fontWeight: 700 }}>{pageData.packingLabel}</span>
            {pageData.packingDetail && (
              <div style={{ fontStyle: "italic", color: "#555" }}>{pageData.packingDetail}</div>
            )}
          </div>

          {/* Freight */}
          <div style={{ marginBottom: "2.5mm" }}>
            <span style={{ fontWeight: 700 }}>{pageData.freightLabel}</span>
            {(pageData.freightDetails || []).map((line, i) => (
              <div key={i} style={{ fontStyle: "italic", color: "#555" }}>{line}</div>
            ))}
          </div>

          {/* Incoterms */}
          <div style={{ marginBottom: "2.5mm" }}>
            <span style={{ fontWeight: 700 }}>{pageData.incoterms}</span>
          </div>

          {/* Transit Insurance */}
          <div style={{ marginBottom: "2.5mm" }}>
            <span style={{ fontWeight: 700 }}>{pageData.transitLabel}</span>
            {(pageData.transitLines || []).map((line, i) => (
              <div key={i} style={{ fontStyle: "italic", color: "#555" }}>{line}</div>
            ))}
          </div>

          {/* Offer Validity */}
          <div style={{ marginBottom: "2.5mm" }}>
            <span style={{ fontWeight: 700 }}>{pageData.offerValidity}</span>
          </div>

          {/* Payment Terms — Supply */}
          <div style={{ marginBottom: "2.5mm" }}>
            <div style={{ fontWeight: 700, marginBottom: "0.5mm" }}>{pageData.paymentSupplyLabel}</div>
            {(pageData.paymentSupplyLines || []).map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </div>

          {/* Payment Terms — On-site */}
          <div style={{ marginBottom: "2.5mm" }}>
            <div style={{ fontWeight: 700, marginBottom: "0.5mm" }}>{pageData.paymentOnsiteLabel}</div>
            {(pageData.paymentOnsiteLines || []).map((line, i) => (
              <div key={i} style={{ fontStyle: "italic", color: "#555" }}>{line}</div>
            ))}
          </div>

          {/* Warranty */}
          <div style={{ marginBottom: "2.5mm" }}>
            <span style={{ fontWeight: 700 }}>{pageData.warrantyLabel}</span>
            {(pageData.warrantyLines || []).map((line, i) => (
              <span key={i}>{line} </span>
            ))}
          </div>

          {/* On-site Services */}
          <div style={{ marginBottom: "2.5mm" }}>
            <div style={{ fontWeight: 700, marginBottom: "0.5mm" }}>{pageData.onsiteLabel}</div>
            {(pageData.onsiteLines || []).map((line, i) => (
              <div key={i} style={{ fontStyle: "italic", color: "#555" }}>{line}</div>
            ))}
          </div>

        </div>
      </div>

      <PdfFooter pageNumber={20} />
    </div>
  );
}