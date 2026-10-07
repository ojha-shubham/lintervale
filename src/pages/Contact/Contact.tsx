import { Mail, MapPin, PhoneCall } from "lucide-react";

import Button from "../../components/Button/Button";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ContactCTA from "../../components/ContactCTA/ContactCTA";

import { siteConfig, isConfigured } from "../../config/siteConfig";
import { callBusiness } from "../../utils/phone";
import { openMachineWhatsApp } from "../../utils/whatsapp";
import { useLanguage } from "../../context/LanguageContext";

export default function Contact() {
  const { language } = useLanguage();
  const h = language === "hinglish";

  return (
    <>
      {/* Hero */}
      <section className="page-hero page-hero--short">
        <div className="container">
          <span className="eyebrow">{h ? "Contact Karein" : "Contact"}</span>

          <h1>
            {h ? (
              <>
                Koi Project
                <br />
                <em>mind mein hai?</em>
              </>
            ) : (
              <>
                Have a Project
                <br />
                <em>in Mind?</em>
              </>
            )}
          </h1>

          <p>
            {h
              ? "Construction, civil work ya machine availability ke liye humse baat karein."
              : "Talk to us about construction, civil work or machine availability."}
          </p>
        </div>
      </section>

      {/* Contact Details */}
      <section className="section section--light">
        <div className="container contact-grid">
          <div>
            <SectionTitle
              eyebrow={h ? "Direct Enquiry" : "Direct enquiry"}
              title={
                h
                  ? "Kaam ke baare mein baat karte hain."
                  : "Let's talk about the work."
              }
              description={
                h
                  ? "Apne project ki requirement share karein. Business owner ke real contact details add hone tak yahan configuration placeholders rahenge."
                  : "Share your project requirement. Contact details are configuration placeholders until the business owner supplies the real information."
              }
            />

            <div className="contact-actions">
              <Button onClick={callBusiness}>
                <PhoneCall size={18} />
                {h ? "Call Karein" : "Call Now"}
              </Button>

              <Button variant="secondary" onClick={openMachineWhatsApp}>
                WhatsApp
              </Button>
            </div>
          </div>

          <div className="contact-card">
            {/* Location */}
            <div>
              <MapPin />

              <span>
                <small>
                  {h ? "City / Service Area" : "City / Service Area"}
                </small>

                <strong>
                  {isConfigured(siteConfig.city)
                    ? siteConfig.city
                    : "PRATAPGARH,"}
                </strong>

                <strong className="muted">
                  {isConfigured(siteConfig.serviceArea)
                    ? siteConfig.serviceArea
                    : "Pratapgarh, Uttar Pradesh, India"}
                </strong>
              </span>
            </div>

            {/* Phone */}
            <div>
              <PhoneCall />

              <span>
                <small>{h ? "Phone Number" : "Phone"}</small>

                <strong>
                  {isConfigured(siteConfig.phone)
                    ? siteConfig.phone
                    : "YOUR_PHONE_NUMBER"}
                </strong>
              </span>
            </div>

            {/* Email */}
            <div>
              <Mail />

              <span>
                <small>Email</small>

                <strong>
                  {isConfigured(siteConfig.email)
                    ? siteConfig.email
                    : "YOUR_EMAIL"}
                </strong>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <section className="quote-section">
        <div className="container quote-section__inner">
          <div>
            <span className="eyebrow">
              {h ? "Construction Quote" : "Construction quote"}
            </span>

            <h2>
              {h
                ? "Aap kya bana rahe hain, batayein."
                : "Tell us what you're building."}
            </h2>

            <p>
              {h
                ? "Project type, location aur short requirement WhatsApp ya direct call par share karein."
                : "For a construction quote, share your project type, location and a short requirement through WhatsApp or direct call."}
            </p>
          </div>

          <Button onClick={openMachineWhatsApp}>
            {h ? "Enquiry Start Karein" : "Start Enquiry"}
          </Button>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
