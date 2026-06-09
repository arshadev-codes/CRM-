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

  // Generic text field update helper
  const updateField = (field, value) => {
    updateCommercialPage("page17", {
      ...pageData,
      [field]: value,
    });
  };

  // Update logic for Offsite Items
  const updateOffsiteItem = (index, field, value) => {
    const offsiteItems = [...(pageData.offsiteItems || [])];
    offsiteItems[index] = {
      ...offsiteItems[index],
      [field]: value,
    };
    updateCommercialPage("page17", {
      ...pageData,
      offsiteItems,
    });
  };

  const addOffsiteRow = () => {
    const offsiteItems = [
      ...(pageData.offsiteItems || []),
      {
        srNo: (pageData.offsiteItems?.length || 0) + 1,
        description: "",
        quantity: "",
        price: "",
      },
    ];
    updateCommercialPage("page17", {
      ...pageData,
      offsiteItems,
    });
  };

  const deleteOffsiteRow = (index) => {
    const offsiteItems = (pageData.offsiteItems || [])
      .filter((_, i) => i !== index)
      .map((item, idx) => ({
        ...item,
        srNo: idx + 1,
      }));
    updateCommercialPage("page17", {
      ...pageData,
      offsiteItems,
    });
  };

  // Update logic for Onsite Items
  const updateOnsiteItem = (index, field, value) => {
    const onsiteItems = [...(pageData.onsiteItems || [])];
    onsiteItems[index] = {
      ...onsiteItems[index],
      [field]: value,
    };
    updateCommercialPage("page17", {
      ...pageData,
      onsiteItems,
    });
  };

  const addOnsiteRow = () => {
    const onsiteItems = [
      ...(pageData.onsiteItems || []),
      {
        srNo: (pageData.onsiteItems?.length || 0) + 1,
        description: "",
        quantity: "",
        price: "",
      },
    ];
    updateCommercialPage("page17", {
      ...pageData,
      onsiteItems,
    });
  };

  const deleteOnsiteRow = (index) => {
    const onsiteItems = (pageData.onsiteItems || [])
      .filter((_, i) => i !== index)
      .map((item, idx) => ({
        ...item,
        srNo: idx + 1,
      }));
    updateCommercialPage("page17", {
      ...pageData,
      onsiteItems,
    });
  };

  // Update logic for Delivery Schedule Items
  const updateDeliveryItem = (index, field, value) => {
    const deliverySchedule = [...(pageData.deliverySchedule || [])];
    deliverySchedule[index] = {
      ...deliverySchedule[index],
      [field]: value,
    };
    updateCommercialPage("page17", {
      ...pageData,
      deliverySchedule,
    });
  };

  const addDeliveryRow = () => {
    const deliverySchedule = [
      ...(pageData.deliverySchedule || []),
      {
        srNo: (pageData.deliverySchedule?.length || 0) + 1,
        details: "",
        duration: "",
      },
    ];
    updateCommercialPage("page17", {
      ...pageData,
      deliverySchedule,
    });
  };

  const deleteDeliveryRow = (index) => {
    const deliverySchedule = (pageData.deliverySchedule || [])
      .filter((_, i) => i !== index)
      .map((item, idx) => ({
        ...item,
        srNo: idx + 1,
      }));
    updateCommercialPage("page17", {
      ...pageData,
      deliverySchedule,
    });
  };

  // Update logic for Notes array
  const updateNoteItem = (index, value) => {
    const notes = [...(pageData.notes || [])];
    notes[index] = value;
    updateCommercialPage("page17", {
      ...pageData,
      notes,
    });
  };

  const addNoteItem = () => {
    const notes = [...(pageData.notes || []), ""];
    updateCommercialPage("page17", {
      ...pageData,
      notes,
    });
  };

  const deleteNoteItem = (index) => {
    const notes = (pageData.notes || []).filter((_, i) => i !== index);
    updateCommercialPage("page17", {
      ...pageData,
      notes,
    });
  };

  return (
    <div className="w-full min-h-screen bg-[#eef2f7] flex justify-center py-8">
      <div className="w-[1150px] bg-white border border-[#d9d9d9] shadow-lg px-[40px] pt-[25px] pb-[60px]">
        
        {/* HEADER */}
        <div className="flex justify-between items-start">
          <div className="flex gap-4 items-start">
            <img src={logo} alt="" className="w-[70px]" />
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

        {/* MAIN TITLE */}
        <div className="mt-5">
          <h2 className="text-[#0d4c7f] text-[20px] font-bold tracking-wide">
            {pageData.title}
          </h2>
        </div>

        {/* TABLE 1: OFF-SITE DELIVERABLE DOCUMENTS */}
        <div className="mt-4 border border-[#8f8f8f]">
          <div className="bg-[#0b5576] text-white text-center text-[13px] font-bold italic py-1 relative">
            <input
              value={pageData.offsiteTitle || ""}
              onChange={(e) => updateField("offsiteTitle", e.target.value)}
              className="w-full bg-transparent text-center outline-none uppercase font-bold"
            />
            <Pencil size={14} className="absolute right-2 top-1" />
          </div>

          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#d9eef8] text-[12px]">
                <th className="border p-1 w-[60px]">Sr. No.</th>
                <th className="border p-1">Description</th>
                <th className="border p-1 w-[80px]">Quantity</th>
                <th className="border p-1 w-[120px]">Price (INR)</th>
                <th className="border p-1 w-[60px]">Action</th>
              </tr>
            </thead>
            <tbody>
              {pageData.offsiteItems?.map((item, index) => (
                <tr key={index}>
                  <td className="border text-center text-[12px] font-semibold">{item.srNo}</td>
                  <td className="border p-2 align-middle">
                    <textarea
                      value={item.description || ""}
                      onChange={(e) => updateOffsiteItem(index, "description", e.target.value)}
                      rows={1}
                      className="w-full resize-none border-none outline-none text-[12px] align-middle"
                    />
                  </td>
                  <td className="border text-center">
                    <input
                      value={item.quantity || ""}
                      onChange={(e) => updateOffsiteItem(index, "quantity", e.target.value)}
                      className="w-full text-center outline-none text-[12px]"
                    />
                  </td>
                  <td className="border text-center">
                    <input
                      value={item.price || ""}
                      onChange={(e) => updateOffsiteItem(index, "price", e.target.value)}
                      className="w-full text-center outline-none text-[12px]"
                    />
                  </td>
                  <td className="border text-center">
                    <button onClick={() => deleteOffsiteRow(index)}>
                      <Trash2 size={16} className="text-red-500 mx-auto" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            onClick={addOffsiteRow}
            className="m-3 flex items-center gap-2 px-3 py-1.5 bg-[#0d4c7f] text-white rounded text-[12px]"
          >
            <Plus size={14} /> Add Off-site Row
          </button>
        </div>

        {/* TABLE 2: ON-SITE */}
        <div className="mt-6 border border-[#8f8f8f]">
          <div className="bg-[#0b5576] text-white text-center text-[13px] font-bold italic py-1 relative">
            <input
              value={pageData.onsiteTitle || ""}
              onChange={(e) => updateField("onsiteTitle", e.target.value)}
              className="w-full bg-transparent text-center outline-none uppercase font-bold"
            />
            <Pencil size={14} className="absolute right-2 top-1" />
          </div>

          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#d9eef8] text-[12px]">
                <th className="border p-1 w-[60px]">Sr. No.</th>
                <th className="border p-1">Description</th>
                <th className="border p-1 w-[80px]">Quantity</th>
                <th className="border p-1 w-[120px]">Price (INR)</th>
                <th className="border p-1 w-[60px]">Action</th>
              </tr>
            </thead>
            <tbody>
              {pageData.onsiteItems?.map((item, index) => (
                <tr key={index}>
                  <td className="border text-center text-[12px] font-semibold">{item.srNo}</td>
                  <td className="border p-2 align-middle">
                    <textarea
                      value={item.description || ""}
                      onChange={(e) => updateOnsiteItem(index, "description", e.target.value)}
                      rows={1}
                      className="w-full resize-none border-none outline-none text-[12px] align-middle"
                    />
                  </td>
                  <td className="border text-center">
                    <input
                      value={item.quantity || ""}
                      onChange={(e) => updateOnsiteItem(index, "quantity", e.target.value)}
                      className="w-full text-center outline-none text-[12px]"
                    />
                  </td>
                  <td className="border text-center">
                    <input
                      value={item.price || ""}
                      onChange={(e) => updateOnsiteItem(index, "price", e.target.value)}
                      className="w-full text-center outline-none text-[12px]"
                    />
                  </td>
                  <td className="border text-center">
                    <button onClick={() => deleteOnsiteRow(index)}>
                      <Trash2 size={16} className="text-red-500 mx-auto" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            onClick={addOnsiteRow}
            className="m-3 flex items-center gap-2 px-3 py-1.5 bg-[#0d4c7f] text-white rounded text-[12px]"
          >
            <Plus size={14} /> Add On-site Row
          </button>
        </div>

        {/* SECTION: DELIVERY SCHEDULE */}
        <div className="mt-8">
          <h2 className="text-[#0d4c7f] text-[18px] font-bold tracking-wide mb-3">
            {pageData.deliveryTitle}
          </h2>
          
          <div className="border border-[#8f8f8f]">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#d9eef8] text-[12px]">
                  <th className="border p-1 w-[60px]">Sr. No.</th>
                  <th className="border p-1">Details</th>
                  <th className="border p-1 w-[250px]">Duration</th>
                  <th className="border p-1 w-[60px]">Action</th>
                </tr>
              </thead>
              <tbody>
                {pageData.deliverySchedule?.map((item, index) => (
                  <tr key={index}>
                    <td className="border text-center text-[12px] font-semibold">{item.srNo}</td>
                    <td className="border p-2">
                      <input
                        value={item.details || ""}
                        onChange={(e) => updateDeliveryItem(index, "details", e.target.value)}
                        className="w-full border-none outline-none text-[12px]"
                      />
                    </td>
                    <td className="border p-2 text-center">
                      <input
                        value={item.duration || ""}
                        onChange={(e) => updateDeliveryItem(index, "duration", e.target.value)}
                        className="w-full border-none outline-none text-center text-[12px]"
                      />
                    </td>
                    <td className="border text-center">
                      <button onClick={() => deleteDeliveryRow(index)}>
                        <Trash2 size={16} className="text-red-500 mx-auto" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              onClick={addDeliveryRow}
              className="m-3 flex items-center gap-2 px-3 py-1.5 bg-[#0d4c7f] text-white rounded text-[12px]"
            >
              <Plus size={14} /> Add Delivery Row
            </button>
          </div>
        </div>

        {/* SECTION: NOTES (FIXED VISUAL LAYOUT) */}
        <div className="mt-6 text-[13px]">
          <span className="font-bold text-black block mb-2">Note:</span>
          
          <div className="space-y-3 pl-1">
            {pageData.notes?.map((note, index) => (
              <div key={index} className="flex items-start gap-2 group relative pr-8">
                {/* Index label locked in alignment with the field */}
                <span className="font-medium text-[#333333] min-w-[20px] pt-0.5 text-right">
                  {index + 1}.
                </span>
                
                {/* Textarea container with flexible row expansions */}
                <textarea
                  value={note || ""}
                  onChange={(e) => updateNoteItem(index, e.target.value)}
                  rows={2}
                  className="w-full resize-none border-none outline-none bg-transparent text-[#333333] font-medium leading-[20px] focus:bg-gray-50 rounded px-1 transition-colors"
                />
                
                {/* Hover actions clean and anchored */}
                <button
                  onClick={() => deleteNoteItem(index)}
                  className="absolute right-2 top-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Trash2 size={14} className="text-red-500" />
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={addNoteItem}
            className="mt-4 flex items-center gap-1.5 px-3 py-1.5 border border-dashed border-[#0d4c7f] text-[#0d4c7f] rounded-md text-[12px] font-medium hover:bg-blue-50/50"
          >
            <Plus size={13} /> Add Note
          </button>
        </div>

        {/* FOOTER */}
        <div className="mt-12 flex justify-between items-end text-[10px] italic text-[#8d8d8d]">
          <div>
            <p>a: S7-1, Jai Matadi Compound, Kalher, Thane, Maharashtra, INDIA 421302</p>
            <p>e: info@electrosoftindia.com</p>
            <p>m: +91-9089-888-444</p>
          </div>

          <div className="text-right">
            <p>GST: 27AAFCE4353G1ZP</p>
            <p>CIN: U31900MH2019PTC323431</p>
            <p className="text-[#003f77] font-semibold not-italic mt-1">
              Page 17 of 24
            </p>
          </div>
        </div>

        {/* NAVIGATION BUTTONS */}
        <div className="flex justify-between mt-8">
          <button
            onClick={() => navigate("/Commercial/CommercialPage16")}
            className="px-5 py-2 rounded-full border border-[#0d4c7f] text-[#0d4c7f] text-[12px] font-semibold"
          >
            ← Previous Page
          </button>

          <button
            onClick={() => navigate("/Commercial/CommercialPage18")}
            className="px-5 py-2 rounded-full bg-[#0d4c7f] text-white text-[12px] font-semibold"
          >
            Next →
          </button>
        </div>

      </div>
    </div>
  );
}