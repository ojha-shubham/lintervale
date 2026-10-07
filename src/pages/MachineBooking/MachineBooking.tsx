import { ArrowRight, Check, Info, PhoneCall } from "lucide-react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MachineVisual from "../../components/MachineVisual/MachineVisual";
import BookingForm from "../../components/BookingForm/BookingForm";
import Button from "../../components/Button/Button";
import { callBusiness } from "../../utils/phone";
import { openMachineWhatsApp } from "../../utils/whatsapp";
import { useLanguage } from "../../context/LanguageContext";

export default function MachineBooking() {
  const { language } = useLanguage(); const h=language==="hinglish";
  return <>
    <section className="page-hero page-hero--machine"><div className="container">
      <span className="eyebrow">{h?"Machine Service":"Machine Service"}</span>
      <h1>{h?<>Concrete finishing,<br/><em>ab aur easy.</em></>:<>Concrete finishing,<br/><em>made easier.</em></>}</h1>
      <p>{h?"Ghar se site details bhejiye. Hum availability check karke machine service confirm karenge.":"Share your site details from home. We’ll check availability before confirming the machine service."}</p>
      <div className="hero__actions"><Button onClick={()=>document.getElementById("booking")?.scrollIntoView({behavior:"smooth"})}>{h?"Machine Request Karein":"Request Machine"} <ArrowRight size={17}/></Button><Button variant="ghost" onClick={openMachineWhatsApp}>WhatsApp par Enquire Karein</Button></div>
    </div></section>
    <section className="machine-explainer section"><div className="container machine-explainer__grid"><MachineVisual compact/><div>
      <SectionTitle eyebrow={h?"Service mein kya milega":"What the service covers"} title={h?"Sahi finish ke liye sahi equipment.":"The right equipment for the right finish."} description={h?"Machine service concrete/slab finishing ke liye hai, jahan site condition aur timing pehle check karna zaroori hai.":"The machine service is intended for concrete/slab finishing requirements where site conditions and timing need to be checked in advance."}/>
      <div className="check-list">{(h?["Concrete finishing","Slab work support","Fast site work","Professional equipment","Site-based service"]:["Concrete finishing","Slab work support","Efficient site work","Professional equipment","Site-based service"]).map(x=><div key={x}><Check/>{x}</div>)}</div>
      <div className="info-box"><Info size={19}/><span>{h?"Machine specifications, pricing aur exact service scope business se confirm karein.":"Machine specifications, pricing and exact service scope should be confirmed with the business before the job."}</span></div>
    </div></div></section>
    <section className="booking-section" id="booking"><div className="container"><div className="booking-section__heading"><SectionTitle eyebrow={h?"Machine Enquiry":"Machine enquiry"} title={h?"Slab ke liye Linter Machine chahiye?":"Need a Linter Machine for Your Slab?"} description={h?"Basic details batayein. Hum availability check karke timing aur charges confirm karenge.":"Tell us the basics. We’ll check availability and contact you to confirm timing and charges."}/><Button variant="ghost" onClick={callBusiness}><PhoneCall size={17}/> {h?"Call Karein":"Call instead"}</Button></div><BookingForm/></div></section>
  </>;
}
