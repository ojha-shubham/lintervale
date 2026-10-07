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
export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">About LinterVale</span>
          <h1>
            Practical construction.
            <br />
            <em>Clear communication.</em>
          </h1>
          <p>
            Construction, civil work and equipment support presented around the
            needs of a working site.
          </p>
        </div>
      </section>
      <section className="section section--light">
        <div className="container split-section">
          <div>
            <SectionTitle
              eyebrow="Our approach"
              title="Make the site conversation simple."
              description="LinterVale is structured around construction work, concrete/RCC requirements and a dedicated machine enquiry flow. The goal is to make it easy for a customer to explain what is needed before work is scheduled."
            />
            <Button to="/contact">
              Start an Enquiry <ArrowRight size={17} />
            </Button>
          </div>
          <div className="about-panel">
            <div className="about-panel__line" />
            <span className="about-panel__label">WORKFLOW</span>
            <h3>Site requirement → availability → confirmation → execution</h3>
            <p>
              Owner information, service area, project history and credentials
              can be added here when provided.
            </p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="What matters"
            title="A service model made for real projects."
          />
          <div className="feature-grid">
            <FeatureCard
              icon={HardHat}
              title="Construction Expertise"
              text="A focused presentation for house, RCC, slab, road and civil requirements."
            />
            <FeatureCard
              icon={Ruler}
              title="Site Requirements"
              text="Collect location, date, area and other practical information early."
            />
            <FeatureCard
              icon={MessageSquare}
              title="Direct Communication"
              text="Customers can call, WhatsApp or submit an enquiry without unnecessary steps."
            />
            <FeatureCard
              icon={ShieldCheck}
              title="No False Promises"
              text="Availability, pricing, experience and credentials remain configurable rather than fabricated."
            />
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
