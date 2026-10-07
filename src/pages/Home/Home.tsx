import { ArrowRight, Check, CircleDot, HardHat, ShieldCheck, Truck, Wrench, ArrowDown } from "lucide-react";
import Button from "../../components/Button/Button";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import ContactCTA from "../../components/ContactCTA/ContactCTA";
import { services } from "../../data/services";
import { constructionImages } from "../../data/constructionImages";
import { useLanguage } from "../../context/LanguageContext";

export default function Home() {
  const { language } = useLanguage(); const h = language === "hinglish";
  const steps = h ? [
    ["01","Site Details Bhejein","Kahan, kab aur kya chahiye — basic details batayein."],
    ["02","Machine Availability Check","Requested date aur site requirement hum check karenge."],
    ["03","Timing & Charges Confirm","Request confirm hone se pehle hum aapse contact karenge."],
    ["04","Machine Site Par","Agreed plan ke hisaab se service timing coordinate hogi."],
  ] : [
    ["01","Submit Site Details","Tell us where, when and what you need."],
    ["02","Check Machine Availability","We review the requested date and site requirement."],
    ["03","Confirm Timing & Charges","We contact you before the request is confirmed."],
    ["04","Machine Reaches Your Site","Service timing is coordinated around the agreed plan."],
  ];
  const serviceData = h ? services.slice(0,4).map(s=>({...s,title:s.hinglishTitle,description:s.hinglishDescription})) : services.slice(0,4);
  return <>
    <section className="hero"><div className="container hero__grid"><div className="hero__content">
      <span className="eyebrow">Construction • Civil • Concrete Finishing</span>
      <h1>{h?<>Mazboot Banayein.<br/><em>Better Banayein.</em></>:<>Build Strong.<br/><em>Build Better.</em></>}</h1>
      <p>{h?"House, slab, road aur civil projects ke liye professional construction services aur concrete finishing machine support.":"Professional construction services and concrete finishing machine support for house, slab, road and civil projects."}</p>
      <div className="hero__actions"><Button to="/machine">{h?"Linter Machine Book Karein":"Book Linter Machine"} <ArrowRight size={18}/></Button><Button variant="ghost" to="/contact">{h?"Construction Quote Lejiye":"Get Construction Quote"}</Button></div>
      <div className="hero__meta"><span><CircleDot size={15}/> {h?"Site-focused service":"Site-focused service"}</span><span><ShieldCheck size={15}/> {h?"Enquiry-first process":"Enquiry-first process"}</span></div>
    </div><div className="hero__visual"><div className="hero__photo"><img src={constructionImages[0].src} alt={constructionImages[0].alt}/><div className="hero__photo-overlay"/><span className="hero__photo-label">{h?"ON SITE / CONSTRUCTION":"ON SITE / CONSTRUCTION"}</span></div><div className="hero__stamp"><HardHat size={18}/><span>{h?<>Construction<br/>Support</>:<>Construction<br/>Support</>}</span></div></div></div><a className="hero__scroll" href="#trust"><ArrowDown size={17}/> {h?"Neeche Dekhein":"Scroll to explore"}</a></section>
    <section className="trust-strip" id="trust"><div className="container trust-strip__grid">{(h?[
      ["01","Reliable Site Coordination","Clear enquiry & scheduling"],
      ["02","Concrete Finishing Equipment","Slab work ke liye machine support"],
      ["03","Construction Support","Practical local execution"],
      ["04","Direct Enquiry","Business se seedhi baat"],
    ]:[
      ["01","Reliable Site Coordination","Clear enquiry & scheduling"],
      ["02","Concrete Finishing Equipment","Machine support for slab work"],
      ["03","Construction Support","Practical local execution"],
      ["04","Direct Enquiry","Talk to the business directly"],
    ]).map(x=><div key={x[0]}><span className="trust-number">{x[0]}</span><span><strong>{x[1]}</strong><small>{x[2]}</small></span></div>)}</div></section>
    <section className="section section--light"><div className="container"><SectionTitle eyebrow={h?"Hum kya karte hain":"What we do"} title={h?"Construction Work, Bina Confusion Ke.":"Construction Work, Without the Guesswork."} description={h?"Un logon ke liye practical services jinko dependable construction support aur site par sahi equipment chahiye.":"A practical service offering for people who need dependable construction support and the right equipment at the site."}/><div className="service-grid">{serviceData.map(s=><ServiceCard key={s.title} service={s}/>)}</div><div className="section-link"><Button variant="ghost" to="/services">{h?"Saari Services Dekhein":"View all services"} <ArrowRight size={17}/></Button></div></div></section>
    <section className="construction-gallery"><div className="container"><SectionTitle eyebrow={h?"On-site kaam":"On-site work"} title={h?"Construction In Action.":"Construction In Action."} description={h?"Building, civil aur concrete work ka visual overview. Baad mein real project photos yahan add ki ja sakti hain.":"A visual introduction to building, civil and concrete work. Real project photographs can replace these illustrative images later."}/><div className="construction-gallery__grid">{constructionImages.slice(1,5).map((image,index)=><figure className={`construction-gallery__item construction-gallery__item--${index+1}`} key={image.src}><img src={image.src} alt={image.alt} loading="lazy"/><figcaption>{image.label}</figcaption></figure>)}</div></div></section>
    <section className="machine-section"><div className="container machine-section__grid"><div><div className="machine-section__visual"><img src={constructionImages[1].src} alt="Concrete work on an active construction site" loading="lazy"/><span>CONCRETE / SLAB WORK</span></div></div><div><span className="eyebrow">{h?"The Linter Machine":"The Linter Machine"}</span><h2>{h?"Slab ke liye Linter Machine chahiye?":"Need a Linter Machine for Your Slab?"}</h2><p className="lead">{h?"Ghar se enquiry kijiye. Site details, required date aur approx slab area share karein. Confirm karne se pehle hum availability check karenge.":"Enquire from home. Share your site details, required date and approximate slab area. We’ll check availability before anything is confirmed."}</p><div className="feature-list"><FeatureCard icon={Wrench} title={h?"Concrete Finishing":"Concrete Finishing"} text={h?"Concrete aur slab finishing work ke liye support.":"Support for concrete and slab finishing work."}/><FeatureCard icon={HardHat} title={h?"Site-Based Service":"Site-Based Service"} text={h?"Scheduling mein aapke project details important rahenge.":"Your project details stay central to scheduling."}/><FeatureCard icon={Truck} title={h?"Availability Enquiry":"Availability Enquiry"} text={h?"Service se pehle timing aur charges confirm karein.":"Confirm timing and charges before the service."}/></div><Button to="/machine">{h?"Machine Availability Check Karein":"Check Machine Availability"} <ArrowRight size={17}/></Button></div></div></section>
    <section className="section section--light"><div className="container"><SectionTitle eyebrow={h?"Simple process":"Simple process"} title={h?"Site Details Se Site Arrival Tak.":"From Site Details to Site Arrival."} align="center"/><div className="process-grid">{steps.map(s=><div className="process-step" key={s[0]}><span>{s[0]}</span><div><h3>{s[1]}</h3><p>{s[2]}</p></div></div>)}</div></div></section>
    <section className="section section--dark"><div className="container"><SectionTitle eyebrow="Why LinterVale" title={h?"Real Site Needs Ke Around Built.":"Built Around Practical Site Needs."} description={h?"Koi fake claim nahi. Construction capability, equipment support aur direct communication ko simple tareeke se present kiya gaya hai.":"No inflated claims. Just a clear way to present construction capability, equipment support and direct communication."}/><div className="capability-grid">{(h?[
      ["Construction-first approach","Real site requirements ke around design kiya gaya hai."],
      ["Equipment as a service","Concrete finishing support ke liye dedicated enquiry path."],
      ["Clear enquiry process","Booking confirm hone se pehle availability aur charges check hote hain."],
    ]:[
      ["Construction-first approach","Designed around real site requirements rather than a generic service catalogue."],
      ["Equipment as a service","A dedicated path for customers looking specifically for concrete finishing support."],
      ["Clear enquiry process","Availability and charges are checked before the request becomes a confirmed booking."],
    ]).map(x=><div key={x[0]}><Check/><strong>{x[0]}</strong><p>{x[1]}</p></div>)}</div></div></section><ContactCTA/>
  </>;
}
