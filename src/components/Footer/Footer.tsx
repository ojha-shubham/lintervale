import { ArrowUpRight, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig } from "../../config/siteConfig";
import { callBusiness } from "../../utils/phone";
import { openMachineWhatsApp } from "../../utils/whatsapp";
import { useLanguage } from "../../context/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();
  const isHinglish = language === "hinglish";

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__main">
          <div>
            <Link to="/" className="brand brand--footer">
              <span className="brand__mark">LV</span>
              <span>LinterVale</span>
            </Link>
            <p>{isHinglish ? "Ghar • RCC • Slab • Civil • Linter Machine" : "House • RCC • Slab • Civil • Linter Machine"}</p>
          </div>

          <div className="footer__links">
            <div>
              <span className="footer__label">{isHinglish ? "Pages" : "Pages"}</span>
              <Link to="/about">{isHinglish ? "About" : "About"}</Link>
              <Link to="/services">{isHinglish ? "Services" : "Services"}</Link>
              <Link to="/projects">{isHinglish ? "Work Types" : "Work Types"}</Link>
            </div>

            <div>
              <span className="footer__label">{isHinglish ? "Contact" : "Contact"}</span>
              <button onClick={callBusiness}><PhoneCall size={15} /> {isHinglish ? "Call Karein" : "Call Now"}</button>
              <button onClick={openMachineWhatsApp}>WhatsApp <ArrowUpRight size={15} /></button>
              <Link to="/machine">{isHinglish ? "Machine Enquiry" : "Machine Enquiry"}</Link>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</span>
          <span>{isHinglish ? "Local construction enquiries." : "Local construction enquiries."}</span>
        </div>
      </div>
    </footer>
  );
}
