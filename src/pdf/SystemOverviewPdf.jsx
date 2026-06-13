import React from "react";
import PdfHeader from "./components/PdfHeader";
import PdfFooter from "./components/PdfFooter";
import { useProposalStore } from "../store/proposalStore";

/*
 * SystemOverviewPdf — Page 3 "ATTS — Where Intelligence Meets Automation"
 *
 * FORENSIC COMPARISON vs target PDF page 3 (PyMuPDF measurements):
 *
 *   "ADVANCED TRANSFORMER TESTING SYSTEM (ATTS)": SegoeUI-Bold 13pt, y=92pt=32.5mm
 *   "Where Intelligence Meets Automation": SegoeUI-BoldItalic 10.08pt, y=119pt=42mm
 *   Body paragraph (intro): SegoeUI 10.08pt, y=150pt=53mm
 *   "Real-World Proven:..." heading: SegoeUI-Bold 10.08pt, y=211pt=74.5mm
 *   "Key Highlights:": SegoeUI-BoldItalic 10.08pt, y=302pt=106.7mm
 *   "1. Centralized Command...": SegoeUI-Bold 10.08pt, y=333pt=117.6mm
 *   All body text: SegoeUI 10.08pt (~9.5px CSS)
 *
 * KEY DIFFERENCES FROM OLD CODE:
 *   1. NO "PROVEN TRACK" badge — that was invented, not in target
 *   2. NO card grid with borders/backgrounds — plain text layout
 *   3. NO 2-column highlight grid — highlights are numbered bold headings
 *      followed by plain paragraph text, all in a single column
 *   4. Section heading "ATTS" is dark blue bold, NOT gray
 *   5. "Where Intelligence Meets Automation" is italic, NOT black 20px
 *   6. Font size throughout: 9.5px (not 13px/20px/9.5px mix)
 *   7. No blue/navy colored items — all text is #0f172a (near black)
 */
export default function SystemOverviewPdf() {
  const systemOverview = useProposalStore((state) => state.systemOverview);

  const highlights =
    systemOverview?.highlights?.length > 0
      ? systemOverview.highlights
      : [
          {
            title: "Centralized Command with X'Mer Edge™ Software",
            desc: "All test procedures are orchestrated from a single intelligent console powered by our proprietary software, X'Mer Edge™. This platform offers unified control, monitoring, and sequencing of all tests, empowering engineers with real-time oversight, effortless navigation, and audit-ready documentation.",
          },
          {
            title: "Ultra-Efficient Workflow",
            desc: "With just three core connection setups, the system can perform up to 18 critical transformer tests automatically, drastically cutting down on setup time and potential connection errors. This increases throughput, minimizes manual handling, and guarantees test consistency.",
          },
          {
            title: "Built for Unmatched Accuracy & Reliability",
            desc: "Every component is precision-engineered and calibrated to meet or exceed IEC/IEEE testing standards. From insulation resistance to power loss analysis, every measurement is accurate, repeatable, and traceable.",
          },
          {
            title: "Automated Switching and Operator Efficiency Features",
            desc: "The system is equipped with motorized isolators for both the HT capacitor bank and the temperature-rise test circuit. It also incorporates pneumatically operated knife switches for CT–PT primary selection. These automated switching mechanisms significantly reduce operator effort, increase safety and system throughput, minimize manual errors, and enhance overall testing speed and reliability.",
          },
        ];

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

        {/* ── Main heading ─────────────────────────────────────── */}
        {/* SegoeUI-Bold 13pt = ~17px CSS; color #1e3a8a (dark blue) */}
        <h2
          style={{
            fontSize: "18.67px",
            color: "#09385f",
            fontWeight: "700",
            margin: "0 0 8px 0",
             textTransform: "uppercase",
            letterSpacing: "0.3px",
          }}
        >
          {systemOverview?.heading || "Advanced Transformer Testing System (ATTS)"}
        </h2>

        {/* ── Tagline ──────────────────────────────────────────── */}
        {/* SegoeUI-BoldItalic 10.08pt */}
        <p
          style={{
            fontSize: "14.67px",
            fontWeight: "700",
            fontStyle: "italic",
            color: "#000000",
            margin: "0 0 14px 0",
          }}
        >
          {systemOverview?.tagline || "Where Intelligence Meets Automation"}
        </p>

        {/* ── Intro body paragraph ──────────────────────────────── */}
        <p
          style={{
            fontSize: "14.67px",
            color: "#000000",
            lineHeight: "1.45",
            textAlign: "justify",
            margin: "0 0 16px 0",
          }}
        >
          Backed by decades of transformer testing expertise, Electrosoft proudly presents a world-class
          Advanced Transformer Testing Suite, setting a new industry benchmark in accuracy, operational
          speed, and engineering sophistication.
        </p>

        {/* ── Real-World Proven heading + paragraph ─────────────── */}
        <p style={{ margin: "0 0 6px 0" }}>
          <span
            style={{
              fontSize: "14.67px",
              fontWeight: "700",
              color: "#000000",
            }}
          >
            Real-World Proven: 750 MVA System Supplied to CG Bhopal
          </span>
        </p>
        <p
          style={{
            fontSize: "14.67px",
            color: "#000000",
            lineHeight: "1.45",
            textAlign: "justify",
            margin: "0 0 12px 0",
          }}
        >
          Recently delivered to CG Bhopal for testing of 750 MVA transformers, our Advanced System
          features a 43-inch industrial-grade display, enabling seamless visualization of test parameters
          and real-time diagnostics. Integrated with a dedicated Manual Control Station, the system
          provides enhanced flexibility for technicians who prefer hands-on control for critical test
          sequences.
        </p>

        {/* ── Key Highlights heading ────────────────────────────── */}
        <p
          style={{
            fontSize: "14.67px",
            fontWeight: "700",
            fontStyle: "italic",
            color: "#000000",
            margin: "0 0 12px 0",
          }}
        >
          Key Highlights:
        </p>

        {/* ── Highlights — numbered bold heading + paragraph ────── */}
       <div
  style={{
    display: "flex",
    flexDirection: "column",
    minHeight: "235mm",
  }}
>
          {highlights.map((item, index) => (
            <div key={index}>
              <p style={{ margin: "0 0 6px 0" }}>
                <span
                  style={{
                    fontSize: "14.67px",
                    fontWeight: "700",
                    color: "#000000",
                  }}
                >
                  {index + 1}. {item.title}
                </span>
              </p>
              <p
                style={{
                  fontSize: "14.67px",
                  color: "#000000",
                  lineHeight: "1.45",
                  textAlign: "justify",
                  margin: "0",
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>

      <PdfFooter pageNumber={3} />
    </div>
  );
}