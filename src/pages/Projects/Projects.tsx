import { ArrowUpRight, MapPin } from "lucide-react";
import { useState } from "react";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ContactCTA from "../../components/ContactCTA/ContactCTA";
import { projects } from "../../data/projects";
import { useLanguage } from "../../context/LanguageContext";

export default function Projects() {
  const { language } = useLanguage();
  const h = language === "hinglish";

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

  const filterLabels = h
    ? ["All", "Residential", "RCC / Slab", "Commercial", "Road / Civil"]
    : filters;

  return (
    <>
      {/* Hero */}
      <section className="page-hero page-hero--short">
        <div className="container">
          <span className="eyebrow">{h ? "Projects" : "Projects"}</span>

          <h1>
            {h ? (
              <>
                Kaam dikhaiye.
                <br />
                <em>Real rakhiye.</em>
              </>
            ) : (
              <>
                Show the work.
                <br />
                <em>Keep it real.</em>
              </>
            )}
          </h1>

          <p>
            {h
              ? "Real site photographs, locations aur project details ke liye clean project gallery."
              : "A clean project gallery ready for real site photographs, locations and project details."}
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="section section--light">
        <div className="container">
          <SectionTitle
            eyebrow={h ? "Project Gallery" : "Project gallery"}
            title={h ? "Selected Work" : "Selected work"}
            description={
              h
                ? "Abhi ye illustrative construction images hain. Business ke real project photos aur details milne par inhe replace kiya ja sakta hai."
                : "These are illustrative construction images for the first version. Replace them with the business's real project photographs and details as they become available."
            }
          />

          {/* Filters */}
          <div className="filters" role="group" aria-label="Project categories">
            {filters.map((filterName, index) => (
              <button
                type="button"
                className={filter === filterName ? "is-active" : ""}
                key={filterName}
                onClick={() => setFilter(filterName)}
              >
                {filterLabels[index]}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="project-grid">
            {visible.map((project) => (
              <article className="project-card" key={project.title}>
                {/* Image */}
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

                {/* Content */}
                <div className="project-card__body">
                  <div>
                    <span className="project-card__location">
                      <MapPin size={14} />
                      {project.location}
                    </span>

                    <h3>
                      {h
                        ? {
                            "Residential Construction":
                              "Residential Construction",
                            "Concrete Slab Work": "Concrete Slab Work",
                            "Commercial Construction":
                              "Commercial Construction",
                            "Road & Civil Work": "Road & Civil Work",
                            "Concrete Finishing": "Concrete Finishing",
                          }[project.title] || project.title
                        : project.title}
                    </h3>

                    <p>
                      {h
                        ? "Illustrative image. Real project photograph aur details baad mein add ki ja sakti hain."
                        : project.description}
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
