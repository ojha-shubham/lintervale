import { Mail, MapPin, PhoneCall } from "lucide-react";
import Button from "../../components/Button/Button";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ContactCTA from "../../components/ContactCTA/ContactCTA";
import { siteConfig } from "../../config/siteConfig";
import { callBusiness } from "../../utils/phone";
import { openMachineWhatsApp } from "../../utils/whatsapp";
import { useLanguage } from "../../context/LanguageContext";

export default function Contact() {
  const { language } = useLanguage();
  const isHinglish = language === "hinglish";

  return (
    <>
      <section className="page-hero page-hero--short">
        <div className="container">
          <span className="eyebrow">
            {isHinglish ? "Baat Karein" : "Contact"}
          </span>
          <h1>
            {isHinglish ? (
              <>
                Kaam hai?
                <br />
                <em>Call karein.</em>
              </>
            ) : (
              <>
                Have work to discuss?
                <br />
                <em>Let's talk.</em>
              </>
            )}
          </h1>
          <p>
            {isHinglish
              ? "Construction, RCC, civil work ya linter machine ke liye seedhe baat karein."
              : "Talk directly about construction, RCC, civil work or linter machine service."}
          </p>
        </div>
      </section>

      <section className="section section--light">
        <div className="container contact-grid">
          <div>
            <SectionTitle
              eyebrow={isHinglish ? "Direct Contact" : "Direct contact"}
              title={
                isHinglish
                  ? "Apne kaam ki details batayein."
                  : "Tell us about the job."
              }
              description={
                isHinglish
                  ? "Call ya WhatsApp par location, date aur kaam ki basic details share kar sakte hain."
                  : "Call or WhatsApp with the location, date and a few basic details about the work."
              }
            />
            <div className="contact-actions">
              <Button onClick={callBusiness}>
                <PhoneCall size={18} />{" "}
                {isHinglish ? "Call Karein" : "Call Now"}
              </Button>
              <Button variant="secondary" onClick={openMachineWhatsApp}>
                WhatsApp
              </Button>
            </div>
          </div>

          <div className="contact-card">
            <div>
              <MapPin />
              <span>
                <small>{isHinglish ? "Service Area" : "Service area"}</small>
                <strong>{siteConfig.city}</strong>
                <strong className="muted">{siteConfig.serviceArea}</strong>
              </span>
            </div>
            <div>
              <PhoneCall />
              <span>
                <small>{isHinglish ? "Phone" : "Phone"}</small>
                <strong>{siteConfig.phone}</strong>
              </span>
            </div>
            <div>
              <Mail />
              <span>
                <small>Email</small>
                <strong>{siteConfig.email}</strong>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="quote-section">
        <div className="container quote-section__inner">
          <div>
            <span className="eyebrow">
              {isHinglish ? "Construction Enquiry" : "Construction enquiry"}
            </span>
            <h2>
              {isHinglish
                ? "Kaam kahan hai aur kab chahiye?"
                : "Where is the work and when do you need it?"}
            </h2>
            <p>
              {isHinglish
                ? "Project type, location, date aur short requirement WhatsApp ya call par bhej dein."
                : "Send the project type, location, date and a short description by WhatsApp or phone."}
            </p>
          </div>
          <Button onClick={openMachineWhatsApp}>
            {isHinglish ? "WhatsApp Par Enquiry" : "Enquire on WhatsApp"}
          </Button>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
