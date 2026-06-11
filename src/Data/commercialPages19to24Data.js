// ─────────────────────────────────────────────────────────────────────────────
// commercialPages19to24Data.js
//
// Pages 19–24 data for all 4 system types:
//   Advanced | Automatic | Semi-Automatic | Manual
//
// Pages 19 & 20 differ per system type (scope, equipment, pricing references).
// Pages 21–24 are General T&C — identical legal text for all system types.
//
// HOW TO USE:
//   Import this in proposalStore.js alongside commercialPagesData.js and merge:
//
//   import extra from "./commercialPages19to24Data";
//   function hydrateCommercialPages(systemType) {
//     const base = JSON.parse(JSON.stringify(commercialPagesData?.[systemType] ?? {}));
//     const ext  = JSON.parse(JSON.stringify(extra?.[systemType] ?? {}));
//     return { ...base, ...ext };
//   }
// ─────────────────────────────────────────────────────────────────────────────

// ══════════════════════════════════════════════════════════════════════════════
// SHARED T&C — pages 21–24 are identical for all system types
// ══════════════════════════════════════════════════════════════════════════════

const TC_PAGE_21 = {
  title: "GENERAL TERMS & CONDITIONS",
  effectiveDate: "24th November 2025",
  company:
    "Electrosoft Automation Pvt. Ltd. (hereinafter referred to as \u201cSeller\u201d)",
  intro:
    "These Terms and Conditions shall apply to all quotations, offers, purchase orders, order confirmations, sales, and deliveries made by the Seller to its customers (hereinafter referred to as \u201cBuyer\u201d), unless otherwise agreed in writing. The Buyer\u2019s acceptance of a quotation or placement of a purchase order constitutes agreement to the following Terms and Conditions:",
  sections: [
    {
      number: "1.",
      title: "Definitions",
      bullets: [
        "Seller: Electrosoft Automation Pvt. Ltd.",
        "Buyer: The individual or entity issuing a purchase order or accepting an offer.",
        "Goods: Any product, component, equipment, or service offered or sold by Seller.",
        "Contract: The contract for sale and purchase of Goods, comprising the Seller\u2019s quotation and these General Terms & Conditions, and any mutually agreed special terms in writing.",
      ],
    },
    {
      number: "2.",
      title: "Offer Validity",
      body:
        "Unless otherwise specified, Seller\u2019s offer shall remain valid for a period of 30 (thirty) calendar days from the date of the offer. Seller reserves the right to revise or withdraw the offer prior to its acceptance.",
    },
    {
      number: "3.",
      title: "Scope and Precedence of Terms",
      subsections: [
        {
          number: "3.1.",
          body:
            "These General Terms & Conditions (T&C) shall apply to all contracts unless explicitly waived or modified in writing by Seller.",
        },
        {
          number: "3.2.",
          body:
            "Any terms and conditions stated in Buyer\u2019s purchase order or communication that are inconsistent with, contrary to, or in addition to these T&C shall be deemed null and void unless expressly accepted in writing by the Seller.",
        },
        {
          number: "3.3.",
          body:
            "In the event of any conflict, these Terms & Conditions shall prevail over any terms contained in Buyer\u2019s documents, including but not limited to purchase orders, unless specifically acknowledged and agreed by the Seller in writing.",
        },
      ],
    },
    {
      number: "4.",
      title: "Pricing",
      subsections: [
        {
          number: "4.1.",
          body:
            "All prices quoted are ex-works (EXW), exclusive of taxes, duties, freight, insurance, and packing unless expressly stated otherwise.",
        },
        {
          number: "4.2.",
          body:
            "Prices are based on prevailing costs of raw material, labor, exchange rates, and transportation. In the event of significant fluctuation before delivery, Seller reserves the right to adjust pricing with prior intimation.",
        },
      ],
    },
    {
      number: "5.",
      title: "Taxes and Duties",
      subsections: [
        {
          number: "5.1.",
          body:
            "All applicable taxes including but not limited to GST, custom duties, octroi, cess, or local levies shall be borne by the Buyer, unless otherwise stated.",
        },
        {
          number: "5.2.",
          body:
            "Any statutory change in taxes after the offer or order acceptance but before billing/delivery shall be to the account of the Buyer.",
        },
      ],
    },
  ],
};

