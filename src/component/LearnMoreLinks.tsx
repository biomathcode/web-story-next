import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { SeoResourceLink } from "@/lib/seoResources";

function LearnMoreLinks({
  title = "Learn more",
  links,
}: {
  title?: string;
  links: SeoResourceLink[];
}) {
  return (
    <aside className="learn-more-card" aria-label={title}>
      <h2>{title}</h2>
      <div className="learn-more-links">
        {links.map((link) => (
          <Link href={link.href} key={link.href} target="_blank">
            <span>
              <b>{link.title}</b>
              <small>{link.description}</small>
            </span>
            <ArrowRightIcon />
          </Link>
        ))}
      </div>
    </aside>
  );
}

export default LearnMoreLinks;
