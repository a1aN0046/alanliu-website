import type { Language, LocalizedText } from "@/data/translations";

export interface ExperienceImage {
  src: string;
  alt: string;
  caption?: string;
  fit?: "cover" | "contain";
  width: number;
  height: number;
}

export interface Experience {
  slug: "juul-labs" | "meta" | "franklinwh" | "apple" | "openai";
  company: string;
  role: LocalizedText;
  location: LocalizedText;
  date: LocalizedText;
  summary: LocalizedText;
  overview: LocalizedText;
  responsibilities: Record<Language, string[]>;
  tools: Record<Language, string[]>;
  learned: Record<Language, string[]>;
  images: ExperienceImage[];
}

export const experiences: Experience[] = [
  {
    slug: "juul-labs",
    company: "JUUL Labs, Inc.",
    role: {
      en: "Manufacturing Intern",
      zh: "制造实习生",
      es: "Practicante de Manufactura",
      ja: "製造インターン"
    },
    location: {
      en: "Mountain View, CA",
      zh: "加利福尼亚州山景城",
      es: "Mountain View, California",
      ja: "カリフォルニア州マウンテンビュー"
    },
    date: { en: "June 2026", zh: "2026 年 6 月", es: "Junio de 2026", ja: "2026 年 6 月" },
    summary: {
      en: "Supported manufacturing operations through product assembly, inspection, testing, and daily production support.",
      zh: "参与产品组装、检验、测试和日常生产支持工作。",
      es: "Apoyó las operaciones de manufactura mediante ensamble, inspección, pruebas y soporte diario de producción.",
      ja: "製品の組み立て、検査、試験、日々の生産支援を担当しました。"
    },
    overview: {
      en: "Supported manufacturing operations for vaporizer mouthpiece assemblies in a production environment. Assisted with assembly, inspection, testing, and daily production support while following quality and safety standards.",
      zh: "在生产环境中支持雾化器吸嘴组件的制造工作，按照质量与安全标准协助完成组装、检验、测试和日常生产支持。",
      es: "Apoyó las operaciones de manufactura de conjuntos de boquillas para vaporizadores. Colaboró en ensamble, inspección, pruebas y soporte diario siguiendo normas de calidad y seguridad.",
      ja: "生産現場でベポライザーのマウスピース部品の製造を支援しました。品質・安全基準に従い、組み立て、検査、試験、日々の生産支援を担当しました。"
    },
    responsibilities: {
      en: [
        "Assembled chip ID modules into vaporizer mouthpiece assemblies.",
        "Performed inspections and functional checks to verify product quality.",
        "Followed manufacturing procedures and quality-control standards.",
        "Supported daily production operations in a fast-paced environment.",
        "Collaborated with technicians and engineers to maintain production efficiency."
      ],
      zh: [
        "将芯片 ID 模块装入雾化器吸嘴组件。",
        "进行检验和功能检查，确认产品质量。",
        "遵循制造流程和质量控制标准。",
        "在快节奏环境中支持日常生产。",
        "与技术人员和工程师协作，保持生产效率。"
      ],
      es: [
        "Ensambló módulos de identificación de chip en conjuntos de boquillas.",
        "Realizó inspecciones y verificaciones funcionales de calidad.",
        "Siguió procedimientos de manufactura y control de calidad.",
        "Apoyó las operaciones diarias en un entorno de ritmo rápido.",
        "Colaboró con técnicos e ingenieros para mantener la eficiencia de producción."
      ],
      ja: [
        "チップ ID モジュールをマウスピース部品に組み込みました。",
        "製品品質を確認するため、検査と機能チェックを行いました。",
        "製造手順と品質管理基準に従いました。",
        "スピードが求められる環境で日々の生産を支援しました。",
        "技術者やエンジニアと協力し、生産効率の維持に取り組みました。"
      ]
    },
    tools: {
      en: ["Manufacturing operations", "Quality inspection", "Product assembly", "Troubleshooting", "Production workflow"],
      zh: ["制造运营", "质量检验", "产品组装", "故障排查", "生产流程"],
      es: ["Operaciones de manufactura", "Inspección de calidad", "Ensamble de productos", "Diagnóstico", "Flujo de producción"],
      ja: ["製造業務", "品質検査", "製品組み立て", "トラブルシューティング", "生産工程"]
    },
    learned: {
      en: [
        "Improved understanding of production quality control and manufacturing discipline.",
        "Learned how small assembly details affect product consistency and reliability.",
        "Developed stronger attention to detail in a real production environment."
      ],
      zh: ["加深了对生产质量控制和制造规范的理解。", "了解了细微组装差异对产品一致性和可靠性的影响。", "在真实生产环境中提升了对细节的关注。"],
      es: ["Mejoró su comprensión del control de calidad y la disciplina de manufactura.", "Aprendió cómo pequeños detalles de ensamble afectan la consistencia y confiabilidad.", "Fortaleció su atención al detalle en un entorno real de producción."],
      ja: ["生産品質管理と製造規律への理解を深めました。", "小さな組み立ての違いが製品の一貫性と信頼性に影響することを学びました。", "実際の生産現場で細部への注意力を高めました。"]
    },
    images: [
      {
        src: "/images/experience/juul/juul-1.jpg",
        alt: "Automated manufacturing fixture with cameras, dispensing equipment, and positioning hardware",
        caption: "Production equipment used for controlled assembly and inspection work.",
        fit: "cover",
        width: 1702,
        height: 1276
      }
    ]
  },
  {
    slug: "meta",
    company: "Meta",
    role: {
      en: "Electrical Engineer Assistant Intern",
      zh: "电气工程助理实习生",
      es: "Practicante Asistente de Ingeniería Eléctrica",
      ja: "電気エンジニア・アシスタントインターン"
    },
    location: {
      en: "Menlo Park, CA",
      zh: "加利福尼亚州门洛帕克",
      es: "Menlo Park, California",
      ja: "カリフォルニア州メンロパーク"
    },
    date: { en: "Summer 2024 / 2026", zh: "2024 / 2026 年夏季", es: "Verano de 2024 / 2026", ja: "2024 / 2026 年夏" },
    summary: {
      en: "Assisted with robotic testing systems, sensor calibration, hardware validation, and automated test fixtures.",
      zh: "协助机器人测试系统、传感器校准、硬件验证和自动化测试夹具相关工作。",
      es: "Colaboró con sistemas de pruebas robóticas, calibración de sensores, validación de hardware y dispositivos automatizados.",
      ja: "ロボット試験システム、センサー校正、ハードウェア検証、自動試験治具を支援しました。"
    },
    overview: {
      en: "Assisted with setup, calibration, and operation of robotic testing systems. Supported hardware validation tasks involving sensors, pneumatic components, probes, and automated test fixtures.",
      zh: "协助机器人测试系统的搭建、校准与运行，并支持涉及传感器、气动元件、探针和自动化测试夹具的硬件验证。",
      es: "Ayudó en la instalación, calibración y operación de sistemas de pruebas robóticas. Apoyó la validación de hardware con sensores, componentes neumáticos, sondas y dispositivos automatizados.",
      ja: "ロボット試験システムのセットアップ、校正、運用を支援しました。センサー、空圧部品、プローブ、自動試験治具を用いたハードウェア検証に携わりました。"
    },
    responsibilities: {
      en: [
        "Assisted in the setup and operation of robotic testing systems.",
        "Calibrated RGB, pressure, force, and Hall-effect sensors.",
        "Aligned sliders, pneumatic cylinders, and testing probes.",
        "Supported testing, validation, and troubleshooting activities.",
        "Learned manufacturing workflows and engineering documentation practices."
      ],
      zh: ["协助搭建和运行机器人测试系统。", "校准 RGB、压力、力和霍尔效应传感器。", "调整滑轨、气缸和测试探针的位置。", "支持测试、验证和故障排查。", "学习制造流程和工程文档规范。"],
      es: ["Ayudó a instalar y operar sistemas de pruebas robóticas.", "Calibró sensores RGB, de presión, fuerza y efecto Hall.", "Alineó deslizadores, cilindros neumáticos y sondas de prueba.", "Apoyó pruebas, validación y diagnóstico.", "Aprendió flujos de manufactura y prácticas de documentación de ingeniería."],
      ja: ["ロボット試験システムのセットアップと運用を支援しました。", "RGB、圧力、力、ホール効果センサーを校正しました。", "スライダー、空圧シリンダー、試験プローブの位置を調整しました。", "試験、検証、トラブルシューティングを支援しました。", "製造工程とエンジニアリング文書の作成方法を学びました。"]
    },
    tools: {
      en: ["Sensor calibration", "Robotic test systems", "Pneumatic systems", "Hardware validation", "Engineering documentation"],
      zh: ["传感器校准", "机器人测试系统", "气动系统", "硬件验证", "工程文档"],
      es: ["Calibración de sensores", "Sistemas de pruebas robóticas", "Sistemas neumáticos", "Validación de hardware", "Documentación de ingeniería"],
      ja: ["センサー校正", "ロボット試験システム", "空圧システム", "ハードウェア検証", "エンジニアリング文書"]
    },
    learned: {
      en: ["Built practical experience with sensor calibration and robotic testing workflows.", "Learned how engineering validation supports hardware reliability.", "Developed a better understanding of precision setup and test repeatability."],
      zh: ["积累了传感器校准和机器人测试流程的实践经验。", "理解了工程验证如何提升硬件可靠性。", "加深了对精密设置和测试可重复性的理解。"],
      es: ["Adquirió experiencia práctica en calibración de sensores y pruebas robóticas.", "Aprendió cómo la validación de ingeniería respalda la confiabilidad del hardware.", "Comprendió mejor la configuración de precisión y la repetibilidad de las pruebas."],
      ja: ["センサー校正とロボット試験工程の実践経験を積みました。", "エンジニアリング検証がハードウェアの信頼性を支える仕組みを学びました。", "精密なセットアップと試験再現性への理解を深めました。"]
    },
    images: [
      {
        src: "/images/experience/meta/meta-1.png",
        alt: "Robotic hardware test chamber used during engineering validation",
        caption: "Controlled testing enclosure used for robotic and hardware validation.",
        fit: "cover",
        width: 1448,
        height: 1086
      },
      {
        src: "/images/experience/meta/meta-2.jpg",
        alt: "Close-up of pneumatic lines and automated test fixture components",
        caption: "Pneumatic connections, sensors, and fixture components used during test setup.",
        fit: "cover",
        width: 1276,
        height: 958
      },
      {
        src: "/images/experience/meta/meta-3.png",
        alt: "Industrial test station control panel with screen content anonymized",
        caption: "Control station used to operate and monitor automated testing equipment.",
        fit: "contain",
        width: 941,
        height: 1672
      }
    ]
  },
  {
    slug: "franklinwh",
    company: "FranklinWH Energy Storage Inc.",
    role: {
      en: "Electrical Engineer Assistant Intern",
      zh: "电气工程助理实习生",
      es: "Practicante Asistente de Ingeniería Eléctrica",
      ja: "電気エンジニア・アシスタントインターン"
    },
    location: {
      en: "San Jose, CA",
      zh: "加利福尼亚州圣何塞",
      es: "San José, California",
      ja: "カリフォルニア州サンノゼ"
    },
    date: { en: "2024 - 2025", zh: "2024 - 2025 年", es: "2024 - 2025", ja: "2024 - 2025 年" },
    summary: {
      en: "Supported battery-system manufacturing, assembly operations, and practical mechanical troubleshooting.",
      zh: "支持电池系统制造、装配作业和现场机械故障排查。",
      es: "Apoyó la manufactura de sistemas de baterías, operaciones de ensamble y diagnóstico mecánico.",
      ja: "バッテリーシステムの製造、組み立て作業、実践的な機械トラブル対応を支援しました。"
    },
    overview: {
      en: "Supported battery system manufacturing, assembly operations, and troubleshooting. Assisted with identifying mechanical and production issues in energy storage equipment.",
      zh: "支持电池系统制造、装配和故障排查，并协助识别储能设备中的机械与生产问题。",
      es: "Apoyó la manufactura, el ensamble y el diagnóstico de sistemas de baterías. Ayudó a identificar problemas mecánicos y de producción en equipos de almacenamiento de energía.",
      ja: "バッテリーシステムの製造、組み立て、トラブルシューティングを支援し、蓄電設備の機械・生産上の問題特定に携わりました。"
    },
    responsibilities: {
      en: ["Assisted with battery system manufacturing and assembly operations.", "Diagnosed a robotic-arm failure that stopped battery-pack production.", "Disassembled equipment and identified a damaged mechanical hook.", "Replaced faulty components and helped restore assembly-line operation.", "Supported troubleshooting and engineering workflow documentation."],
      zh: ["协助电池系统制造和装配作业。", "诊断导致电池包生产停线的机械臂故障。", "拆解设备并发现受损的机械挂钩。", "更换故障部件并协助恢复装配线运行。", "支持故障排查和工程流程文档记录。"],
      es: ["Ayudó en la manufactura y ensamble de sistemas de baterías.", "Diagnosticó una falla de brazo robótico que detuvo la producción de paquetes de baterías.", "Desarmó el equipo e identificó un gancho mecánico dañado.", "Reemplazó componentes defectuosos y ayudó a restablecer la línea.", "Apoyó el diagnóstico y la documentación del flujo de ingeniería."],
      ja: ["バッテリーシステムの製造と組み立てを支援しました。", "バッテリーパック生産を停止させたロボットアームの故障を診断しました。", "装置を分解し、損傷した機械フックを特定しました。", "不良部品を交換し、組み立てラインの復旧を支援しました。", "トラブルシューティングと工程文書の作成を支援しました。"]
    },
    tools: {
      en: ["Energy storage systems", "Mechanical troubleshooting", "Assembly-line support", "Hardware repair", "Root-cause analysis"],
      zh: ["储能系统", "机械故障排查", "装配线支持", "硬件维修", "根因分析"],
      es: ["Sistemas de almacenamiento de energía", "Diagnóstico mecánico", "Soporte de línea de ensamble", "Reparación de hardware", "Análisis de causa raíz"],
      ja: ["蓄電システム", "機械トラブルシューティング", "組み立てライン支援", "ハードウェア修理", "根本原因分析"]
    },
    learned: {
      en: ["Learned how mechanical alignment and component condition affect production uptime.", "Gained experience diagnosing practical hardware failures.", "Built confidence working around manufacturing equipment and engineering teams."],
      zh: ["了解机械对准和部件状态如何影响生产设备正常运行时间。", "积累了实际硬件故障诊断经验。", "提升了在制造设备和工程团队环境中工作的信心。"],
      es: ["Aprendió cómo la alineación mecánica y el estado de los componentes afectan la continuidad de producción.", "Adquirió experiencia diagnosticando fallas reales de hardware.", "Ganó confianza trabajando con equipos de manufactura y equipos de ingeniería."],
      ja: ["機械的な位置合わせと部品状態が生産稼働率に与える影響を学びました。", "実際のハードウェア故障を診断する経験を積みました。", "製造設備やエンジニアチームと働く自信を高めました。"]
    },
    images: [
      {
        src: "/images/experience/franklinwh/franklinwh-1.png",
        alt: "Industrial robotic arm and assembly tooling with a person anonymized",
        caption: "Robotic manufacturing equipment and tooling used in an assembly environment.",
        fit: "cover",
        width: 1448,
        height: 1086
      },
      {
        src: "/images/experience/franklinwh/franklinwh-2.png",
        alt: "Manufacturing floor with personnel anonymized for privacy",
        caption: "Manufacturing environment supporting energy-storage assembly operations.",
        fit: "cover",
        width: 1448,
        height: 1086
      },
      {
        src: "/images/experience/franklinwh/franklinwh-3.png",
        alt: "Guarded industrial robot cell with safety signage and a person anonymized",
        caption: "Guarded robotic work cell designed for controlled automated operation.",
        fit: "cover",
        width: 1448,
        height: 1086
      }
    ]
  },
  {
    slug: "apple",
    company: "Apple",
    role: {
      en: "Robotics Deployment / Field Engineering Assistant",
      zh: "机器人部署 / 现场工程助理",
      es: "Asistente de Implementación Robótica / Ingeniería de Campo",
      ja: "ロボティクス導入 / フィールドエンジニアリング・アシスタント"
    },
    location: { en: "California", zh: "加利福尼亚州", es: "California", ja: "カリフォルニア州" },
    date: { en: "Summer 2026", zh: "2026 年夏季", es: "Verano de 2026", ja: "2026 年夏" },
    summary: {
      en: "Supported on-site deployment and validation of robotic charging stations and automated product testing fixtures, including station setup, interface installation, cable routing, and functional testing.",
      zh: "支持机器人充电站和自动化产品测试夹具的现场部署与验证，包括站点设置、接口安装、布线和功能测试。",
      es: "Apoyó la implementación y validación en sitio de estaciones de carga robóticas y dispositivos automatizados de prueba, incluida la instalación, interfaces, cableado y pruebas funcionales.",
      ja: "ロボット充電ステーションと自動製品試験治具の現地導入・検証を支援し、設置、インターフェース取付、配線、機能試験を担当しました。"
    },
    overview: {
      en: "Assisted with on-site deployment, adjustment, and validation of robotic charging stations and automated product testing fixtures. Supported station setup, physical alignment, interface installation, cable routing, connectivity verification, and functional testing with approved hardware and software.",
      zh: "协助机器人充电站和自动化产品测试夹具的现场部署、调整与验证，支持站点设置、物理对准、接口安装、布线、连接检查和经批准的软硬件功能测试。",
      es: "Ayudó con la implementación, ajuste y validación en sitio de estaciones de carga robóticas y dispositivos automatizados. Apoyó la instalación, alineación física, interfaces, cableado, conectividad y pruebas funcionales con hardware y software aprobados.",
      ja: "ロボット充電ステーションと自動製品試験治具の現地導入、調整、検証を支援しました。設置、物理的な位置合わせ、インターフェース取付、配線、接続確認、承認済みハードウェアとソフトウェアによる機能試験を担当しました。"
    },
    responsibilities: {
      en: ["Installed and configured robotic charging stations and verified power and network connectivity.", "Adjusted station height, leveling, and alignment according to provided deployment requirements.", "Supported HDMI and Type-C interface setup, cable routing, connector inspection, and fixture adjustment.", "Tested established robot workflows using available approved hardware and software.", "Performed minor interface fine-tuning during validation.", "Documented field readiness, setup, and fitment issues in professional summaries.", "Coordinated follow-up testing when additional product validation was needed."],
      zh: ["安装和配置机器人充电站，并检查电源与网络连接。", "按照部署要求调整站点高度、水平和对准。", "支持 HDMI 和 Type-C 接口设置、布线、连接器检查和夹具调整。", "使用获准的软硬件测试既有机器人工作流程。", "在验证过程中进行小幅接口微调。", "以专业摘要记录现场准备、设置和装配问题。", "在需要进一步产品验证时协调后续测试。"],
      es: ["Instaló y configuró estaciones de carga robóticas y verificó la alimentación y la red.", "Ajustó altura, nivelación y alineación según los requisitos de implementación.", "Apoyó interfaces HDMI y Type-C, cableado, inspección de conectores y ajuste de dispositivos.", "Probó flujos robóticos establecidos con hardware y software aprobados.", "Realizó ajustes menores de interfaz durante la validación.", "Documentó de forma profesional la preparación, instalación y ajuste en campo.", "Coordinó pruebas posteriores cuando se necesitó validación adicional."],
      ja: ["ロボット充電ステーションを設置・設定し、電源とネットワーク接続を確認しました。", "導入要件に従い、ステーションの高さ、水平、位置合わせを調整しました。", "HDMI と Type-C の設定、配線、コネクタ検査、治具調整を支援しました。", "承認済みのハードウェアとソフトウェアで既存のロボット工程を試験しました。", "検証中にインターフェースの微調整を行いました。", "現場準備、セットアップ、適合上の課題を専門的な要約として記録しました。", "追加検証が必要な場合にフォローアップ試験を調整しました。"]
    },
    tools: {
      en: ["Robotics deployment", "Charging station setup", "Hardware alignment", "HDMI / Type-C interface setup", "Cable routing", "Product testing", "Field troubleshooting", "On-site validation"],
      zh: ["机器人部署", "充电站设置", "硬件对准", "HDMI / Type-C 接口设置", "布线", "产品测试", "现场故障排查", "现场验证"],
      es: ["Implementación robótica", "Instalación de estaciones de carga", "Alineación de hardware", "Interfaces HDMI / Type-C", "Cableado", "Pruebas de producto", "Diagnóstico en campo", "Validación en sitio"],
      ja: ["ロボティクス導入", "充電ステーション設置", "ハードウェア位置合わせ", "HDMI / Type-C 設定", "配線", "製品試験", "現場トラブルシューティング", "現地検証"]
    },
    learned: {
      en: ["Learned how robotic docking accuracy depends on physical alignment, station height, cable routing, and interface quality.", "Gained experience following deployment requirements while adapting to real site conditions.", "Improved field troubleshooting, documentation, and professional communication skills."],
      zh: ["了解机器人对接精度如何受到物理对准、站点高度、布线和接口质量的影响。", "积累了遵循部署要求并适应实际现场条件的经验。", "提升了现场故障排查、文档记录和专业沟通能力。"],
      es: ["Aprendió cómo la precisión de acoplamiento depende de la alineación, altura, cableado y calidad de las interfaces.", "Adquirió experiencia siguiendo requisitos de implementación y adaptándose a condiciones reales.", "Mejoró sus habilidades de diagnóstico en campo, documentación y comunicación profesional."],
      ja: ["ロボットのドッキング精度が物理的な位置合わせ、設置高さ、配線、インターフェース品質に左右されることを学びました。", "導入要件に従いながら現場状況に適応する経験を積みました。", "現場でのトラブル対応、文書化、専門的なコミュニケーション能力を向上させました。"]
    },
    images: [
      {
        src: "/images/experience/apple/apple-1.jpg",
        alt: "Mobile robot platform carrying mounted test and positioning hardware",
        caption: "Mobile robotic platform configured with hardware used during field setup.",
        fit: "contain",
        width: 1080,
        height: 1920
      },
      {
        src: "/images/experience/apple/apple-2.jpg",
        alt: "Overhead view of mounted fixture components, cabling, and alignment hardware",
        caption: "Fixture hardware arranged for positioning and interface setup.",
        fit: "cover",
        width: 1702,
        height: 1276
      },
      {
        src: "/images/experience/apple/apple-3.jpg",
        alt: "Multi-position hardware fixture with aligned interface modules",
        caption: "Hardware fixture arranged for repeatable interface positioning.",
        fit: "cover",
        width: 1702,
        height: 1276
      },
      {
        src: "/images/experience/apple/apple-4.jpg",
        alt: "Close-up of interface modules and alignment hardware in a test fixture",
        caption: "Close-up view of fixture interfaces and positioning components.",
        fit: "contain",
        width: 1920,
        height: 1080
      }
    ]
  },
  {
    slug: "openai",
    company: "OpenAI",
    role: {
      en: "Hardware Test Fixture / PCB Rework Technician",
      zh: "硬件测试夹具 / PCB 返修技术员",
      es: "Técnico de dispositivos de prueba de hardware / retrabajo de PCB",
      ja: "ハードウェア試験治具 / PCB リワーク技術者"
    },
    location: {
      en: "San Francisco Bay Area, CA",
      zh: "加利福尼亚州旧金山湾区",
      es: "Área de la Bahía de San Francisco, California",
      ja: "カリフォルニア州サンフランシスコ・ベイエリア"
    },
    date: {
      en: "July 2026",
      zh: "2026 年 7 月",
      es: "Julio de 2026",
      ja: "2026 年 7 月"
    },
    summary: {
      en: "Supported PCB replacement and maintenance work for reusable hardware test fixtures used in structured engineering validation and production-style testing workflows.",
      zh: "为用于规范化工程验证和生产式测试流程的可重复使用硬件测试夹具提供 PCB 更换与维护支持。",
      es: "Apoyó el reemplazo y mantenimiento de PCB en dispositivos reutilizables empleados en validación de ingeniería y flujos de pruebas de producción.",
      ja: "体系的なエンジニアリング検証と生産形式の試験工程で使用する再利用可能なハードウェア試験治具について、PCB 交換と保守を支援しました。"
    },
    overview: {
      en: "Supported hardware test fixture maintenance by replacing interface PCB boards in reusable docking and validation fixtures. Assisted with restoring fixture readiness, verifying correct board installation, and supporting hardware validation workflows.",
      zh: "通过更换可重复使用的对接与验证夹具中的接口 PCB，支持硬件测试夹具维护。协助恢复夹具可用状态、确认电路板安装正确，并支持硬件验证流程。",
      es: "Apoyó el mantenimiento de dispositivos de prueba mediante el reemplazo de PCB de interfaz en dispositivos reutilizables de acoplamiento y validación. Ayudó a restablecer su disponibilidad, verificar la instalación correcta y respaldar flujos de validación de hardware.",
      ja: "再利用可能なドッキング・検証治具のインターフェース PCB を交換し、ハードウェア試験治具の保守を支援しました。治具の使用準備、基板の正しい取付確認、ハードウェア検証工程を支援しました。"
    },
    responsibilities: {
      en: [
        "Replaced interface PCB boards in multiple reusable docking and hardware test fixtures.",
        "Disassembled and reassembled fixture components while maintaining mechanical alignment and connector integrity.",
        "Inspected PCB seating, connectors, fasteners, contact areas, and fixture condition.",
        "Followed ESD-safe hardware handling and controlled assembly procedures.",
        "Maintained consistent installation quality across multiple identical fixtures.",
        "Verified correct reassembly and readiness for subsequent engineering validation.",
        "Reported damaged or questionable components for further review."
      ],
      zh: [
        "更换多个可重复使用的对接和硬件测试夹具中的接口 PCB。",
        "谨慎拆卸并重新组装夹具部件，同时保持机械对准和连接器完整性。",
        "在返修过程中检查 PCB 就位情况、连接器、紧固件、接触区域和夹具状态。",
        "遵循 ESD 安全的硬件操作和受控装配流程。",
        "在多个相同夹具上保持一致的安装质量。",
        "确认每个夹具均正确重新组装，并可用于后续工程验证。",
        "记录已完成的更换工作，并报告损坏或状态存疑的部件以供进一步检查。"
      ],
      es: [
        "Reemplazó PCB de interfaz en múltiples dispositivos reutilizables de acoplamiento y prueba de hardware.",
        "Desmontó y volvió a montar componentes con cuidado, manteniendo la alineación mecánica y la integridad de los conectores.",
        "Inspeccionó el asiento de las PCB, conectores, sujetadores, áreas de contacto y estado de los dispositivos.",
        "Siguió prácticas de manipulación seguras contra ESD y procedimientos de ensamble controlado.",
        "Mantuvo una calidad de instalación uniforme en múltiples dispositivos idénticos.",
        "Verificó que cada dispositivo quedara correctamente montado y listo para validación posterior.",
        "Documentó los reemplazos e informó componentes dañados o dudosos para revisión."
      ],
      ja: [
        "複数の再利用可能なドッキング・ハードウェア試験治具でインターフェース PCB を交換しました。",
        "機械的な位置合わせとコネクタの完全性を保ちながら、治具部品を慎重に分解・再組み立てしました。",
        "リワーク中に PCB の装着、コネクタ、締結部品、接触部、治具の状態を確認しました。",
        "ESD に配慮したハードウェア取扱いと管理された組み立て手順に従いました。",
        "複数の同一治具で一貫した取付品質を維持しました。",
        "各治具が正しく再組み立てされ、後続のエンジニアリング検証に使用できることを確認しました。",
        "交換完了を記録し、損傷または確認が必要な部品を報告しました。"
      ]
    },
    tools: {
      en: ["PCB replacement", "Electronics assembly", "Hardware test fixtures", "Connector inspection", "Hardware rework", "ESD-safe handling", "Production test support", "Quality inspection"],
      zh: ["PCB 更换", "电子装配", "硬件测试夹具", "连接器检查", "硬件返修", "ESD 安全操作", "生产测试支持", "质量检查"],
      es: ["Reemplazo de PCB", "Ensamble electrónico", "Dispositivos de prueba de hardware", "Inspección de conectores", "Retrabajo de hardware", "Manipulación segura contra ESD", "Soporte de pruebas de producción", "Inspección de calidad"],
      ja: ["PCB 交換", "電子機器組み立て", "ハードウェア試験治具", "コネクタ検査", "ハードウェアリワーク", "ESD 対応", "生産試験支援", "品質検査"]
    },
    learned: {
      en: [
        "Learned how reusable test fixtures support engineering validation and production testing.",
        "Gained practical experience replacing interface PCBs while preserving mechanical alignment.",
        "Improved attention to detail when working with repeated sensitive electronic assemblies."
      ],
      zh: ["了解了可重复使用的测试夹具如何支持工程验证和生产测试。", "积累了在保持机械对准的同时更换接口 PCB 的实践经验。", "在重复处理敏感电子组件时提升了对细节的关注。"],
      es: ["Aprendió cómo los dispositivos reutilizables respaldan la validación de ingeniería y las pruebas de producción.", "Adquirió experiencia reemplazando PCB de interfaz y preservando la alineación mecánica.", "Mejoró su atención al detalle al trabajar repetidamente con ensambles electrónicos sensibles."],
      ja: ["再利用可能な試験治具がエンジニアリング検証と生産試験を支える仕組みを学びました。", "機械的な位置合わせを保ちながらインターフェース PCB を交換する実務経験を積みました。", "繰り返し扱う繊細な電子アセンブリで細部への注意力を高めました。"]
    },
    images: [
      {
        src: "/images/experience/openai/openai-1.jpg",
        alt: "Reusable hardware test fixture with interface PCB",
        fit: "cover",
        width: 1702,
        height: 1276
      },
      {
        src: "/images/experience/openai/openai-2.jpg",
        alt: "Fixture components used during hardware rework and validation support",
        fit: "contain",
        width: 1280,
        height: 1707
      },
      {
        src: "/images/experience/openai/openai-3.jpg",
        alt: "Multiple hardware test fixtures prepared for PCB replacement",
        fit: "cover",
        width: 1702,
        height: 1276
      }
    ]
  }
];

export function getExperience(slug: string) {
  return experiences.find((experience) => experience.slug === slug);
}
