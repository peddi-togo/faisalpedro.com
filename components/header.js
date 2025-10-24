import NextLink from "next/link";
import Avatar from "@/components/avatar";
import Heading from "@/components/heading";
import Chip from "@/components/chip";
import Link from "@/components/link";
import data from "@/app/data.json";

export default function Header() {
  const { contact_info, contact_links } = data;

  return (
    <header className="px-3">
      <div className="max-w-md py-9 mx-auto">
        <NextLink
          href="/"
          className="flex flex-col items-center justify-center gap-2"
        >
          <Avatar src={contact_info.avatar} alt={contact_info.name} size={80} />
          <Heading level={1} className="text-lg text-gray-600 font-semibold">
            {contact_info.name}
          </Heading>
        </NextLink>

        <div className="flex flex-wrap justify-center gap-2 mt-3">
          {contact_links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="no-underline"
              {...(link.download && { download: true })}
            >
              <Chip
                iconName={link.iconName}
                className="cursor-pointer hover:bg-gray-200 transition-colors"
              >
                {link.label}
              </Chip>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
