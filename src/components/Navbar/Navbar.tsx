import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "../Button/Button";
import { openMachineWhatsApp } from "../../utils/whatsapp";

const links = [
  ["/", "Home"],
  ["/about", "About"],
  ["/services", "Services"],
  ["/machine", "Machine"],
  ["/projects", "Projects"],
  ["/contact", "Contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
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
          <Button
            onClick={() => {
              setOpen(false);
              openMachineWhatsApp();
            }}
          >
            Book Machine <ArrowUpRight size={16} />
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
