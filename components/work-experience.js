import data from "@/app/data.json";

import Heading from "./heading";
import Icon from "./icon";
import Link from "./link";
import List from "./list";

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
              {exp.from.year} — {exp.to.year}
            </div>

            {/* Second column: Details */}
            <div>
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <Heading level={3}>{exp.company}</Heading>
                  <p className="text-gray-600 text-sm">{exp.job_title}</p>
                </div>
                {exp.photo_album && (
                  <Link
                    href={exp.photo_album}
                    className="text-sm whitespace-nowrap"
                  >
                    Photos <Icon name="arrow-up-right" />
                  </Link>
                )}
              </div>
              <List items={exp.achievements} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
