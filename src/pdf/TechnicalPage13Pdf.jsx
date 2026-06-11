import React from "react";
import PdfHeader from "./components/PdfHeader";
import PdfFooter from "./components/PdfFooter";

import connectionA from "../assets/connection-a.png";
import connectionB from "../assets/connection-b.png";
import connectionC from "../assets/connection-c.png";

import technicalPagesData from "../data/technicalPagesData";
import { useProposalStore } from "../store/proposalStore";

export default function TechnicalPage13Pdf() {
  const proposal = useProposalStore((state) => state.proposal);
  const technicalPages = useProposalStore((state) => state.technicalPages);

  const systemType = proposal?.systemType || "Advanced";

  const pageData =
    technicalPages?.page13 &&
    Object.keys(technicalPages.page13).length > 0
      ? technicalPages.page13
      : technicalPagesData?.[systemType]?.page13;

  if (!pageData) return null;

  const connections = pageData.connections || [];

  const defaultImages = [connectionA, connectionB, connectionC];

  function resolveImage(conn, index) {
    if (
      typeof conn?.image === "string" &&
      (conn.image.startsWith("data:") ||
        conn.image.startsWith("blob:") ||
        conn.image.startsWith("/"))
    ) {
      return conn.image;
    }

    return defaultImages[index] ?? connectionA;
  }

  const imageA = resolveImage(connections[0], 0);
  const imageB = resolveImage(connections[1], 1);
  const imageC = resolveImage(connections[2], 2);

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
        {/* TITLE */}
        <h2
          style={{
            fontSize: "18px",
            fontWeight: "900",
            color: "#09385f",
            marginBottom: "4mm",
          }}
        >
          {pageData.title}
        </h2>

        {/* TOP ROW */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "3mm",
          }}
        >
          <div
            style={{
              width: "48%",
              textAlign: "center",
            }}
          >
            <img
              src={imageA}
              alt=""
              style={{
                width: "58mm",
                height: "32mm",
                objectFit: "contain",
                display: "block",
                margin: "0 auto",
              }}
            />

            <div
              style={{
                marginTop: "1mm",
                fontSize: "13.5px",
                fontStyle: "italic",
              }}
            >
              {connections[0]?.name}
            </div>
          </div>

          <div
            style={{
              width: "48%",
              textAlign: "center",
            }}
          >
            <img
              src={imageB}
              alt=""
              style={{
                width: "58mm",
                height: "32mm",
                objectFit: "contain",
                display: "block",
                margin: "0 auto",
              }}
            />

            <div
              style={{
                marginTop: "1mm",
                fontSize: "13.5px",
                fontStyle: "italic",
              }}
            >
              {connections[1]?.name}
            </div>
          </div>
        </div>

        {/* CONNECTION C */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "4mm",
          }}
        >
          <img
            src={imageC}
            alt=""
            style={{
              width: "58mm",
              height: "32mm",
              objectFit: "contain",
              display: "block",
              margin: "0 auto",
            }}
          />

          <div
            style={{
              marginTop: "1mm",
              fontSize: "13.5px",
              fontStyle: "italic",
            }}
          >
            {connections[2]?.name}
          </div>
        </div>

        {/* TESTS */}
        <div
          style={{
            fontSize: "13px",
            lineHeight: "1.45",
            paddingLeft: "10mm",
            paddingRight: "10mm",
          }}
        >
          {connections.map((connection, connectionIndex) => (
            <div
              key={connectionIndex}
              style={{
                marginBottom: "3mm",
              }}
            >
              <div
                style={{
                  fontWeight: "700",
                  fontStyle: "italic",
                  marginBottom: "1.5mm",
                }}
              >
                {connection.name}
              </div>

              {connection.tests?.map((test, testIndex) => (
                <div
                  key={testIndex}
                  style={{
                    marginBottom: "0.6mm",
                  }}
                >
                  {testIndex + 1}. {test}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* FOOTER NOTE */}
        <div
          style={{
            marginTop: "auto",
            paddingLeft: "10mm",
            paddingRight: "10mm",
            fontSize: "13px",
            fontStyle: "italic",
          }}
        >
          {pageData.footerNote}
        </div>
      </div>

      <PdfFooter pageNumber={13} />
    </div>
  );
}