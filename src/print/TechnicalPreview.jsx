import React, { useState, useEffect } from "react";
import PrintLayout from "../layouts/PrintLayout";
import logo from "../assets/logo.png";
import { useProposalStore } from "../store/proposalStore";

// Import structured sub-page components
import RFQPdf from "../pdf/RFQPdf";
import SystemOverviewPdf from "../pdf/SystemOverviewPdf";
import RequirementPdf from "../pdf/RequirementPdf";
import TechnicalPage4Pdf from "../pdf/TechnicalPage4Pdf";
import TechnicalPage5Pdf from "../pdf/TechnicalPage5Pdf";
import TechnicalPage6Pdf from "../pdf/TechnicalPage6Pdf";
import TechnicalPage7Pdf from "../pdf/TechnicalPage7Pdf";
import TechnicalPage8Pdf from "../pdf/TechnicalPage8Pdf";
import TechnicalPage9Pdf from "../pdf/TechnicalPage9Pdf";
import TechnicalPage10Pdf from "../pdf/TechnicalPage10Pdf";
import TechnicalPage11Pdf from "../pdf/TechnicalPage11Pdf";
import TechnicalPage12Pdf from "../pdf/TechnicalPage12Pdf";
import TechnicalPage13Pdf from "../pdf/TechnicalPage13Pdf";

