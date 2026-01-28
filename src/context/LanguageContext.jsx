import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../data/translations";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Initialize from localStorage or default to 'id'
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem("nexa_language");
    return saved === "en" ? "en" : "id";
  });

  // Persist change
  useEffect(() => {
    localStorage.setItem("nexa_language", language);
  }, [language]);

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  // Translation helper
  const t = (key) => {
    const text = translations[language][key];
    if (!text) {
      console.warn(`Missing translation for key: ${key}`);
      return key;
    }
    return text;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
