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
import { useLanguage } from "../../context/LanguageContext";

export default function Home() {
  const { language } = useLanguage();
  const isHinglish = language === "hinglish";

  const steps = isHinglish
    ? [
        [
          "01",
          "Details Bhejiye",
          "Site kahan hai, kab kaam hai aur kya chahiye — bas itna batayein.",
        ],
        [
          "02",
          "Date Check Hogi",
          "Requested date aur site ke hisaab se machine availability dekhenge.",
        ],
        [
          "03",
          "Rate & Time Confirm",
          "Availability ke baad call karke timing aur charges confirm karenge.",
        ],
        [
          "04",
          "Site Par Kaam",
          "Fix plan ke hisaab se machine/service site par coordinate hogi.",
        ],
      ]
    : [
        [
          "01",
          "Share the Details",
          "Tell us where the site is, when you need the service and what work is required.",
        ],
        [
          "02",
          "We Check the Date",
          "We check machine availability for your requested date and site.",
        ],
        [
          "03",
          "Confirm Rate & Time",
          "Once availability is checked, we confirm the timing and charges with you.",
        ],
        [
          "04",
          "Service at the Site",
          "The machine/service is coordinated for the agreed date and time.",
        ],
      ];

  const serviceData = isHinglish
    ? services.slice(0, 4).map((service) => ({
        ...service,
        title: service.hinglishTitle,
        description: service.hinglishDescription,
      }))
    : services.slice(0, 4);

  return (
    <>
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__content">
            <span className="eyebrow">
              {isHinglish
                ? "Construction • RCC • Linter Machine"
                : "Construction • RCC • Concrete Finishing"}
            </span>

            <h1>
              {isHinglish ? (
                <>
                  Ghar Ho Ya Slab.
                  <br />
                  <em>Kaam Seedha Rakhiye.</em>
                </>
              ) : (
                <>
                  Build Strong.
                  <br />
                  <em>Build Better.</em>
                </>
              )}
            </h1>

            <p>
              {isHinglish
                ? "Ghar, RCC, slab aur civil work ke saath linter machine service ke liye direct enquiry karein."
                : "Construction, RCC, slab and civil work support, with a direct enquiry option for linter machine service."}
            </p>

            <div className="hero__actions">
              <Button to="/machine">
                {isHinglish
                  ? "Linter Machine Ke Liye Enquiry"
                  : "Enquire About Linter Machine"}{" "}
                <ArrowRight size={18} />
              </Button>
              <Button variant="ghost" to="/contact">
                {isHinglish
                  ? "Construction Kaam Ke Liye Baat Karein"
                  : "Talk About Construction Work"}
              </Button>
            </div>

            <div className="hero__meta">
              <span>
                <CircleDot size={15} />
                {isHinglish
                  ? "Site aur date pehle check"
                  : "Site and date checked first"}
              </span>
              <span>
                <ShieldCheck size={15} />
                {isHinglish
                  ? "Final confirmation baat karke"
                  : "Final confirmation by phone"}
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
                {isHinglish ? "SITE PAR KAAM" : "WORK ON SITE"}
              </span>
            </div>

            <div className="hero__stamp">
              <HardHat size={18} />
              <span>
                {isHinglish ? (
                  <>
                    Construction
                    <br />& Machine Service
                  </>
                ) : (
                  <>
                    Construction
                    <br />& Machine Service
                  </>
                )}
              </span>
            </div>
          </div>
        </div>

        <a className="hero__scroll" href="#trust">
          <ArrowDown size={17} /> {isHinglish ? "Neeche Dekhein" : "See More"}
        </a>
      </section>

      <section className="trust-strip" id="trust">
        <div className="container trust-strip__grid">
          {(isHinglish
            ? [
                ["01", "Machine Enquiry", "Date aur location share karein"],
                ["02", "RCC / Slab Work", "Concrete aur slab ka kaam"],
                ["03", "Civil Work", "Road aur local civil work"],
                ["04", "Seedhi Baat Karen", "Call ya WhatsApp par baat"],
              ]
            : [
                ["01", "Machine Enquiry", "Share your date and location"],
                ["02", "RCC / Slab Work", "Concrete and slab work"],
                ["03", "Civil Work", "Road and local civil work"],
                ["04", "Direct Contact", "Call or WhatsApp directly"],
              ]
          ).map((item) => (
            <div key={item[0]}>
              <span className="trust-number">{item[0]}</span>
              <span>
                <strong>{item[1]}</strong>
                <small>{item[2]}</small>
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <SectionTitle
            eyebrow={isHinglish ? "Services" : "Services"}
            title={
              isHinglish
                ? "Aapko Kaun Sa Kaam Karwana Hai?"
                : "What Work Do You Need?"
            }
            description={
              isHinglish
                ? "Ghar se lekar RCC, slab, road aur civil work tak — apni requirement seedhe batayein."
                : "From house construction to RCC, slab, road and civil work — tell us what you need and we can discuss the job."
            }
          />

          <div className="service-grid">
            {serviceData.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>

          <div className="section-link">
            <Button variant="ghost" to="/services">
              {isHinglish ? "Saari Services Dekhein" : "See All Services"}{" "}
              <ArrowRight size={17} />
            </Button>
          </div>
        </div>
      </section>

      <section className="construction-gallery">
        <div className="container">
          <SectionTitle
            eyebrow={isHinglish ? "Kaam ke examples" : "Work examples"}
            title={
              isHinglish
                ? "Construction, RCC Aur Civil Work."
                : "Construction, RCC & Civil Work."
            }
            description={
              isHinglish
                ? "Yahan abhi category photos hain. Actual site photos milne par isi jagah real kaam dikhaya ja sakta hai."
                : "These images are used to show the type of work. They can be replaced with actual site photographs as the business builds its gallery."
            }
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
                src={constructionImages[1].src}
                alt="Concrete work on an active construction site"
                loading="lazy"
              />
              <span>
                {isHinglish ? "RCC / SLAB WORK" : "CONCRETE / SLAB WORK"}
              </span>
            </div>
          </div>

          <div>
            <span className="eyebrow">
              {isHinglish ? "Linter Machine" : "Linter Machine"}
            </span>
            <h2>
              {isHinglish
                ? "Slab Ke Liye Linter Machine Chahiye?"
                : "Need a Linter Machine for Your Slab?"}
            </h2>
            <p className="lead">
              {isHinglish
                ? "Location, date aur approx area share karein. Pehle availability check hogi, phir rate aur timing confirm karenge."
                : "Share your location, required date and approximate area. We check availability first, then confirm the rate and timing with you."}
            </p>

            <div className="feature-list">
              <FeatureCard
                icon={Wrench}
                title={isHinglish ? "Concrete Finishing" : "Concrete Finishing"}
                text={
                  isHinglish
                    ? "Slab aur concrete finishing ke liye machine support."
                    : "Machine support for slab and concrete finishing work."
                }
              />
              <FeatureCard
                icon={HardHat}
                title={isHinglish ? "Site Ke Hisaab Se" : "Based on the Site"}
                text={
                  isHinglish
                    ? "Location, area aur date dekhkar requirement samjhenge."
                    : "We look at the location, area and date before confirming the service."
                }
              />
              <FeatureCard
                icon={Truck}
                title={isHinglish ? "Timing Confirm" : "Timing Confirmed"}
                text={
                  isHinglish
                    ? "Service se pehle timing aur charges clear karenge."
                    : "Timing and charges are confirmed before the service."
                }
              />
            </div>

            <Button to="/machine">
              {isHinglish
                ? "Machine Ke Liye Enquiry Karein"
                : "Enquire About the Machine"}{" "}
              <ArrowRight size={17} />
            </Button>
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <SectionTitle
            eyebrow={isHinglish ? "Kaise hoga kaam?" : "How it works"}
            title={isHinglish ? "Baat Se Site Tak." : "From Enquiry to Site."}
            align="center"
          />

          <div className="process-grid">
            {steps.map((step) => (
              <div className="process-step" key={step[0]}>
                <span>{step[0]}</span>
                <div>
                  <h3>{step[1]}</h3>
                  <p>{step[2]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <SectionTitle
            eyebrow={isHinglish ? "Seedhi baat Karen" : "What you can expect"}
            title={
              isHinglish
                ? "Pehle Details. Phir Confirmation."
                : "Details First. Confirmation Next."
            }
            description={
              isHinglish
                ? "Aap location, date aur kaam ki basic details batayein. Availability aur charges clear hone ke baad hi final confirmation hoga."
                : "Share the location, date and basic job details. Final confirmation happens after availability and charges are clear."
            }
          />

          <div className="capability-grid">
            {(isHinglish
              ? [
                  [
                    "Ghar / RCC / Slab",
                    "Apne kaam ka type aur approx area batayein.",
                  ],
                  [
                    "Linter Machine",
                    "Date aur site location ke saath machine enquiry karein.",
                  ],
                  [
                    "Road / Civil Work",
                    "Kaam ki jagah aur requirement share karein.",
                  ],
                ]
              : [
                  [
                    "House / RCC / Slab",
                    "Tell us the type of work and approximate area.",
                  ],
                  [
                    "Linter Machine",
                    "Enquire with the required date and site location.",
                  ],
                  [
                    "Road / Civil Work",
                    "Share the work location and what needs to be done.",
                  ],
                ]
            ).map((item) => (
              <div key={item[0]}>
                <Check />
                <strong>{item[0]}</strong>
                <p>{item[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
