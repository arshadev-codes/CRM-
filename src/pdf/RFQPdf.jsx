import React from "react";
import PdfHeader from "./components/PdfHeader";
import PdfFooter from "./components/PdfFooter";
import { useProposalStore } from "../store/proposalStore";

/*
 * RFQPdf — Cover Page (Page 1 of 24)
 *
 * FORENSIC MEASUREMENTS (target PDF, PyMuPDF):
 *   Page is 595.3×841.9pt (A4 = 210×297mm)
 *   Header: logo left, "Techno-commercial / Proposal" right — handled by PdfHeader
 *   Content starts at y=93.7pt = 33.1mm (same as inner pages)
 *
 *   TABLE 1 (To / Name / Subject / Reference / Date):
 *     "To" y=109.9pt = 38.8mm,  left col x=101.3pt, right col x=237pt
 *     Rows: To, Name of the company, Subject, Our reference, Date
 *     Row height: ~19pt = 6.7mm per row
 *
 *   TABLE 2 (Prepared by / Checked by / Revision / Contact):
 *     "Prepared by" y=251.3pt = 88.7mm
 *     Rows: Prepared by, Checked by, Revision no. & date, Contact Address
 *
 *   Gap between tables: ~250 - 204 ≈ 46pt = 16mm
 *
 *   "Dear Sir," y=415.6pt = 146.7mm
 *   Body paragraphs: 3 paragraphs of SegoeUI 10.08pt text
 *
 *   "Sincerely," y=628pt = 221.7mm
 *   Signature block (left) + red confidentiality box (right)
 *
 *   Footer: 3-line italic at y=730.9pt = 257.9mm (handled by PdfFooter)
 *
 * TWO SEPARATE TABLES — not merged. Table 1 has full-width borders.
 * Table 2 also has full-width borders.
 * Labels in BOLD (SegoeUI-Bold), values in regular/italic SegoeUI.
 * No alternating row colors — clean white background.
 */
