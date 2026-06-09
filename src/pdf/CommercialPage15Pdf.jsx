import React from "react";
import PdfHeader from "./components/PdfHeader";
import PdfFooter from "./components/PdfFooter";

import { useProposalStore } from "../store/proposalStore";

export default function CommercialPage15Pdf() {
  const commercialPages = useProposalStore(
    (state) => state.commercialPages
  );

  const pageData =
    commercialPages?.page15;

  if (!pageData) return null;

  return (
    <div className="pdf-page">
      <PdfHeader />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "228mm",
          marginTop: "5mm",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            tableLayout: "fixed",
            fontSize: "13px",
          }}
        >
          <colgroup>
            <col style={{ width: "7%" }} />
            <col style={{ width: "64%" }} />
            <col style={{ width: "10%" }} />
            <col style={{ width: "19%" }} />
          </colgroup>

          <tbody>
            {pageData.items?.map((item) => (
              <tr key={item.srNo}>
                <td
                  style={{
                    border: "1px solid #b6b6b6",
                    textAlign: "center",
                    verticalAlign: "middle",
                    fontWeight: 700,
                    fontSize: "13px",
                    padding: "1mm",
                  }}
                >
                  {item.srNo}
                </td>

                <td
                  style={{
                    border: "1px solid #b6b6b6",
                    padding: "1.2mm",
                    verticalAlign: "top",
                    lineHeight: "1.2",
                  }}
                >
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: "12.5px",
                      marginBottom: "0.5mm",
                    }}
                  >
                    {item.descriptionTitle}
                  </div>

                  <div
                    style={{
                      fontSize: "12px",
                      lineHeight: "1.25",
                    }}
                  >
                    {item.description}
                  </div>
                </td>

                <td
                  style={{
                    border: "1px solid #b6b6b6",
                    textAlign: "center",
                    verticalAlign: "middle",
                    fontSize: "13px",
                  }}
                >
                  {item.quantity}
                </td>

                <td
                  style={{
                    border: "1px solid #b6b6b6",
                    textAlign: "center",
                    verticalAlign: "middle",
                    fontSize: "13px",
                  }}
                >
                  {item.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <PdfFooter pageNumber={15} />
    </div>
  );
}