const TC_PAGE_22 = {
  sections: [
    {
      number: "6.",
      title: "Payment Terms",
      subsections: [
        {
          number: "6.1.",
          body:
            "Timely payment is a fundamental condition of this contract. The payment terms specified in the quotation are binding and must be strictly adhered to without deviation or delay.",
        },
        {
          number: "6.2.",
          body: "Payments shall be made without deduction, set-off, or withholding.",
        },
        {
          number: "6.3.",
          body:
            "Delayed payments beyond due dates will attract interest @ 18% per annum, or the maximum permissible rate under law.",
        },
      ],
    },
    {
      number: "7.",
      title: "Delivery and Risk Transfer",
      subsections: [
        {
          number: "7.1.",
          body:
            "Delivery schedules are indicative and begin from the receipt of a clear Purchase Order, advance payment (if applicable), and all required technical/engineering clarifications.",
        },
        {
          number: "7.2.",
          body:
            "Risk shall transfer to the Buyer immediately upon dispatch of the goods from Seller\u2019s premises, even if transportation is arranged by Seller.",
        },
        {
          number: "7.3.",
          body: "Delivery is subject to Force Majeure conditions (see Section 16).",
        },
      ],
    },
    {
      number: "8.",
      title: "Packing and Forwarding",
      subsections: [
        {
          number: "8.1.",
          body:
            "Goods shall be securely packed using bubble wrap and shrink film as standard. Any special packaging requirements, such as wooden crates or custom protection, shall be provided upon request and will incur additional charges, unless explicitly stated otherwise in the quotation.",
        },
        {
          number: "8.2.",
          body:
            "Seller shall not be responsible for transit damages. Buyer must lodge claims with the transporter/insurer as and if applicable.",
        },
      ],
    },
    {
      number: "9.",
      title: "Inspection and Testing",
      subsections: [
        {
          number: "9.1.",
          body:
            "Factory Acceptance Test (FAT) or Pre-dispatch Inspection (PDI) shall be conducted at Seller\u2019s works if included in the scope.",
        },
        {
          number: "9.2.",
          body:
            "If Buyer or their authorized representative fails to attend the FAT despite due notice, the test will be conducted in their absence and shall be considered final and binding.",
        },
      ],
    },
    {
      number: "10.",
      title: "Installation & Commissioning (if applicable)",
      subsections: [
        {
          number: "10.1.",
          body:
            "Installation, commissioning, and on-site services (if included) shall be scheduled in coordination with Buyer, subject to:",
          bullets: [
            "Site readiness",
            "Uninterrupted power supply",
            "Qualified manpower availability",
          ],
        },
        {
          number: "10.2.",
          body:
            "Charges for such services are extra unless otherwise included in the offer.",
        },
      ],
    },
    {
      number: "11.",
      title: "Warranty",
      subsections: [
        {
          number: "11.1.",
          body:
            "Seller warrants the Goods against manufacturing defects for 12 months from the date of supply or 18 months from",
        },
        {
          number: "11.2.",
          body: "This warranty excludes:",
          bullets: [
            "Damage due to mishandling, improper storage, wrong installation, overloading, short circuits",
            "Unauthorized alterations",
            "Consumables and wear-and-tear components",
          ],
        },
        {
          number: "11.3.",
          body:
            "Buyer must notify defects within the warranty period in writing. Seller shall repair or replace (at its discretion) the defective part.",
        },
      ],
    },
  ],
};

