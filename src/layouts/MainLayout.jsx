import {
  NavLink,
  Outlet,
  useLocation,
} from "react-router-dom";

import {
  ClipboardList,
  FileText,
  ChevronDown,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

export default function MainLayout() {

  const location = useLocation();

  const isTechnical =
    location.pathname.startsWith("/technical");

  return (
    <div className="min-h-screen bg-[#f3f4f8] flex">

      {/* SIDEBAR */}
      <aside
        className="
          w-[290px]
          bg-[#0f172a]
          text-white
          p-5
          flex
          flex-col
          shadow-2xl
        "
      >

        {/* LOGO */}
        <div className="mb-10">

          <h1 className="text-3xl font-bold tracking-tight">
            Enquiry OS
          </h1>

          <p className="text-slate-400 text-sm mt-2">
            Engineering Proposal System
          </p>
        </div>

        {/* RFQ */}
        <div className="mb-6">

          <p className="text-xs uppercase tracking-widest text-slate-500 mb-3">
            RFQ
          </p>

          <SidebarItem
            to="/"
            label="Proposal Cover"
            icon={ClipboardList}
          />

          <SidebarItem
            to="/requirements"
            label="Requirements"
            icon={ClipboardList}
          />

          <SidebarItem
            to="/system-overview"
            label="System Overview"
            icon={ClipboardList}
          />
        </div>

        {/* TECHNICAL */}
        <div>

          <div
            className="
              flex
              items-center
              justify-between
              mb-3
            "
          >

            <p
              className={`
                text-xs
                uppercase
                tracking-widest
                transition-all
                duration-300

                ${
                  isTechnical
                    ? "text-cyan-400"
                    : "text-slate-500"
                }
              `}
            >
              Technical Offer
            </p>

            <motion.div
              animate={{
                rotate: isTechnical
                  ? 180
                  : 0,
              }}
            >
              <ChevronDown size={16} />
            </motion.div>
          </div>

          <AnimatePresence>

            {isTechnical && (

              <motion.div
                initial={{
                  opacity: 0,
                  height: 0,
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="space-y-2"
              >

                {[
                  4, 5, 6, 7,
                  8, 9, 10, 11,
                ].map((page) => (

                  <SidebarItem
                    key={page}
                    to={`/technical/${page}`}
                    label={`Page ${page}`}
                    icon={FileText}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </aside>

      {/* CONTENT */}
      <main className="flex-1 overflow-auto p-6">
        <Outlet />
      </main>
    </div>
  );
}

/* ---------------- ITEM ---------------- */

function SidebarItem({
  to,
  label,
  icon: Icon,
}) {

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `
        flex
        items-center
        gap-3
        px-4
        py-3
        rounded-2xl
        transition-all
        duration-300
        text-sm
        font-medium

        ${
          isActive
            ? `
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              text-white
              shadow-lg
            `
            : `
              text-slate-300
              hover:bg-slate-800
            `
        }
        `
      }
    >

      <Icon size={18} />

      {label}
    </NavLink>
  );
}