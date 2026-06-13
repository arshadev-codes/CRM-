import React from "react";
import PdfHeader from "./components/PdfHeader";
import PdfFooter from "./components/PdfFooter";

import { useProposalStore } from "../store/proposalStore";

export default function CommercialPage14Pdf() {
  const commercialPages = useProposalStore(
    (state) => state.commercialPages
  );

  const pageData =
    commercialPages?.page14;

  if (!pageData) return null;

  return (
    <div className="pdf-page">
      <PdfHeader />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* TITLE */}

        <div
          style={{
          }}
        >
          <div
            style={{
              fontSize: "18.67px",
              fontWeight: 700,
              color: "#09385f",
              marginBottom: "4.5mm",
            }}
          >
            {pageData.title}
          </div>
        </div>

        {/* TABLE */}

       <table
  style={{
    width: "100%",
    borderCollapse: "collapse",
    tableLayout: "fixed",
    fontSize: "12.5px",
  }}
>
  <colgroup>
    <col style={{ width: "7%" }} />
    <col style={{ width: "64%" }} />
    <col style={{ width: "10%" }} />
    <col style={{ width: "19%" }} />
  </colgroup>

  <thead>
    <tr>
      <th
        colSpan={4}
        style={{
          background: "#0b5576",
          color: "#fff",
          border: "1px solid #8d8d8d",
          padding: "1.2mm",
          fontSize: "12.5px",
          fontWeight: 700,
          fontStyle: "italic",
          textAlign: "center",
        }}
      >
        {pageData.tableTitle}
      </th>
    </tr>

    <tr
      style={{
        background: "#d8eef8",
      }}
    >
      <th
        style={{
          border: "1px solid #b6b6b6",
          padding: "1mm",
          fontSize: "12.5px",
          fontWeight: 700,
        }}
      >
        Sr. No.
      </th>

      <th
        style={{
          border: "1px solid #b6b6b6",
          padding: "1mm",
          fontSize: "12.5px",
          fontWeight: 700,
        }}
      >
        Description
      </th>

      <th
        style={{
          border: "1px solid #b6b6b6",
          padding: "1mm",
          fontSize: "12.5px",
          fontWeight: 700,
        }}
      >
        Quantity
      </th>

      <th
        style={{
          border: "1px solid #b6b6b6",
          padding: "1mm",
          fontSize: "12.5px",
          fontWeight: 700,
        }}
      >
        Price (INR)
      </th>
    </tr>
  </thead>

  <tbody>
    {pageData.items?.map((item) => (
      <tr key={item.srNo}>
        <td
          style={{
            border: "1px solid #b6b6b6",
            textAlign: "center",
            verticalAlign: "middle",
            fontWeight: 700,
            fontSize: "12.5px",
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
              fontSize: "12.5px",
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
            fontSize: "12.5px",
          }}
        >
          {item.quantity}
        </td>

        <td
          style={{
            border: "1px solid #b6b6b6",
            textAlign: "center",
            verticalAlign: "middle",
            fontSize: "12.5px",
          }}
        >
          {item.price}
        </td>
      </tr>
    ))}
  </tbody>
</table>
      </div>

      <PdfFooter pageNumber={14} />
    </div>
  );
}