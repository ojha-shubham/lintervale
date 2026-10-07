import { ArrowUpRight, PhoneCall } from "lucide-react";
import Button from "../Button/Button";
import { callBusiness } from "../../utils/phone";
import { openWhatsApp } from "../../utils/whatsapp";

export default function ContactCTA() {
  return (
    <section className="contact-cta">
      <div>
        <span className="eyebrow">Start a conversation</span>
        <h2>
          Have a Project
          <br />
          in Mind?
        </h2>
        <p>
          Talk to us about your construction project or enquire about machine
          availability.
        </p>
      </div>
      <div className="contact-cta__actions">
        <Button onClick={callBusiness}>
          <PhoneCall size={18} /> Call Now
        </Button>
        <Button
          variant="secondary"
          onClick={() =>
            openWhatsApp(
              "Hello, I want to enquire about a construction project.\n\nName:\nProject Location:\nRequirement:",
            )
          }
        >
          <ArrowUpRight size={18} /> WhatsApp
        </Button>
        <Button variant="ghost" to="/contact">
          Get a Quote <ArrowUpRight size={18} />
        </Button>
      </div>
    </section>
  );
}
