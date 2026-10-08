import { ArrowUpRight, MapPin } from "lucide-react";
import { useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ContactCTA from "../../components/ContactCTA/ContactCTA";
import { projects } from "../../data/projects";
import { useLanguage } from "../../context/LanguageContext";

export default function Projects() {
  const { language } = useLanguage();
  const isHinglish = language === "hinglish";
  const filters = [
    "All",
    "Residential",
    "RCC / Slab",
    "Commercial",
    "Road / Civil",
  ] as const;
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <>
      <section className="page-hero page-hero--short">
        <div className="container">
          <span className="eyebrow">
            {isHinglish ? "Kaam ke examples" : "Work examples"}
          </span>
          <h1>
            {isHinglish ? (
              <>
                Kaam kis type ka hai?
                <br />
                <em>Yahan dekhein.</em>
              </>
            ) : (
              <>
                Work we can
                <br />
                <em>talk about.</em>
              </>
            )}
          </h1>
          <p>
            {isHinglish
              ? "Abhi gallery mein work-category photos hain. Real site photos milne par yahin actual projects dikhaye ja sakte hain."
              : "The gallery currently shows work-category images. It can be replaced with actual site photographs as real projects are added."}
          </p>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <SectionTitle
            eyebrow={isHinglish ? "Work categories" : "Work categories"}
            title={isHinglish ? "Kaun Sa Kaam?" : "What Kind of Work?"}
            description={
              isHinglish
                ? "Ye page abhi real project claims nahi karta. Ismein sirf un kaamon ke examples hain jin par enquiry ki ja sakti hai."
                : "This page does not present stock images as completed client projects. It simply shows the types of work you can enquire about."
            }
          />

          <div className="filters" role="group" aria-label="Work categories">
            {filters.map((filterName) => (
              <button
                type="button"
                className={filter === filterName ? "is-active" : ""}
                key={filterName}
                onClick={() => setFilter(filterName)}
              >
                {isHinglish
                  ? {
                      All: "Sab",
                      Residential: "Ghar",
                      "RCC / Slab": "RCC / Slab",
                      Commercial: "Commercial",
                      "Road / Civil": "Road / Civil",
                    }[filterName]
                  : filterName}
              </button>
            ))}
          </div>

          <div className="project-grid">
            {visible.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-card__image">
                  <img
                    src={project.imageUrl}
                    alt={project.imageLabel}
                    loading="lazy"
                  />
                  <span className="project-card__category">
                    {project.category}
                  </span>
                </div>
                <div className="project-card__body">
                  <div>
                    <span className="project-card__location">
                      <MapPin size={14} />
                      {isHinglish ? "Example / Work Type" : "Work Type"}
                    </span>
                    <h3>
                      {isHinglish
                        ? {
                            "Residential Construction": "Ghar Ka Construction",
                            "Concrete Slab Work": "RCC / Slab Work",
                            "Commercial Construction": "Commercial Building",
                            "Road & Civil Work": "Road / Civil Work",
                            "Concrete Finishing": "Concrete Finishing",
                          }[project.title] || project.title
                        : project.title}
                    </h3>
                    <p>
                      {isHinglish
                        ? "Ye image sirf work type dikhane ke liye hai. Real project photo aur location baad mein add ki ja sakti hai."
                        : "This image is for the work type only. Real project photographs and locations can be added here later."}
                    </p>
                  </div>
                  <ArrowUpRight size={20} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