const TC_PAGE_23 = {
  sections: [
    {
      number: "11.4.",
      body:
        "After handover, any visit will be on chargeable basis @ Rs. 12,000/- Per man-day. Travelling, lodging, boarding and local conveyance must be arranged by the purchaser.",
    },
    {
      number: "11.5.",
      body:
        "A warranty covers manufacturing defects for hardware involved. It does not cover failure due to wear and tear. Warranty is applicable for normal working condition. Except repairing, all the cost which includes transportation taxes, custom duty etc to be borne by the purchaser.",
    },
    {
      number: "12.",
      title: "Intellectual Property",
      subsections: [
        {
          number: "12.1.",
          body:
            "All designs, drawings, software, and documentation provided by Seller are its intellectual property and shall not be copied, disclosed, or used for purposes outside the scope of the order.",
        },
        {
          number: "12.2.",
          title: "Software Ownership and Licensing",
          body:
            "Unless explicitly stated otherwise in the offer, the software provided may be either SCADA-based or WinForms-based. Both versions are the exclusive intellectual property of the Seller and may not be copied, distributed, lent, or transferred in any form without the Seller\u2019s prior written consent. For the purposes of this agreement, a \u201clifetime license\u201d or \u201cperpetual license\u201d shall be defined as a license valid for a period of ten (10) years from the date of sale.",
        },
        {
          number: "12.3.",
          body:
            "Buyer shall not reverse-engineer or replicate Seller\u2019s designs or systems.",
        },
      ],
    },
    {
      number: "13.",
      title: "Confidentiality",
      body:
        "Both parties agree to maintain confidentiality of commercial and technical information exchanged during the contract and not to disclose it to third parties without written consent.",
    },
    {
      number: "14.",
      title: "Cancellation & Termination",
      subsections: [
        {
          number: "14.1.",
          body: "Orders once placed are not cancellable without Seller\u2019s written consent.",
        },
        {
          number: "14.2.",
          body: "In the event of cancellation, Buyer shall be liable for:",
          bullets: [
            "Work completed",
            "Raw material committed",
            "Cancellation charges as determined by Seller",
          ],
        },
      ],
    },
    {
      number: "15.",
      title: "Return & Replacement",
      subsections: [
        {
          number: "15.1.",
          body: "No goods shall be returned without prior written approval.",
        },
        {
          number: "15.2.",
          body:
            "If goods are returned due to Buyer\u2019s error or change of plan, handling/restocking charges will apply.",
        },
      ],
    },
    {
      number: "16.",
      title: "Storage and Security Charges",
      subsections: [
        {
          number: "16.1.",
          body:
            "In the event that dispatch is delayed beyond 20 (twenty) days from the date the Buyer is informed that the goods are ready for dispatch at the Seller\u2019s factory, due to reasons attributable to the Buyer, storage and security charges shall apply at the rate of 0.05% of the total order value per day of delay, calculated on a pro-rata basis. These charges are intended to cover warehousing, handling, insurance, and associated risks incurred during the extended storage period.",
        },
        {
          number: "16.2.",
          body:
            "For the avoidance of doubt, this provision shall not be construed as the Seller accepting any liability or responsibility for the safety, condition, or custody of the goods after the expiry of the 20-day period. From the 21st day onward, the goods shall be deemed to be held at the Buyer\u2019s risk, and the Seller shall not be liable for any loss, damage, deterioration, or theft during the storage period.",
        },
      ],
    },
  ],
};

