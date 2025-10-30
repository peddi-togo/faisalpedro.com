import Heading from "./heading";
import Chip from "./chip";
import data from "@/app/data.json";

export default function Education() {
  const education = data.education;

  return (
    <section className="max-w-lg py-12 mx-auto">
      <Heading level={2} className="mb-6">
        Education
      </Heading>
      <div className="space-y-8">
        {education.map((edu, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-[max-content_1fr] gap-2 md:gap-6"
          >
            {/* First column: Date range */}
            <div className="text-gray-600">
              {edu.from.year} — {edu.to.year}
            </div>

            {/* Second column: Details */}
            <div>
              <Heading level={3}>{edu.institution}</Heading>
              <p className="text-gray-600 text-sm mb-3">{edu.degree}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
