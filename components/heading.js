import { twMerge } from "tailwind-merge";
import Icon from "./icon";

export default function Heading({ level, iconName, children, className = "" }) {
  const Tag = `h${level}`;

  return (
    <Tag className={twMerge("flex items-center gap-1 font-semibold", className)}>
      {iconName && <Icon name={iconName} className="static -translate-x-1" />}
      {children}
    </Tag>
  );
}
