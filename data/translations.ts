export const languages = ["en", "zh", "es", "ja"] as const;

export type Language = (typeof languages)[number];
export type LocalizedText = Record<Language, string>;

export const languageOptions: Array<{
  code: Language;
  label: string;
  htmlLang: string;
}> = [
  { code: "en", label: "English", htmlLang: "en" },
  { code: "zh", label: "中文", htmlLang: "zh-CN" },
  { code: "es", label: "Español", htmlLang: "es" },
  { code: "ja", label: "日本語", htmlLang: "ja" }
];

export const translations = {
  en: {
    nav: {
      about: "About",
      education: "Education",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      resume: "Resume",
      contact: "Contact"
    },
    hero: {
      eyebrow: "Electrical Engineering Portfolio",
      bio: "Incoming UCLA student at the UCLA Henry Samueli School of Engineering and Applied Science, studying Electrical Engineering.",
      interests: "Alan is interested in electrical engineering, computer engineering, robotics, software development, hardware systems, and PC building.",
      viewInternships: "View Internships",
      focusAreas: "Focus Areas"
    },
    about: {
      heading: "Engineering student building across circuits, systems, and software.",
      body: "Alan is preparing to study Electrical Engineering at UCLA and is developing a portfolio around technical problem solving, hardware systems, robotics, software tools, and practical PC building."
    },
    education: {
      heading: "Education",
      uclaDetail: "Incoming Bachelor of Science in Electrical Engineering",
      uclaMeta: "Beginning September 2026 | Expected Graduation: June 2030",
      highSchoolDetail: "Graduated June 2026 | GPA: 4.0",
      highSchoolMeta: "AP courses include AP Calculus AB, AP Physics 1, AP Macroeconomics, AP English Language & Composition, and AP Literature & Composition"
    },
    experience: {
      heading: "Internship & Field Experience",
      viewDetails: "View Details"
    },
    projects: {
      heading: "Projects",
      roboticsTitle: "FTC Robotics",
      roboticsBody: "Robotics hardware design, CAD, drivetrain systems, and mechanical troubleshooting.",
      portfolioTitle: "Portfolio Website",
      portfolioBody: "Personal website built with Next.js, TypeScript, Tailwind CSS, GitHub, and Vercel.",
      pcTitle: "PC Building",
      pcBody: "Custom PC building with attention to performance, airflow, cable management, and reliable hardware setup."
    },
    skills: {
      heading: "Technical Interests & Skills"
    },
    resume: {
      heading: "Resume",
      available: "Resume available upon request.",
      download: "Download Resume"
    },
    contact: {
      heading: "Contact Alan",
      intro: "For internships, engineering opportunities, technical projects, or portfolio questions, use the links below.",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub"
    },
    detail: {
      backHome: "Back to Home",
      location: "Location",
      date: "Date",
      overview: "Overview",
      responsibilities: "Responsibilities",
      technicalSkills: "Technical Skills / Tools",
      learned: "What I Learned"
    },
    visits: "Visits",
    footer: "All rights reserved."
  },
  zh: {
    nav: {
      about: "关于我",
      education: "教育背景",
      experience: "实践经历",
      projects: "项目",
      skills: "技能",
      resume: "简历",
      contact: "联系方式"
    },
    hero: {
      eyebrow: "电气工程作品集",
      bio: "即将就读于加州大学洛杉矶分校亨利·萨缪利工程与应用科学学院，主修电气工程。",
      interests: "Alan 关注电气工程、计算机工程、机器人、软件开发、硬件系统和电脑组装。",
      viewInternships: "查看实习经历",
      focusAreas: "关注领域"
    },
    about: {
      heading: "在电路、系统与软件领域持续实践的工程学生。",
      body: "Alan 即将在 UCLA 学习电气工程，并围绕技术问题解决、硬件系统、机器人、软件工具和电脑组装积累作品与实践经验。"
    },
    education: {
      heading: "教育背景",
      uclaDetail: "即将攻读电气工程理学学士",
      uclaMeta: "2026 年 9 月入学 | 预计 2030 年 6 月毕业",
      highSchoolDetail: "2026 年 6 月毕业 | GPA：4.0",
      highSchoolMeta: "AP 课程包括 AP 微积分 AB、AP 物理 1、AP 宏观经济学、AP 英语语言与写作及 AP 英语文学与写作"
    },
    experience: {
      heading: "实习与现场经历",
      viewDetails: "查看详情"
    },
    projects: {
      heading: "项目",
      roboticsTitle: "FTC 机器人",
      roboticsBody: "机器人硬件设计、CAD、传动系统和机械故障排查。",
      portfolioTitle: "个人作品集网站",
      portfolioBody: "使用 Next.js、TypeScript、Tailwind CSS、GitHub 和 Vercel 构建的个人网站。",
      pcTitle: "电脑组装",
      pcBody: "注重性能、散热、理线和硬件可靠性的定制电脑组装。"
    },
    skills: {
      heading: "技术兴趣与技能"
    },
    resume: {
      heading: "简历",
      available: "简历可应要求提供。",
      download: "下载简历"
    },
    contact: {
      heading: "联系 Alan",
      intro: "如需沟通实习、工程机会、技术项目或作品集相关事宜，请使用以下联系方式。",
      email: "电子邮箱",
      linkedin: "LinkedIn",
      github: "GitHub"
    },
    detail: {
      backHome: "返回主页",
      location: "地点",
      date: "时间",
      overview: "概述",
      responsibilities: "主要职责",
      technicalSkills: "技术技能 / 工具",
      learned: "实践收获"
    },
    visits: "访问次数",
    footer: "保留所有权利。"
  },
  es: {
    nav: {
      about: "Sobre mí",
      education: "Educación",
      experience: "Experiencia",
      projects: "Proyectos",
      skills: "Habilidades",
      resume: "Currículum",
      contact: "Contacto"
    },
    hero: {
      eyebrow: "Portafolio de Ingeniería Eléctrica",
      bio: "Próximo estudiante de UCLA en la Escuela de Ingeniería y Ciencias Aplicadas Henry Samueli, donde estudiará Ingeniería Eléctrica.",
      interests: "Alan está interesado en ingeniería eléctrica, ingeniería informática, robótica, desarrollo de software, sistemas de hardware y armado de computadoras.",
      viewInternships: "Ver prácticas",
      focusAreas: "Áreas de interés"
    },
    about: {
      heading: "Estudiante de ingeniería con experiencia práctica en circuitos, sistemas y software.",
      body: "Alan se prepara para estudiar Ingeniería Eléctrica en UCLA y desarrolla un portafolio centrado en la resolución de problemas técnicos, sistemas de hardware, robótica, herramientas de software y armado de computadoras."
    },
    education: {
      heading: "Educación",
      uclaDetail: "Próximo estudiante de la Licenciatura en Ingeniería Eléctrica",
      uclaMeta: "Inicio: septiembre de 2026 | Graduación prevista: junio de 2030",
      highSchoolDetail: "Graduado en junio de 2026 | GPA: 4.0",
      highSchoolMeta: "Cursos AP: Cálculo AB, Física 1, Macroeconomía, Lengua y Composición Inglesa, y Literatura y Composición Inglesa"
    },
    experience: {
      heading: "Experiencia de prácticas y campo",
      viewDetails: "Ver detalles"
    },
    projects: {
      heading: "Proyectos",
      roboticsTitle: "Robótica FTC",
      roboticsBody: "Diseño de hardware robótico, CAD, sistemas de transmisión y diagnóstico mecánico.",
      portfolioTitle: "Sitio web de portafolio",
      portfolioBody: "Sitio personal creado con Next.js, TypeScript, Tailwind CSS, GitHub y Vercel.",
      pcTitle: "Armado de computadoras",
      pcBody: "Armado de computadoras personalizadas con atención al rendimiento, flujo de aire, cableado y confiabilidad del hardware."
    },
    skills: {
      heading: "Intereses y habilidades técnicas"
    },
    resume: {
      heading: "Currículum",
      available: "Currículum disponible a solicitud.",
      download: "Descargar currículum"
    },
    contact: {
      heading: "Contactar a Alan",
      intro: "Para prácticas, oportunidades de ingeniería, proyectos técnicos o consultas sobre el portafolio, utiliza los siguientes enlaces.",
      email: "Correo electrónico",
      linkedin: "LinkedIn",
      github: "GitHub"
    },
    detail: {
      backHome: "Volver al inicio",
      location: "Ubicación",
      date: "Fecha",
      overview: "Resumen",
      responsibilities: "Responsabilidades",
      technicalSkills: "Habilidades técnicas / Herramientas",
      learned: "Lo que aprendí"
    },
    visits: "Visitas",
    footer: "Todos los derechos reservados."
  },
  ja: {
    nav: {
      about: "自己紹介",
      education: "学歴",
      experience: "経験",
      projects: "プロジェクト",
      skills: "スキル",
      resume: "履歴書",
      contact: "連絡先"
    },
    hero: {
      eyebrow: "電気工学ポートフォリオ",
      bio: "UCLA ヘンリー・サミュエリ工学・応用科学部に進学し、電気工学を専攻予定です。",
      interests: "Alan は、電気工学、コンピュータ工学、ロボティクス、ソフトウェア開発、ハードウェアシステム、PC 組み立てに関心があります。",
      viewInternships: "インターン経験を見る",
      focusAreas: "関心分野"
    },
    about: {
      heading: "回路、システム、ソフトウェアを横断して学ぶ工学系学生。",
      body: "Alan は UCLA で電気工学を学ぶ準備を進めながら、技術的な問題解決、ハードウェアシステム、ロボティクス、ソフトウェアツール、PC 組み立てを中心に実践経験を積んでいます。"
    },
    education: {
      heading: "学歴",
      uclaDetail: "電気工学理学士課程に進学予定",
      uclaMeta: "2026 年 9 月入学 | 2030 年 6 月卒業予定",
      highSchoolDetail: "2026 年 6 月卒業 | GPA：4.0",
      highSchoolMeta: "AP Calculus AB、AP Physics 1、AP Macroeconomics、AP English Language & Composition、AP Literature & Composition を履修"
    },
    experience: {
      heading: "インターン・現場経験",
      viewDetails: "詳細を見る"
    },
    projects: {
      heading: "プロジェクト",
      roboticsTitle: "FTC ロボティクス",
      roboticsBody: "ロボットのハードウェア設計、CAD、駆動系、機械的なトラブルシューティング。",
      portfolioTitle: "ポートフォリオサイト",
      portfolioBody: "Next.js、TypeScript、Tailwind CSS、GitHub、Vercel で構築した個人サイト。",
      pcTitle: "PC 組み立て",
      pcBody: "性能、エアフロー、配線、ハードウェアの信頼性を重視したカスタム PC の組み立て。"
    },
    skills: {
      heading: "技術的な関心・スキル"
    },
    resume: {
      heading: "履歴書",
      available: "履歴書はご要望に応じて提供します。",
      download: "履歴書をダウンロード"
    },
    contact: {
      heading: "Alan への連絡",
      intro: "インターン、エンジニアリングの機会、技術プロジェクト、ポートフォリオに関するお問い合わせは、以下をご利用ください。",
      email: "メール",
      linkedin: "LinkedIn",
      github: "GitHub"
    },
    detail: {
      backHome: "ホームに戻る",
      location: "所在地",
      date: "期間",
      overview: "概要",
      responsibilities: "担当業務",
      technicalSkills: "技術スキル / ツール",
      learned: "学んだこと"
    },
    visits: "訪問回数",
    footer: "All rights reserved."
  }
} as const;

export const interestTranslations: Record<Language, string[]> = {
  en: [
    "Electrical engineering",
    "Computer engineering",
    "Robotics",
    "Software development",
    "Hardware systems",
    "PC building"
  ],
  zh: ["电气工程", "计算机工程", "机器人", "软件开发", "硬件系统", "电脑组装"],
  es: [
    "Ingeniería eléctrica",
    "Ingeniería informática",
    "Robótica",
    "Desarrollo de software",
    "Sistemas de hardware",
    "Armado de computadoras"
  ],
  ja: [
    "電気工学",
    "コンピュータ工学",
    "ロボティクス",
    "ソフトウェア開発",
    "ハードウェアシステム",
    "PC 組み立て"
  ]
};
