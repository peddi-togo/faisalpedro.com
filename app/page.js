import ProfessionalHighlights from "@/components/professional-highlights";
import WorkExperience from "@/components/work-experience";
import Education from "@/components/education";

export default function Home() {
  return (
    <main className="px-3">
      <ProfessionalHighlights />
      <WorkExperience />
      <Education />
    </main>
  );
}
