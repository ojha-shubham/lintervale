import { ArrowUpRight, MapPin } from "lucide-react";
import { useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ContactCTA from "../../components/ContactCTA/ContactCTA";
import { projects } from "../../data/projects";
import { useLanguage } from "../../context/LanguageContext";

export default function Projects(){
 const {language}=useLanguage(); const h=language==="hinglish";
 const filters=["All","Residential","RCC / Slab","Commercial","Road / Civil"] as const;
 const [filter,setFilter]=useState<(typeof filters)[number]>("All");
 const visible=filter==="All"?projects:projects.filter(p=>p.category===filter);
 const labels=h?["All","Residential","RCC / Slab","Commercial","Road / Civil"]:filters;
 return <><section className="page-hero page-hero--short"><div className="container"><span className="eyebrow">{h?"Projects":"Projects"}</span><h1>{h?<>Kaam dikhaiye.<br/><em>Real rakhiye.</em></>:<>Show the work.<br/><em>Keep it real.</em>}</h1><p>{h?"Real site photographs, locations aur descriptions add karne ke liye clean project gallery.":"A clean project gallery ready for real site photographs, locations and descriptions."}</p></div></section>
 <section className="section section--light"><div className="container"><SectionTitle eyebrow={h?"Project gallery":"Project gallery"} title={h?"Selected Work":"Selected work"} description={h?"Abhi ye illustrative construction images hain. Business ke real project photos milne par inhe replace kar denge.":"These are illustrative construction images for the first version. Replace them with the business’s real project photographs as they become available."}/><div className="filters" role="group" aria-label="Project categories">{filters.map((f,i)=><button className={filter===f?"is-active":""} key={f} onClick={()=>setFilter(f)}>{labels[i]}</button>)}</div><div className="project-grid">{visible.map(p=><article className="project-card" key={p.title}><div className="project-card__image"><img src={p.imageUrl} alt={p.imageLabel} loading="lazy"/><span className="project-card__category">{p.category}</span></div><div className="project-card__body"><div><span className="project-card__location"><MapPin size={14}/> {h?"Project Location":p.location}</span><h3>{h?({ "Residential Construction":"Residential Construction","Concrete Slab Work":"Concrete Slab Work","Commercial Construction":"Commercial Construction","Road & Civil Work":"Road & Civil Work","Concrete Finishing":"Concrete Finishing"}[p.title]||p.title):p.title}</h3><p>{h?"Illustrative image. Real project photograph aur details baad mein add ki ja sakti hain.":p.description}</p></div><ArrowUpRight/></div></article>)}</div></div></section><ContactCTA/></>;
}
