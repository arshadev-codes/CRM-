import React from "react";

import PdfHeader from "./components/PdfHeader";

import PdfFooter from "./components/PdfFooter";



import { useProposalStore } from "../store/proposalStore";



export default function CommercialPage16Pdf() {

  const commercialPages = useProposalStore(

    (state) => state.commercialPages

  );



  const pageData =

    commercialPages?.page16;



  if (!pageData) return null;



  return (

    <div className="pdf-page">

      <PdfHeader />



      <div

        style={{

          display: "flex",

          flexDirection: "column",

          minHeight: "228mm",

        }}

      >

        {/* TITLE */}



        <div

          style={{

            marginBottom: "6mm",

          }}

        >

          <div

            style={{

              fontSize: "16px",

              fontWeight: 700,

              color: "#08477a",

            }}

          >

            {pageData.title}

          </div>

        </div>



        {/* =========================================

            OTHER EQUIPMENT TABLE

        ========================================= */}



        <table

          style={{

            width: "100%",

            borderCollapse: "collapse",

            tableLayout: "fixed",

            fontSize: "12px",

          }}

        >

          <colgroup>

            <col style={{ width: "9%" }} />

            <col style={{ width: "62%" }} />

            <col style={{ width: "9%" }} />

            <col style={{ width: "20%" }} />

          </colgroup>



          <thead>

            <tr>

              <th

                colSpan={4}

                style={{

                  background: "#0b5576",

                  color: "#fff",

                  border: "1px solid #b6b6b6",

                  padding: "1mm",

                  fontSize: "13px",

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

                  fontWeight: 700,

                  fontSize: "12px",

                }}

              >

                Sr. No.

              </th>



              <th

                style={{

                  border: "1px solid #b6b6b6",

                  padding: "1mm",

                  fontWeight: 700,

                  fontSize: "12px",

                }}

              >

                Description

              </th>



              <th

                style={{

                  border: "1px solid #b6b6b6",

                  padding: "1mm",

                  fontWeight: 700,

                  fontSize: "12px",

                }}

              >

                Quantity

              </th>



              <th

                style={{

                  border: "1px solid #b6b6b6",

                  padding: "1mm",

                  fontWeight: 700,

                  fontSize: "12px",

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

                    fontSize: "12px",

                    padding: "1.2mm",

                  }}

                >

                  {item.srNo}

                </td>



                <td

                  style={{

                    border: "1px solid #b6b6b6",

                    padding: "1.4mm",

                    verticalAlign: "top",

                    lineHeight: "1.2",

                  }}

                >

                  {item.descriptionTitle}

                </td>



                <td

                  style={{

                    border: "1px solid #b6b6b6",

                    textAlign: "center",

                    verticalAlign: "middle",

                    fontSize: "12px",

                  }}

                >

                  {item.quantity}

                </td>



                <td

                  style={{

                    border: "1px solid #b6b6b6",

                    textAlign: "center",

                    verticalAlign: "middle",

                    fontSize: "12px",

                  }}

                >

                  {item.price}

                </td>

              </tr>

            ))}



            {/* Blank Rows like screenshot */}



            {/* {Array.from({ length: 3 }).map((_, index) => (

              <tr key={`blank-${index}`}>

                <td

                  style={{

                    border: "1px solid #b6b6b6",

                    height: "22px",

                  }}

                />

                <td

                  style={{

                    border: "1px solid #b6b6b6",

                  }}

                />

                <td

                  style={{

                    border: "1px solid #b6b6b6",

                  }}

                />

                <td

                  style={{

                    border: "1px solid #b6b6b6",

                  }}

                />

              </tr>

            ))} */}

          </tbody>

        </table>



        {/* SPACING */}



        <div style={{ height: "12mm" }} />



        {/* =========================================

            TESTING INSTRUMENTS TABLE

        ========================================= */}



        <table

          style={{

            width: "100%",

            borderCollapse: "collapse",

            tableLayout: "fixed",

            fontSize: "12px",

          }}

        >

          <colgroup>

            <col style={{ width: "9%" }} />

            <col style={{ width: "62%" }} />

            <col style={{ width: "9%" }} />

            <col style={{ width: "20%" }} />

          </colgroup>



          <thead>

            <tr>

              <th

                colSpan={4}

                style={{

                  background: "#0b5576",

                  color: "#fff",

                  border: "1px solid #b6b6b6",

                  padding: "1mm",

                  fontSize: "13px",

                  fontWeight: 700,

                  fontStyle: "italic",

                  textAlign: "center",

                }}

              >

                {pageData.instrumentTitle}

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

                  fontWeight: 700,

                  fontSize: "12px",

                }}

              >

                Sr. No.

              </th>



              <th

                style={{

                  border: "1px solid #b6b6b6",

                  padding: "1mm",

                  fontWeight: 700,

                  fontSize: "12px",

                }}

              >

                Description

              </th>



              <th

                style={{

                  border: "1px solid #b6b6b6",

                  padding: "1mm",

                  fontWeight: 700,

                  fontSize: "12px",

                }}

              >

                Quantity

              </th>



              <th

                style={{

                  border: "1px solid #b6b6b6",

                  padding: "1mm",

                  fontWeight: 700,

                  fontSize: "12px",

                }}

              >

                Price (INR)

              </th>

            </tr>

          </thead>



          <tbody>

            {pageData.instruments?.map((item) => (

              <tr key={item.srNo}>

                <td

                  style={{

                    border: "1px solid #b6b6b6",

                    textAlign: "center",

                    fontSize: "12px",

                    padding: "1mm",

                  }}

                >

                  {item.srNo}

                </td>



                <td

                  style={{

                    border: "1px solid #b6b6b6",

                    padding: "1.2mm",

                    fontSize: "12px",

                  }}

                >

                  {item.description}

                </td>



                <td

                  style={{

                    border: "1px solid #b6b6b6",

                    textAlign: "center",

                    fontSize: "12px",

                  }}

                >

                  {item.quantity}

                </td>



                <td

                  style={{

                    border: "1px solid #b6b6b6",

                    textAlign: "center",

                    fontSize: "12px",

                  }}

                >

                  {item.price}

                </td>

              </tr>

            ))}



            {/* Blank Rows



            {Array.from({ length: 4 }).map((_, index) => (

              <tr key={`instrument-blank-${index}`}>

                <td

                  style={{

                    border: "1px solid #b6b6b6",

                    height: "22px",

                  }}

                />

                <td

                  style={{

                    border: "1px solid #b6b6b6",

                  }}

                />

                <td

                  style={{

                    border: "1px solid #b6b6b6",

                  }}

                />

                <td

                  style={{

                    border: "1px solid #b6b6b6",

                  }}

                />

              </tr>

            ))} */}

          </tbody>

        </table>

      </div>



      <PdfFooter pageNumber={16} />

    </div>

  );

} 