const TC_PAGE_24 = {
  sections: [
    {
      number: "17.",
      title: "Force Majeure",
      body:
        "Seller shall not be held liable for failure or delay in performance due to reasons beyond its reasonable control, including but not limited to:",
      bullets: [
        "Natural disasters, Epidemics/pandemics, War/Terrorism",
        "Supplier delays",
        "Government actions or embargoes",
      ],
      footer:
        "In such cases, Seller may extend delivery or cancel part/all of the order without penalty.",
    },
    {
      number: "18.",
      title: "Limitation of Liability",
      body:
        "Seller\u2019s liability under any circumstances shall be limited to the value of the goods supplied under the specific purchase order. Seller shall not be liable for any indirect, special, incidental, or consequential damages, including loss of profits, downtime, or reputation.",
    },
    {
      number: "19.",
      title: "Governing Law and Jurisdiction",
      body:
        "This contract shall be governed by and construed in accordance with the laws of India. All disputes, controversies, or claims arising out of or in relation to this contract shall be subject to the exclusive jurisdiction of courts in Thane, Maharashtra.",
    },
    {
      number: "20.",
      title: "Entire Agreement",
      body:
        "These Terms and Conditions, along with the relevant quotation and mutually agreed special terms (if any), constitute the entire agreement between the parties. Other terms, conditions, or representations, whether oral or written, shall not be binding unless confirmed in writing by the Seller.",
    },
    {
      number: "21.",
      title: "Severability",
      body:
        "If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.",
    },
    {
      number: "22.",
      title: "Amendment",
      body:
        "These Terms and Conditions may be amended or modified only by a written agreement duly signed by authorized representatives of both Buyer and Seller.",
    },
  ],
  endOfDocument: true,
};

// ══════════════════════════════════════════════════════════════════════════════
// PAGE 19 — per system type
// ══════════════════════════════════════════════════════════════════════════════

