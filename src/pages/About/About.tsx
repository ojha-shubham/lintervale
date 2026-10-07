import { ArrowRight, HardHat, MessageSquare, Ruler, ShieldCheck } from "lucide-react";
import Button from "../../components/Button/Button";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import ContactCTA from "../../components/ContactCTA/ContactCTA";
import { useLanguage } from "../../context/LanguageContext";

export default function About() {
  const { language } = useLanguage();
  const isHinglish = language === "hinglish";

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">{isHinglish ? "LinterVale ke baare mein" : "About LinterVale"}</span>
          <h1>
            {isHinglish ? (
              <>Kaam ki baat.<br /><em>Seedha kaam.</em></>
            ) : (
              <>Construction work.<br /><em>Kept straightforward.</em></>
            )}
          </h1>
          <p>
            {isHinglish
              ? "LinterVale ka focus construction, RCC, slab, civil work aur linter machine service ki enquiry ko simple rakhna hai."
              : "LinterVale focuses on construction, RCC, slab, civil work and linter machine enquiries without making the process complicated."}
          </p>
        </div>
      </section>

      <section className="section section--light">
        <div className="container split-section">
          <div>
            <SectionTitle
              eyebrow={isHinglish ? "Kaise kaam karte hain" : "How it works"}
              title={isHinglish ? "Pehle kaam samjhenge." : "We start by understanding the job."}
              description={
                isHinglish
                  ? "Aap location, date, area aur kaam ki requirement batayein. Uske baad availability, timing aur charges par baat hoti hai."
                  : "You share the location, date, area and work requirement. We then discuss availability, timing and charges before confirming the job."}
            />
            <Button to="/contact">
              {isHinglish ? "Apne Kaam Ke Baare Mein Baat Karein" : "Talk About Your Work"} <ArrowRight size={17} />
            </Button>
          </div>

          <div className="about-panel">
            <div className="about-panel__line" />
            <span className="about-panel__label">{isHinglish ? "KAAM KA FLOW" : "WORK FLOW"}</span>
            <h3>
              {isHinglish
                ? "Requirement → Date → Rate → Confirmation"
                : "Requirement → Date → Rate → Confirmation"}
            </h3>
            <p>
              {isHinglish
                ? "Final booking ya service tabhi confirm hogi jab availability aur charges aapse clear ho jaayen."
                : "The service is confirmed only after availability and charges have been discussed with you."}
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow={isHinglish ? "Jo cheezein important hain" : "What matters"}
            title={isHinglish ? "Customer Ko Kya Pata Hona Chahiye?" : "What should be clear before the work starts?"}
          />

          <div className="feature-grid">
            <FeatureCard
              icon={HardHat}
              title={isHinglish ? "Kaam Ka Type" : "Type of Work"}
              text={isHinglish ? "House, RCC, slab, road ya civil work — requirement pehle clear hoti hai." : "House, RCC, slab, road or civil work — the requirement is clear first."}
            />
            <FeatureCard
              icon={Ruler}
              title={isHinglish ? "Location & Area" : "Location & Area"}
              text={isHinglish ? "Site location aur approx area se requirement samajhne mein help milti hai." : "The site location and approximate area help us understand the requirement."}
            />
            <FeatureCard
              icon={MessageSquare}
              title={isHinglish ? "Call / WhatsApp" : "Call / WhatsApp"}
              text={isHinglish ? "Question ho ya machine chahiye ho, seedhe contact kar sakte hain." : "For questions or a machine enquiry, you can contact the business directly."}
            />
            <FeatureCard
              icon={ShieldCheck}
              title={isHinglish ? "Pehle Confirmation" : "Confirmation First"}
              text={isHinglish ? "Availability aur charges clear hone ke baad hi final confirmation hota hai." : "Final confirmation happens after availability and charges are clear."}
            />
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
