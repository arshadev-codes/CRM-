import Page4 from "../assets/Placeholder.png";

const technicalPagesData = {

  /* =========================================================
     ADVANCED
  ========================================================= */

  Advanced: {

    /* ================= PAGE 4 ================= */

    page4: {

      sections: [

        {
          type: "intro",

          heading:
            "Major Subsystems Offered:",

          text:
            "The following major subsystems are included in the proposed test setup:",

          note:
            "(Photos used in this section are for representational purposes only. Actual products will differ depending on specific requirements.)",
        },

        {
          type: "subsystem",

          title:
            "1. Advanced Fully-automatic Transformer Test Bench",

          description:
            `The Advanced Transformer Test Bench is a centralized and ergonomically designed control station that houses the industrial PC with a 43-inch high-definition display and a mono laser printer for on-site report printing.

It incorporates PLC-based advanced control and monitoring logic along with automated safety interlocks, trip circuits, and protection mechanisms.

The bench includes integrated terminals for all test inputs and outputs, enabling seamless connection with all subsystems. Serving as the command centre of the entire system, it allows the operator to control and monitor the entire test process directly through the software interface, ensuring reliability, safety, and ease of operation.`,

          layout:
            "single-image",

          images: [

            {
              src:
                "/src/assets/Placeholder.png",

              caption: "",
            },
          ],
        },
      ],
    },

    /* ================= PAGE 5 ================= */

    page5: {

      sections: [

        {
          type: "subsystem",

          title:
            "2. Electrosoft X'mer Edge™ - Control & Monitoring software with Report generation module",

          description:
            `Electrosoft X’mer Edge™ is a Windows / SCADA-based software suite that provides integrated control, monitoring and reporting for the complete transformer testing system.

It executes tests fully automatically using intelligent sequencing and handles real-time data acquisition from all connected instruments and subsystems.

The software performs automatic calculations, validations, and comparisons with nameplate or standard limits, and generates test reports in user-defined formats.

The software also incorporates user-level access control, calibration record management, and audit logging. All the tests like HV, temperature rise, DVDF, no-load, load-loss, etc. are conducted and recorded through the X’mer Edge™ interface, providing a unified and consistent operating environment.`,

          layout:
            "dashboard-layout",

          images: [

            {
              src:
                "/src/assets/main.png",
            },

            {
              src:
                "/src/assets/sub1.png",
            },

            {
              src:
                "/src/assets/sub2.png",
            },
          ],
        },
      ],
    },

    /* ================= PAGE 6 ================= */

    page6: {

      sections: [

        {
          type: "subsystem",

          title:
            "3. Generator Panels, HT and LT Breaker panels",

          description:
            `These Panels are heavy-duty assemblies designed to manage and distribute the electrical power required for all major transformer tests.

These panels house ACBs, MCCBs, contactors, protective relays, and suitably rated aluminium busbars engineered for the required thermal and fault withstand levels.

They incorporate the necessary switching arrangements for DVDF and induced-voltage testing, and IOVT operations. All incoming and outgoing feeders are mapped to the test bench to facilitate fully automatic routing and switching under software control.

Excitation panels offer coarse and fine controls for generators.`,

          layout:
            "image-grid-2x2",

          images: [

            {
              src:
                "/src/assets/1.png",

              caption:
                "↑ Generator Panel ↑",
            },

            {
              src:
                "/src/assets/2.png",

              caption:
                "↑ HT Breaker panel ↑",
            },

            {
              src:
                "/src/assets/3.png",

              caption:
                "↑ LT Breaker Panel ↑",
            },

            {
              src:
                "/src/assets/4.png",

              caption:
                "↑ Excitation control Panel ↑",
            },
          ],
        },
      ],
    },

    /* ================= PAGE 7 ================= */

    page7: {

      sections: [

        {
          type: "subsystem",

          title:
            "4. Fully Automatic LV Test Trolley",

          description:
            `The Fully Automatic LV Test Trolley is a dedicated movable unit designed to perform all low-voltage diagnostic tests such as winding resistance, voltage ratio, phase displacement and vector group, magnetic balance, magnetizing current, insulation resistance, and polarization index.

Its portable design allows it to be positioned close to the transformer LV bushings, reducing cable length and setup time.

It is supplied with eight flexible, high-insulation (10 kV) test leads equipped with heavy-duty clips, and is operated through its built-in touch-screen interface where the operator simply selects the required test and presses “Start.”

All switching and sequencing occur automatically, and test data is captured directly into the X’mer Edge™ software for report generation.`,

          layout:
            "single-image",

          images: [

            {
              src:
                "/src/assets/7.png",
            },
          ],
        },
      ],
    },

    /* ================= PAGE 8 ================= */

    page8: {

      sections: [

        {
          type: "subsystem",

          title:
            "5. CT-PT Rack with Pneumatic Knife Switches",

          description:
            `The CT-PT rack is designed for automated primary selection and routing during CT-PT related tests.

It uses pneumatic knife switches actuated through software-controlled logic integrated with the X’mer Edge™ platform.

The system provides fail-safe actuation and feedback-based position confirmation to ensure the correct selection is made before any test is initiated.

This arrangement enables fully automatic switching between various CT and PT combinations required during various tests.`,

          layout:
            "single-image",

          images: [

            {
              src:
                "/src/assets/8.png",
            },
          ],
        },

        {
          type: "subsystem",

          title:
            "6. HT Capacitor bank",

          description:
            `The HT Capacitor Bank is a critical subsystem that supplies the reactive MVA required during tests such as no-load loss, load loss, induced-voltage withstand (DVDF), and other excitation-based high-voltage tests.

It provides stable reactive power support, enabling controlled voltage buildup and maintaining required test voltages without overloading the power source.

The capacitor bank works in coordination with the motorized HT isolator switch and integrated protection logic, allowing safe, interlocked energisation and de-energisation through software commands.`,

          layout:
            "text-only",

          images: [],
        },
      ],
    },

    /* ================= PAGE 9 ================= */

    page9: {

      sections: [

        {
          type: "subsystem",

          title:
            "7. Motorized HT Isolator Switch with Earthing Mechanism & Corona rings (for HT Capacitor Bank)",

          description:
            `This motorized isolator switch provides safe and reliable connection and isolation of the HT capacitor bank.

The motorized actuation eliminates manual operation and ensures consistent, interlocked switching controlled through the system logic.

When combined with PLC-based interlocking, it prevents energisation unless the isolator is in the correct position, thereby enhancing operational safety and test reliability.`,

          layout:
            "dual-image",

          images: [

            {
              src:
                 "/src/assets/9.png",
            },

            {
              src:
                "/src/assets/10.png",
            },
          ],
        },

        {
          type: "subsystem",

          title:
            "8. Motorized HT Isolator Switch with Earthing Mechanism & Corona rings (for Temperature rise test)",

          description:
            `This motorized isolator switch is dedicated to safely isolating the high-voltage loading circuit used during temperature-rise testing.

Motorized actuation allows the isolator to be operated remotely through software logic, preventing manual intervention in high-risk zones.`,

          layout:
            "text-only",

          images: [],
        },

        {
          type: "subsystem",

          title:
            "9. Integration of Impulse Test System & PD Measurement System (Customer-Scope Hardware)",

          description:
            `Although the impulse generator, impulse analyzer, PD detector, coupling capacitor, and associated hardware remain in the customer’s scope, the proposed system provides full integration capability through PLC/SCADA interfacing.

The test bench acquires data from the impulse analyzer, synchronizes it with test parameters, and logs partial discharge values where applicable.`,

          layout:
            "text-only",

          images: [],
        },
      ],
    },

    /* ================= PAGE 10 ================= */

    page10: {

      sections: [

        {
          type: "subsystem",

          title:
            "10. Machine room control desk & RIO Panel (Redundant / Conventional Test bench)",

          description:
            `The Machine room control desk is a dedicated manual-control test bench that houses all essential meters, selector switches, push buttons, and indication lamps required for conventional transformer testing.

It is designed to provide a complete alternative method of conducting tests in situations where the PLC/SCADA-based automated system is unavailable or if the operator prefers manual control for specific tests.`,

          layout:
            "dual-image-caption",

          images: [

            {
              src:
                "/src/assets/11.png",

              caption:
                "Machine Room Control desk (Test bench)",
            },

            {
              src:
                "/src/assets/12.png",

              caption:
                "RIO Panel",
            },
          ],
        },

        {
          type: "subsystem",

          title:
            "11. Equipment and Instruments",

          description:
            `This subsystem comprises all essential testing and measurement devices required for transformer testing, including current transformers, potential transformers, motor-generator (MG) sets, generator protection panels, excitation panels, digital meters, and precision power analyzers.`,

          layout:
            "text-only",

          images: [],
        },
      ],
    },

    /* ================= PAGE 11 ================= */

    page11: {

      sections: [

        {
          type: "subsystem",

          title:
            "12. High Voltage Area Safety Interlock System",

          description:
            `The High Voltage Area Safety Interlock System is designed to ensure complete operator safety during all high-voltage testing operations.

It consists of mechanically interlocked access doors, safety gate switches, and a strategically placed occupancy sensing system.

The interlocks prevent energisation of any high-voltage circuit unless all access doors to the HV test area are fully closed and confirmed through the safety gate switches.`,

          layout:
            "single-image",

          images: [

            {
              src:
                "/src/assets/13.png",
            },
          ],
        },

        {
          type:
            "bullet-section",

          heading:
            "Proposed customizations:",

          bullets: [

            {
              title:
                "Additional safety measures incorporated for Power transformer testing",

              body:
                "After the user selects the desired test, enters all required parameters, and clicks the Start Test button, the system will display a screen with a diagrammatic representation of the setup.",
            },

            {
              title:
                "Autopilot and Manual modes",

              body:
                "For tests that involve voltage ramp-up, the user can choose between Autopilot and Normal modes.",
            },
          ],
        },
      ],
    },

    /* ================= PAGE 12 ================= */

    page12: {
      title:
        "SCHEMATIC OF OFFERED SYSTEM",

      description:
        `By clicking the buttons below, you will access drawings and documents that are the confidential property of M/s Electrosoft Automation Pvt. Ltd. Please proceed only if this proposal is intended for you, or if you are officially associated with the organisation to which this proposal has been submitted.
By clicking these buttons, you confirm that you are authorised to view the confidential information contained therein.`,

      sldPdf:
        "/pdfs/advanced-sld.pdf",

      pdfName:
        "advanced-sld.pdf",

      layoutTitle:
        "Typical System Layout:",

      layoutImage:
        "/sld/advanced-layout.png",
    },

    /* ================= PAGE 13 ================= */

    page13: {

      title:
        "CONNECTIONS AND TESTS",

      connections: [

        {
          name: "Connection A",

          image:
            "/images/connection-a.png",

          tests: [

            "Measurement of No-load Loss (Watt)",

            "Measurement of No-load Current",

            "Induced Overvoltage Withstand Test",
          ],
        },

        {
          name: "Connection B",

          image:
            "/images/connection-b.png",

          tests: [

            "Measurement of Impedance Voltage",

            "Measurement of Load Loss (Watt)",

            "Temperature Rise Test",

            "Calculation of Efficiency and Regulation",
          ],
        },

        {
          name: "Connection C",

          image:
            "/images/connection-c.png",

          tests: [

            "Measurement Of Winding Resistances",

            "Measurement Of Voltage Ratio and Check of Phase Displacement",

            "Measurement Of Insulation Resistance",

            "Measurement of Magnetizing Current",

            "Magnetic Balance Test",

            "Verification Of Vector Group",

            "LV Short Circuit Test",

            "Polarity Test",

            "Applied Voltage Withstand Test (HV Test)",
          ],
        },
      ],

      footerNote:
        "++ OLTC Test, Core-Tank Insulation Test, Pressure Tightness Test, Measurement of zero sequence reactance (Z₀ test)",
    },
  },

  /* =========================================================
     AI POWERED ADVANCED
  ========================================================= */

  "AI Powered Advanced": {

    page4: {

      sections: [

        {
          type: "intro",

          heading:
            "AI Driven Intelligent Subsystems",

          text:
            "The following AI powered transformer testing subsystems are included in the proposed setup.",

          note:
            "(AI-generated analytics and predictive maintenance features included.)",
        },

        {
          type: "subsystem",

          title:
            "1. AI Powered Transformer Test Bench",

          description:
            `The AI Powered Transformer Test Bench integrates machine-learning-assisted diagnostics, predictive maintenance algorithms, intelligent fault recognition, and automated test optimization.`,

          layout:
            "single-image",

          images: [

            {
              src:
                "/src/assets/technical/ai/page4/main.png",
            },
          ],
        },
      ],
    },

    page5: {

      sections: [

        {
          type: "subsystem",

          title:
            "2. Electrosoft X'mer Edge™ AI - Intelligent Control & Monitoring software with Report generation module",

          description:
            `Electrosoft X’mer Edge™ AI is a Windows / SCADA-based software suite that provides integrated control, monitoring and reporting for the complete transformer testing system.

It executes tests fully automatically using intelligent sequencing and handles real-time data acquisition from all connected instruments and subsystems.

The software performs automatic calculations, validations, and comparisons with nameplate or standard limits, and generates test reports in user-defined formats.

The software also incorporates user-level access control, calibration record management, and audit logging. All the tests like HV, temperature rise, DVDF, no-load, load-loss, etc. are conducted and recorded through the X’mer Edge™ interface, providing a unified and consistent operating environment.`,

          layout:
            "dashboard-layout",

          images: [

            {
              src:
                "/src/assets/main.png",
            },

            {
              src:
                "/src/assets/sub1.png",
            },

            {
              src:
                "/src/assets/sub2.png",
            },
          ],
        },
      ],
    },

    page6: {

      sections: [

        {
          type: "subsystem",

          title:
            "3. AI Integrated Generator Panels, HT and LT Breaker panels",

          description:
            `These Panels are heavy-duty assemblies designed to manage and distribute the electrical power required for all major transformer tests.

These panels house ACBs, MCCBs, contactors, protective relays, and suitably rated aluminium busbars engineered for the required thermal and fault withstand levels.

They incorporate the necessary switching arrangements for DVDF and induced-voltage testing, and IOVT operations. All incoming and outgoing feeders are mapped to the test bench to facilitate fully automatic routing and switching under software control.

Excitation panels offer coarse and fine controls for generators.`,

          layout:
            "image-grid-2x2",

          images: [

            {
              src:
                "/src/assets/1.png",

              caption:
                "↑ Generator Panel ↑",
            },

            {
              src:
                "/src/assets/2.png",

              caption:
                "↑ HT Breaker panel ↑",
            },

            {
              src:
                "/src/assets/3.png",

              caption:
                "↑ LT Breaker Panel ↑",
            },

            {
              src:
                "/src/assets/4.png",

              caption:
                "↑ Excitation control Panel ↑",
            },
          ],
        },
      ],
    },

    page7: {

      sections: [

        {
          type: "subsystem",

          title:
            "4. AI Assisted Fully Automatic LV Test Trolley",

          description:
            `The Fully Automatic LV Test Trolley is a dedicated movable unit designed to perform all low-voltage diagnostic tests such as winding resistance, voltage ratio, phase displacement and vector group, magnetic balance, magnetizing current, insulation resistance, and polarization index.

Its portable design allows it to be positioned close to the transformer LV bushings, reducing cable length and setup time.

It is supplied with eight flexible, high-insulation (10 kV) test leads equipped with heavy-duty clips, and is operated through its built-in touch-screen interface where the operator simply selects the required test and presses “Start.”

All switching and sequencing occur automatically, and test data is captured directly into the X’mer Edge™ software for report generation.`,

          layout:
            "single-image",

          images: [

            {
              src:
                "/src/assets/7.png",
            },
          ],
        },
      ],
    },

    page8: {

      sections: [

        {
          type: "subsystem",

          title:
            "5. CT-PT Rack with Pneumatic Knife Switches",

          description:
            `The CT-PT rack is designed for automated primary selection and routing during CT-PT related tests.

It uses pneumatic knife switches actuated through software-controlled logic integrated with the X’mer Edge™ platform.

The system provides fail-safe actuation and feedback-based position confirmation to ensure the correct selection is made before any test is initiated.

This arrangement enables fully automatic switching between various CT and PT combinations required during various tests.`,

          layout:
            "single-image",

          images: [

            {
              src:
                "/src/assets/8.png",
            },
          ],
        },

        {
          type: "subsystem",

          title:
            "6. HT Capacitor bank",

          description:
            `The HT Capacitor Bank is a critical subsystem that supplies the reactive MVA required during tests such as no-load loss, load loss, induced-voltage withstand (DVDF), and other excitation-based high-voltage tests.

It provides stable reactive power support, enabling controlled voltage buildup and maintaining required test voltages without overloading the power source.

The capacitor bank works in coordination with the motorized HT isolator switch and integrated protection logic, allowing safe, interlocked energisation and de-energisation through software commands.`,

          layout:
            "text-only",

          images: [],
        },
      ],
    },

    page9: {

      sections: [

        {
          type: "subsystem",

          title:
            "7. Motorized HT Isolator Switch with Earthing Mechanism & Corona rings (for HT Capacitor Bank)",

          description:
            `This motorized isolator switch provides safe and reliable connection and isolation of the HT capacitor bank.

The motorized actuation eliminates manual operation and ensures consistent, interlocked switching controlled through the system logic.

When combined with PLC-based interlocking, it prevents energisation unless the isolator is in the correct position, thereby enhancing operational safety and test reliability.`,

          layout:
            "dual-image",

          images: [

            {
              src:
                 "/src/assets/9.png",
            },

            {
              src:
                "/src/assets/10.png",
            },
          ],
        },

        {
          type: "subsystem",

          title:
            "8. Motorized HT Isolator Switch with Earthing Mechanism & Corona rings (for Temperature rise test)",

          description:
            `This motorized isolator switch is dedicated to safely isolating the high-voltage loading circuit used during temperature-rise testing.

Motorized actuation allows the isolator to be operated remotely through software logic, preventing manual intervention in high-risk zones.`,

          layout:
            "text-only",

          images: [],
        },

        {
          type: "subsystem",

          title:
            "9. Integration of Impulse Test System & PD Measurement System (Customer-Scope Hardware)",

          description:
            `Although the impulse generator, impulse analyzer, PD detector, coupling capacitor, and associated hardware remain in the customer’s scope, the proposed system provides full integration capability through PLC/SCADA interfacing.

The test bench acquires data from the impulse analyzer, synchronizes it with test parameters, and logs partial discharge values where applicable.`,

          layout:
            "text-only",

          images: [],
        },
      ],
    },

    page10: {

      sections: [

        {
          type: "subsystem",

          title:
            "10. Machine room control desk & RIO Panel (Redundant / Conventional Test bench)",

          description:
            `The Machine room control desk is a dedicated manual-control test bench that houses all essential meters, selector switches, push buttons, and indication lamps required for conventional transformer testing.

It is designed to provide a complete alternative method of conducting tests in situations where the PLC/SCADA-based automated system is unavailable or if the operator prefers manual control for specific tests.`,

          layout:
            "dual-image-caption",

          images: [

            {
              src:
                "/src/assets/11.png",

              caption:
                "Machine Room Control desk (Test bench)",
            },

            {
              src:
                "/src/assets/12.png",

              caption:
                "RIO Panel",
            },
          ],
        },

        {
          type: "subsystem",

          title:
            "11. Equipment and Instruments",

          description:
            `This subsystem comprises all essential testing and measurement devices required for transformer testing, including current transformers, potential transformers, motor-generator (MG) sets, generator protection panels, excitation panels, digital meters, and precision power analyzers.`,

          layout:
            "text-only",

          images: [],
        },
      ],
    },

    page11: {

      sections: [

        {
          type: "subsystem",

          title:
            "12. High Voltage Area Safety Interlock System",

          description:
            `The High Voltage Area Safety Interlock System is designed to ensure complete operator safety during all high-voltage testing operations.

It consists of mechanically interlocked access doors, safety gate switches, and a strategically placed occupancy sensing system.

The interlocks prevent energisation of any high-voltage circuit unless all access doors to the HV test area are fully closed and confirmed through the safety gate switches.`,

          layout:
            "single-image",

          images: [

            {
              src:
                "/src/assets/13.png",
            },
          ],
        },

        {
          type:
            "bullet-section",

          heading:
            "Proposed customizations:",

          bullets: [

            {
              title:
                "Additional safety measures incorporated for Power transformer testing",

              body:
                "After the user selects the desired test, enters all required parameters, and clicks the Start Test button, the system will display a screen with a diagrammatic representation of the setup.",
            },

            {
              title:
                "Autopilot and Manual modes",

              body:
                "For tests that involve voltage ramp-up, the user can choose between Autopilot and Normal modes.",
            },
          ],
        },
      ],
    },

    page12: {
      title:
        "AI ENABLED SCHEMATIC OF OFFERED SYSTEM",

      description:
        `By accessing the following documents and schematic diagrams, you are entering a protected engineering document environment developed exclusively by Electrosoft Automation Pvt. Ltd. These files contain confidential AI-enabled automation architectures, intelligent switching logics, and proprietary transformer testing methodologies intended solely for the customer organisation addressed in this proposal.
Only authorised personnel associated with the proposal recipient organisation are permitted to view or download these documents.
Proceeding further confirms your authorisation to access and review the enclosed confidential information.`,

      sldPdf:
        "/pdfs/advanced-ai-powered-sld.pdf",

      pdfName:
        "advanced-ai-powered-sld.pdf",

      layoutTitle:
        "AI Driven Transformer Testing System Layout:",

      layoutImage:
        "/sld/advanced-ai-layout.png",
    },

    page13: {

      title:
        "AI POWERED CONNECTIONS AND TESTS",

      connections: [

        {
          name: "AI Connection A",

          image:
            "/images/connection-a.png",

          tests: [

            "AI Assisted No-load Loss Measurement",

            "AI Optimized No-load Current Test",

            "AI Controlled Induced Overvoltage Test",
          ],
        },

        {
          name: "AI Connection B",

          image:
            "/images/connection-b.png",

          tests: [

            "AI Analyzed Impedance Voltage",

            "AI Optimized Load Loss Calculation",

            "AI Monitored Temperature Rise Test",

            "AI Calculated Efficiency Validation",
          ],
        },

        {
          name: "AI Connection C",

          image:
            "/images/connection-c.png",

          tests: [

            "AI Verified Winding Resistance Test",

            "AI Validated Voltage Ratio Testing",

            "AI Assessed Insulation Resistance",

            "AI Analyzed Magnetizing Current",

            "AI Validated Magnetic Balance",

            "AI Verified Vector Group",

            "AI Controlled LV Short Circuit Test",

            "AI Confirmed Polarity Test",

            "AI Supervised HV Withstand Test",
          ],
        },
      ],

      footerNote:
        "++ AI powered OLTC diagnostics and predictive maintenance for zero sequence reactance testing",
    },
  },

  /* =========================================================
     FULLY AUTOMATIC
  ========================================================= */

  "Fully Automatic": {

    page4: {

      sections: [

        {
          type: "intro",

          heading:
            "Fully Automatic Subsystems Offered:",

          text:
            "The following fully automatic transformer testing subsystems are included.",

          note:
            "(Fully PLC integrated architecture.)",
        },

        {
          type: "subsystem",

          title:
            "1. Fully Automatic Transformer Test Bench",

          description:
            `The Fully Automatic Transformer Test Bench executes all testing operations through centralized PLC automation with minimal operator intervention.`,

          layout:
            "single-image",

          images: [

            {
              src:
                "/src/assets/technical/full/page4/main.png",
            },
          ],
        },
      ],
    },

    page5: {

      sections: [

        {
          type: "subsystem",

          title:
            "2. Electrosoft X'mer Edge™ - Control & Monitoring software with Report generation module",

          description:
            `Electrosoft X’mer Edge™ is a Windows / SCADA-based software suite that provides integrated control, monitoring and reporting for the complete transformer testing system.

It executes tests fully automatically using intelligent sequencing and handles real-time data acquisition from all connected instruments and subsystems.

The software performs automatic calculations, validations, and comparisons with nameplate or standard limits, and generates test reports in user-defined formats.

The software also incorporates user-level access control, calibration record management, and audit logging. All the tests like HV, temperature rise, DVDF, no-load, load-loss, etc. are conducted and recorded through the X’mer Edge™ interface, providing a unified and consistent operating environment.`,

          layout:
            "dashboard-layout",

          images: [

            {
              src:
                "/src/assets/main.png",
            },

            {
              src:
                "/src/assets/sub1.png",
            },

            {
              src:
                "/src/assets/sub2.png",
            },
          ],
        },
      ],
    },

    page6: {

      sections: [

        {
          type: "subsystem",

          title:
            "3. Generator Panels, HT and LT Breaker panels",

          description:
            `These Panels are heavy-duty assemblies designed to manage and distribute the electrical power required for all major transformer tests.

These panels house ACBs, MCCBs, contactors, protective relays, and suitably rated aluminium busbars engineered for the required thermal and fault withstand levels.

They incorporate the necessary switching arrangements for DVDF and induced-voltage testing, and IOVT operations. All incoming and outgoing feeders are mapped to the test bench to facilitate fully automatic routing and switching under software control.

Excitation panels offer coarse and fine controls for generators.`,

          layout:
            "image-grid-2x2",

          images: [

            {
              src:
                "/src/assets/1.png",

              caption:
                "↑ Generator Panel ↑",
            },

            {
              src:
                "/src/assets/2.png",

              caption:
                "↑ HT Breaker panel ↑",
            },

            {
              src:
                "/src/assets/3.png",

              caption:
                "↑ LT Breaker Panel ↑",
            },

            {
              src:
                "/src/assets/4.png",

              caption:
                "↑ Excitation control Panel ↑",
            },
          ],
        },
      ],
    },

    page7: {

      sections: [

        {
          type: "subsystem",

          title:
            "4. Fully Automatic LV Test Trolley",

          description:
            `The Fully Automatic LV Test Trolley is a dedicated movable unit designed to perform all low-voltage diagnostic tests such as winding resistance, voltage ratio, phase displacement and vector group, magnetic balance, magnetizing current, insulation resistance, and polarization index.

Its portable design allows it to be positioned close to the transformer LV bushings, reducing cable length and setup time.

It is supplied with eight flexible, high-insulation (10 kV) test leads equipped with heavy-duty clips, and is operated through its built-in touch-screen interface where the operator simply selects the required test and presses “Start.”

All switching and sequencing occur automatically, and test data is captured directly into the X’mer Edge™ software for report generation.`,

          layout:
            "single-image",

          images: [

            {
              src:
                "/src/assets/7.png",
            },
          ],
        },
      ],
    },

    page8: {

      sections: [

        {
          type: "subsystem",

          title:
            "5. CT-PT Rack with Pneumatic Knife Switches",

          description:
            `The CT-PT rack is designed for automated primary selection and routing during CT-PT related tests.

It uses pneumatic knife switches actuated through software-controlled logic integrated with the X’mer Edge™ platform.

The system provides fail-safe actuation and feedback-based position confirmation to ensure the correct selection is made before any test is initiated.

This arrangement enables fully automatic switching between various CT and PT combinations required during various tests.`,

          layout:
            "single-image",

          images: [

            {
              src:
                "/src/assets/8.png",
            },
          ],
        },

        {
          type: "subsystem",

          title:
            "6. HT Capacitor bank",

          description:
            `The HT Capacitor Bank is a critical subsystem that supplies the reactive MVA required during tests such as no-load loss, load loss, induced-voltage withstand (DVDF), and other excitation-based high-voltage tests.

It provides stable reactive power support, enabling controlled voltage buildup and maintaining required test voltages without overloading the power source.

The capacitor bank works in coordination with the motorized HT isolator switch and integrated protection logic, allowing safe, interlocked energisation and de-energisation through software commands.`,

          layout:
            "text-only",

          images: [],
        },
      ],
    },

    page9: {

      sections: [

        {
          type: "subsystem",

          title:
            "7. Motorized HT Isolator Switch with Earthing Mechanism & Corona rings (for HT Capacitor Bank)",

          description:
            `This motorized isolator switch provides safe and reliable connection and isolation of the HT capacitor bank.

The motorized actuation eliminates manual operation and ensures consistent, interlocked switching controlled through the system logic.

When combined with PLC-based interlocking, it prevents energisation unless the isolator is in the correct position, thereby enhancing operational safety and test reliability.`,

          layout:
            "dual-image",

          images: [

            {
              src:
                 "/src/assets/9.png",
            },

            {
              src:
                "/src/assets/10.png",
            },
          ],
        },

        {
          type: "subsystem",

          title:
            "8. Motorized HT Isolator Switch with Earthing Mechanism & Corona rings (for Temperature rise test)",

          description:
            `This motorized isolator switch is dedicated to safely isolating the high-voltage loading circuit used during temperature-rise testing.

Motorized actuation allows the isolator to be operated remotely through software logic, preventing manual intervention in high-risk zones.`,

          layout:
            "text-only",

          images: [],
        },

        {
          type: "subsystem",

          title:
            "9. Integration of Impulse Test System & PD Measurement System (Customer-Scope Hardware)",

          description:
            `Although the impulse generator, impulse analyzer, PD detector, coupling capacitor, and associated hardware remain in the customer’s scope, the proposed system provides full integration capability through PLC/SCADA interfacing.

The test bench acquires data from the impulse analyzer, synchronizes it with test parameters, and logs partial discharge values where applicable.`,

          layout:
            "text-only",

          images: [],
        },
      ],
    },

    page10: {

      sections: [

        {
          type: "subsystem",

          title:
            "10. Machine room control desk & RIO Panel (Redundant / Conventional Test bench)",

          description:
            `The Machine room control desk is a dedicated manual-control test bench that houses all essential meters, selector switches, push buttons, and indication lamps required for conventional transformer testing.

It is designed to provide a complete alternative method of conducting tests in situations where the PLC/SCADA-based automated system is unavailable or if the operator prefers manual control for specific tests.`,

          layout:
            "dual-image-caption",

          images: [

            {
              src:
                "/src/assets/11.png",

              caption:
                "Machine Room Control desk (Test bench)",
            },

            {
              src:
                "/src/assets/12.png",

              caption:
                "RIO Panel",
            },
          ],
        },

        {
          type: "subsystem",

          title:
            "11. Equipment and Instruments",

          description:
            `This subsystem comprises all essential testing and measurement devices required for transformer testing, including current transformers, potential transformers, motor-generator (MG) sets, generator protection panels, excitation panels, digital meters, and precision power analyzers.`,

          layout:
            "text-only",

          images: [],
        },
      ],
    },

    page11: {

      sections: [

        {
          type: "subsystem",

          title:
            "12. High Voltage Area Safety Interlock System",

          description:
            `The High Voltage Area Safety Interlock System is designed to ensure complete operator safety during all high-voltage testing operations.

It consists of mechanically interlocked access doors, safety gate switches, and a strategically placed occupancy sensing system.

The interlocks prevent energisation of any high-voltage circuit unless all access doors to the HV test area are fully closed and confirmed through the safety gate switches.`,

          layout:
            "single-image",

          images: [

            {
              src:
                "/src/assets/13.png",
            },
          ],
        },

        {
          type:
            "bullet-section",

          heading:
            "Proposed customizations:",

          bullets: [

            {
              title:
                "Additional safety measures incorporated for Power transformer testing",

              body:
                "After the user selects the desired test, enters all required parameters, and clicks the Start Test button, the system will display a screen with a diagrammatic representation of the setup.",
            },

            {
              title:
                "Autopilot and Manual modes",

              body:
                "For tests that involve voltage ramp-up, the user can choose between Autopilot and Normal modes.",
            },
          ],
        },
      ],
    },

    page12: {
      title:
        "SCHEMATIC OF FULLY AUTOMATIC TEST SYSTEM",

      description:
        `The following engineering drawings, layouts, and system documents are confidential assets belonging to Electrosoft Automation Pvt. Ltd. These files describe the architecture and automation logic of the offered Fully Automatic Transformer Testing System and are intended strictly for technical evaluation by authorised members of the recipient organisation.
The disclosed information shall not be copied, distributed, or shared externally without prior written consent from Electrosoft Automation Pvt. Ltd.
By opening these files, you acknowledge your authorisation to review the enclosed confidential engineering documents.`,

      sldPdf:
        "/pdfs/fully-automatic-sld.pdf",

      pdfName:
        "fully-automatic-sld.pdf",

      layoutTitle:
        "Fully Automatic System Layout:",

      layoutImage:
        "/sld/fully-automatic-layout.png",
    },

    page13: {

      title:
        "FULLY AUTOMATIC CONNECTIONS AND TESTS",

      connections: [

        {
          name: "Automatic Connection A",

          image:
            "/images/connection-a.png",

          tests: [

            "Automatic No-load Loss Measurement",

            "Automatic No-load Current Test",

            "Automatic Induced Overvoltage Test",
          ],
        },

        {
          name: "Automatic Connection B",

          image:
            "/images/connection-b.png",

          tests: [

            "Automatic Impedance Voltage Measurement",

            "Automatic Load Loss Calculation",

            "Automatic Temperature Rise Testing",

            "Automatic Efficiency Validation",
          ],
        },

        {
          name: "Automatic Connection C",

          image:
            "/images/connection-c.png",

          tests: [

            "Automatic Winding Resistance Test",

            "Automatic Voltage Ratio Testing",

            "Automatic Insulation Resistance Testing",

            "Automatic Magnetizing Current Testing",

            "Automatic Magnetic Balance Test",

            "Automatic Vector Group Verification",

            "Automatic LV Short Circuit Test",

            "Automatic Polarity Test",

            "Automatic HV Withstand Test",
          ],
        },
      ],

      footerNote:
        "++ Fully automatic OLTC and zero sequence reactance testing integrated with smart sequencing",
    },
  },

  /* =========================================================
     SEMI AUTOMATIC
  ========================================================= */

  "Semi-Automatic": {

    page4: {

      sections: [

        {
          type: "intro",

          heading:
            "Semi-Automatic Subsystems Offered:",

          text:
            "The following semi-automatic testing subsystems are included.",

          note:
            "(Operator assisted switching architecture.)",
        },

        {
          type: "subsystem",

          title:
            "1. Semi-Automatic Transformer Test Bench",

          description:
            `The Semi-Automatic Transformer Test Bench combines automated measurements with operator-controlled switching and validation procedures.`,

          layout:
            "single-image",

          images: [

            {
              src:
                "/src/assets/technical/semi/page4/main.png",
            },
          ],
        },
      ],
    },

    page5: {

      sections: [

        {
          type: "subsystem",

          title:
            "2. Electrosoft X'mer Edge™ - Control & Monitoring software with Report generation module",

          description:
            `Electrosoft X’mer Edge™ is a Windows / SCADA-based software suite that provides integrated control, monitoring and reporting for the complete transformer testing system.

It executes tests fully automatically using intelligent sequencing and handles real-time data acquisition from all connected instruments and subsystems.

The software performs automatic calculations, validations, and comparisons with nameplate or standard limits, and generates test reports in user-defined formats.

The software also incorporates user-level access control, calibration record management, and audit logging. All the tests like HV, temperature rise, DVDF, no-load, load-loss, etc. are conducted and recorded through the X’mer Edge™ interface, providing a unified and consistent operating environment.`,

          layout:
            "dashboard-layout",

          images: [

            {
              src:
                "/src/assets/main.png",
            },

            {
              src:
                "/src/assets/sub1.png",
            },

            {
              src:
                "/src/assets/sub2.png",
            },
          ],
        },
      ],
    },

    page6: {

      sections: [

        {
          type: "subsystem",

          title:
            "3. Generator Panels, HT and LT Breaker panels",

          description:
            `These Panels are heavy-duty assemblies designed to manage and distribute the electrical power required for all major transformer tests.

These panels house ACBs, MCCBs, contactors, protective relays, and suitably rated aluminium busbars engineered for the required thermal and fault withstand levels.

They incorporate the necessary switching arrangements for DVDF and induced-voltage testing, and IOVT operations. All incoming and outgoing feeders are mapped to the test bench to facilitate fully automatic routing and switching under software control.

Excitation panels offer coarse and fine controls for generators.`,

          layout:
            "image-grid-2x2",

          images: [

            {
              src:
                "/src/assets/1.png",

              caption:
                "↑ Generator Panel ↑",
            },

            {
              src:
                "/src/assets/2.png",

              caption:
                "↑ HT Breaker panel ↑",
            },

            {
              src:
                "/src/assets/3.png",

              caption:
                "↑ LT Breaker Panel ↑",
            },

            {
              src:
                "/src/assets/4.png",

              caption:
                "↑ Excitation control Panel ↑",
            },
          ],
        },
      ],
    },

    page7: {

      sections: [

        {
          type: "subsystem",

          title:
            "4. Fully Automatic LV Test Trolley",

          description:
            `The Fully Automatic LV Test Trolley is a dedicated movable unit designed to perform all low-voltage diagnostic tests such as winding resistance, voltage ratio, phase displacement and vector group, magnetic balance, magnetizing current, insulation resistance, and polarization index.

Its portable design allows it to be positioned close to the transformer LV bushings, reducing cable length and setup time.

It is supplied with eight flexible, high-insulation (10 kV) test leads equipped with heavy-duty clips, and is operated through its built-in touch-screen interface where the operator simply selects the required test and presses “Start.”

All switching and sequencing occur automatically, and test data is captured directly into the X’mer Edge™ software for report generation.`,

          layout:
            "single-image",

          images: [

            {
              src:
                "/src/assets/7.png",
            },
          ],
        },
      ],
    },

    page8: {

      sections: [

        {
          type: "subsystem",

          title:
            "5. CT-PT Rack with Pneumatic Knife Switches",

          description:
            `The CT-PT rack is designed for automated primary selection and routing during CT-PT related tests.

It uses pneumatic knife switches actuated through software-controlled logic integrated with the X’mer Edge™ platform.

The system provides fail-safe actuation and feedback-based position confirmation to ensure the correct selection is made before any test is initiated.

This arrangement enables fully automatic switching between various CT and PT combinations required during various tests.`,

          layout:
            "single-image",

          images: [

            {
              src:
                "/src/assets/8.png",
            },
          ],
        },

        {
          type: "subsystem",

          title:
            "6. HT Capacitor bank",

          description:
            `The HT Capacitor Bank is a critical subsystem that supplies the reactive MVA required during tests such as no-load loss, load loss, induced-voltage withstand (DVDF), and other excitation-based high-voltage tests.

It provides stable reactive power support, enabling controlled voltage buildup and maintaining required test voltages without overloading the power source.

The capacitor bank works in coordination with the motorized HT isolator switch and integrated protection logic, allowing safe, interlocked energisation and de-energisation through software commands.`,

          layout:
            "text-only",

          images: [],
        },
      ],
    },

    page9: {

      sections: [

        {
          type: "subsystem",

          title:
            "7. Motorized HT Isolator Switch with Earthing Mechanism & Corona rings (for HT Capacitor Bank)",

          description:
            `This motorized isolator switch provides safe and reliable connection and isolation of the HT capacitor bank.

The motorized actuation eliminates manual operation and ensures consistent, interlocked switching controlled through the system logic.

When combined with PLC-based interlocking, it prevents energisation unless the isolator is in the correct position, thereby enhancing operational safety and test reliability.`,

          layout:
            "dual-image",

          images: [

            {
              src:
                 "/src/assets/9.png",
            },

            {
              src:
                "/src/assets/10.png",
            },
          ],
        },

        {
          type: "subsystem",

          title:
            "8. Motorized HT Isolator Switch with Earthing Mechanism & Corona rings (for Temperature rise test)",

          description:
            `This motorized isolator switch is dedicated to safely isolating the high-voltage loading circuit used during temperature-rise testing.

Motorized actuation allows the isolator to be operated remotely through software logic, preventing manual intervention in high-risk zones.`,

          layout:
            "text-only",

          images: [],
        },

        {
          type: "subsystem",

          title:
            "9. Integration of Impulse Test System & PD Measurement System (Customer-Scope Hardware)",

          description:
            `Although the impulse generator, impulse analyzer, PD detector, coupling capacitor, and associated hardware remain in the customer’s scope, the proposed system provides full integration capability through PLC/SCADA interfacing.

The test bench acquires data from the impulse analyzer, synchronizes it with test parameters, and logs partial discharge values where applicable.`,

          layout:
            "text-only",

          images: [],
        },
      ],
    },

    page10: {

      sections: [

        {
          type: "subsystem",

          title:
            "10. Machine room control desk & RIO Panel (Redundant / Conventional Test bench)",

          description:
            `The Machine room control desk is a dedicated manual-control test bench that houses all essential meters, selector switches, push buttons, and indication lamps required for conventional transformer testing.

It is designed to provide a complete alternative method of conducting tests in situations where the PLC/SCADA-based automated system is unavailable or if the operator prefers manual control for specific tests.`,

          layout:
            "dual-image-caption",

          images: [

            {
              src:
                "/src/assets/11.png",

              caption:
                "Machine Room Control desk (Test bench)",
            },

            {
              src:
                "/src/assets/12.png",

              caption:
                "RIO Panel",
            },
          ],
        },

        {
          type: "subsystem",

          title:
            "11. Equipment and Instruments",

          description:
            `This subsystem comprises all essential testing and measurement devices required for transformer testing, including current transformers, potential transformers, motor-generator (MG) sets, generator protection panels, excitation panels, digital meters, and precision power analyzers.`,

          layout:
            "text-only",

          images: [],
        },
      ],
    },

    page11: {

      sections: [

        {
          type: "subsystem",

          title:
            "12. High Voltage Area Safety Interlock System",

          description:
            `The High Voltage Area Safety Interlock System is designed to ensure complete operator safety during all high-voltage testing operations.

It consists of mechanically interlocked access doors, safety gate switches, and a strategically placed occupancy sensing system.

The interlocks prevent energisation of any high-voltage circuit unless all access doors to the HV test area are fully closed and confirmed through the safety gate switches.`,

          layout:
            "single-image",

          images: [

            {
              src:
                "/src/assets/13.png",
            },
          ],
        },

        {
          type:
            "bullet-section",

          heading:
            "Proposed customizations:",

          bullets: [

            {
              title:
                "Additional safety measures incorporated for Power transformer testing",

              body:
                "After the user selects the desired test, enters all required parameters, and clicks the Start Test button, the system will display a screen with a diagrammatic representation of the setup.",
            },

            {
              title:
                "Autopilot and Manual modes",

              body:
                "For tests that involve voltage ramp-up, the user can choose between Autopilot and Normal modes.",
            },
          ],
        },
      ],
    },

    page12: {
      title:
        "SCHEMATIC OF SEMI-AUTOMATIC TEST SYSTEM",

      description:
        `The enclosed documents contain confidential technical information, layout drawings, and engineering diagrams developed by Electrosoft Automation Pvt. Ltd. for the proposed Semi-Automatic Transformer Testing System. These files are intended exclusively for internal technical review by the customer organisation mentioned in this proposal.
The system layouts, switching concepts, and subsystem interconnections remain the intellectual property of Electrosoft Automation Pvt. Ltd. and shall not be reproduced or disclosed to third parties without written approval.
By proceeding to open these documents, you confirm that you are authorised to access the enclosed confidential information.`,

      sldPdf:
        "/pdfs/semi-automatic-sld.pdf",

      pdfName:
        "semi-automatic-sld.pdf",

      layoutTitle:
        "Semi Automatic Transformer Testing Layout:",

      layoutImage:
        "/sld/semi-automatic-layout.png",
    },

    page13: {

      title:
        "SEMI AUTOMATIC CONNECTIONS AND TESTS",

      connections: [

        {
          name: "Semi Automatic Connection A",

          image:
            "/images/connection-a.png",

          tests: [

            "Manual-Assisted No-load Loss Test",

            "Semi Automatic Current Measurement",

            "Controlled Induced Voltage Test",
          ],
        },

        {
          name: "Semi Automatic Connection B",

          image:
            "/images/connection-b.png",

          tests: [

            "Semi Automatic Impedance Test",

            "Operator Controlled Load Loss Test",

            "Semi Automatic Temperature Rise Test",

            "Manual Efficiency Regulation Check",
          ],
        },

        {
          name: "Semi Automatic Connection C",

          image:
            "/images/connection-c.png",

          tests: [

            "Semi Automatic Winding Resistance Test",

            "Operator Assisted Voltage Ratio Test",

            "Insulation Resistance Verification",

            "Magnetizing Current Monitoring",

            "Magnetic Balance Validation",

            "Vector Group Identification",

            "Short Circuit Validation",

            "Polarity Validation",

            "Applied HV Test",
          ],
        },
      ],

      footerNote:
        "++ Semi automatic OLTC and pressure testing available with operator supervision",
    },
  },

  /* =========================================================
     CONVENTIONAL
  ========================================================= */

  Conventional: {

    page4: {

      sections: [

        {
          type: "intro",

          heading:
            "Conventional Testing Subsystems Offered:",

          text:
            "The following conventional transformer testing subsystems are included.",

          note:
            "(Manual switching based conventional architecture.)",
        },

        {
          type: "subsystem",

          title:
            "1. Conventional Transformer Test Bench",

          description:
            `The Conventional Transformer Test Bench provides reliable manual transformer testing using conventional switching, analog instrumentation, and operator-controlled procedures.`,

          layout:
            "single-image",

          images: [

            {
              src:
                "/src/assets/technical/conventional/page4/main.png",
            },
          ],
        },
      ],
    },

    page5: {

      sections: [

        {
          type: "subsystem",

          title:
            "2. Electrosoft X'mer Edge™ - Control & Monitoring software with Report generation module",

          description:
            `Electrosoft X’mer Edge™ is a Windows / SCADA-based software suite that provides integrated control, monitoring and reporting for the complete transformer testing system.

It executes tests fully automatically using intelligent sequencing and handles real-time data acquisition from all connected instruments and subsystems.

The software performs automatic calculations, validations, and comparisons with nameplate or standard limits, and generates test reports in user-defined formats.

The software also incorporates user-level access control, calibration record management, and audit logging. All the tests like HV, temperature rise, DVDF, no-load, load-loss, etc. are conducted and recorded through the X’mer Edge™ interface, providing a unified and consistent operating environment.`,

          layout:
            "dashboard-layout",

          images: [

            {
              src:
                "/src/assets/main.png",
            },

            {
              src:
                "/src/assets/sub1.png",
            },

            {
              src:
                "/src/assets/sub2.png",
            },
          ],
        },
      ],
    },

    page6: {

      sections: [

        {
          type: "subsystem",

          title:
            "3. Generator Panels, HT and LT Breaker panels",

          description:
            `These Panels are heavy-duty assemblies designed to manage and distribute the electrical power required for all major transformer tests.

These panels house ACBs, MCCBs, contactors, protective relays, and suitably rated aluminium busbars engineered for the required thermal and fault withstand levels.

They incorporate the necessary switching arrangements for DVDF and induced-voltage testing, and IOVT operations. All incoming and outgoing feeders are mapped to the test bench to facilitate fully automatic routing and switching under software control.

Excitation panels offer coarse and fine controls for generators.`,

          layout:
            "image-grid-2x2",

          images: [

            {
              src:
                "/src/assets/1.png",

              caption:
                "↑ Generator Panel ↑",
            },

            {
              src:
                "/src/assets/2.png",

              caption:
                "↑ HT Breaker panel ↑",
            },

            {
              src:
                "/src/assets/3.png",

              caption:
                "↑ LT Breaker Panel ↑",
            },

            {
              src:
                "/src/assets/4.png",

              caption:
                "↑ Excitation control Panel ↑",
            },
          ],
        },
      ],
    },

    page7: {

      sections: [

        {
          type: "subsystem",

          title:
            "4. Fully Automatic LV Test Trolley",

          description:
            `The Fully Automatic LV Test Trolley is a dedicated movable unit designed to perform all low-voltage diagnostic tests such as winding resistance, voltage ratio, phase displacement and vector group, magnetic balance, magnetizing current, insulation resistance, and polarization index.

Its portable design allows it to be positioned close to the transformer LV bushings, reducing cable length and setup time.

It is supplied with eight flexible, high-insulation (10 kV) test leads equipped with heavy-duty clips, and is operated through its built-in touch-screen interface where the operator simply selects the required test and presses “Start.”

All switching and sequencing occur automatically, and test data is captured directly into the X’mer Edge™ software for report generation.`,

          layout:
            "single-image",

          images: [

            {
              src:
                "/src/assets/7.png",
            },
          ],
        },
      ],
    },

    page8: {

      sections: [

        {
          type: "subsystem",

          title:
            "5. CT-PT Rack with Pneumatic Knife Switches",

          description:
            `The CT-PT rack is designed for automated primary selection and routing during CT-PT related tests.

It uses pneumatic knife switches actuated through software-controlled logic integrated with the X’mer Edge™ platform.

The system provides fail-safe actuation and feedback-based position confirmation to ensure the correct selection is made before any test is initiated.

This arrangement enables fully automatic switching between various CT and PT combinations required during various tests.`,

          layout:
            "single-image",

          images: [

            {
              src:
                "/src/assets/8.png",
            },
          ],
        },

        {
          type: "subsystem",

          title:
            "6. HT Capacitor bank",

          description:
            `The HT Capacitor Bank is a critical subsystem that supplies the reactive MVA required during tests such as no-load loss, load loss, induced-voltage withstand (DVDF), and other excitation-based high-voltage tests.

It provides stable reactive power support, enabling controlled voltage buildup and maintaining required test voltages without overloading the power source.

The capacitor bank works in coordination with the motorized HT isolator switch and integrated protection logic, allowing safe, interlocked energisation and de-energisation through software commands.`,

          layout:
            "text-only",

          images: [],
        },
      ],
    },

    page9: {

      sections: [

        {
          type: "subsystem",

          title:
            "7. Motorized HT Isolator Switch with Earthing Mechanism & Corona rings (for HT Capacitor Bank)",

          description:
            `This motorized isolator switch provides safe and reliable connection and isolation of the HT capacitor bank.

The motorized actuation eliminates manual operation and ensures consistent, interlocked switching controlled through the system logic.

When combined with PLC-based interlocking, it prevents energisation unless the isolator is in the correct position, thereby enhancing operational safety and test reliability.`,

          layout:
            "dual-image",

          images: [

            {
              src:
                 "/src/assets/9.png",
            },

            {
              src:
                "/src/assets/10.png",
            },
          ],
        },

        {
          type: "subsystem",

          title:
            "8. Motorized HT Isolator Switch with Earthing Mechanism & Corona rings (for Temperature rise test)",

          description:
            `This motorized isolator switch is dedicated to safely isolating the high-voltage loading circuit used during temperature-rise testing.

Motorized actuation allows the isolator to be operated remotely through software logic, preventing manual intervention in high-risk zones.`,

          layout:
            "text-only",

          images: [],
        },

        {
          type: "subsystem",

          title:
            "9. Integration of Impulse Test System & PD Measurement System (Customer-Scope Hardware)",

          description:
            `Although the impulse generator, impulse analyzer, PD detector, coupling capacitor, and associated hardware remain in the customer’s scope, the proposed system provides full integration capability through PLC/SCADA interfacing.

The test bench acquires data from the impulse analyzer, synchronizes it with test parameters, and logs partial discharge values where applicable.`,

          layout:
            "text-only",

          images: [],
        },
      ],
    },

    page10: {

      sections: [

        {
          type: "subsystem",

          title:
            "10. Machine room control desk & RIO Panel (Redundant / Conventional Test bench)",

          description:
            `The Machine room control desk is a dedicated manual-control test bench that houses all essential meters, selector switches, push buttons, and indication lamps required for conventional transformer testing.

It is designed to provide a complete alternative method of conducting tests in situations where the PLC/SCADA-based automated system is unavailable or if the operator prefers manual control for specific tests.`,

          layout:
            "dual-image-caption",

          images: [

            {
              src:
                "/src/assets/11.png",

              caption:
                "Machine Room Control desk (Test bench)",
            },

            {
              src:
                "/src/assets/12.png",

              caption:
                "RIO Panel",
            },
          ],
        },

        {
          type: "subsystem",

          title:
            "11. Equipment and Instruments",

          description:
            `This subsystem comprises all essential testing and measurement devices required for transformer testing, including current transformers, potential transformers, motor-generator (MG) sets, generator protection panels, excitation panels, digital meters, and precision power analyzers.`,

          layout:
            "text-only",

          images: [],
        },
      ],
    },

    page11: {

      sections: [

        {
          type: "subsystem",

          title:
            "12. High Voltage Area Safety Interlock System",

          description:
            `The High Voltage Area Safety Interlock System is designed to ensure complete operator safety during all high-voltage testing operations.

It consists of mechanically interlocked access doors, safety gate switches, and a strategically placed occupancy sensing system.

The interlocks prevent energisation of any high-voltage circuit unless all access doors to the HV test area are fully closed and confirmed through the safety gate switches.`,

          layout:
            "single-image",

          images: [

            {
              src:
                "/src/assets/13.png",
            },
          ],
        },

        {
          type:
            "bullet-section",

          heading:
            "Proposed customizations:",

          bullets: [

            {
              title:
                "Additional safety measures incorporated for Power transformer testing",

              body:
                "After the user selects the desired test, enters all required parameters, and clicks the Start Test button, the system will display a screen with a diagrammatic representation of the setup.",
            },

            {
              title:
                "Autopilot and Manual modes",

              body:
                "For tests that involve voltage ramp-up, the user can choose between Autopilot and Normal modes.",
            },
          ],
        },
      ],
    },

    page12: {
      title:
        "SCHEMATIC OF CONVENTIONAL TEST BENCH",

      description:
        `The following schematic diagrams and engineering layouts are confidential property of Electrosoft Automation Pvt. Ltd. and are shared exclusively for technical reference related to the proposed Conventional Transformer Testing Bench.
These files include subsystem layouts, machine room configurations, and test-bench interconnection details intended only for authorised representatives of the customer organisation.
Unauthorised duplication, circulation, or disclosure of these documents is strictly prohibited without prior written permission from Electrosoft Automation Pvt. Ltd.
By opening the attached files, you acknowledge your authorisation to access these confidential documents.`,

      sldPdf:
        "/pdfs/conventional-sld.pdf",

      pdfName:
        "conventional-sld.pdf",

      layoutTitle:
        "Conventional Test Bench Layout:",

      layoutImage:
        "/sld/conventional-layout.png",
    },

    page13: {

      title:
        "CONVENTIONAL CONNECTIONS AND TESTS",

      connections: [

        {
          name: "Conventional Connection A",

          image:
            "/images/connection-a.png",

          tests: [

            "Manual No-load Loss Test",

            "Manual Current Measurement",

            "Conventional Induced Voltage Test",
          ],
        },

        {
          name: "Conventional Connection B",

          image:
            "/images/connection-b.png",

          tests: [

            "Manual Impedance Voltage Test",

            "Conventional Load Loss Test",

            "Manual Temperature Rise Test",

            "Manual Efficiency Calculation",
          ],
        },

        {
          name: "Conventional Connection C",

          image:
            "/images/connection-c.png",

          tests: [

            "Manual Winding Resistance Test",

            "Conventional Voltage Ratio Test",

            "Manual Insulation Resistance Test",

            "Conventional Magnetizing Current Test",

            "Manual Magnetic Balance Test",

            "Conventional Vector Group Verification",

            "Manual Short Circuit Test",

            "Conventional Polarity Test",

            "Applied Voltage HV Test",
          ],
        },
      ],

      footerNote:
        "++ Conventional OLTC and tank insulation tests performed manually as per standard practice",
    },
  },
};

export default technicalPagesData;