const PAGE_19 = {
  Advanced: {
    exclusionsTitle: "LIST OF EXCLUSIONS",
    exclusionsIntro:
      "Given below is list of exclusions for Electrosoft unless explicitly stated otherwise:",
    exclusions: [
      "All interconnection cables outside panel, cable trays, cable supports, glands, cable lugs, plant engineering.",
      "Erection, erection material and other consumables.",
      "Civil and foundation work.",
      "Fence, gates, structural materials etc.",
      "Ventilation system for control room.",
      "Lighting system, Earthing system, Field devices, firefighting equipment.",
      "Field Junction Boxes.",
      "Panel AC (if required).",
      "All other items not mentioned in Scope of supply and services.",
      "Receipt, unloading and storage of equipment at site.",
      "Installation and Power & Control cable laying.",
    ],
    makesTitle: "LIST OF MAKES OF SUPPLY",
    makesIntro:
      "Makes of various items considered in Electrosoft\u2019s scope of supply are as under (only where applicable):",
    makes: [
      { description: "Switchgear & VFD", make: "Schneider / Siemens / ABB" },
      {
        description: "Test Bench, Power panel, CT-PT Rack, Capacitor panel, etc.",
        make: "Electrosoft",
      },
      { description: "Enclosure", make: "Electrosoft" },
      { description: "Software", make: "Electrosoft" },
      { description: "Dimmer", make: "Electrosoft" },
      { description: "PLC", make: "Delta / Schneider" },
      { description: "CT, PT", make: "Moonlight" },
      { description: "Dimmer", make: "Reputed Indian manufacturer" },
      { description: "Transformer (Intermediate & HV)", make: "Reputed Indian manufacturer" },
      { description: "MG set", make: "Reputed Indian manufacturer" },
    ],
  },

  Automatic: {
    exclusionsTitle: "LIST OF EXCLUSIONS",
    exclusionsIntro:
      "Given below is list of exclusions for Electrosoft unless explicitly stated otherwise:",
    exclusions: [
      "All interconnection cables outside panel, cable trays, cable supports, glands, cable lugs, plant engineering.",
      "Erection, erection material and other consumables.",
      "Civil and foundation work.",
      "Fence, gates, structural materials etc.",
      "Ventilation system for control room.",
      "Lighting system, Earthing system, Field devices, firefighting equipment.",
      "Field Junction Boxes.",
      "Panel AC (if required).",
      "All other items not mentioned in Scope of supply and services.",
      "Receipt, unloading and storage of equipment at site.",
      "Installation and Power & Control cable laying.",
    ],
    makesTitle: "LIST OF MAKES OF SUPPLY",
    makesIntro:
      "Makes of various items considered in Electrosoft\u2019s scope of supply are as under (only where applicable):",
    makes: [
      { description: "Switchgear & VFD", make: "Schneider / Siemens / ABB" },
      {
        description: "Test Bench, Power panel, CT-PT Rack, Capacitor panel, etc.",
        make: "Electrosoft",
      },
      { description: "Enclosure", make: "Electrosoft" },
      { description: "Software", make: "Electrosoft" },
      { description: "Dimmer", make: "Electrosoft" },
      { description: "PLC", make: "Delta / Schneider" },
      { description: "CT, PT", make: "Moonlight" },
      { description: "Dimmer", make: "Reputed Indian manufacturer" },
      { description: "Transformer (Intermediate & HV)", make: "Reputed Indian manufacturer" },
      { description: "MG set", make: "Reputed Indian manufacturer" },
    ],
  },

  "Semi-Automatic": {
    exclusionsTitle: "LIST OF EXCLUSIONS",
    exclusionsIntro:
      "Given below is list of exclusions for Electrosoft unless explicitly stated otherwise:",
    exclusions: [
      "All interconnection cables outside panel, cable trays, cable supports, glands, cable lugs, plant engineering.",
      "Erection, erection material and other consumables.",
      "Civil and foundation work.",
      "Fence, gates, structural materials etc.",
      "Ventilation system for control room.",
      "Lighting system, Earthing system, Field devices, firefighting equipment.",
      "Field Junction Boxes.",
      "Panel AC (if required).",
      "All other items not mentioned in Scope of supply and services.",
      "Receipt, unloading and storage of equipment at site.",
      "Installation and Power & Control cable laying.",
      "SCADA / HMI software license (unless explicitly included in the quoted scope).",
    ],
    makesTitle: "LIST OF MAKES OF SUPPLY",
    makesIntro:
      "Makes of various items considered in Electrosoft\u2019s scope of supply are as under (only where applicable):",
    makes: [
      { description: "Switchgear & VFD", make: "Schneider / Siemens / ABB" },
      {
        description: "Test Bench, Power panel, CT-PT Rack, Capacitor panel, etc.",
        make: "Electrosoft",
      },
      { description: "Enclosure", make: "Electrosoft" },
      { description: "Software (Semi-Auto Control)", make: "Electrosoft" },
      { description: "PLC / Relay", make: "Delta / Schneider / Omron" },
      { description: "CT, PT", make: "Moonlight / Reputed Indian manufacturer" },
      { description: "Dimmer (Semi-Auto Variac)", make: "Reputed Indian manufacturer" },
      { description: "Transformer (Intermediate & HV)", make: "Reputed Indian manufacturer" },
      { description: "MG set", make: "Reputed Indian manufacturer" },
    ],
  },

  Manual: {
    exclusionsTitle: "LIST OF EXCLUSIONS",
    exclusionsIntro:
      "Given below is list of exclusions for Electrosoft unless explicitly stated otherwise:",
    exclusions: [
      "All interconnection cables outside panel, cable trays, cable supports, glands, cable lugs, plant engineering.",
      "Erection, erection material and other consumables.",
      "Civil and foundation work.",
      "Fence, gates, structural materials etc.",
      "Ventilation system for control room.",
      "Lighting system, Earthing system, Field devices, firefighting equipment.",
      "Field Junction Boxes.",
      "Panel AC (if required).",
      "All other items not mentioned in Scope of supply and services.",
      "Receipt, unloading and storage of equipment at site.",
      "Installation and Power & Control cable laying.",
      "Any automation, PLC, SCADA or software-based control systems.",
      "Data logging or digital measurement instruments unless specifically quoted.",
    ],
    makesTitle: "LIST OF MAKES OF SUPPLY",
    makesIntro:
      "Makes of various items considered in Electrosoft\u2019s scope of supply are as under (only where applicable):",
    makes: [
      { description: "Switchgear", make: "Schneider / Siemens / ABB" },
      {
        description: "Test Bench, Power panel, CT-PT Rack, Capacitor panel, etc.",
        make: "Electrosoft",
      },
      { description: "Enclosure", make: "Electrosoft" },
      { description: "CT, PT", make: "Moonlight / Reputed Indian manufacturer" },
      { description: "Dimmer (Manual Variac)", make: "Reputed Indian manufacturer" },
      { description: "Transformer (Intermediate & HV)", make: "Reputed Indian manufacturer" },
      {
        description: "Measuring Instruments",
        make: "Yokogawa / Rishabh / Reputed Indian manufacturer",
      },
    ],
  },
};

