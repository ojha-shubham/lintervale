import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Language = "en" | "hinglish";

const copy = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      machine: "Machine",
      projects: "Projects",
      contact: "Contact",
      book: "Book Machine",
    },
    common: {
      call: "Call Now",
      whatsapp: "WhatsApp",
      quote: "Get a Quote",
      enquiry: "Enquiry",
      viewServices: "View all services",
      requestMachine: "Request Machine",
      machineAvailability: "Check Machine Availability",
    },
  },

  hinglish: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      machine: "Machine",
      projects: "Projects",
      contact: "Contact",
      book: "Machine Book Karein",
    },
    common: {
      call: "Call Karein",
      whatsapp: "WhatsApp",
      quote: "Quote Lejiye",
      enquiry: "Enquiry",
      viewServices: "Saari Services Dekhein",
      requestMachine: "Machine Request Karein",
      machineAvailability: "Machine Availability Check Karein",
    },
  },
} as const;

type LanguageCopy = {
  nav: {
    home: string;
    about: string;
    services: string;
    machine: string;
    projects: string;
    contact: string;
    book: string;
  };

  common: {
    call: string;
    whatsapp: string;
    quote: string;
    enquiry: string;
    viewServices: string;
    requestMachine: string;
    machineAvailability: string;
  };
};

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: LanguageCopy;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("lintervale-language");

    return saved === "hinglish" ? "hinglish" : "en";
  });

  function setLanguage(next: Language) {
    setLanguageState(next);

    localStorage.setItem("lintervale-language", next);

    document.documentElement.lang = next === "hinglish" ? "en-IN" : "en";
  }

  useEffect(() => {
    document.documentElement.lang = language === "hinglish" ? "en-IN" : "en";
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: copy[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const value = useContext(LanguageContext);

  if (!value) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return value;
}
