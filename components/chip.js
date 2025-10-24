import { twMerge } from "tailwind-merge";
import Icon from "./icon";

export default function Chip({ children, className = "", iconName }) {
  return (
    <span
      className={twMerge(
        "inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700 rounded",
        className
      )}
    >
      {iconName && <Icon name={iconName} size={12} />}
      {children}
    </span>
  );
}
