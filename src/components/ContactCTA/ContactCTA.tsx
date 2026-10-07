import { ArrowUpRight, PhoneCall } from "lucide-react";
import Button from "../Button/Button";
import { callBusiness } from "../../utils/phone";
import { openWhatsApp } from "../../utils/whatsapp";
import { useLanguage } from "../../context/LanguageContext";

export default function ContactCTA() {
  const { language } = useLanguage();
  const h = language === "hinglish";
  return <section className="contact-cta">
    <div><span className="eyebrow">{h ? "Baat shuru karein" : "Start a conversation"}</span>
      <h2>{h ? <>Koi Project<br />mind mein hai?</> : <>Have a Project<br />in Mind?</>}</h2>
      <p>{h ? "Apne construction project ke baare mein baat karein ya machine availability poochhein." : "Talk to us about your construction project or enquire about machine availability."}</p>
    </div>
    <div className="contact-cta__actions">
      <Button onClick={callBusiness}><PhoneCall size={18} /> {h ? "Call Karein" : "Call Now"}</Button>
      <Button variant="secondary" onClick={() => openWhatsApp(h ? "Hello, mujhe construction project ke baare mein enquiry karni hai.\n\nName:\nProject Location:\nRequirement:" : "Hello, I want to enquire about a construction project.\n\nName:\nProject Location:\nRequirement:")}><ArrowUpRight size={18} /> WhatsApp</Button>
      <Button variant="ghost" to="/contact">{h ? "Quote Lejiye" : "Get a Quote"} <ArrowUpRight size={18} /></Button>
    </div>
  </section>;
}
