import { useState, useEffect, useCallback } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ClipboardList,
  FileText,
  Briefcase,
  ChevronRight,
  ArrowRight,
  ArrowLeft,
  FileCheck2,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────────
   FLAT ORDERED PAGE LIST  (drives Next / Back + progress bar)
───────────────────────────────────────────────────────────── */
const ALL_PAGES = [
  // RFQ
  { path: "/rfq",             label: "Proposal Cover",   section: "rfq" },
  { path: "/requirement",     label: "Requirements",     section: "rfq" },
  { path: "/system-overview", label: "System Overview",  section: "rfq" },
  // Technical
  { path: "/technical/page4",  label: "Page 4",  section: "technical" },
  { path: "/technical/page5",  label: "Page 5",  section: "technical" },
  { path: "/technical/page6",  label: "Page 6",  section: "technical" },
  { path: "/technical/page7",  label: "Page 7",  section: "technical" },
  { path: "/technical/page8",  label: "Page 8",  section: "technical" },
  { path: "/technical/page9",  label: "Page 9",  section: "technical" },
  { path: "/technical/page10", label: "Page 10", section: "technical" },
  { path: "/technical/page11", label: "Page 11", section: "technical" },
  { path: "/technical/page12", label: "Page 12", section: "technical" },
  { path: "/technical/page13", label: "Page 13", section: "technical" },
  // Commercial
  { path: "/commercial/CommercialPage14", label: "Page 14", section: "commercial" },
  { path: "/commercial/CommercialPage15", label: "Page 15", section: "commercial" },
  { path: "/commercial/CommercialPage16", label: "Page 16", section: "commercial" },
  { path: "/commercial/CommercialPage17", label: "Page 17", section: "commercial" },
  { path: "/commercial/CommercialPage18", label: "Page 18", section: "commercial" },
  { path: "/commercial/CommercialPage19", label: "Page 19", section: "commercial" },
  { path: "/commercial/CommercialPage20", label: "Page 20", section: "commercial" },
  { path: "/commercial/CommercialPage21", label: "Page 21", section: "commercial" },
  { path: "/commercial/CommercialPage22", label: "Page 22", section: "commercial" },
  { path: "/commercial/CommercialPage23", label: "Page 23", section: "commercial" },
  { path: "/commercial/CommercialPage24", label: "Page 24", section: "commercial" },
];

const SECTIONS = [
  {
    key: "rfq",
    label: "RFQ",
    sublabel: "Request for Quotation",
    icon: ClipboardList,
    accentFrom: "#06b6d4",
    accentTo: "#3b82f6",
    pages: ALL_PAGES.filter((p) => p.section === "rfq"),
  },
  {
    key: "technical",
    label: "Technical Offer",
    sublabel: "Pages 4 – 13",
    icon: FileText,
    accentFrom: "#8b5cf6",
    accentTo: "#6366f1",
    pages: ALL_PAGES.filter((p) => p.section === "technical"),
  },
  {
    key: "commercial",
    label: "Commercial Offer",
    sublabel: "Pages 14 – 24",
    icon: Briefcase,
    accentFrom: "#f59e0b",
    accentTo: "#ef4444",
    pages: ALL_PAGES.filter((p) => p.section === "commercial"),
  },
];

/* ─────────────────────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────────────────────── */
function normalisePath(p) {
  return p.replace(/\/+$/, "").toLowerCase();
}

function useCurrentIndex(location) {
  return ALL_PAGES.findIndex(
    (p) => normalisePath(p.path) === normalisePath(location.pathname)
  );
}

