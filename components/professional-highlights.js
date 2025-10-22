import Icon from "./icon";

export default function ProfessionalHighlights() {
  const highlights = [
    "Delivered exceptional customer experiences using strong communication, high emotional intelligence, and upselling strategies to drive sales and foster loyalty.",
    "Proven leadership and team management skills with integrity and accountability, capable of staff training and ensuring consistent, strong in-store performance.",
    "Expertise in Flooring Knowledge & Product Familiarity combined with Visual Merchandising & Display Setup for practical customer guidance and premium store presentation.",
    "Organized, disciplined, and detail-oriented approach ensures accuracy in estimates, orders, and professional POS Operation & Cash Handling.",
    "Bilingual communication (English/A2 French), enabling clear, customer-focused interactions with a diverse clientele.",
  ];

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
