import React from "react";
import { useNavigate } from "react-router-dom";
import { Plus, Trash2 } from "lucide-react";
import logo from "../../assets/logo.png";
import { useProposalStore } from "../../store/proposalStore";

/* ─── Small reusable inline-editable multi-line list ─── */
function LinesEditor({ label, lines, onChange }) {
  const addLine = () => onChange([...(lines || []), ""]);
  const updateLine = (i, val) => {
    const arr = [...(lines || [])];
    arr[i] = val;
    onChange(arr);
  };
  const deleteLine = (i) => onChange((lines || []).filter((_, idx) => idx !== i));

  return (
    <div className="mb-4">
      <div className="text-[11px] font-bold text-[#444] mb-1">{label}</div>
      {(lines || []).map((line, i) => (
        <div key={i} className="flex items-center gap-2 mb-1">
          <input
            type="text"
            value={line}
            onChange={(e) => updateLine(i, e.target.value)}
            className="flex-1 border-b border-dashed border-gray-300 outline-none bg-transparent text-[12px] py-0.5"
          />
          <button onClick={() => deleteLine(i)}>
            <Trash2 size={13} className="text-red-400" />
          </button>
        </div>
      ))}
      <button
        onClick={addLine}
        className="flex items-center gap-1 text-[#0d4c7f] text-[11px] font-semibold mt-1"
      >
        <Plus size={12} /> Add line
      </button>
    </div>
  );
}

