import { ArrowUpRight, PhoneCall } from "lucide-react";
import Button from "../Button/Button";
import { callBusiness } from "../../utils/phone";
import { openWhatsApp } from "../../utils/whatsapp";
import { useLanguage } from "../../context/LanguageContext";

export default function ContactCTA() {
  const { language } = useLanguage();
  const isHinglish = language === "hinglish";

  return (
    <section className="contact-cta">
      <div>
        <span className="eyebrow">{isHinglish ? "Baat Karein" : "Talk to us"}</span>
        <h2>
          {isHinglish ? <>Kaam ki requirement hai?<br /><em>Message karein.</em></> : <>Have a job to discuss?<br /><em>Get in touch.</em></>}
        </h2>
        <p>
          {isHinglish
            ? "Construction ka kaam ho ya linter machine chahiye ho, basic details bhej dein."
            : "Whether it’s construction work or a linter machine enquiry, send us the basic details."}
        </p>
      </div>

      <div className="contact-cta__actions">
        <Button onClick={callBusiness}><PhoneCall size={18} /> {isHinglish ? "Call Karein" : "Call Now"}</Button>
        <Button
          variant="secondary"
          onClick={() =>
            openWhatsApp(
              isHinglish
                ? "Namaste, mujhe construction work ke baare mein enquiry karni hai.\n\nNaam:\nLocation:\nKaam:\nDate:"
                : "Hello, I want to enquire about construction work.\n\nName:\nLocation:\nWork required:\nDate:",
            )
          }
        >
          <ArrowUpRight size={18} /> WhatsApp
        </Button>
        <Button variant="ghost" to="/contact">
          {isHinglish ? "Contact Details" : "Contact Details"} <ArrowUpRight size={18} />
        </Button>
      </div>
    </section>
  );
}