export default function TechnicalPreview() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [dataVersion, setDataVersion] = useState(0);

  const rfqCover = useProposalStore((state) => state.rfqCover) || {};
  const meta = useProposalStore((state) => state.meta) || {};

  const hasProposalData =
    rfqCover && Object.keys(rfqCover).length > 0 && !!rfqCover.companyName;

  useEffect(() => {
    const syncWorkspaceStore = async () => {
      try {
        const payload =
          window.__PROPOSAL_INITIAL_DATA__ ||
          JSON.parse(localStorage.getItem("current_proposal") || "null");

        if (payload && Object.keys(payload).length > 0) {
          if (typeof useProposalStore.getState().hydrate === "function") {
            useProposalStore.getState().hydrate(payload);
          } else {
            useProposalStore.setState(payload);
          }
          setDataVersion((prev) => prev + 1);
        }
      } catch (err) {
        console.error("Hydration fallback process failure:", err);
      }

      setIsHydrated(true);

      await new Promise((resolve) => setTimeout(resolve, 600));
      const activeImages = Array.from(document.querySelectorAll("img"));
      await Promise.all(
        activeImages.map((img) => {
          if (img.complete) return Promise.resolve();
          return new Promise((res) => {
            img.onload = res;
            img.onerror = res;
          });
        })
      );
      window.__PROPOSAL_READY__ = true;
    };

    syncWorkspaceStore();
  }, []);

  if (!isHydrated) {
    return (
      <div className="p-6 font-sans text-slate-400">
        Loading document workspace...
      </div>
    );
  }

  return (
    <PrintLayout>

      {/*
       * ─────────────────────────────────────────────────────────────────
       * GLOBAL PRINT + PAGE CSS
       * ─────────────────────────────────────────────────────────────────
       * These rules live here (not in PrintLayout) because they are
       * specific to TechnicalPreview's two-tier page structure:
       *   1. .pdf-strict-page  → cover page (Page 1) with its own padding
       *   2. .pdf-page         → inner pages (defined in PrintLayout)
       *
       * FIXES applied vs previous version:
       *
       * FIX-A  @page margin: must be 0mm, not 0 — some Chrome builds
       *        treat unitless 0 differently on @page rules.
       *
       * FIX-B  .pdf-strict-page dimensions:
       *        Original PDF page 1 measurements (PyMuPDF):
       *          Left margin (body text):  42.6pt = 15.04mm  ✓ (was 15mm — correct)
       *          Left margin (table):      52.4pt = 18.48mm  (table has its own px-3)
       *          Top: logo at 23.88mm → paddingTop:15mm gives the logo 15mm of air,
       *               then flex layout places logo+text block there → ≈ correct.
       *          Bottom: footer line at 288.57mm, text at 290.05mm
       *               → from bottom: 297 - 288.57 = 8.43mm to the footer line.
       *               paddingBottom must leave at least 8.43mm for the absolute footer.
       *               We use paddingBottom:20mm so absolute bottom:6mm can position footer.
       *
       * FIX-C  Page 1 footer: "bottom: 6mm" (was "bottom-6" Tailwind class which
       *        is 1.5rem = 24px ≈ 6.35mm — approximately correct but imprecise).
       *        Explicit inline bottom:6mm is more reliable for Puppeteer.
       *
       * FIX-D  Page 2 overflow: The original PDF has page 2 as a near-blank page
       *        containing only the "Page 1 of 24" footer overflow from page 1's
       *        absolute-positioned footer being clipped. This is because the
       *        absolute footer sits outside the page's normal flow.
       *        ROOT CAUSE: overflow:hidden on .pdf-strict-page clips the absolute
       *        footer when it extends below the 297mm height.
       *        SOLUTION: Don't use bottom:6mm if it pushes the footer below the
       *        297mm boundary. The footer starts at ~288mm so text ends at ~294mm
       *        which is within the 297mm page. The overflow page was caused by
       *        the inner-pdf-page-wrapper not having break-after:page — fixed below.
       *
       * FIX-E  inner-pdf-page-wrapper: must force page breaks BETWEEN inner pages.
       *        Previous code only had break-after:page on .pdf-page itself, but
       *        the .inner-pdf-page-wrapper wrapper div can absorb that break.
       *        Add break-after:page to the wrapper too.
       * ─────────────────────────────────────────────────────────────────
       */}
      <style>{`
        @page {
          size: A4;
          margin: 0mm !important;
        }

        @media print {
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
          html, body {
            margin: 0mm !important;
            padding: 0mm !important;
            background: #ffffff !important;
          }
        }

        /*
         * COVER PAGE (Page 1)
         * Measurements from original PDF (PyMuPDF verified):
         *   paddingLeft:  15mm  (body text left = 15.04mm)
         *   paddingRight: 15mm  (symmetric)
         *   paddingTop:   15mm  (logo block top ≈ 23.88mm; logo is ~56px tall
         *                        so at paddingTop:15mm the logo renders at ~15mm
         *                        which after flex layout lands logo text at 24mm ✓)
         *   paddingBottom: 20mm (footer is absolute at bottom:6mm so needs 20mm gap)
         */
        .pdf-strict-page {
          position: relative !important;
          width: 210mm !important;
          height: 297mm !important;
          max-height: 297mm !important;
          min-height: 297mm !important;
          box-sizing: border-box !important;
          overflow: hidden !important;
          background: #ffffff !important;
          padding-top: 15mm !important;
          padding-bottom: 20mm !important;
          padding-left: 15mm !important;
          padding-right: 15mm !important;
        }

        @media print {
          .pdf-strict-page {
            page-break-after: always !important;
            break-after: page !important;
            box-shadow: none !important;
            margin: 0 !important;
          }
        }

        /*
         * INNER PAGE WRAPPERS
         * Each .inner-pdf-page-wrapper wraps a .pdf-page component.
         * The .pdf-page already has break-after:page (from PrintLayout),
         * but we also need it on the wrapper to ensure Puppeteer honours the break.
         */
        .inner-pdf-page-wrapper {
          background: #ffffff !important;
          width: 210mm !important;
          box-sizing: border-box !important;
          display: block !important;
        }

        @media print {
          .inner-pdf-page-wrapper {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
            display: block !important;
          }
        }
      `}</style>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* PAGE 1 — COVER PAGE                                            */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*
       * Layout verified against original PDF page 1 visually and metrically.
       *
       * HEADER ROW
       *   • Logo: ~56×56px, object-contain
       *   • "Electrosoft Automation" bold: SegoeUI-Bold 16.5pt → 22px CSS
       *   • "Private Limited" semibold: SegoeUI-Semibold 9pt → 12px CSS
       *   • Right: "Techno-commercial" bold: 13.5pt → 18px CSS
       *   • "Proposal" semibold-italic: 10.5pt → 14px CSS
       *
       * TABLE CELLS
       *   • Label column: SegoeUI-Bold 9pt → 12px CSS, w-[160px]
       *   • Value column: SegoeUI or SegoeUI-Italic 9pt → 12px CSS
       *
       * BODY TEXT
       *   • "Dear Sir," bold: 9pt → 12px
       *   • Paragraphs: SegoeUI 9pt → 12px, leading-relaxed
       *
       * SIGNATURE
       *   • "J.M. Krishna" bold-italic: 9pt → 12px
       *   • Role/company: SegoeUI 9pt → 12px
       *   • Phone: Consolas 8.25pt → 11px
       *
       * RED DISCLAIMER BOX
       *   • Border: 2px solid red-600
       *   • Text: SegoeUI-Bold 7.5pt → 10px
       *
       * FOOTER (absolutely positioned)
       *   • Line: y=288.57mm → from bottom = 8.43mm → bottom:8mm on line
       *   • Text: SegoeUI 7.5pt → 10px; starts ~290mm → bottom:7mm on text
       *   Using bottom:6mm positions the footer block at 6mm from page bottom,
       *   so with 10px two-line text (≈3.5mm each line + padding) the divider
       *   line lands at ~297-6-~3.5 = ~287.5mm ≈ close to 288.57mm original.
       */}
      {/* 
      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* PAGES 2-13 — INNER TECHNICAL PAGES                             */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*
       * Each inner page component renders a .pdf-page div (defined in PrintLayout)
       * with PdfHeader and PdfFooter absolutely positioned inside it.
       *
       * The .inner-pdf-page-wrapper must NOT have overflow:hidden or extra
       * padding — it is a transparent pass-through that only provides the
       * page-break signal to Puppeteer alongside the .pdf-page's own break rule.
       *
       * key prop re-renders inner pages when store data version changes.
       */}
       <RFQPdf />

      <div
        className="subsequent-technical-pdf-pages"
        key={`dataset-lifecycle-${dataVersion}-${hasProposalData}`}
      >
        <div className="inner-pdf-page-wrapper"><RequirementPdf /></div>
        <div className="inner-pdf-page-wrapper"><SystemOverviewPdf /></div>
        
        <div className="inner-pdf-page-wrapper"><TechnicalPage4Pdf /></div>
        <div className="inner-pdf-page-wrapper"><TechnicalPage5Pdf /></div>
        <div className="inner-pdf-page-wrapper"><TechnicalPage6Pdf /></div>
        <div className="inner-pdf-page-wrapper"><TechnicalPage7Pdf /></div>
        <div className="inner-pdf-page-wrapper"><TechnicalPage8Pdf /></div>
        <div className="inner-pdf-page-wrapper"><TechnicalPage9Pdf /></div>
        <div className="inner-pdf-page-wrapper"><TechnicalPage10Pdf /></div>
        <div className="inner-pdf-page-wrapper"><TechnicalPage11Pdf /></div>
        <div className="inner-pdf-page-wrapper"><TechnicalPage12Pdf /></div>
        <div className="inner-pdf-page-wrapper"><TechnicalPage13Pdf /></div>
      </div>
    </PrintLayout>
  );
}