import { useState, type FormEvent } from "react";
import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  MapPin,
  Phone,
  UserRound,
} from "lucide-react";
import { requestMachineBooking } from "../../services/bookingService";
import type { ConstructionType, MachineBookingRequest } from "../../types";
import Button from "../Button/Button";
import { useLanguage } from "../../context/LanguageContext";

const constructionTypes: ConstructionType[] = [
  "House / Residential",
  "Commercial Building",
  "RCC / Slab Work",
  "Road / Civil Work",
  "Other",
];
const initial: MachineBookingRequest = {
  name: "",
  phone: "",
  location: "",
  date: "",
  time: "",
  constructionType: "House / Residential",
  slabArea: "",
  requirement: "",
};

export default function BookingForm() {
  const { language } = useLanguage();
  const h = language === "hinglish";
  const [form, setForm] = useState(initial);
  const [submitted, setSubmitted] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  function update<K extends keyof MachineBookingRequest>(
    key: K,
    value: MachineBookingRequest[K],
  ) {
    setForm((c) => ({ ...c, [key]: value }));
  }
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    const result = await requestMachineBooking(form);
    setLoading(false);
    if (result.success) setSubmitted(result.reference);
  }
  const typeLabel = (type: ConstructionType) =>
    h
      ? {
          "House / Residential": "House / Residential",
          "Commercial Building": "Commercial Building",
          "RCC / Slab Work": "RCC / Slab Work",
          "Road / Civil Work": "Road / Civil Work",
          Other: "Other",
        }[type]
      : type;
  if (submitted)
    return (
      <div className="booking-success">
        <span className="success-icon">
          <CheckCircle2 size={32} />
        </span>
        <span className="eyebrow">
          {h ? "Enquiry Mil Gayi" : "Enquiry Received"}
        </span>
        <h3>
          {h
            ? "Aapki site details mil gayi hain."
            : "We have your site details."}
        </h3>
        <p>
          {h
            ? "Hum machine availability check karke timing aur charges confirm karne ke liye aapse contact karenge. Ye automatic booking confirmation nahi hai."
            : "We’ll check machine availability and contact you to confirm the timing and charges. This enquiry is not an automatic booking confirmation."}
        </p>
        <div className="reference">Reference: {submitted}</div>
        <Button
          type="button"
          variant="dark"
          onClick={() => {
            setSubmitted(null);
            setForm(initial);
          }}
        >
          {h ? "Ek Aur Enquiry Bhejein" : "Submit Another Enquiry"}
        </Button>
      </div>
    );
  return (
    <form className="booking-form" onSubmit={submit}>
      <div className="form-grid">
        <label>
          <span>
            <UserRound size={15} /> {h ? "Naam" : "Name"}
          </span>
          <input
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder={h ? "Apna naam" : "Your name"}
          />
        </label>
        <label>
          <span>
            <Phone size={15} /> {h ? "Phone Number" : "Phone Number"}
          </span>
          <input
            required
            type="tel"
            inputMode="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder={h ? "Apna phone number" : "Your phone number"}
          />
        </label>
        <label className="field-wide">
          <span>
            <MapPin size={15} /> {h ? "Project Location" : "Project Location"}
          </span>
          <input
            required
            value={form.location}
            onChange={(e) => update("location", e.target.value)}
            placeholder={
              h ? "Gaon, town ya site address" : "Village, town, site address"
            }
          />
        </label>
        <label>
          <span>
            <CalendarDays size={15} /> {h ? "Required Date" : "Required Date"}
          </span>
          <input
            required
            type="date"
            min={new Date().toISOString().split("T")[0]}
            value={form.date}
            onChange={(e) => update("date", e.target.value)}
          />
        </label>
        <label>
          <span>
            <Clock3 size={15} /> {h ? "Preferred Time" : "Preferred Time"}
          </span>
          <input
            required
            type="time"
            value={form.time}
            onChange={(e) => update("time", e.target.value)}
          />
        </label>
        <label>
          <span>{h ? "Construction Type" : "Construction Type"}</span>
          <select
            value={form.constructionType}
            onChange={(e) =>
              update("constructionType", e.target.value as ConstructionType)
            }
          >
            {constructionTypes.map((type) => (
              <option key={type} value={type}>
                {typeLabel(type)}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>{h ? "Approx. Slab Area" : "Approximate Slab Area"}</span>
          <input
            value={form.slabArea}
            onChange={(e) => update("slabArea", e.target.value)}
            placeholder={h ? "Jaise 1500 sq ft" : "e.g. 1500 sq ft"}
          />
        </label>
        <label className="field-wide">
          <span>{h ? "Additional Requirement" : "Additional Requirement"}</span>
          <textarea
            rows={4}
            value={form.requirement}
            onChange={(e) => update("requirement", e.target.value)}
            placeholder={
              h
                ? "Site ya finishing work ke baare mein zaroori baat likhein."
                : "Tell us anything important about the site or finishing work."
            }
          />
        </label>
      </div>
      <div className="form-footer">
        <p>
          {h
            ? "Request confirm karne se pehle hum availability verify karenge."
            : "We’ll verify availability before confirming your request."}
        </p>
        <Button type="submit" disabled={loading}>
          {loading
            ? h
              ? "Enquiry bhej rahe hain…"
              : "Sending Enquiry…"
            : h
              ? "Machine Request Karein"
              : "Request Machine"}
        </Button>
      </div>
    </form>
  );
}
