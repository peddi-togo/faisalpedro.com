import Link from "@/components/link";
import Icon from "@/components/icon";
import data from "@/app/data.json";

export default function Footer() {
  const contactLinks = data.contact_links;

  return (
    <footer>
      <div className="max-w-xl py-9 mx-auto">
        <div className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          {contactLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="group"
              {...(link.download && { download: true })}
            >
              <Icon name={link.iconName} size={16} />
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
