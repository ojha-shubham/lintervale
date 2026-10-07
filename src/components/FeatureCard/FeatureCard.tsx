import type { LucideIcon } from "lucide-react";
export default function FeatureCard({
  icon: Icon,
  title,
  text,
}: {
  icon: LucideIcon;
  title: string;
  text: string;
}) {
  return (
    <article className="feature-card">
      <span className="icon-box icon-box--small">
        <Icon size={19} />
      </span>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  );
}