export default function RFQPdf() {
  const rfqCover = useProposalStore((state) => state.rfqCover);
  const meta = useProposalStore((state) => state.meta);

  const to = `${rfqCover?.title ? rfqCover.title + " " : ""}${rfqCover?.to || "VC Krishna"}`;
  const companyName = rfqCover?.companyName || "M/s Neotrafo Solutions India Private Limited";
  const subject = `Techno-commercial offer for ${meta?.transformerRating || "500 MVA"}, ${meta?.voltageClass || "765kV"} Transformer Testing System - ${meta?.systemType || "Advanced"}`;
  const reference = rfqCover?.reference || "Q001/2025-26/Neo/TTS/R0";
  const date = rfqCover?.date || "24th November 2025";
  const preparedBy = rfqCover?.preparedBy || "J.M. Krishna";
  const checkedBy = rfqCover?.checkedBy || "Sabir Baig";
  const revision = rfqCover?.revision || "Rev. 0";
  const revisionDate = rfqCover?.revisionDate || "24.11.2025";
  const contactAddress = rfqCover?.address || "Electrosoft Automation Pvt. Ltd.,\nS7-1&2, Jai Matadi Compound, Thane-Bhiwandi Road,\nKalher, Thane District, Maharashtra, India – 421302\nTel. No. +91 8692 888 444";

  const labelCell = {
    padding: "4px 6px",
    fontWeight: "700",
    fontSize: "14.67px",
    color: "#000000",
    borderRight: "1px solid #808080",
    width: "45mm",
    verticalAlign: "middle",
    lineHeight: "1.3",
  };

  const valueCell = {
    padding: "4px 6px",
    fontSize: "14.67px",
    color: "#000000",
    verticalAlign: "middle",
    lineHeight: "1.3",
  };

  const rowBorder = {
    borderBottom: "1px solid #808080",
  };

  const tableStyle = {
    width: "155mm",
    borderCollapse: "collapse",
    border: "1px solid #808080",
    fontSize: "14.67px",
    marginBottom: "0",
    margin: "0 auto",
    tableLayout: "fixed",   /* prevents table from growing beyond parent width */
  };

  return (
    <div className="pdf-page">
      <PdfHeader />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "230mm",
        }}
      >

        {/* ── TABLE 1: To / Company / Subject / Reference / Date ── */}
        <table style={tableStyle}>
          <tbody>
            <tr style={rowBorder}>
              <td style={labelCell}>To</td>
              <td style={valueCell}>{to}</td>
            </tr>
            <tr style={rowBorder}>
              <td style={labelCell}>Name of the company</td>
              <td style={valueCell}>{companyName}</td>
            </tr>
            <tr style={rowBorder}>
              <td style={labelCell}>Subject</td>
              <td style={{ ...valueCell, fontStyle: "normal" }}>{subject}</td>
            </tr>
            <tr style={rowBorder}>
              <td style={labelCell}>Our reference</td>
              <td style={valueCell}>{reference}</td>
            </tr>
            <tr>
              <td style={labelCell}>Date</td>
              <td style={valueCell}>{date}</td>
            </tr>
          </tbody>
        </table>

        {/* Gap between tables */}
        <div style={{ height: "10mm" }} />

        {/* ── TABLE 2: Prepared by / Checked by / Revision / Contact ── */}
        <table style={tableStyle}>
          <tbody>
            <tr style={rowBorder}>
              <td style={labelCell}>Prepared by</td>
              <td style={valueCell}>{preparedBy}</td>
            </tr>
            <tr style={rowBorder}>
              <td style={labelCell}>Checked by</td>
              <td style={valueCell}>{checkedBy}</td>
            </tr>
            <tr style={rowBorder}>
              <td style={labelCell}>Revision no. &amp; date</td>
              <td style={{ ...valueCell, fontStyle: "normal" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr auto" }}>
                  <span>{revision}</span>
                  <span>{revisionDate}</span>
                </div>
              </td>
            </tr>
            <tr>
              <td style={labelCell}>Contact Address</td>
              <td style={{ ...valueCell, fontStyle: "normal" }}>
                <div style={{ whiteSpace: "pre-line", lineHeight: "1.5" }}>
                  {contactAddress}
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Spacer */}
        <div style={{ height: "20mm" }} />

        {/* ── Dear Sir + body paragraphs ────────────────────────── */}
        <div
          style={{
            fontSize: "14.67px",
            color: "#000000",
            lineHeight: "1.45",
          }}
        >
          <p style={{ margin: "0 0 8px 0" }}>Dear Sir,</p>
          <p style={{ margin: "0 0 8px 0", textAlign: "justify" }}>
            With reference to your inquiry, we are pleased to submit our Techno-Commercial Offer for{" "}
            {meta?.transformerRating || "500 MVA"}, {meta?.voltageClass || "765 kV"} Transformer Testing
            system. Electrosoft Automation Pvt. Ltd. specializes in the design, development, and
            manufacturing of a wide range of Transformer Testing Systems. Our solutions are used by power
            utilities, transformer manufacturers, and research institutes across the globe.
          </p>
          <p style={{ margin: "0 0 8px 0", textAlign: "justify" }}>
            We offer testing systems that range from conventional to fully automated and advanced, tailored
            to suit diverse application needs. We trust the enclosed offer meets your expectations and
            technical requirements.
          </p>
          <p style={{ margin: "0", textAlign: "justify" }}>
            Thank you for considering Electrosoft Automation Pvt. Ltd. for your transformer testing needs.
            We look forward to the opportunity to work with you and provide advanced, reliable testing
            systems.
          </p>
        </div>

        <div style={{ height: "18mm" }} />

        {/* ── Signature (left) + Confidentiality box (right) ────── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
            alignItems: "start",
            marginBottom: "4mm",
            /* Ensure the grid never exceeds the page content width */
            width: "100%",
            boxSizing: "border-box",
          }}
        >

          {/* Left: Sincerely block */}
          <div style={{ fontSize: "14.67px", color: "#000000", lineHeight: "1.6" }}>
            <div>Sincerely,</div>
            <div style={{ fontStyle: "italic", fontWeight: "700" }}>{preparedBy}</div>
            <div>General Manager</div>
            <div>Electrosoft Automation Pvt. Ltd.</div>
            <div>+91 9089 888 444</div>
          </div>

          {/* Right: Red confidentiality notice box
              ── width / height are intentionally NOT set here.
              ── The grid column (1fr) constrains it automatically.       */}
          <div
            style={{
              border: "1px solid #da0000",
              padding: "6px 8px",
              fontSize: "12.5px",
              color: "#da0000",
              fontWeight: "500",
              textAlign: "center",
              lineHeight: "1.5",
              boxSizing: "border-box",
              /* width: "95mm"  ← REMOVED — this was forcing the page wider */
              /* height: "32mm" ← REMOVED — let content determine height    */
            }}
          >
            This techno-commercial proposal, including all pages, literature,
            photographs, and linked documents, is the confidential property of
            Electrosoft Automation Pvt. Ltd. It must not be shared, lent, or
            disclosed to any third party without the prior written consent of{" "}
            <strong>Electrosoft Automation Pvt. Ltd.</strong>
          </div>
        </div>

      </div>

      <PdfFooter pageNumber={1} />
    </div>
  );
}