import NextLink from "next/link";
import { twMerge } from "tailwind-merge";

export default function Link({ href, children, className = "", ...props }) {
  const combinedClassName = twMerge(
    "flex items-center gap-2 underline decoration-dotted underline-offset-3 hover:decoration-solid",
    className
  );

  const isExternal = href.startsWith("http");
  const isSpecial = href.startsWith("tel:") || href.startsWith("mailto:");

  if (isExternal || isSpecial) {
    const externalProps = isExternal
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};
    return (
      <a
        className={combinedClassName}
        href={href}
        {...externalProps}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink className={combinedClassName} href={href} {...props}>
      {children}
    </NextLink>
  );
}
