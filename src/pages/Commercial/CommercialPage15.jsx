import { useNavigate } from "react-router-dom";
import { Pencil, Plus, Trash2 } from "lucide-react";

import logo from "../../assets/logo.png";
import { useProposalStore } from "../../store/proposalStore";

export default function CommercialPage15() {
  const navigate = useNavigate();

  const {
    commercialPages,
    updateCommercialPage,
  } = useProposalStore();

  const pageData =
    commercialPages?.page15 || {};

  const updateItem = (
    index,
    field,
    value
  ) => {
    const items = [...(pageData.items || [])];

    items[index] = {
      ...items[index],
      [field]: value,
    };

    updateCommercialPage("page15", {
      ...pageData,
      items,
    });
  };

  const addRow = () => {
    const items = [...(pageData.items || [])];

    items.push({
      srNo: items.length
        ? Math.max(...items.map(i => Number(i.srNo))) + 1
        : 11,
      descriptionTitle: "",
      description: "",
      quantity: "1",
      price: "---",
    });

    updateCommercialPage("page15", {
      ...pageData,
      items,
    });
  };

  const deleteRow = (index) => {
    const items = [...(pageData.items || [])];

    items.splice(index, 1);

    const renumbered = items.map(
      (item, idx) => ({
        ...item,
        srNo: 11 + idx,
      })
    );

    updateCommercialPage("page15", {
      ...pageData,
      items: renumbered,
    });
  };

  return (
    <div className="w-full min-h-screen bg-[#eef2f7] flex justify-center py-8">
      <div className="w-[1150px] bg-white border border-[#d9d9d9] shadow-lg px-[40px] pt-[25px] pb-[60px]">

        {/* HEADER */}

        <div className="flex justify-between items-start">
          <div className="flex gap-4 items-start">
            <img
              src={logo}
              alt=""
              className="w-[70px]"
            />

            <div>
              <h1 className="text-[18px] font-bold text-[#7b7b7b] leading-[24px]">
                Electrosoft Automation
              </h1>

              <h2 className="text-[18px] font-bold text-[#7b7b7b] leading-[24px]">
                Private Limited
              </h2>
            </div>
          </div>

          <div className="italic font-semibold text-right text-[16px] leading-[24px]">
            <div>Techno-commercial</div>
            <div>Proposal</div>
          </div>
        </div>

        {/* TITLE */}

        <div className="mt-5">
          <h2 className="text-[#0d4c7f] text-[20px] font-bold">
            {pageData.title}
          </h2>
        </div>

        {/* ADD ROW */}

        <div className="flex justify-end mt-3 mb-2">
          <button
            onClick={addRow}
            className="flex items-center gap-2 px-3 py-2 bg-green-600 text-white rounded text-[12px] font-semibold"
          >
            <Plus size={14} />
            Add Row
          </button>
        </div>

        {/* TABLE */}

        <div className="mt-2 border border-[#8f8f8f]">

          <table className="w-full border-collapse">

            <thead>

              <tr className="bg-[#d9eef8] text-[12px]">

                <th className="border p-1 w-[60px]">
                  Sr. No.
                </th>

                <th className="border p-1">
                  Description
                </th>

                <th className="border p-1 w-[80px]">
                  Quantity
                </th>

                <th className="border p-1 w-[120px]">
                  Price (INR)
                </th>

                <th className="border p-1 w-[70px]">
                  Action
                </th>

              </tr>

            </thead>

            <tbody>

              {pageData.items?.map(
                (item, index) => (

                  <tr key={index}>

                    <td className="border text-center text-[12px] font-semibold">
                      {item.srNo}
                    </td>

                    <td className="border p-2 align-top">

                      <textarea
                        value={
                          item.descriptionTitle
                        }
                        onChange={(e) =>
                          updateItem(
                            index,
                            "descriptionTitle",
                            e.target.value
                          )
                        }
                        rows={2}
                        className="w-full resize-none border-none outline-none font-bold text-[12px]"
                      />

                      <textarea
                        value={
                          item.description
                        }
                        onChange={(e) =>
                          updateItem(
                            index,
                            "description",
                            e.target.value
                          )
                        }
                        rows={5}
                        className="w-full resize-none border-none outline-none text-[12px]"
                      />

                    </td>

                    <td className="border text-center">

                      <input
                        value={
                          item.quantity
                        }
                        onChange={(e) =>
                          updateItem(
                            index,
                            "quantity",
                            e.target.value
                          )
                        }
                        className="w-full text-center outline-none"
                      />

                    </td>

                    <td className="border text-center">

                      <input
                        value={
                          item.price
                        }
                        onChange={(e) =>
                          updateItem(
                            index,
                            "price",
                            e.target.value
                          )
                        }
                        className="w-full text-center outline-none"
                      />

                    </td>

                    <td className="border text-center">

                      <button
                        onClick={() =>
                          deleteRow(index)
                        }
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash2 size={16} />
                      </button>

                    </td>

                  </tr>

                )
              )}

            </tbody>

          </table>

        </div>

        {/* FOOTER */}

        <div className="mt-8 flex justify-between items-end text-[10px] italic text-[#8d8d8d]">

          <div>
            <p>
              a: S7-1, Jai Matadi Compound, Kalher, Thane, Maharashtra, INDIA 421302
            </p>

            <p>
              e: info@electrosoftindia.com
            </p>

            <p>
              m: +91-9089-888-444
            </p>
          </div>

          <div className="text-right">
            <p>
              GST: 27AAFCE4353G1ZP
            </p>

            <p>
              CIN: U31900MH2019PTC323431
            </p>

            <p className="text-[#003f77] font-semibold not-italic mt-1">
              Page 15 of 24
            </p>
          </div>

        </div>

        {/* NAVIGATION */}

        <div className="flex justify-between mt-8">

          <button
            onClick={() =>
              navigate("/Commercial/CommercialPage14")
            }
            className="px-5 py-2 rounded-full border border-[#0d4c7f] text-[#0d4c7f] text-[12px] font-semibold"
          >
            ← Previous Page
          </button>

          <button
            onClick={() =>
              navigate("/Commercial/CommercialPage16")
            }
            className="px-5 py-2 rounded-full bg-[#0d4c7f] text-white text-[12px] font-semibold"
          >
            Next →
          </button>

        </div>

      </div>
    </div>
  );
}