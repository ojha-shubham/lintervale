import {
  ArrowRight,
  Check,
  CircleDot,
  HardHat,
  ShieldCheck,
  Truck,
  Wrench,
  ArrowDown,
} from "lucide-react";
import Button from "../../components/Button/Button";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import ContactCTA from "../../components/ContactCTA/ContactCTA";
import { services } from "../../data/services";
import { constructionImages } from "../../data/constructionImages";

export default function Home() {
  const steps = [
    ["01", "Submit Site Details", "Tell us where, when and what you need."],
    [
      "02",
      "Check Machine Availability",
      "We review the requested date and site requirement.",
    ],
    [
      "03",
      "Confirm Timing & Charges",
      "We contact you before the request is confirmed.",
    ],
    [
      "04",
      "Machine Reaches Your Site",
      "Service timing is coordinated around the agreed plan.",
    ],
  ];

  return (
    <>
      <section className="hero">
        <div className="hero__texture" />
        <div className="container hero__grid">
          <div className="hero__content">
            <span className="eyebrow">
              Construction • Civil • Concrete Finishing
            </span>
            <h1>
              Build Strong.
              <br />
              <em>Build Better.</em>
            </h1>
            <p>
              Professional construction services and concrete finishing machine
              support for house, slab, road and civil projects.
            </p>
            <div className="hero__actions">
              <Button to="/machine">
                Book Linter Machine <ArrowRight size={18} />
              </Button>
              <Button variant="ghost" to="/contact">
                Get Construction Quote
              </Button>
            </div>
            <div className="hero__meta">
              <span>
                <CircleDot size={15} /> Site-focused service
              </span>
              <span>
                <ShieldCheck size={15} /> Enquiry-first process
              </span>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__photo">
              <img
                src={constructionImages[0].src}
                alt={constructionImages[0].alt}
              />
              <div className="hero__photo-overlay" />
              <span className="hero__photo-label">
                ON SITE / CONSTRUCTION
              </span>
            </div>
            <div className="hero__stamp">
              <HardHat size={18} />
              <span>
                Construction
                <br />
                Support
              </span>
            </div>
          </div>
        </div>
        <a className="hero__scroll" href="#trust">
          <ArrowDown size={17} /> Scroll to explore
        </a>
      </section>

      <section className="trust-strip" id="trust">
        <div className="container trust-strip__grid">
          {[
            ["01", "Reliable Site Coordination", "Clear enquiry & scheduling"],
            [
              "02",
              "Concrete Finishing Equipment",
              "Machine support for slab work",
            ],
            ["03", "Construction Support", "Practical local execution"],
            ["04", "Direct Enquiry", "Talk to the business directly"],
          ].map((x) => (
            <div key={x[0]}>
              <span className="trust-number">{x[0]}</span>
              <span>
                <strong>{x[1]}</strong>
                <small>{x[2]}</small>
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <SectionTitle
            eyebrow="What we do"
            title="Construction Work, Without the Guesswork."
            description="A practical service offering for people who need dependable construction support and the right equipment at the site."
          />
          <div className="service-grid">
            {services.slice(0, 4).map((s) => (
              <ServiceCard key={s.title} service={s} />
            ))}
          </div>
          <div className="section-link">
            <Button variant="ghost" to="/services">
              View all services <ArrowRight size={17} />
            </Button>
          </div>
        </div>
      </section>

      <section className="construction-gallery">
        <div className="container">
          <SectionTitle
            eyebrow="On-site work"
            title="Construction In Action."
            description="A visual introduction to building, civil and concrete work. Real project photographs can replace these illustrative images later."
          />
          <div className="construction-gallery__grid">
            {constructionImages.slice(1, 5).map((image, index) => (
              <figure
                className={`construction-gallery__item construction-gallery__item--${index + 1}`}
                key={image.src}
              >
                <img src={image.src} alt={image.alt} loading="lazy" />
                <figcaption>{image.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="machine-section">
        <div className="container machine-section__grid">
          <div>
            <div className="machine-section__visual">
              <img
                src="https://images.unsplash.com/photo-1590644365607-1c5a4c8e4c2c?auto=format&fit=crop&w=1200&q=85"
                alt="Concrete work on an active construction site"
                loading="lazy"
              />
              <span>CONCRETE / SLAB WORK</span>
            </div>
          </div>
          <div>
            <span className="eyebrow">The Linter Machine</span>
            <h2>Need a Linter Machine for Your Slab?</h2>
            <p className="lead">
              Enquire from home. Share your site details, required date and
              approximate slab area. We’ll check availability before anything is
              confirmed.
            </p>
            <div className="feature-list">
              <FeatureCard
                icon={Wrench}
                title="Concrete Finishing"
                text="Support for concrete and slab finishing work."
              />
              <FeatureCard
                icon={HardHat}
                title="Site-Based Service"
                text="Your project details stay central to scheduling."
              />
              <FeatureCard
                icon={Truck}
                title="Availability Enquiry"
                text="Confirm timing and charges before the service."
              />
            </div>
            <Button to="/machine">
              Check Machine Availability <ArrowRight size={17} />
            </Button>
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <SectionTitle
            eyebrow="Simple process"
            title="From Site Details to Site Arrival."
            align="center"
          />
          <div className="process-grid">
            {steps.map((s) => (
              <div className="process-step" key={s[0]}>
                <span>{s[0]}</span>
                <div>
                  <h3>{s[1]}</h3>
                  <p>{s[2]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <SectionTitle
            eyebrow="Why LinterVale"
            title="Built Around Practical Site Needs."
            description="No inflated claims. Just a clear way to present construction capability, equipment support and direct communication."
          />
          <div className="capability-grid">
            {[
              [
                "Construction-first approach",
                "Designed around real site requirements rather than a generic service catalogue.",
              ],
              [
                "Equipment as a service",
                "A dedicated path for customers looking specifically for concrete finishing support.",
              ],
              [
                "Clear enquiry process",
                "Availability and charges are checked before the request becomes a confirmed booking.",
              ],
            ].map((x) => (
              <div key={x[0]}>
                <Check />
                <strong>{x[0]}</strong>
                <p>{x[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
