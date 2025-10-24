import Heading from "./heading";
import List from "./list";
import data from "@/app/data.json";

export default function WorkExperience() {
  const experiences = data.work_experience;

  return (
    <section className="max-w-lg py-12 mx-auto">
      <Heading level={2} className="mb-8">
        Work Experience
      </Heading>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-[max-content_1fr] gap-2 md:gap-6"
          >
            {/* First column: Date range */}
            <div className="text-gray-600">
              {exp.from.year} — {exp.to.year}
            </div>

            {/* Second column: Details */}
            <div>
              <Heading level={3}>{exp.company}</Heading>
              <p className="text-gray-600 text-sm mb-3">{exp.job_title}</p>
              <List items={exp.achievements} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
