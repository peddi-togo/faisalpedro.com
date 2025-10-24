import { twMerge } from "tailwind-merge";

export default function List({ items, className = "" }) {
  return (
    <ul className={twMerge("space-y-3", className)}>
      {items.map((item, index) => (
        <li key={index} className="flex gap-3">
          <span className="text-gray-700">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
