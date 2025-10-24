import Heading from "./heading";
import data from "@/app/data.json";

export default function ProfessionalHighlights() {
  const highlights = data.professional_highlights;

  return (
    <section className="max-w-lg py-12 mx-auto">
      <div className="px-6 py-8 border border-solid border-gray-200 rounded-2xl bg-linear-[210deg,#d1d5da36_0%,#ffffff00_63%]">
        <Heading level={2} iconName="spark" className="mb-4">
          Professional Highlights
        </Heading>
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
