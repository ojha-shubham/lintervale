import { ArrowRight } from "lucide-react";
import Button from "../../components/Button/Button";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import ContactCTA from "../../components/ContactCTA/ContactCTA";
import { services } from "../../data/services";
export default function Services() {
  return (
    <>
      <section className="page-hero page-hero--short">
        <div className="container">
          <span className="eyebrow">Services</span>
          <h1>
            Work that starts
            <br />
            <em>with the site.</em>
          </h1>
          <p>
            Construction and civil capabilities with a dedicated route for
            concrete finishing machine enquiries.
          </p>
        </div>
      </section>
      <section className="section section--light">
        <div className="container">
          <div className="service-grid">
            {services.map((s) => (
              <ServiceCard key={s.title} service={s} />
            ))}
          </div>
        </div>
      </section>
      <section className="service-note">
        <div className="container service-note__inner">
          <div>
            <span className="eyebrow">Need equipment?</span>
            <h2>Your slab may need more than manpower.</h2>
            <p>
              Share your site details and requested date. We’ll check
              availability and contact you.
            </p>
          </div>
          <Button to="/machine">
            Enquire About Machine <ArrowRight size={17} />
          </Button>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
