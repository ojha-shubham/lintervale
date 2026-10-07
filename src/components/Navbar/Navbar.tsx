import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "../Button/Button";
import { openMachineWhatsApp } from "../../utils/whatsapp";
import { useLanguage, type Language } from "../../context/LanguageContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const links = [
    ["/", t.nav.home],
    ["/about", t.nav.about],
    ["/services", t.nav.services],
    ["/machine", t.nav.machine],
    ["/projects", t.nav.projects],
    ["/contact", t.nav.contact],
  ];
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand__mark">LV</span>
          <span>LinterVale</span>
        </Link>
        <nav
          className={`navbar__links ${open ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          {links.map(([path, label]) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <div className="language-switcher" aria-label="Language">
            {(["en", "hinglish"] as Language[]).map((item) => (
              <button
                key={item}
                className={language === item ? "is-active" : ""}
                onClick={() => {
                  setLanguage(item);
                  setOpen(false);
                }}
              >
                {item === "en" ? "ENGLISH" : "HINGLISH"}
              </button>
            ))}
          </div>
          <Button
            onClick={() => {
              setOpen(false);
              openMachineWhatsApp();
            }}
          >
            {t.nav.book} <ArrowUpRight size={16} />
          </Button>
        </nav>
        <button
          className="menu-button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
