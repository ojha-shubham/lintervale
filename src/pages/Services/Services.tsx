import { ArrowRight } from "lucide-react";
import Button from "../../components/Button/Button";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import ContactCTA from "../../components/ContactCTA/ContactCTA";
import { services } from "../../data/services";
import { useLanguage } from "../../context/LanguageContext";

export default function Services() {
  const { language } = useLanguage();
  const isHinglish = language === "hinglish";

  return (
    <>
      <section className="page-hero page-hero--short">
        <div className="container">
          <span className="eyebrow">Services</span>
          <h1>
            {isHinglish ? (
              <>Aapko kya kaam<br /><em>karwana hai?</em></>
            ) : (
              <>What work do you<br /><em>need done?</em></>
            )}
          </h1>
          <p>
            {isHinglish
              ? "Ghar, RCC, slab, road aur civil work ke saath linter machine service ke liye bhi enquiry kar sakte hain."
              : "Enquire about house, RCC, slab, road and civil work, or ask about linter machine service."}
          </p>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <div className="service-grid">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                service={
                  isHinglish
                    ? { ...service, title: service.hinglishTitle, description: service.hinglishDescription }
                    : service
                }
              />
            ))}
          </div>
        </div>
      </section>

      <section className="service-note">
        <div className="container service-note__inner">
          <div>
            <span className="eyebrow">{isHinglish ? "Linter Machine Chahiye?" : "Need the machine?"}</span>
            <h2>{isHinglish ? "Date Aur Location Bhejiye." : "Send the Date & Location."}</h2>
            <p>
              {isHinglish
                ? "Aapki slab ya concrete work ki date aur location share karein. Availability check karke aapse baat karenge."
                : "Share the date and location for your slab or concrete work. We’ll check availability and get back to you."}
            </p>
          </div>
          <Button to="/machine">
            {isHinglish ? "Machine Ke Liye Enquiry" : "Enquire About the Machine"} <ArrowRight size={17} />
          </Button>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
