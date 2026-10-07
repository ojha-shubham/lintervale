import { ArrowUpRight } from "lucide-react";
import type { ServiceItem } from "../../data/services";

export default function ServiceCard({ service }: { service: ServiceItem }) {
  const Icon = service.icon;
  return (
    <article className="service-card">
      <div className="service-card__top">
        <span className="icon-box">
          <Icon size={22} />
        </span>
        <ArrowUpRight size={19} />
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </article>
  );
}
