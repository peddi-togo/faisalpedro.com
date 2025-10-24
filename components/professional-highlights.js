import Heading from "./heading";
import List from "./list";
import data from "@/app/data.json";

export default function ProfessionalHighlights() {
  const highlights = data.professional_highlights;

  return (
    <section className="max-w-lg py-12 mx-auto">
      <div className="px-6 py-8 border border-solid border-gray-200 rounded-2xl bg-linear-[210deg,#d1d5da36_0%,#ffffff00_63%]">
        <Heading level={2} iconName="spark" className="mb-4">
          Professional Highlights
        </Heading>
        <List items={highlights} />
      </div>
    </section>
  );
}
