// systemTypeData.js
// Contains all system-type-specific content for pages 3–11

export const SYSTEM_TYPES = [
  "Advanced",
  "AI Powered Advanced",
  "Fully Automatic",
  "Semi-Automatic",
  "Conventional",
];

// ─────────────────────────────────────────────
// PAGE 3 — Product Overview / Key Highlights
// ─────────────────────────────────────────────
export const page3Data = {
  Advanced: {

  title:
    "ADVANCED TRANSFORMER TESTING SYSTEM (ATTS)",

  tagline:
    "Where Intelligence Meets Automation",

  intro:
    "Backed by decades of transformer testing expertise, Electrosoft proudly presents a world-class Advanced Transformer Testing Suite, setting a new industry benchmark in accuracy, operational speed, and engineering sophistication..",

  project:
    "Real-World Proven: 750 MVA System Supplied to CG Bhopal",

  description:
    "Recently delivered to CG Bhopal for testing of 750 MVA transformers, our Advanced System features a 43-inch industrial-grade display, enabling seamless visualization of test parameters and real-time diagnostics. Integrated with a dedicated Manual Control Station, the system provides enhanced flexibility for technicians who prefer hands- n control for critical test sequences.",

  highlights: [

    {
      title:
        "Centralized Command with X’Mer Edge™ Software",

      text:
        "All test procedures are orchestrated from a single intelligent console powered by our proprietary software, X'Mer Edge™. This platform offers unified control, monitoring, and sequencing of all tests, empowering engineers with real-time oversight, effortless navigation, and audit-ready documentation.",
    },

    {
      title:
        "Ultra-Efficient Workflow",

      text:
        "With just three core connection setups, the system can perform up to 18 critical transformer tests automatically, drastically cutting down on setup time and potential connection errors. This increases throughput, minimizes manual handling, and guarantees test consistency.",
    },

    {
      title:
        "Built for Unmatched Accuracy & Reliability",

      text:
        "Every component is precision-engineered and calibrated to meet or exceed IEC/IEEE testing standards. From insulation resistance to power loss analysis, every measurement is accurate, repeatable, and traceable.",
    },

    {
      title:
        "Automated Switching and Operator Efficiency Features",

      text:
        "The system is equipped with motorized isolators for both the HT capacitor bank and the temperature-rise test circuit. It also incorporates pneumatically operated knife switches for CT–PT primary selection. These automated switching mechanisms significantly reduce operator effort, increase safety and system throughput, minimize manual errors, and enhance overall testing speed and reliability.",
    },
  ],
},

  "AI Powered Advanced": {
    heading: "AI-POWERED ADVANCED TRANSFORMER TESTING SYSTEM",
    tagline: "Where Artificial Intelligence Meets Precision Testing",
    intro:
      "Electrosoft's AI-Powered Advanced Testing System represents the next frontier in transformer diagnostics, leveraging machine learning algorithms and intelligent analytics to deliver unprecedented accuracy, predictive insights, and fully autonomous test execution.",
    realWorldProven: {
      title: "Proven AI Capability: Deployed at National Power Grid Facilities",
      body: "Our AI-powered platform has been successfully deployed at major national grid facilities, enabling real-time anomaly detection, self-calibration, and adaptive test sequencing. The system's neural-network-based analysis engine continuously learns from historical test data to improve accuracy and flag potential transformer faults before they occur.",
    },
    keyHighlights: [
      {
        title: "AI-Driven Test Orchestration with X'Mer Edge™ AI",
        body: "Powered by our AI-enhanced X'Mer Edge™ platform, the system autonomously selects optimal test sequences, calibrates instruments, and adapts parameters in real time based on transformer characteristics. Machine learning models continuously refine test accuracy and flag anomalies automatically.",
      },
      {
        title: "Predictive Fault Analytics",
        body: "Advanced AI algorithms analyze test results against historical data and known failure patterns to provide predictive diagnostics. Engineers receive actionable insights, risk assessments, and maintenance recommendations alongside standard test reports.",
      },
      {
        title: "Self-Calibrating Measurement Engine",
        body: "The AI core continuously monitors instrument drift, environmental conditions, and measurement noise, automatically applying corrections to ensure every reading meets or exceeds IEC/IEEE accuracy requirements without manual intervention.",
      },
      {
        title: "Autonomous Safety & Switching Intelligence",
        body: "AI-based decision logic governs all motorized isolators, pneumatic knife switches, and safety interlocks, dynamically adapting switching sequences to transformer topology and test requirements for maximum safety and efficiency.",
      },
    ],
  },

  "Fully Automatic": {
    heading: "FULLY AUTOMATIC TRANSFORMER TESTING SYSTEM (FATTS)",
    tagline: "Complete Automation, Zero Compromise",
    intro:
      "Electrosoft's Fully Automatic Transformer Testing System delivers a seamless, operator-assisted experience where the software handles all switching, measurement, sequencing, and reporting — enabling high-throughput testing with minimal human intervention.",
    realWorldProven: {
      title: "Proven Performance: 400 MVA System Deployed at BHEL Bhopal",
      body: "Our Fully Automatic System has been operational at BHEL's Bhopal facility since 2023, supporting routine and type-testing of power transformers up to 400 MVA, 400 kV. The system consistently achieves test cycle times 60% shorter than conventional setups, with zero manual switching errors.",
    },
    keyHighlights: [
      {
        title: "One-Click Test Execution via X'Mer Edge™",
        body: "Operators simply select the transformer nameplate details and desired tests; X'Mer Edge™ automatically configures all connections, executes tests in optimal sequence, records data, and generates IEC-compliant reports — all without manual switching.",
      },
      {
        title: "Fully Motorized Switching Infrastructure",
        body: "All HV and LV switching, CT–PT selection, capacitor bank connection, and temperature-rise circuit isolation are performed by motorized actuators under software control, eliminating operator exposure to live circuits.",
      },
      {
        title: "Real-Time Data Acquisition & Validation",
        body: "High-speed data acquisition modules sample all electrical parameters simultaneously. Built-in validation algorithms compare results against nameplate and IEC limits in real time, flagging deviations instantly.",
      },
      {
        title: "Comprehensive Safety Interlock Architecture",
        body: "Multi-layered PLC-based safety interlocks, door sensors, occupancy detectors, and automatic discharge circuits ensure complete operator safety throughout every test sequence.",
      },
    ],
  },

  "Semi-Automatic": {
    heading: "SEMI-AUTOMATIC TRANSFORMER TESTING SYSTEM (SATTS)",
    tagline: "The Perfect Balance of Control and Automation",
    intro:
      "Electrosoft's Semi-Automatic Transformer Testing System combines automated measurement and data acquisition with operator-controlled switching, giving experienced engineers full situational awareness while eliminating tedious manual calculations and report writing.",
    realWorldProven: {
      title: "Trusted by Leading Manufacturers: System at Transformers & Rectifiers India",
      body: "Our Semi-Automatic System has been in continuous operation at Transformers & Rectifiers India Ltd. for over four years, supporting transformer testing up to 315 MVA, 220 kV. Engineers value the system's blend of manual control and automated measurement, which suits their quality-assurance workflows.",
    },
    keyHighlights: [
      {
        title: "Operator-Guided Test Workflow with X'Mer Edge™",
        body: "X'Mer Edge™ guides the operator through each test step-by-step, prompting for required connections and automatically acquiring measurements once the operator confirms readiness. This hybrid approach suits organizations transitioning from fully manual to automated testing.",
      },
      {
        title: "Automated Measurement & Reporting",
        body: "All instrument readings, calculations, comparisons against limits, and report generation are fully automated. Operators focus on physical setup and safety while the software handles all data management.",
      },
      {
        title: "Flexible Test Configuration",
        body: "Tests can be run in any sequence chosen by the operator, with X'Mer Edge™ maintaining complete traceability and ensuring no test is missed before report generation.",
      },
      {
        title: "Scalable to Full Automation",
        body: "Semi-automatic systems are designed with motor-ready actuator mounting points and software hooks for future upgrade to full automation with minimal civil or electrical rework.",
      },
    ],
  },

  Conventional: {
    heading: "CONVENTIONAL TRANSFORMER TESTING SYSTEM (CTTS)",
    tagline: "Time-Tested Reliability, Engineered for Precision",
    intro:
      "Electrosoft's Conventional Transformer Testing System provides a robust, manually operated test environment equipped with precision instruments, heavy-duty switching gear, and a centralized control desk — ideal for organizations requiring proven reliability without automation complexity.",
    realWorldProven: {
      title: "Decades of Proven Service: Systems Operating at State Electricity Boards Nationwide",
      body: "Conventional testing systems supplied by Electrosoft have been in uninterrupted service at multiple State Electricity Boards and private transformer manufacturers for over a decade, consistently delivering accurate and repeatable results across routine and type-test programs.",
    },
    keyHighlights: [
      {
        title: "Centralized Manual Control Desk",
        body: "A rugged, ergonomically designed control desk houses all meters, selector switches, push buttons, and indicator lamps required to conduct the full range of transformer tests manually, providing operators with complete situational awareness.",
      },
      {
        title: "Precision-Grade Instruments",
        body: "Every measurement instrument is carefully selected and calibrated to IEC/IEEE standards, covering winding resistance, turns ratio, insulation resistance, power loss, and high-voltage withstand measurements with traceable accuracy.",
      },
      {
        title: "Heavy-Duty Switching Infrastructure",
        body: "Industrial-grade circuit breakers, contactors, and knife switches rated for the full test voltage and current range are provided, with clearly labeled mimic diagrams to guide operators through safe connection sequences.",
      },
      {
        title: "Comprehensive Safety Features",
        body: "Hardwired safety interlocks, emergency stop circuits, earthing switches, and clearly marked exclusion zones ensure operator safety during all HV and LV test operations, compliant with IEC 60076 and relevant national safety standards.",
      },
    ],
  },
};