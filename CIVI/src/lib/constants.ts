import type { Font } from "@/lib/types";

export const ACCENT_COLORS = [
  "#FFB347", // Pastel Orange
  "#FF8A65", // Light Orange
  "#4DB6AC", // Teal
  "#4FC3F7", // Light Blue
  "#7986CB", // Indigo Light
  "#BA68C8", // Orchid
  "#F06292", // Pink
];

export const FONT_OPTIONS: {
    arabic: { label: string; value: Font; className: string }[],
    english: { label: string; value: Font; className: string }[]
} = {
    arabic: [
        { label: "تجوال", value: "tajawal", className: "font-tajawal" },
        { label: "المراعي", value: "almarai", className: "font-almarai" },
        { label: "كايرو", value: "cairo", className: "font-cairo" },
        { label: "Amiri", value: "amiri", className: "font-amiri" },
    ],
    english: [
        { label: "Roboto", value: "roboto", className: "font-roboto" },
        { label: "Open Sans", value: "open-sans", className: "font-open-sans" },
        { label: "Lato", value: "lato", className: "font-lato" },
        { label: "Inter", value: "inter", className: "font-inter" },
    ]
};


export const INITIAL_CV_DATA = {
  personal: {
    name: "وسام سمير",
    jobTitle: "مهندس مدني",
    email: "wesam.sameer@email.com",
    phone: "+964 123 456 7890",
    address: "ذي قار، العراق",
    link: "linkedin.com/in/wesam-sameer",
    image: "",
  },
  summary:
    "مهندس مدني حديث التخرج يتمتع بحماس وشغف لتطبيق المبادئ الهندسية المكتسبة في بيئة عمل حقيقية. أمتلك أساسًا نظريًا قويًا في التصميم الإنشائي وإدارة المشاريع، مع مهارات ممتازة في استخدام برامج AutoCAD و Civil 3D. أتطلع للمساهمة في مشاريع بناء مبتكرة وتحقيق النمو المهني.",
  experience: [
    {
      id: "exp1",
      company: "شركة البناء الحديث للمقاولات",
      role: "مهندس موقع (تدريب)",
      date: "يونيو 2021 - سبتمبر 2021",
      description:
        "المساعدة في الإشراف على الأنشطة اليومية في موقع البناء.\nمراجعة المخططات الهندسية والتأكد من مطابقتها للمواصفات.\nإعداد التقارير اليومية عن سير العمل وكميات المواد المستخدمة.",
    },
    {
      id: "exp2",
      company: "المكتب الاستشاري الهندسي",
      role: "مساعد مهندس تصميم",
      date: "مارس 2020 - مايو 2020",
      description:
        "المشاركة في إعداد وتصميم المخططات الإنشائية للمباني السكنية باستخدام برنامج AutoCAD.\nإجراء حسابات الكميات الأولية للمواد.",
    },
  ],
  education: [
    {
      id: "edu1",
      institution: "جامعة الكوفة",
      degree: "بكالوريوس في الهندسة المدنية",
      date: "2018 - 2022",
      description: "مشروع تخرج حول تصميم وتحليل مبنى خرساني متعدد الطوابق مقاوم للزلازل.",
    },
  ],
  skills: [
    { id: "skill1", name: "AutoCAD" },
    { id: "skill2", name: "Civil 3D" },
    { id: "skill3", name: "تحليل إنشائي" },
    { id: "skill4", name: "إدارة المشاريع" },
    { id: "skill5", name: "إعداد التقارير الفنية" },
    { id: "skill6", name: "حساب الكميات" },
    { id: "skill7", name: "MS Office" },
  ],
};

export const BLANK_CV_DATA = {
  personal: {
    name: "",
    jobTitle: "",
    email: "",
    phone: "",
    address: "",
    link: "",
    image: "",
  },
  summary: "",
  experience: [],
  education: [],
  skills: [],
};
