import Heading from "./heading";
import data from "@/app/data.json";

export default function WorkExperience() {
  const experiences = data.work_experience;

  return (
    <section className="max-w-lg py-12 mx-auto">
      <Heading level={2} className="mb-6">
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
              {exp.from} — {exp.to}
            </div>

            {/* Second column: Details */}
            <div>
              <h3 className="font-semibold">
                {exp.job_title} at {exp.company}
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                {exp.location || "TBA"}
              </p>
              <ul className="space-y-3">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-gray-700">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
