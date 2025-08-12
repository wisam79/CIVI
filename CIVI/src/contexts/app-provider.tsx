"use client";

import type { ReactNode } from "react";
import React, { createContext, useReducer, useContext, useMemo, useEffect } from "react";
import type { CvData, Language, Template, PaperSize, Experience, Education, Skill, Font } from "@/lib/types";
import { INITIAL_CV_DATA, ACCENT_COLORS, BLANK_CV_DATA } from "@/lib/constants";

const LOCAL_STORAGE_KEY = "cv-data";

type State = {
  cvData: CvData;
  theme: "light" | "dark";
  language: Language;
  template: Template;
  accentColor: string;
  paperSize: PaperSize;
  font: Font;
  fontSize: number;
  borderRadius: number;
};

type Action =
  | { type: "SET_CV_DATA"; payload: CvData }
  | { type: "RESET_CV_DATA" }
  | { type: "UPDATE_FIELD"; payload: { section: keyof CvData | `personal.${keyof CvData['personal']}`; value: any } }
  | { type: "ADD_ITEM"; payload: { section: "experience" | "education" | "skills" } }
  | { type: "REMOVE_ITEM"; payload: { section: "experience" | "education" | "skills"; id: string } }
  | { type: "UPDATE_ITEM"; payload: { section: "experience" | "education" | "skills"; id: string; field: string; value: string } }
  | { type: "SET_THEME"; payload: "light" | "dark" }
  | { type: "SET_LANGUAGE"; payload: Language }
  | { type: "SET_TEMPLATE"; payload: Template }
  | { type: "SET_ACCENT_COLOR"; payload: string }
  | { type: "SET_PAPER_SIZE"; payload: PaperSize }
  | { type: "SET_FONT"; payload: Font }
  | { type: "SET_FONT_SIZE"; payload: number }
  | { type: "SET_BORDER_RADIUS"; payload: number };


function getInitialState(): State {
    const savedData = typeof window !== 'undefined' ? localStorage.getItem(LOCAL_STORAGE_KEY) : null;
    let cvData = INITIAL_CV_DATA;
    let theme: "light" | "dark" = "dark";
    let language: Language = "ar";
    let template: Template = "onyx";
    let accentColor = ACCENT_COLORS[0];
    let paperSize: PaperSize = "A4";
    let font: Font = 'tajawal';
    let fontSize = 14;
    let borderRadius = 8;

    if (savedData) {
        try {
            const parsedData = JSON.parse(savedData);
            cvData = { ...INITIAL_CV_DATA, ...parsedData.cvData };
            // Ensure image field is not loaded from local storage
            cvData.personal.image = '';
            
            theme = parsedData.theme || "dark";
            language = parsedData.language || "ar";
            template = parsedData.template || "onyx";
            accentColor = parsedData.accentColor || ACCENT_COLORS[0];
            paperSize = parsedData.paperSize || "A4";
            font = parsedData.font || 'tajawal';
            fontSize = parsedData.fontSize || 14;
            borderRadius = parsedData.borderRadius ?? 8;
        } catch (error) {
            console.error("Failed to parse saved data from localStorage", error);
        }
    }

    return { cvData, theme, language, template, accentColor, paperSize, font, fontSize, borderRadius };
}


function appReducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_CV_DATA":
        return { ...state, cvData: action.payload };
    case "RESET_CV_DATA":
        return { ...state, cvData: BLANK_CV_DATA };
    case "UPDATE_FIELD": {
      const { section, value } = action.payload;
      if(section.startsWith('personal.')) {
        const field = section.split('.')[1];
        return {
          ...state,
          cvData: {
            ...state.cvData,
            personal: { ...state.cvData.personal, [field]: value },
          },
        };
      }
      return {
        ...state,
        cvData: { ...state.cvData, [section]: value },
      };
    }
    case "ADD_ITEM": {
      const { section } = action.payload;
      
      const newItemTemplates = {
        experience: { id: crypto.randomUUID(), company: "", role: "", date: "", description: "" },
        education: { id: crypto.randomUUID(), institution: "", degree: "", date: "", description: "" },
        skills: { id: crypto.randomUUID(), name: "" },
      };

      const newItem = newItemTemplates[section];
      const items = state.cvData[section] as (Experience[] | Education[] | Skill[]);
      
      return {
        ...state,
        cvData: {
          ...state.cvData,
          [section]: [...items, newItem],
        },
      };
    }
    case "REMOVE_ITEM": {
      const { section, id } = action.payload;
      const items = state.cvData[section] as (Experience[] | Education[] | Skill[]);
      return {
        ...state,
        cvData: {
          ...state.cvData,
          [section]: items.filter(item => item.id !== id),
        },
      };
    }
    case "UPDATE_ITEM": {
      const { section, id, field, value } = action.payload;
      const items = state.cvData[section] as (Experience[] | Education[] | Skill[]);
      return {
        ...state,
        cvData: {
          ...state.cvData,
          [section]: items.map(item =>
            item.id === id ? { ...item, [field]: value } : item
          ),
        },
      };
    }
    case "SET_THEME":
       if (action.payload === 'light') {
         document.documentElement.classList.remove('dark');
         document.documentElement.classList.add('light');
       } else {
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add('dark');
       }
      return { ...state, theme: action.payload };
    case "SET_LANGUAGE":
      return { ...state, language: action.payload };
    case "SET_TEMPLATE":
      return { ...state, template: action.payload };
    case "SET_ACCENT_COLOR":
      return { ...state, accentColor: action.payload };
    case "SET_PAPER_SIZE":
      return { ...state, paperSize: action.payload };
    case "SET_FONT":
        return { ...state, font: action.payload };
    case "SET_FONT_SIZE":
        return { ...state, fontSize: action.payload };
    case "SET_BORDER_RADIUS":
        return { ...state, borderRadius: action.payload };
    default:
      return state;
  }
}

const AppContext = createContext<{ state: State; dispatch: React.Dispatch<Action> } | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, getInitialState());

  const value = useMemo(() => ({ state, dispatch }), [state]);

  useEffect(() => {
    try {
        // Create a copy of cvData and remove the image before saving
        const { image, ...personalDataWithoutImage } = state.cvData.personal;
        const cvDataWithoutImage = {
            ...state.cvData,
            personal: personalDataWithoutImage
        };

        const stateToSave = {
            cvData: cvDataWithoutImage,
            theme: state.theme,
            language: state.language,
            template: state.template,
            accentColor: state.accentColor,
            paperSize: state.paperSize,
            font: state.font,
            fontSize: state.fontSize,
            borderRadius: state.borderRadius,
        };
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(stateToSave));
    } catch (error) {
        console.error("Could not save state to localStorage:", error);
    }
  }, [state]);

  React.useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(state.theme);
    document.documentElement.lang = state.language;
    document.documentElement.dir = state.language === "ar" ? "rtl" : "ltr";
  }, [state.theme, state.language]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
