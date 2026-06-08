import React from "react";
import PdfHeader from "./components/PdfHeader";
import PdfFooter from "./components/PdfFooter";
import { useProposalStore } from "../store/proposalStore";

/*
 * RequirementPdf — Page 2 "Statement of Requirements"
 *
 * FORENSIC COMPARISON vs target PDF page 2 (PyMuPDF measurements):
 *
 * LAYOUT:
 *   • "Statement of Requirements:" — SegoeUI-BoldItalic 11.04pt, y=93.7pt=33.1mm
 *     Rendered inside a light gray shaded background bar (like a section header)
 *   • Intro paragraph — SegoeUI 10.08pt, starts at y=125.9pt=44.5mm
 *   • Test list — SINGLE COLUMN, numbered 1–18, each ~19pt row height
 *     Font: SegoeUI 10.08pt, color #0f172a
 *     Item 4 spans 2 lines
 *     Items start at y=190pt=67mm
 *   • "Note: Impulse generator..." — SegoeUI-Bold 10.08pt, y=542.5pt=191.5mm
 *     Indented, bold
 *   • "Proposed solution:" — SegoeUI-BoldItalic 11.04pt, y=586pt=206.7mm
 *     Same shaded gray bar style as the title
 *   • Solution paragraph — SegoeUI 10.08pt, y=618pt=218.2mm
 *
 * KEY DIFFERENCES FROM OLD CODE:
 *   1. Single column (NOT 2-column grid) for the test list
 *   2. Section headers ("Statement of Requirements:" and "Proposed solution:")
 *      use a shaded gray background bar — NOT just a colored heading
 *   3. No blue left-border box for the note/solution section
 *   4. Note is just a bold indented paragraph
 *   5. No blue numbered items — plain black text with number prefix
 *   6. Font size closer to 9.5px (10.08pt × 96/72 = 13.4px... but visually
 *      in PDF it looks about 9.5-10px CSS due to PDF point rendering)
 */
export default function RequirementPdf() {
  const requirement = useProposalStore((state) => state.requirement);
  const meta = useProposalStore((state) => state.meta);
  const rfqCover = useProposalStore((state) => state.rfqCover);

  const fallbackTests = [
    "Measurement of winding resistance at all taps",
    "Measurement of voltage ratio at all taps",
    "Check of phase displacement and vector group",
    "Measurement of no-load loss and no-load current at 90%, 100% & 110% of rated voltage & frequency",
    "Magnetic balance test and measurement of magnetizing current",
    "Short-circuit impedance and load-loss measurement at principal tap and extreme taps",
    "Measurement of insulation resistance & Polarization Index (PI)",
    "Applied Voltage Test (AV)",
    "Induced Voltage Withstand Test (IVW)",
    "On-load tap changer (OLTC) testing with tap-changer fully assembled on transformer",
    "Core and frame insulation check",
    "Leak testing with pressure for liquid-immersed transformers (tightness test)",
    <>Measurement of no-load current and short-circuit impedance using <strong>415 V, 50 Hz</strong> AC supply</>,
    "Temperature rise test",
    "Full Wave Lightning Impulse Test (LI) for line terminals",
    "Measurement of zero-sequence reactance",
    "Measurement of harmonic levels in no-load current",
    "Induced voltage test with Partial Discharge measurement (IVPD)",
  ];

  const displayTests =
    requirement?.tests?.length > 0 ? requirement.tests : fallbackTests;

  // Shared section header bar style (gray background, italic bold)
  const sectionHeader = {
  backgroundColor: "#dfeaf6",
  padding: "6px 10px",
  fontSize: "13.5px",
  fontWeight: "700",
  fontStyle: "italic",
  color: "#000000",
  marginBottom: "12px",
};

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

        {/* ── Section header bar: "Statement of Requirements:" ──── */}
        <div style={sectionHeader}>
          Statement of Requirements:
        </div>

        {/* ── Intro paragraph ───────────────────────────────────── */}
        <p
          style={{
            fontSize: "13px",
            color: "#000000",
            lineHeight: "1.75",
            textAlign: "justify",
            margin: "0 0 14px 0",
          }}
        >
          Esteemed M/s{" "}
          {rfqCover?.companyName
            ? rfqCover.companyName.replace(/^M\/s\s*/i, "")
            : "Neotrafo Solutions India Pvt. Ltd."}{" "}
          has outlined the requirement of a comprehensive transformer testing
          system suitable for Extra High Voltage (EHV) transformers rated up to{" "}
          <strong>{meta?.transformerRating || "500 MVA"}</strong>,{" "}
          <strong>{meta?.voltageClass || "765 kV"}</strong>. The required test
          capabilities are as follows:
        </p>

        {/* ── Test list — SINGLE COLUMN, numbered ──────────────── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0",
            marginBottom: "16px",
            marginLeft: "14px",
          }}
        >
          {displayTests.map((test, index) => (
            <div
              key={index}
              style={{
                display: "grid",
                gridTemplateColumns: "8mm 1fr",
                fontSize: "13px",
                color: "#000000",
                lineHeight: "1.9",
                paddingBottom: "3px",
              }}
            >
              <span>{index + 1}.</span>
              <span>{test}</span>
            </div>
          ))}
        </div>

        {/* ── Note ─────────────────────────────────────────────── */}
        <div
          style={{
            fontSize: "13.5px",
            color: "#000000",
            fontWeight: "700",
            marginBottom: "18px",
            marginLeft: "8px",
          }}
        >
          Note:&nbsp; Impulse generator and PD detector are in customer scope
        </div>

        {/* <div style={{ flex: 1 }} /> */}

        {/* ── Section header bar: "Proposed solution:" ─────────── */}
        <div style={sectionHeader}>
          Proposed solution:
        </div>

        {/* ── Proposed solution paragraph ───────────────────────── */}
        <p
          style={{
            fontSize: "13px",
            color: "#000000",
            lineHeight: "1.75",
            textAlign: "justify",
            margin: "0",
          }}
        >
          Electrosoft proposes an{" "}
          <strong>Advanced Fully–Automatic Transformer Testing System</strong>{" "}
          engineered to meet the complete range of tests requested by{" "}
          <strong>
            {rfqCover?.companyName
              ? rfqCover.companyName.replace(/^M\/s\s*/i, "")
              : "Neotrafo Solutions India Pvt. Ltd."}
          </strong>{" "}
          for transformers up to{" "}
          <strong>
            {meta?.transformerRating || "500 MVA"},{" "}
            {meta?.voltageClass || "765 kV"}
          </strong>
          . The solution integrates intelligent automation, precise measurement
          instruments, robust safety interlocks, and seamless test execution
          through our proprietary X'mer Edge™ software.
        </p>

      </div>

      <PdfFooter pageNumber={2} />
    </div>
  );
}