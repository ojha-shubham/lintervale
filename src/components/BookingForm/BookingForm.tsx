import { useState, type FormEvent } from "react";
import { CalendarDays, CheckCircle2, Clock3, MapPin, Phone, UserRound } from "lucide-react";
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
  const isHinglish = language === "hinglish";
  const [form, setForm] = useState(initial);
  const [submitted, setSubmitted] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  function update<K extends keyof MachineBookingRequest>(key: K, value: MachineBookingRequest[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    const result = await requestMachineBooking(form);
    setLoading(false);
    if (result.success) setSubmitted(result.reference);
  }

  const typeLabel = (type: ConstructionType) =>
    isHinglish
      ? {
          "House / Residential": "Ghar / Residential",
          "Commercial Building": "Commercial Building",
          "RCC / Slab Work": "RCC / Slab Work",
          "Road / Civil Work": "Road / Civil Work",
          Other: "Other",
        }[type]
      : type;

  if (submitted) {
    return (
      <div className="booking-success">
        <span className="success-icon"><CheckCircle2 size={32} /></span>
        <span className="eyebrow">{isHinglish ? "Enquiry Mil Gayi" : "Enquiry Received"}</span>
        <h3>{isHinglish ? "Details mil gayi hain." : "We have your details."}</h3>
        <p>
          {isHinglish
            ? "Ab availability check karke hum timing aur charges ke liye aapse contact karenge. Ye automatic booking confirmation nahi hai."
            : "We’ll check availability and contact you to confirm timing and charges. This is an enquiry, not an automatic booking confirmation."}
        </p>
        <div className="reference">Reference: {submitted}</div>
        <Button type="button" variant="dark" onClick={() => { setSubmitted(null); setForm(initial); }}>
          {isHinglish ? "Ek Aur Enquiry Bhejein" : "Send Another Enquiry"}
        </Button>
      </div>
    );
  }

  return (
    <form className="booking-form" onSubmit={submit}>
      <div className="form-grid">
        <label>
          <span><UserRound size={15} /> {isHinglish ? "Naam" : "Name"}</span>
          <input required value={form.name} onChange={(event) => update("name", event.target.value)} placeholder={isHinglish ? "Apna naam" : "Your name"} />
        </label>

        <label>
          <span><Phone size={15} /> {isHinglish ? "Phone Number" : "Phone Number"}</span>
          <input required type="tel" inputMode="tel" value={form.phone} onChange={(event) => update("phone", event.target.value)} placeholder={isHinglish ? "Apna phone number" : "Your phone number"} />
        </label>

        <label className="field-wide">
          <span><MapPin size={15} /> {isHinglish ? "Site Kahan Hai?" : "Site Location"}</span>
          <input required value={form.location} onChange={(event) => update("location", event.target.value)} placeholder={isHinglish ? "Gaon, town ya site address" : "Village, town or site address"} />
        </label>

        <label>
          <span><CalendarDays size={15} /> {isHinglish ? "Kab Chahiye?" : "Required Date"}</span>
          <input required type="date" min={new Date().toISOString().split("T")[0]} value={form.date} onChange={(event) => update("date", event.target.value)} />
        </label>

        <label>
          <span><Clock3 size={15} /> {isHinglish ? "Kis Time?" : "Preferred Time"}</span>
          <input required type="time" value={form.time} onChange={(event) => update("time", event.target.value)} />
        </label>

        <label>
          <span>{isHinglish ? "Kaam Kis Type Ka Hai?" : "Type of Work"}</span>
          <select value={form.constructionType} onChange={(event) => update("constructionType", event.target.value as ConstructionType)}>
            {constructionTypes.map((type) => <option key={type} value={type}>{typeLabel(type)}</option>)}
          </select>
        </label>

        <label>
          <span>{isHinglish ? "Approx. Area" : "Approx. Slab Area"}</span>
          <input value={form.slabArea} onChange={(event) => update("slabArea", event.target.value)} placeholder={isHinglish ? "Jaise 1500 sq ft" : "e.g. 1500 sq ft"} />
        </label>

        <label className="field-wide">
          <span>{isHinglish ? "Aur Kuch Batana Hai?" : "Anything Else?"}</span>
          <textarea rows={4} value={form.requirement} onChange={(event) => update("requirement", event.target.value)} placeholder={isHinglish ? "Site ya kaam ke baare mein zaroori baat likhein." : "Tell us anything important about the site or work."} />
        </label>
      </div>

      <div className="form-footer">
        <p>{isHinglish ? "Availability check hone ke baad timing aur charges confirm karenge." : "We’ll check availability before confirming timing and charges."}</p>
        <Button type="submit" disabled={loading}>
          {loading ? (isHinglish ? "Bhej rahe hain…" : "Sending…") : (isHinglish ? "Enquiry Bhejein" : "Send Enquiry")}
        </Button>
      </div>
    </form>
  );
}