export default function CommercialPage20() {
  const navigate = useNavigate();
  const { commercialPages, updateCommercialPage } = useProposalStore();

  const pageData = commercialPages?.page20 || {
    title: "INVESTMENT DETAILS (PRICE BID)",
    intro: 'The Price Bid for items covered under \u201cELECTROSOFT\u2019S SCOPE OF SUPPLY & SERVICES\u201d',
    items: [],
    packingLabel: "Packing charges: Inclusive",
    packingDetail: "(Packing type for panels: Road-worthy Wooden Packing (Slotted crate))",
    freightLabel: "Freight charges: Inclusive",
    freightDetails: [],
    incoterms: "Incoterms: CFR (Cost & Freight)",
    transitLabel: "Transit Insurance: Not in our scope.",
    transitLines: [],
    offerValidity: "Offer validity: 30 days",
    paymentSupplyLabel: "Payment Terms for Supply of material:",
    paymentSupplyLines: [],
    paymentOnsiteLabel: "Payment Terms for On-site services:",
    paymentOnsiteLines: [],
    warrantyLabel: "Warranty: ",
    warrantyLines: [],
    onsiteLabel: "On-site services:",
    onsiteLines: [],
  };

  const update = (field, value) =>
    updateCommercialPage("page20", { ...pageData, [field]: value });

  const updateItem = (index, field, value) => {
    const items = [...(pageData.items || [])];
    items[index] = { ...items[index], [field]: value };
    update("items", items);
  };
  const updateItemLines = (index, value) => {
    const items = [...(pageData.items || [])];
    items[index] = { ...items[index], descriptionLines: value.split("\n") };
    update("items", items);
  };
  const addItem = () =>
    update("items", [
      ...(pageData.items || []),
      { srNo: (pageData.items?.length || 0) + 1, description: "", quantity: 1, price: "----" },
    ]);
  const deleteItem = (index) =>
    update(
      "items",
      (pageData.items || [])
        .filter((_, i) => i !== index)
        .map((it, i) => ({ ...it, srNo: i + 1 }))
    );

  return (
    <div className="w-full min-h-screen bg-[#eef2f7] flex justify-center py-8">
      <div className="w-[1150px] bg-white border border-[#d9d9d9] shadow-lg px-[40px] pt-[25px] pb-[60px]">

        {/* PAGE HEADER */}
        <div className="flex justify-between items-start">
          <div className="flex gap-4 items-start">
            <img src={logo} alt="" className="w-[70px]" />
            <div>
              <h1 className="text-[18px] font-bold text-[#7b7b7b] leading-[24px]">Electrosoft Automation</h1>
              <h2 className="text-[18px] font-bold text-[#7b7b7b] leading-[24px]">Private Limited</h2>
            </div>
          </div>
          <div className="italic font-semibold text-right text-[16px] leading-[24px]">
            <div>Techno-commercial</div>
            <div>Proposal</div>
          </div>
        </div>

        {/* TITLE */}
        <div className="mt-5">
          <input
            value={pageData.title || ""}
            onChange={(e) => update("title", e.target.value)}
            className="text-[#0d4c7f] text-[20px] font-bold uppercase bg-transparent outline-none w-full"
          />
        </div>

        {/* INTRO */}
        <div className="mt-2 mb-4">
          <input
            value={pageData.intro || ""}
            onChange={(e) => update("intro", e.target.value)}
            className="w-full text-[12px] text-[#333] bg-transparent outline-none border-b border-dashed border-gray-300"
          />
        </div>

        {/* PRICE TABLE */}
        <table className="w-full border-collapse text-[12px] mb-3">
          <thead>
            <tr className="bg-[#d9eef8]">
              <th className="border border-[#aaa] p-2 w-[65px] font-bold">Sr. No.</th>
              <th className="border border-[#aaa] p-2 font-bold">Description</th>
              <th className="border border-[#aaa] p-2 w-[100px] font-bold">Quantity</th>
              <th className="border border-[#aaa] p-2 w-[120px] font-bold">Price</th>
              <th className="border border-[#aaa] p-2 w-[50px]"></th>
            </tr>
          </thead>
          <tbody>
            {(pageData.items || []).map((item, idx) => (
              <tr key={idx}>
                <td className="border border-[#aaa] p-1 text-center font-semibold">{item.srNo}</td>
                <td className="border border-[#aaa] p-1">
                  <textarea
                    value={
                      item.descriptionLines
                        ? item.descriptionLines.join("\n")
                        : item.description || ""
                    }
                    onChange={(e) => updateItemLines(idx, e.target.value)}
                    rows={3}
                    className="w-full outline-none bg-transparent text-[12px] resize-none leading-relaxed"
                    placeholder="Enter description (use new lines for sub-items)"
                  />
                </td>
                <td className="border border-[#aaa] p-1">
                  <input
                    type="text"
                    value={item.quantity || ""}
                    onChange={(e) => updateItem(idx, "quantity", e.target.value)}
                    className="w-full text-center outline-none bg-transparent text-[12px]"
                  />
                </td>
                <td className="border border-[#aaa] p-1">
                  <input
                    type="text"
                    value={item.price || ""}
                    onChange={(e) => updateItem(idx, "price", e.target.value)}
                    className="w-full text-center outline-none bg-transparent text-[12px]"
                  />
                </td>
                <td className="border border-[#aaa] p-1 text-center">
                  <button onClick={() => deleteItem(idx)}>
                    <Trash2 size={15} className="text-red-400 mx-auto" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button
          onClick={addItem}
          className="mb-6 flex items-center gap-2 px-4 py-2 bg-[#0d4c7f] text-white rounded text-[12px] font-semibold"
        >
          <Plus size={14} /> Add Item Row
        </button>

        {/* TERMS — two column grid */}
        <div className="grid grid-cols-2 gap-x-10">
          <div>
            {/* Packing */}
            <div className="mb-4">
              <div className="text-[11px] font-bold text-[#444] mb-1">Packing Charges Label</div>
              <input type="text" value={pageData.packingLabel || ""}
                onChange={(e) => update("packingLabel", e.target.value)}
                className="w-full border-b border-dashed border-gray-300 outline-none bg-transparent text-[12px] mb-1" />
              <div className="text-[11px] font-bold text-[#444] mb-1">Packing Detail (italic)</div>
              <input type="text" value={pageData.packingDetail || ""}
                onChange={(e) => update("packingDetail", e.target.value)}
                className="w-full border-b border-dashed border-gray-300 outline-none bg-transparent text-[12px]" />
            </div>

            {/* Freight */}
            <div className="mb-4">
              <div className="text-[11px] font-bold text-[#444] mb-1">Freight Charges Label</div>
              <input type="text" value={pageData.freightLabel || ""}
                onChange={(e) => update("freightLabel", e.target.value)}
                className="w-full border-b border-dashed border-gray-300 outline-none bg-transparent text-[12px] mb-1" />
              <LinesEditor label="Freight Detail Lines (italic)"
                lines={pageData.freightDetails}
                onChange={(v) => update("freightDetails", v)} />
            </div>

            {/* Incoterms */}
            <div className="mb-4">
              <div className="text-[11px] font-bold text-[#444] mb-1">Incoterms</div>
              <input type="text" value={pageData.incoterms || ""}
                onChange={(e) => update("incoterms", e.target.value)}
                className="w-full border-b border-dashed border-gray-300 outline-none bg-transparent text-[12px]" />
            </div>

            {/* Transit Insurance */}
            <div className="mb-4">
              <div className="text-[11px] font-bold text-[#444] mb-1">Transit Insurance Label</div>
              <input type="text" value={pageData.transitLabel || ""}
                onChange={(e) => update("transitLabel", e.target.value)}
                className="w-full border-b border-dashed border-gray-300 outline-none bg-transparent text-[12px] mb-1" />
              <LinesEditor label="Transit Insurance Lines (italic)"
                lines={pageData.transitLines}
                onChange={(v) => update("transitLines", v)} />
            </div>

            {/* Offer Validity */}
            <div className="mb-4">
              <div className="text-[11px] font-bold text-[#444] mb-1">Offer Validity</div>
              <input type="text" value={pageData.offerValidity || ""}
                onChange={(e) => update("offerValidity", e.target.value)}
                className="w-full border-b border-dashed border-gray-300 outline-none bg-transparent text-[12px]" />
            </div>
          </div>

          <div>
            {/* Payment Supply */}
            <div className="mb-4">
              <div className="text-[11px] font-bold text-[#444] mb-1">Payment Terms — Supply Label</div>
              <input type="text" value={pageData.paymentSupplyLabel || ""}
                onChange={(e) => update("paymentSupplyLabel", e.target.value)}
                className="w-full border-b border-dashed border-gray-300 outline-none bg-transparent text-[12px] mb-1" />
              <LinesEditor label="Supply Payment Lines"
                lines={pageData.paymentSupplyLines}
                onChange={(v) => update("paymentSupplyLines", v)} />
            </div>

            {/* Payment On-site */}
            <div className="mb-4">
              <div className="text-[11px] font-bold text-[#444] mb-1">Payment Terms — On-site Label</div>
              <input type="text" value={pageData.paymentOnsiteLabel || ""}
                onChange={(e) => update("paymentOnsiteLabel", e.target.value)}
                className="w-full border-b border-dashed border-gray-300 outline-none bg-transparent text-[12px] mb-1" />
              <LinesEditor label="On-site Payment Lines (italic)"
                lines={pageData.paymentOnsiteLines}
                onChange={(v) => update("paymentOnsiteLines", v)} />
            </div>

            {/* Warranty */}
            <div className="mb-4">
              <div className="text-[11px] font-bold text-[#444] mb-1">Warranty Label</div>
              <input type="text" value={pageData.warrantyLabel || ""}
                onChange={(e) => update("warrantyLabel", e.target.value)}
                className="w-full border-b border-dashed border-gray-300 outline-none bg-transparent text-[12px] mb-1" />
              <LinesEditor label="Warranty Lines"
                lines={pageData.warrantyLines}
                onChange={(v) => update("warrantyLines", v)} />
            </div>

            {/* On-site Services */}
            <div className="mb-4">
              <div className="text-[11px] font-bold text-[#444] mb-1">On-site Services Label</div>
              <input type="text" value={pageData.onsiteLabel || ""}
                onChange={(e) => update("onsiteLabel", e.target.value)}
                className="w-full border-b border-dashed border-gray-300 outline-none bg-transparent text-[12px] mb-1" />
              <LinesEditor label="On-site Services Lines (italic)"
                lines={pageData.onsiteLines}
                onChange={(v) => update("onsiteLines", v)} />
            </div>
          </div>
        </div>

        {/* PAGE FOOTER */}
        <div className="mt-6 flex justify-between items-end text-[10px] italic text-[#8d8d8d]">
          <div>
            <p>a: S7-1, Jai Matadi Compound, Kalher, Thane, Maharashtra, INDIA 421302</p>
            <p>e: info@electrosoftindia.com</p>
            <p>m: +91-9089-888-444</p>
          </div>
          <div className="text-right">
            <p>GST: 27AAFCE4353G1ZP</p>
            <p>CIN: U31900MH2019PTC323431</p>
            <p className="text-[#003f77] font-semibold not-italic mt-1">Page 20 of 24</p>
          </div>
        </div>

        {/* NAVIGATION */}
        {/* <div className="flex justify-between mt-8">
          <button
            onClick={() => navigate("/Commercial/CommercialPage19")}
            className="px-5 py-2 rounded-full border border-[#0d4c7f] text-[#0d4c7f] text-[12px] font-semibold bg-white hover:bg-gray-50"
          >
            ← Previous Page
          </button>
          <button
            onClick={() => navigate("/Commercial/CommercialPage21")}
            className="px-5 py-2 rounded-full bg-[#0d4c7f] text-white text-[12px] font-semibold hover:bg-[#0b3f6a]"
          >
            Next →
          </button>
        </div> */}

      </div>
    </div>
  );
}