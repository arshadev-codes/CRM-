import React, { useState, useEffect } from "react";
import PrintLayout from "../layouts/PrintLayout";
import { useProposalStore } from "../store/proposalStore";

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

import CommercialPage14Pdf from "../pdf/CommercialPage14Pdf";
import CommercialPage15Pdf from "../pdf/CommercialPage15Pdf";
import CommercialPage16Pdf from "../pdf/CommercialPage16pdf";
import CommercialPage17Pdf from "../pdf/CommercialPage17pdf";
import CommercialPage18Pdf from "../pdf/CommercialPage18Pdf";
import CommercialPage19Pdf from "../pdf/CommercialPage19Pdf";
import CommercialPage20Pdf from "../pdf/CommercialPage20Pdf";
import CommercialPage21Pdf from "../pdf/CommercialPage21Pdf";
import CommercialPage22Pdf from "../pdf/CommercialPage22Pdf";
import CommercialPage23Pdf from "../pdf/CommercialPage23Pdf";
import CommercialPage24Pdf from "../pdf/CommercialPage24Pdf";

// ─── Synchronous scope read ───────────────────────────────────────────────────
// window.__EXPORT_SCOPE__ is set by evaluateOnNewDocument in the backend
// BEFORE this script ever executes — so this is always available on first read.
function readScope() {
  try {
    if (window.__EXPORT_SCOPE__) {
      console.log("[TechnicalPreview] scope from __EXPORT_SCOPE__:", window.__EXPORT_SCOPE__);
      return window.__EXPORT_SCOPE__;
    }
    const scope = window.__PROPOSAL_INITIAL_DATA__?.exportScope;
    console.log("[TechnicalPreview] scope from __PROPOSAL_INITIAL_DATA__:", scope);
    return scope === "technical" ? "technical" : "full";
  } catch {
    return "full";
  }
}

export default function TechnicalPreview() {
  const [isHydrated, setIsHydrated]   = useState(false);
  const [dataVersion, setDataVersion] = useState(0);

  const [exportScope] = useState(readScope);

  const rfqCover        = useProposalStore((state) => state.rfqCover) || {};
  const hasProposalData = rfqCover && Object.keys(rfqCover).length > 0 && !!rfqCover.companyName;

  const includeCommercial = exportScope !== "technical";

  console.log("[TechnicalPreview] exportScope:", exportScope, "| includeCommercial:", includeCommercial);

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
            img.onload  = res;
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
      <div style={{ padding: "24px", fontFamily: "sans-serif", color: "#94a3b8" }}>
        Loading document workspace...
      </div>
    );
  }

  return (
    <PrintLayout>
      {/*
       * Print-specific overrides.
       * NOTE: We do NOT redefine .pdf-page width/padding here — those live
       * exclusively in PrintLayout so there is only one source of truth.
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
            margin: 0 !important;
            padding: 0 !important;
            background: #ffffff !important;
          }
        }

        /*
         * Page wrapper for every page inside the subsequent-pages div.
         * Width is NOT set here — it inherits from .pdf-page in PrintLayout.
         * This class only handles print page-break behaviour.
         */
        .inner-pdf-page-wrapper {
          display: block;
        }

        @media print {
          .inner-pdf-page-wrapper {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }

          /* Last page in the document — no trailing page break */
          .subsequent-technical-pdf-pages
            > .inner-pdf-page-wrapper:last-child,
          .subsequent-technical-pdf-pages
            > .commercial-pages-group
            > .inner-pdf-page-wrapper:last-child {
            page-break-after: avoid !important;
            break-after: avoid !important;
          }
        }
      `}</style>

      {/* Cover page — RFQPdf renders its own .pdf-page root element */}
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

        {includeCommercial && (
          <div className="commercial-pages-group">
            <div className="inner-pdf-page-wrapper"><CommercialPage14Pdf /></div>
            <div className="inner-pdf-page-wrapper"><CommercialPage15Pdf /></div>
            <div className="inner-pdf-page-wrapper"><CommercialPage16Pdf /></div>
            <div className="inner-pdf-page-wrapper"><CommercialPage17Pdf /></div>
            <div className="inner-pdf-page-wrapper"><CommercialPage18Pdf /></div>
            <div className="inner-pdf-page-wrapper"><CommercialPage19Pdf /></div>
            <div className="inner-pdf-page-wrapper"><CommercialPage20Pdf /></div>
            <div className="inner-pdf-page-wrapper"><CommercialPage21Pdf /></div>
            <div className="inner-pdf-page-wrapper"><CommercialPage22Pdf /></div>
            <div className="inner-pdf-page-wrapper"><CommercialPage23Pdf /></div>
            <div className="inner-pdf-page-wrapper"><CommercialPage24Pdf /></div>
          </div>
        )}
      </div>
    </PrintLayout>
  );
}