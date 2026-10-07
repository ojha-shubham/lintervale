import { ArrowRight } from "lucide-react";
import Button from "../../components/Button/Button";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import ContactCTA from "../../components/ContactCTA/ContactCTA";
import { services } from "../../data/services";
import { useLanguage } from "../../context/LanguageContext";

export default function Services() {
  const { language } = useLanguage();
  const isH = language === "hinglish";
  return (
    <>
      <section className="page-hero page-hero--short"><div className="container">
        <span className="eyebrow">{isH ? "Services" : "Services"}</span>
        <h1>{isH ? <>Kaam jo start hota hai<br /><em>site se.</em></> : <>Work that starts<br /><em>with the site.</em></>}</h1>
        <p>{isH ? "Construction aur civil services ke saath concrete finishing machine ke liye dedicated enquiry." : "Construction and civil capabilities with a dedicated route for concrete finishing machine enquiries."}</p>
      </div></section>
      <section className="section section--light"><div className="container">
        <div className="service-grid">{services.map((s) => <ServiceCard key={s.title} service={isH ? { ...s, title: s.hinglishTitle, description: s.hinglishDescription } : s} />)}</div>
      </div></section>
      <section className="service-note"><div className="container service-note__inner"><div>
        <span className="eyebrow">{isH ? "Equipment chahiye?" : "Need equipment?"}</span>
        <h2>{isH ? "Aapki slab ko manpower se zyada bhi chahiye ho sakta hai." : "Your slab may need more than manpower."}</h2>
        <p>{isH ? "Site details aur date share kijiye. Hum availability check karke aapse contact karenge." : "Share your site details and requested date. We’ll check availability and contact you."}</p>
      </div><Button to="/machine">{isH ? "Machine ke baare mein enquiry" : "Enquire About Machine"} <ArrowRight size={17} /></Button></div></section>
      <ContactCTA />
    </>
  );
}
