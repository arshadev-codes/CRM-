import { useNavigate } from "react-router-dom";
import { Pencil, Plus, Trash2 } from "lucide-react";

import logo from "../../assets/logo.png";
import { useProposalStore } from "../../store/proposalStore";

export default function CommercialPage17() {
  const navigate = useNavigate();

  const {
    commercialPages,
    updateCommercialPage,
  } = useProposalStore();

  const pageData = commercialPages?.page17 || {};

  const updateField = (field, value) => {
    updateCommercialPage("page17", { ...pageData, [field]: value });
  };

  const updateOffsiteItem = (index, field, value) => {
    const offsiteItems = [...(pageData.offsiteItems || [])];
    offsiteItems[index] = { ...offsiteItems[index], [field]: value };
    updateCommercialPage("page17", { ...pageData, offsiteItems });
  };

  const addOffsiteRow = () => {
    const offsiteItems = [
      ...(pageData.offsiteItems || []),
      { srNo: (pageData.offsiteItems?.length || 0) + 1, description: "", quantity: "", price: "" },
    ];
    updateCommercialPage("page17", { ...pageData, offsiteItems });
  };

  const deleteOffsiteRow = (index) => {
    const offsiteItems = (pageData.offsiteItems || [])
      .filter((_, i) => i !== index)
      .map((item, idx) => ({ ...item, srNo: idx + 1 }));
    updateCommercialPage("page17", { ...pageData, offsiteItems });
  };

  const updateOnsiteItem = (index, field, value) => {
    const onsiteItems = [...(pageData.onsiteItems || [])];
    onsiteItems[index] = { ...onsiteItems[index], [field]: value };
    updateCommercialPage("page17", { ...pageData, onsiteItems });
  };

  const addOnsiteRow = () => {
    const onsiteItems = [
      ...(pageData.onsiteItems || []),
      { srNo: (pageData.onsiteItems?.length || 0) + 1, description: "", quantity: "", price: "" },
    ];
    updateCommercialPage("page17", { ...pageData, onsiteItems });
  };

  const deleteOnsiteRow = (index) => {
    const onsiteItems = (pageData.onsiteItems || [])
      .filter((_, i) => i !== index)
      .map((item, idx) => ({ ...item, srNo: idx + 1 }));
    updateCommercialPage("page17", { ...pageData, onsiteItems });
  };

  const updateDeliveryItem = (index, field, value) => {
    const deliverySchedule = [...(pageData.deliverySchedule || [])];
    deliverySchedule[index] = { ...deliverySchedule[index], [field]: value };
    updateCommercialPage("page17", { ...pageData, deliverySchedule });
  };

  const addDeliveryRow = () => {
    const deliverySchedule = [
      ...(pageData.deliverySchedule || []),
      { srNo: (pageData.deliverySchedule?.length || 0) + 1, details: "", duration: "" },
    ];
    updateCommercialPage("page17", { ...pageData, deliverySchedule });
  };

  const deleteDeliveryRow = (index) => {
    const deliverySchedule = (pageData.deliverySchedule || [])
      .filter((_, i) => i !== index)
      .map((item, idx) => ({ ...item, srNo: idx + 1 }));
    updateCommercialPage("page17", { ...pageData, deliverySchedule });
  };

  const updateNoteItem = (index, value) => {
    const notes = [...(pageData.notes || [])];
    notes[index] = value;
    updateCommercialPage("page17", { ...pageData, notes });
  };

  const addNoteItem = () => {
    const notes = [...(pageData.notes || []), ""];
    updateCommercialPage("page17", { ...pageData, notes });
  };

  const deleteNoteItem = (index) => {
    const notes = (pageData.notes || []).filter((_, i) => i !== index);
    updateCommercialPage("page17", { ...pageData, notes });
  };

  return (
    <div className="w-full min-h-screen bg-[#eef2f7] flex justify-center py-8">
      <div className="w-[1150px] bg-white border border-[#d9d9d9] shadow-lg px-[40px] pt-[25px] pb-[60px]">

        {/* HEADER */}
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

        {/* MAIN TITLE */}
        <div className="mt-5">
          <h2 className="text-[#0d4c7f] text-[20px] font-bold tracking-wide">{pageData.title}</h2>
        </div>

        {/* TABLE 1: OFF-SITE */}
        <div className="mt-4 border border-[#8f8f8f]">
          <div className="bg-[#0b5576] text-white text-center text-[12px] font-bold italic py-[3px] relative">
            <input
              value={pageData.offsiteTitle || ""}
              onChange={(e) => updateField("offsiteTitle", e.target.value)}
              className="w-full bg-transparent text-center outline-none uppercase font-bold"
            />
            <Pencil size={13} className="absolute right-2 top-1" />
          </div>

          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#d9eef8] text-[11px]">
                <th className="border py-[3px] px-1 w-[55px] text-center">Sr. No.</th>
                <th className="border py-[3px] px-1 text-center">Description</th>
                <th className="border py-[3px] px-1 w-[75px] text-center">Quantity</th>
                <th className="border py-[3px] px-1 w-[110px] text-center">Price (INR)</th>
                <th className="border py-[3px] px-1 w-[55px] text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {pageData.offsiteItems?.map((item, index) => (
                <tr key={index}>
                  <td className="border text-center text-[11px] font-semibold py-[2px]">{item.srNo}</td>
                  <td className="border px-2 py-[2px]">
                    <textarea
                      value={item.description || ""}
                      onChange={(e) => updateOffsiteItem(index, "description", e.target.value)}
                      rows={1}
                      className="w-full resize-none border-none outline-none text-[11px] leading-[16px] bg-transparent"
                    />
                  </td>
                  <td className="border text-center py-[2px]">
                    <input
                      value={item.quantity || ""}
                      onChange={(e) => updateOffsiteItem(index, "quantity", e.target.value)}
                      className="w-full text-center outline-none text-[11px] bg-transparent"
                    />
                  </td>
                  <td className="border text-center py-[2px]">
                    <input
                      value={item.price || ""}
                      onChange={(e) => updateOffsiteItem(index, "price", e.target.value)}
                      className="w-full text-center outline-none text-[11px] bg-transparent"
                    />
                  </td>
                  <td className="border text-center py-[2px]">
                    <button onClick={() => deleteOffsiteRow(index)}>
                      <Trash2 size={14} className="text-red-500 mx-auto" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            onClick={addOffsiteRow}
            className="m-2 flex items-center gap-1.5 px-2.5 py-1 bg-[#0d4c7f] text-white rounded text-[11px]"
          >
            <Plus size={12} /> Add Off-site Row
          </button>
        </div>

        {/* TABLE 2: ON-SITE */}
        <div className="mt-4 border border-[#8f8f8f]">
          <div className="bg-[#0b5576] text-white text-center text-[12px] font-bold italic py-[3px] relative">
            <input
              value={pageData.onsiteTitle || ""}
              onChange={(e) => updateField("onsiteTitle", e.target.value)}
              className="w-full bg-transparent text-center outline-none uppercase font-bold"
            />
            <Pencil size={13} className="absolute right-2 top-1" />
          </div>

          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#d9eef8] text-[11px]">
                <th className="border py-[3px] px-1 w-[55px] text-center">Sr. No.</th>
                <th className="border py-[3px] px-1 text-center">Description</th>
                <th className="border py-[3px] px-1 w-[75px] text-center">Quantity</th>
                <th className="border py-[3px] px-1 w-[110px] text-center">Price (INR)</th>
                <th className="border py-[3px] px-1 w-[55px] text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {pageData.onsiteItems?.map((item, index) => (
                <tr key={index}>
                  <td className="border text-center text-[11px] font-semibold py-[2px]">{item.srNo}</td>
                  <td className="border px-2 py-[2px]">
                    <textarea
                      value={item.description || ""}
                      onChange={(e) => updateOnsiteItem(index, "description", e.target.value)}
                      rows={1}
                      className="w-full resize-none border-none outline-none text-[11px] leading-[16px] bg-transparent"
                    />
                  </td>
                  <td className="border text-center py-[2px]">
                    <input
                      value={item.quantity || ""}
                      onChange={(e) => updateOnsiteItem(index, "quantity", e.target.value)}
                      className="w-full text-center outline-none text-[11px] bg-transparent"
                    />
                  </td>
                  <td className="border text-center py-[2px]">
                    <input
                      value={item.price || ""}
                      onChange={(e) => updateOnsiteItem(index, "price", e.target.value)}
                      className="w-full text-center outline-none text-[11px] bg-transparent"
                    />
                  </td>
                  <td className="border text-center py-[2px]">
                    <button onClick={() => deleteOnsiteRow(index)}>
                      <Trash2 size={14} className="text-red-500 mx-auto" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            onClick={addOnsiteRow}
            className="m-2 flex items-center gap-1.5 px-2.5 py-1 bg-[#0d4c7f] text-white rounded text-[11px]"
          >
            <Plus size={12} /> Add On-site Row
          </button>
        </div>

        {/* DELIVERY SCHEDULE */}
        <div className="mt-5">
          <h2 className="text-[#0d4c7f] text-[16px] font-bold tracking-wide mb-2">{pageData.deliveryTitle}</h2>
          <div className="border border-[#8f8f8f]">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#d9eef8] text-[11px]">
                  <th className="border py-[3px] px-1 w-[55px] text-center">Sr. No.</th>
                  <th className="border py-[3px] px-1 text-center">Details</th>
                  <th className="border py-[3px] px-1 w-[220px] text-center">Duration</th>
                  <th className="border py-[3px] px-1 w-[55px] text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {pageData.deliverySchedule?.map((item, index) => (
                  <tr key={index}>
                    <td className="border text-center text-[11px] font-semibold py-[2px]">{item.srNo}</td>
                    <td className="border px-2 py-[2px]">
                      <input
                        value={item.details || ""}
                        onChange={(e) => updateDeliveryItem(index, "details", e.target.value)}
                        className="w-full border-none outline-none text-[11px] bg-transparent"
                      />
                    </td>
                    <td className="border px-2 py-[2px] text-center">
                      <input
                        value={item.duration || ""}
                        onChange={(e) => updateDeliveryItem(index, "duration", e.target.value)}
                        className="w-full border-none outline-none text-center text-[11px] bg-transparent"
                      />
                    </td>
                    <td className="border text-center py-[2px]">
                      <button onClick={() => deleteDeliveryRow(index)}>
                        <Trash2 size={14} className="text-red-500 mx-auto" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              onClick={addDeliveryRow}
              className="m-2 flex items-center gap-1.5 px-2.5 py-1 bg-[#0d4c7f] text-white rounded text-[11px]"
            >
              <Plus size={12} /> Add Delivery Row
            </button>
          </div>
        </div>

        {/* NOTES */}
        <div className="mt-4 text-[12px]">
          <span className="font-bold text-black block mb-1.5">Note:</span>
          <div className="space-y-1.5 pl-1">
            {pageData.notes?.map((note, index) => (
              <div key={index} className="flex items-start gap-2 group relative pr-7">
                <span className="font-medium text-[#333333] min-w-[18px] pt-0.5 text-right shrink-0">
                  {index + 1}.
                </span>
                <textarea
                  value={note || ""}
                  onChange={(e) => updateNoteItem(index, e.target.value)}
                  rows={2}
                  className="w-full resize-none border-none outline-none bg-transparent text-[#333333] font-medium leading-[18px] focus:bg-gray-50 rounded px-1 transition-colors text-[11px]"
                />
                <button
                  onClick={() => deleteNoteItem(index)}
                  className="absolute right-0 top-1 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Trash2 size={13} className="text-red-500" />
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={addNoteItem}
            className="mt-2 flex items-center gap-1 px-2.5 py-1 border border-dashed border-[#0d4c7f] text-[#0d4c7f] rounded-md text-[11px] font-medium hover:bg-blue-50/50"
          >
            <Plus size={12} /> Add Note
          </button>
        </div>

        {/* FOOTER */}
        <div className="mt-8 flex justify-between items-end text-[10px] italic text-[#8d8d8d]">
          <div>
            <p>a: S7-1, Jai Matadi Compound, Kalher, Thane, Maharashtra, INDIA 421302</p>
            <p>e: info@electrosoftindia.com</p>
            <p>m: +91-9089-888-444</p>
          </div>
          <div className="text-right">
            <p>GST: 27AAFCE4353G1ZP</p>
            <p>CIN: U31900MH2019PTC323431</p>
            <p className="text-[#003f77] font-semibold not-italic mt-1">Page 17 of 24</p>
          </div>
        </div>

      </div>
    </div>
  );
}