// ══════════════════════════════════════════════════════════════════════════════
// PAGE 20 — per system type
// ══════════════════════════════════════════════════════════════════════════════

const PAGE_20 = {
  Advanced: {
    title: "INVESTMENT DETAILS (PRICE BID)",
    intro:
      'The Price Bid for items covered under \u201cELECTROSOFT\u2019S SCOPE OF SUPPLY & SERVICES\u201d',
    items: [
      {
        srNo: 1,
        description:
          "Supply of Advanced Transformer Testing system for up to 500 MVA, 765 kV Transformers",
        quantity: 1,
        price: "----",
      },
      {
        srNo: 2,
        descriptionLines: [
          "On-site services:",
          "a. Supervision of Installation",
          "b. Commissioning and Training",
        ],
        quantity: 1,
        price: "----",
      },
    ],
    packingLabel: "Packing charges: Inclusive",
    packingDetail: "(Packing type for panels: Road-worthy Wooden Packing (Slotted crate))",
    freightLabel: "Freight charges: Inclusive",
    freightDetails: ["(Destination: Hyderabad)", "(Mode of Transport: By Road)"],
    incoterms: "Incoterms: CFR (Cost & Freight)",
    transitLabel: "Transit Insurance: Not in our scope.",
    transitLines: [
      "M/s Neotrafo Solutions India Private Limited may insure the shipment at their discretion if desired.",
      "Our liability ends once the goods leave our factory premises.",
    ],
    offerValidity: "Offer validity: 30 days",
    paymentSupplyLabel: "Payment Terms for Supply of material:",
    paymentSupplyLines: [
      "20% Advance payable against Proforma Invoice.",
      "30% payable against Approval of Drawings.",
      "50% payable before dispatch, either upon successful FAT or within 14 days from the date the material is ready \u2014 whichever occurs earlier.",
    ],
    paymentOnsiteLabel: "Payment Terms for On-site services:",
    paymentOnsiteLines: [
      "50% Advance for mobilization of personnel. Balance immediately after successful commissioning.",
    ],
    warrantyLabel: "Warranty: ",
    warrantyLines: [
      "12 months from the date of commissioning or 18 months from the date of dispatch, whichever is earlier.",
      "Extended warranty and AMC can be quoted separately upon request.",
    ],
    onsiteLabel: "On-site services:",
    onsiteLines: [
      "Onsite services if delayed beyond specified man days due to site condition, it will be chargeable extra @ Rs. 15,000/- per man day. During on-site period for commissioning, lodging and boarding of engineer(s) must be arranged by M/s Neotrafo Solutions India Private Limited",
    ],
  },

  Automatic: {
    title: "INVESTMENT DETAILS (PRICE BID)",
    intro:
      'The Price Bid for items covered under \u201cELECTROSOFT\u2019S SCOPE OF SUPPLY & SERVICES\u201d',
    items: [
      {
        srNo: 1,
        description:
          "Supply of Automatic Transformer Testing system for up to 200 MVA, 400 kV Transformers",
        quantity: 1,
        price: "----",
      },
      {
        srNo: 2,
        descriptionLines: [
          "On-site services:",
          "a. Supervision of Installation",
          "b. Commissioning and Training",
        ],
        quantity: 1,
        price: "----",
      },
    ],
    packingLabel: "Packing charges: Inclusive",
    packingDetail: "(Packing type for panels: Road-worthy Wooden Packing (Slotted crate))",
    freightLabel: "Freight charges: Inclusive",
    freightDetails: ["(Destination: As per Purchase Order)", "(Mode of Transport: By Road)"],
    incoterms: "Incoterms: CFR (Cost & Freight)",
    transitLabel: "Transit Insurance: Not in our scope.",
    transitLines: [
      "Buyer may insure the shipment at their discretion if desired.",
      "Our liability ends once the goods leave our factory premises.",
    ],
    offerValidity: "Offer validity: 30 days",
    paymentSupplyLabel: "Payment Terms for Supply of material:",
    paymentSupplyLines: [
      "20% Advance payable against Proforma Invoice.",
      "30% payable against Approval of Drawings.",
      "50% payable before dispatch, either upon successful FAT or within 14 days from the date the material is ready \u2014 whichever occurs earlier.",
    ],
    paymentOnsiteLabel: "Payment Terms for On-site services:",
    paymentOnsiteLines: [
      "50% Advance for mobilization of personnel. Balance immediately after successful commissioning.",
    ],
    warrantyLabel: "Warranty: ",
    warrantyLines: [
      "12 months from the date of commissioning or 18 months from the date of dispatch, whichever is earlier.",
      "Extended warranty and AMC can be quoted separately upon request.",
    ],
    onsiteLabel: "On-site services:",
    onsiteLines: [
      "Onsite services if delayed beyond specified man days due to site condition, it will be chargeable extra @ Rs. 15,000/- per man day. During on-site period for commissioning, lodging and boarding of engineer(s) must be arranged by the Buyer.",
    ],
  },

  "Semi-Automatic": {
    title: "INVESTMENT DETAILS (PRICE BID)",
    intro:
      'The Price Bid for items covered under \u201cELECTROSOFT\u2019S SCOPE OF SUPPLY & SERVICES\u201d',
    items: [
      {
        srNo: 1,
        description:
          "Supply of Semi-Automatic Transformer Testing system for up to 100 MVA, 220 kV Transformers",
        quantity: 1,
        price: "----",
      },
      {
        srNo: 2,
        descriptionLines: [
          "On-site services:",
          "a. Supervision of Installation",
          "b. Commissioning and Training",
        ],
        quantity: 1,
        price: "----",
      },
    ],
    packingLabel: "Packing charges: Inclusive",
    packingDetail: "(Packing type for panels: Road-worthy Wooden Packing (Slotted crate))",
    freightLabel: "Freight charges: Inclusive",
    freightDetails: ["(Destination: As per Purchase Order)", "(Mode of Transport: By Road)"],
    incoterms: "Incoterms: CFR (Cost & Freight)",
    transitLabel: "Transit Insurance: Not in our scope.",
    transitLines: [
      "Buyer may insure the shipment at their discretion if desired.",
      "Our liability ends once the goods leave our factory premises.",
    ],
    offerValidity: "Offer validity: 30 days",
    paymentSupplyLabel: "Payment Terms for Supply of material:",
    paymentSupplyLines: [
      "20% Advance payable against Proforma Invoice.",
      "30% payable against Approval of Drawings.",
      "50% payable before dispatch, either upon successful FAT or within 14 days from the date the material is ready \u2014 whichever occurs earlier.",
    ],
    paymentOnsiteLabel: "Payment Terms for On-site services:",
    paymentOnsiteLines: [
      "50% Advance for mobilization of personnel. Balance immediately after successful commissioning.",
    ],
    warrantyLabel: "Warranty: ",
    warrantyLines: [
      "12 months from the date of commissioning or 18 months from the date of dispatch, whichever is earlier.",
      "Extended warranty and AMC can be quoted separately upon request.",
    ],
    onsiteLabel: "On-site services:",
    onsiteLines: [
      "Onsite services if delayed beyond specified man days due to site condition, it will be chargeable extra @ Rs. 15,000/- per man day. During on-site period for commissioning, lodging and boarding of engineer(s) must be arranged by the Buyer.",
    ],
  },

  Manual: {
    title: "INVESTMENT DETAILS (PRICE BID)",
    intro:
      'The Price Bid for items covered under \u201cELECTROSOFT\u2019S SCOPE OF SUPPLY & SERVICES\u201d',
    items: [
      {
        srNo: 1,
        description:
          "Supply of Manual Transformer Testing system for up to 50 MVA, 132 kV Transformers",
        quantity: 1,
        price: "----",
      },
      {
        srNo: 2,
        descriptionLines: [
          "On-site services:",
          "a. Supervision of Installation",
          "b. Commissioning and Training",
        ],
        quantity: 1,
        price: "----",
      },
    ],
    packingLabel: "Packing charges: Inclusive",
    packingDetail: "(Packing type for panels: Road-worthy Wooden Packing (Slotted crate))",
    freightLabel: "Freight charges: Inclusive",
    freightDetails: ["(Destination: As per Purchase Order)", "(Mode of Transport: By Road)"],
    incoterms: "Incoterms: CFR (Cost & Freight)",
    transitLabel: "Transit Insurance: Not in our scope.",
    transitLines: [
      "Buyer may insure the shipment at their discretion if desired.",
      "Our liability ends once the goods leave our factory premises.",
    ],
    offerValidity: "Offer validity: 30 days",
    paymentSupplyLabel: "Payment Terms for Supply of material:",
    paymentSupplyLines: [
      "20% Advance payable against Proforma Invoice.",
      "30% payable against Approval of Drawings.",
      "50% payable before dispatch, either upon successful FAT or within 14 days from the date the material is ready \u2014 whichever occurs earlier.",
    ],
    paymentOnsiteLabel: "Payment Terms for On-site services:",
    paymentOnsiteLines: [
      "50% Advance for mobilization of personnel. Balance immediately after successful commissioning.",
    ],
    warrantyLabel: "Warranty: ",
    warrantyLines: [
      "12 months from the date of commissioning or 18 months from the date of dispatch, whichever is earlier.",
      "Extended warranty and AMC can be quoted separately upon request.",
    ],
    onsiteLabel: "On-site services:",
    onsiteLines: [
      "Onsite services if delayed beyond specified man days due to site condition, it will be chargeable extra @ Rs. 12,000/- per man day. During on-site period for commissioning, lodging and boarding of engineer(s) must be arranged by the Buyer.",
    ],
  },
};

