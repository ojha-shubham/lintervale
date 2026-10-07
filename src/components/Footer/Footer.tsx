import { ArrowUpRight, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig } from "../../config/siteConfig";
import { callBusiness } from "../../utils/phone";
import { openMachineWhatsApp } from "../../utils/whatsapp";
import { useLanguage } from "../../context/LanguageContext";

export default function Footer(){
 const {language}=useLanguage(); const h=language==="hinglish";
 return <footer className="footer"><div className="container"><div className="footer__main"><div><Link to="/" className="brand brand--footer"><span className="brand__mark">LV</span><span>LinterVale</span></Link><p>{h?"Construction • Civil • Concrete Finishing":"Construction • Civil • Concrete Finishing"}</p></div>
 <div className="footer__links"><div><span className="footer__label">{h?"Explore":"Explore"}</span><Link to="/about">{h?"About":"About"}</Link><Link to="/services">{h?"Services":"Services"}</Link><Link to="/projects">{h?"Projects":"Projects"}</Link></div><div><span className="footer__label">{h?"Enquiries":"Enquiries"}</span><button onClick={callBusiness}><PhoneCall size={15}/> {h?"Call Karein":"Call Now"}</button><button onClick={openMachineWhatsApp}>WhatsApp <ArrowUpRight size={15}/></button><Link to="/machine">{h?"Machine Booking":"Machine Booking"}</Link></div></div></div>
 <div className="footer__bottom"><span>© {new Date().getFullYear()} {siteConfig.name}. {h?"Business information baad mein configure ki ja sakti hai.":"Business information placeholders are ready to configure."}</span><span>{h?"Local enquiries ke liye banaya gaya.":"Built for practical local enquiries."}</span></div></div></footer>;
}
