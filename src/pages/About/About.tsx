import {
  ArrowRight,
  HardHat,
  MessageSquare,
  Ruler,
  ShieldCheck,
} from "lucide-react";
import Button from "../../components/Button/Button";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import ContactCTA from "../../components/ContactCTA/ContactCTA";
import { useLanguage } from "../../context/LanguageContext";

export default function About() {
  const { language } = useLanguage();
  const h = language === "hinglish";

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">
            {h ? "LinterVale ke baare mein" : "About LinterVale"}
          </span>

          <h1>
            {h ? (
              <>
                Construction jo ho
                <br />
                <em>simple aur clear.</em>
              </>
            ) : (
              <>
                Practical construction.
                <br />
                <em>Clear communication.</em>
              </>
            )}
          </h1>

          <p>
            {h
              ? "Construction, civil work aur equipment support ko real site needs ke around simple aur practical rakha gaya hai."
              : "Construction, civil work and equipment support presented around the practical needs of a working site."}
          </p>
        </div>
      </section>

      <section className="section section--light">
        <div className="container split-section">
          <div>
            <SectionTitle
              eyebrow={h ? "Hamari approach" : "Our approach"}
              title={
                h
                  ? "Site ki baat simple banayein."
                  : "Make the site conversation simple."
              }
              description={
                h
                  ? "LinterVale construction work, concrete/RCC requirements aur dedicated machine enquiry flow ke around structured hai. Goal simple hai — customer bina confusion ke apni requirement bata sake."
                  : "LinterVale is structured around construction work, concrete/RCC requirements and a dedicated machine enquiry flow. The goal is to make it easy for a customer to explain what is needed before work is scheduled."
              }
            />

            <Button to="/contact">
              {h ? "Enquiry Start Karein" : "Start an Enquiry"}
              <ArrowRight size={17} />
            </Button>
          </div>

          <div className="about-panel">
            <div className="about-panel__line" />

            <span className="about-panel__label">
              {h ? "KAAM KA FLOW" : "WORKFLOW"}
            </span>

            <h3>
              {h
                ? "Site requirement → availability → confirmation → kaam"
                : "Site requirement → availability → confirmation → execution"}
            </h3>

            <p>
              {h
                ? "Owner information, service area, project history aur credentials real details milne par yahan add kiye ja sakte hain."
                : "Owner information, service area, project history and credentials can be added here when provided."}
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow={h ? "Kya important hai" : "What matters"}
            title={
              h
                ? "Real projects ke liye service model."
                : "A service model made for real projects."
            }
          />

          <div className="feature-grid">
            <FeatureCard
              icon={HardHat}
              title={h ? "Construction Expertise" : "Construction Expertise"}
              text={
                h
                  ? "House, RCC, slab, road aur civil requirements ke liye focused support."
                  : "A focused approach for house, RCC, slab, road and civil requirements."
              }
            />

            <FeatureCard
              icon={Ruler}
              title={h ? "Site Requirements" : "Site Requirements"}
              text={
                h
                  ? "Location, date, area aur practical information pehle collect ki ja sakti hai."
                  : "Collect location, date, area and other practical information early."
              }
            />

            <FeatureCard
              icon={MessageSquare}
              title={h ? "Direct Communication" : "Direct Communication"}
              text={
                h
                  ? "Customer call, WhatsApp ya enquiry ke through directly connect kar sakta hai."
                  : "Customers can call, WhatsApp or submit an enquiry directly."
              }
            />

            <FeatureCard
              icon={ShieldCheck}
              title={h ? "Clear Information" : "Clear Information"}
              text={
                h
                  ? "Availability, pricing, experience aur credentials real information ke hisaab se configure kiye ja sakte hain."
                  : "Availability, pricing, experience and credentials remain configurable using real business information."
              }
            />
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
