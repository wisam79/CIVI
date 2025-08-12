export type PersonalInfo = {
  name: string;
  jobTitle: string;
  email: string;
  phone: string;
  address: string;
  link: string;
  image: string;
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  date: string;
  description: string;
};

export type Education = {
  id:string;
  institution: string;
  degree: string;
  date: string;
  description: string;
};

export type Skill = {
  id: string;
  name: string;
};

export type CvData = {
  personal: PersonalInfo;
  summary: string;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
};

export type Language = "en" | "ar";

export type Template = "onyx" | "topaz" | "garnet" | "quartz" | "sapphire" | "ruby" | "emerald" | "jade" | "amethyst";

export type PaperSize = "A4" | "Letter";

export type Font = "tajawal" | "almarai" | "cairo" | "roboto" | "open-sans" | "lato" | "amiri" | "inter";