// ══════════════════════════════════════════════════════════════════════════════
// FINAL EXPORT
// ══════════════════════════════════════════════════════════════════════════════

const commercialPages19to24Data = {
  Advanced: {
    page19: PAGE_19.Advanced,
    page20: PAGE_20.Advanced,
    page21: TC_PAGE_21,
    page22: TC_PAGE_22,
    page23: TC_PAGE_23,
    page24: TC_PAGE_24,
  },
  Automatic: {
    page19: PAGE_19.Automatic,
    page20: PAGE_20.Automatic,
    page21: TC_PAGE_21,
    page22: TC_PAGE_22,
    page23: TC_PAGE_23,
    page24: TC_PAGE_24,
  },
  "Semi-Automatic": {
    page19: PAGE_19["Semi-Automatic"],
    page20: PAGE_20["Semi-Automatic"],
    page21: TC_PAGE_21,
    page22: TC_PAGE_22,
    page23: TC_PAGE_23,
    page24: TC_PAGE_24,
  },
  Manual: {
    page19: PAGE_19.Manual,
    page20: PAGE_20.Manual,
    page21: TC_PAGE_21,
    page22: TC_PAGE_22,
    page23: TC_PAGE_23,
    page24: TC_PAGE_24,
  },
};

export default commercialPages19to24Data;