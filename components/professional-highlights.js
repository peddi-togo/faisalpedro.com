import Icon from "./icon";
import data from "@/app/data.json";

export default function ProfessionalHighlights() {
  const highlights = data.professional_highlights;

  return (
    <section className="max-w-md py-12 mx-auto">
      <div className="px-6 py-8 border border-solid border-gray-200 rounded-2xl bg-linear-[210deg,#d1d5da36_0%,#ffffff00_63%]">
        <h2 className="flex items-center gap-1  font-semibold mb-4">
          <Icon name="spark" className="static translate-x-[-4px]" />
          Professional Highlights
        </h2>
        <ul className="space-y-3 ">
          {highlights.map((highlight, index) => (
            <li key={index} className="flex gap-3">
              <span className="text-gray-700">•</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
