import { ArrowRight, Check, Info, PhoneCall } from "lucide-react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MachineVisual from "../../components/MachineVisual/MachineVisual";
import BookingForm from "../../components/BookingForm/BookingForm";
import Button from "../../components/Button/Button";
import { callBusiness } from "../../utils/phone";
import { openMachineWhatsApp } from "../../utils/whatsapp";
import { useLanguage } from "../../context/LanguageContext";

export default function MachineBooking() {
  const { language } = useLanguage();
  const isHinglish = language === "hinglish";

  return (
    <>
      <section className="page-hero page-hero--machine">
        <div className="container">
          <span className="eyebrow">
            {isHinglish ? "Linter Machine" : "Linter Machine"}
          </span>
          <h1>
            {isHinglish ? (
              <>
                Slab ka kaam hai?
                <br />
                <em>Machine ki enquiry karein.</em>
              </>
            ) : (
              <>
                Need a concrete
                <br />
                <em>finishing machine?</em>
              </>
            )}
          </h1>
          <p>
            {isHinglish
              ? "Location, date aur approx slab area batayein. Availability check karke rate aur timing confirm karenge."
              : "Tell us the location, date and approximate slab area. We’ll check availability and confirm the rate and timing."}
          </p>
          <div className="hero__actions">
            <Button
              onClick={() =>
                document
                  .getElementById("booking")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {isHinglish ? "Details Bhejein" : "Send Details"}{" "}
              <ArrowRight size={17} />
            </Button>
            <Button variant="ghost" onClick={openMachineWhatsApp}>
              {isHinglish ? "WhatsApp Par Baat Karein" : "Ask on WhatsApp"}
            </Button>
          </div>
        </div>
      </section>

      <section className="machine-explainer section">
        <div className="container machine-explainer__grid">
          <MachineVisual compact />
          <div>
            <SectionTitle
              eyebrow={
                isHinglish
                  ? "Machine kis kaam aati hai?"
                  : "What is the machine for?"
              }
              title={
                isHinglish
                  ? "Concrete ko finish karne ke liye."
                  : "For finishing freshly laid concrete."
              }
              description={
                isHinglish
                  ? "Power trowel / linter machine concrete slab aur floor finishing mein use hoti hai. Exact suitability site aur concrete condition par depend karegi."
                  : "A power trowel / linter machine is used for concrete slab and floor finishing. Exact suitability depends on the site and concrete condition."
              }
            />
            <div className="check-list">
              {(isHinglish
                ? [
                    "Concrete finishing",
                    "RCC / slab work",
                    "Large floor areas",
                    "Site-based machine service",
                    "Date-based availability",
                  ]
                : [
                    "Concrete finishing",
                    "RCC / slab work",
                    "Large floor areas",
                    "Site-based machine service",
                    "Date-based availability",
                  ]
              ).map((item) => (
                <div key={item}>
                  <Check />
                  {item}
                </div>
              ))}
            </div>
            <div className="info-box">
              <Info size={19} />
              <span>
                {isHinglish
                  ? "Machine ka model, rate, transport aur exact service scope call par confirm karein."
                  : "Confirm the machine model, rate, transport and exact service scope by phone before the job."}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="booking-section" id="booking">
        <div className="container">
          <div className="booking-section__heading">
            <SectionTitle
              eyebrow={isHinglish ? "Machine Enquiry" : "Machine enquiry"}
              title={
                isHinglish
                  ? "Date Aur Location Bhejiye."
                  : "Send the Date & Location."
              }
              description={
                isHinglish
                  ? "Naam, phone, site location, date aur approx area fill karein. Availability check karke aapse contact kiya jayega."
                  : "Add your name, phone, site location, date and approximate area. We’ll check availability and contact you."
              }
            />
            <Button variant="ghost" onClick={callBusiness}>
              <PhoneCall size={17} />{" "}
              {isHinglish ? "Seedha Call Karein" : "Call Directly"}
            </Button>
          </div>
          <BookingForm />
        </div>
      </section>
    </>
  );
}