/* ─────────────────────────────────────────────────────────────
   MAIN LAYOUT
───────────────────────────────────────────────────────────── */
export default function MainLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentIndex = useCurrentIndex(location);

  // Determine which section the current page belongs to (open that dropdown)
  const currentSection =
    currentIndex >= 0 ? ALL_PAGES[currentIndex].section : "rfq";

  const [openSection, setOpenSection] = useState(currentSection);

  // Keep open section in sync when navigating via Next/Back
  useEffect(() => {
    if (currentIndex >= 0) {
      setOpenSection(ALL_PAGES[currentIndex].section);
    }
  }, [currentIndex]);

  const toggleSection = useCallback(
    (key) => setOpenSection((prev) => (prev === key ? null : key)),
    []
  );

  const goNext = () => {
    if (currentIndex < ALL_PAGES.length - 1) {
      navigate(ALL_PAGES[currentIndex + 1].path);
    }
  };

  const goBack = () => {
    if (currentIndex > 0) {
      navigate(ALL_PAGES[currentIndex - 1].path);
    }
  };

  const progress =
    currentIndex >= 0
      ? Math.round(((currentIndex + 1) / ALL_PAGES.length) * 100)
      : 0;

  const isFirst = currentIndex <= 0;
  const isLast = currentIndex >= ALL_PAGES.length - 1;

  return (
    <div className="min-h-screen flex" style={{ background: "#f0f2f7" }}>

      {/* ══════════════════════════════════════════════
          SIDEBAR
      ══════════════════════════════════════════════ */}
      <aside
        style={{
          width: 272,
          minWidth: 272,
          background: "linear-gradient(180deg, #0d1424 0%, #111827 100%)",
          display: "flex",
          flexDirection: "column",
          boxShadow: "4px 0 32px rgba(0,0,0,0.4)",
          position: "sticky",
          top: 0,
          height: "100vh",
          overflowY: "auto",
          overflowX: "hidden",
          scrollbarWidth: "none",
        }}
      >
        {/* ── Brand ── */}
        <div style={{ padding: "28px 20px 20px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
            <div
              style={{
                width: 34,
                height: 34,
                borderRadius: 10,
                background: "linear-gradient(135deg, #06b6d4, #3b82f6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <FileCheck2 size={18} color="#fff" />
            </div>
            <div>
              <div style={{ color: "#f1f5f9", fontWeight: 700, fontSize: 16, letterSpacing: "-0.3px", lineHeight: 1.2 }}>
                Enquiry OS
              </div>
              <div style={{ color: "#475569", fontSize: 11, letterSpacing: "0.5px" }}>
                Proposal Builder
              </div>
            </div>
          </div>
        </div>

        {/* ── Progress Bar ── */}
        <div style={{ padding: "16px 20px 12px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 7 }}>
            <span style={{ color: "#64748b", fontSize: 11, letterSpacing: "0.8px", textTransform: "uppercase" }}>
              Progress
            </span>
            <span style={{ color: "#94a3b8", fontSize: 11, fontVariantNumeric: "tabular-nums" }}>
              {currentIndex >= 0 ? currentIndex + 1 : 0} / {ALL_PAGES.length}
            </span>
          </div>
          <div
            style={{
              height: 5,
              borderRadius: 99,
              background: "rgba(255,255,255,0.07)",
              overflow: "hidden",
            }}
          >
            <motion.div
              animate={{ width: `${progress}%` }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              style={{
                height: "100%",
                borderRadius: 99,
                background: "linear-gradient(90deg, #06b6d4, #3b82f6, #8b5cf6)",
              }}
            />
          </div>
        </div>

        {/* ── Section label ── */}
        <div style={{ padding: "4px 20px 12px" }}>
          <span style={{ color: "#334155", fontSize: 10, letterSpacing: "1.2px", textTransform: "uppercase" }}>
            Navigation
          </span>
        </div>

        {/* ── Accordion Sections ── */}
        <nav style={{ flex: 1, padding: "0 12px" }}>
          {SECTIONS.map((section) => (
            <SectionGroup
              key={section.key}
              section={section}
              isOpen={openSection === section.key}
              onToggle={() => toggleSection(section.key)}
              currentPath={location.pathname}
            />
          ))}
        </nav>

        {/* ── Next / Back Navigation ── */}
        <div
          style={{
            padding: "16px 12px 24px",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            marginTop: "auto",
          }}
        >
          <div style={{ display: "flex", gap: 8 }}>
            <button
              onClick={goBack}
              disabled={isFirst}
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
                padding: "10px 0",
                borderRadius: 10,
                border: "1px solid rgba(255,255,255,0.08)",
                background: isFirst ? "transparent" : "rgba(255,255,255,0.05)",
                color: isFirst ? "#1e293b" : "#94a3b8",
                fontSize: 12,
                fontWeight: 600,
                cursor: isFirst ? "not-allowed" : "pointer",
                transition: "all 0.2s",
                letterSpacing: "0.3px",
              }}
              onMouseEnter={(e) => {
                if (!isFirst) e.currentTarget.style.background = "rgba(255,255,255,0.1)";
              }}
              onMouseLeave={(e) => {
                if (!isFirst) e.currentTarget.style.background = "rgba(255,255,255,0.05)";
              }}
            >
              <ArrowLeft size={14} />
              Back
            </button>

            <button
              onClick={goNext}
              disabled={isLast}
              style={{
                flex: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
                padding: "10px 0",
                borderRadius: 10,
                border: "none",
                background: isLast
                  ? "rgba(255,255,255,0.04)"
                  : "linear-gradient(90deg, #06b6d4, #3b82f6)",
                color: isLast ? "#1e293b" : "#fff",
                fontSize: 12,
                fontWeight: 700,
                cursor: isLast ? "not-allowed" : "pointer",
                transition: "all 0.2s",
                letterSpacing: "0.3px",
                boxShadow: isLast ? "none" : "0 4px 12px rgba(6,182,212,0.3)",
              }}
              onMouseEnter={(e) => {
                if (!isLast) e.currentTarget.style.boxShadow = "0 4px 20px rgba(6,182,212,0.5)";
              }}
              onMouseLeave={(e) => {
                if (!isLast) e.currentTarget.style.boxShadow = "0 4px 12px rgba(6,182,212,0.3)";
              }}
            >
              Next Page
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Current page label */}
          {currentIndex >= 0 && (
            <div
              style={{
                marginTop: 10,
                textAlign: "center",
                color: "#334155",
                fontSize: 10.5,
                letterSpacing: "0.3px",
              }}
            >
              {ALL_PAGES[currentIndex]?.label}
            </div>
          )}
        </div>
      </aside>

      {/* ══════════════════════════════════════════════
          CONTENT AREA
      ══════════════════════════════════════════════ */}
      <main style={{ flex: 1, overflowY: "auto", padding: 28, minWidth: 0 }}>
        <Outlet />
      </main>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION GROUP (accordion)
───────────────────────────────────────────────────────────── */
function SectionGroup({ section, isOpen, onToggle, currentPath }) {
  const Icon = section.icon;

  const hasActive = section.pages.some(
    (p) => normalisePath(p.path) === normalisePath(currentPath)
  );

  return (
    <div style={{ marginBottom: 6 }}>
      {/* Header button */}
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "10px 12px",
          borderRadius: 12,
          border: "none",
          background: isOpen
            ? "rgba(255,255,255,0.06)"
            : hasActive
            ? "rgba(255,255,255,0.03)"
            : "transparent",
          cursor: "pointer",
          transition: "background 0.2s",
          textAlign: "left",
        }}
        onMouseEnter={(e) => {
          if (!isOpen) e.currentTarget.style.background = "rgba(255,255,255,0.04)";
        }}
        onMouseLeave={(e) => {
          if (!isOpen) e.currentTarget.style.background = hasActive ? "rgba(255,255,255,0.03)" : "transparent";
        }}
      >
        {/* Icon bubble */}
        <div
          style={{
            width: 30,
            height: 30,
            borderRadius: 8,
            background: isOpen || hasActive
              ? `linear-gradient(135deg, ${section.accentFrom}, ${section.accentTo})`
              : "rgba(255,255,255,0.07)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "background 0.25s",
          }}
        >
          <Icon size={15} color={isOpen || hasActive ? "#fff" : "#475569"} />
        </div>

        {/* Labels */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              color: isOpen || hasActive ? "#f1f5f9" : "#64748b",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "-0.1px",
              transition: "color 0.2s",
              lineHeight: 1.3,
            }}
          >
            {section.label}
          </div>
          <div style={{ color: "#334155", fontSize: 10.5, marginTop: 1 }}>
            {section.sublabel}
          </div>
        </div>

        {/* Chevron */}
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ flexShrink: 0 }}
        >
          <ChevronRight size={14} color={isOpen ? "#94a3b8" : "#2d3f55"} />
        </motion.div>
      </button>

      {/* Page list */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div
              style={{
                paddingLeft: 14,
                paddingTop: 4,
                paddingBottom: 6,
                position: "relative",
              }}
            >
              {/* Left accent track */}
              <div
                style={{
                  position: "absolute",
                  left: 28,
                  top: 4,
                  bottom: 6,
                  width: 1.5,
                  borderRadius: 99,
                  background: `linear-gradient(180deg, ${section.accentFrom}55, ${section.accentTo}22)`,
                }}
              />

              {section.pages.map((page, i) => (
                <PageItem
                  key={page.path}
                  page={page}
                  currentPath={currentPath}
                  accentFrom={section.accentFrom}
                  accentTo={section.accentTo}
                  index={i}
                  total={section.pages.length}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   PAGE ITEM
───────────────────────────────────────────────────────────── */
function PageItem({ page, currentPath, accentFrom, accentTo, index, total }) {
  const isActive = normalisePath(page.path) === normalisePath(currentPath);

  return (
    <NavLink
      to={page.path}
      style={{ textDecoration: "none", display: "block" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "7px 10px 7px 22px",
          borderRadius: 9,
          background: isActive
            ? `linear-gradient(90deg, ${accentFrom}22, ${accentTo}11)`
            : "transparent",
          transition: "background 0.15s",
          position: "relative",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          if (!isActive) e.currentTarget.style.background = "rgba(255,255,255,0.04)";
        }}
        onMouseLeave={(e) => {
          if (!isActive) e.currentTarget.style.background = "transparent";
        }}
      >
        {/* Dot on the track */}
        <div
          style={{
            position: "absolute",
            left: 10,
            width: isActive ? 7 : 5,
            height: isActive ? 7 : 5,
            borderRadius: "50%",
            background: isActive
              ? `linear-gradient(135deg, ${accentFrom}, ${accentTo})`
              : "rgba(255,255,255,0.15)",
            transition: "all 0.2s",
            boxShadow: isActive ? `0 0 8px ${accentFrom}88` : "none",
            marginLeft: isActive ? -1 : 0,
          }}
        />

        {/* Label */}
        <span
          style={{
            color: isActive ? "#f1f5f9" : "#475569",
            fontSize: 12.5,
            fontWeight: isActive ? 600 : 400,
            letterSpacing: "0.1px",
            transition: "color 0.15s",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {page.label}
        </span>

        {/* Active glow pill */}
        {isActive && (
          <div
            style={{
              marginLeft: "auto",
              width: 3,
              height: 18,
              borderRadius: 99,
              background: `linear-gradient(180deg, ${accentFrom}, ${accentTo})`,
              flexShrink: 0,
              boxShadow: `0 0 8px ${accentFrom}`,
            }}
          />
        )}
      </div>
    </NavLink>
  );
}