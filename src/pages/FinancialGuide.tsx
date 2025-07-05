import React from "react";

type Section = {
    title: string;
    content: string[];
};

const sections: Section[] = [
    {
        title: "Evidence of Financial Capacity",
        content: [
            "If the document checklist requires you to provide evidence of your financial capacity, you must attach evidence with your visa application. If you don’t provide this evidence, DHA may refuse your application without asking you for more information.",
            "If the document checklist does not require you to provide evidence of your financial capacity, we may still ask you to provide this evidence while we are processing your application.",
            "The living cost we ask you to declare and provide with your visa application is the minimum amount of money you need for the purpose of the visa. Actual living costs vary throughout Australia and may be much higher than what you need for the visa. We recommend you research the area you intend to live including the cost of living in that area.",
        ],
    },
    {
        title: "Options to Prove Financial Support",
        content: [
            "Deposits of money from a financial institution",
            "A government loan or loans from a financial institution",
            "Scholarships or similar financial support",
        ],
    },
    {
        title: "Annual Income Option",
        content: [
            "Alternatively, you can provide evidence that your parents or your partner had a personal annual income of at least AUD87,856 in the 12 months immediately before you apply. If you bring family members, your parents’ or partner’s income must be at least AUD102,500 in the 12 months immediately before you apply",
            "If both your parents are working we can consider their combined income. Provide evidence of your parents’ or partner’s income in the form of official government documents such as tax assessments less than 12 months old. We won’t accept bank statements or direct evidence from an employer"
        ],
    },
    {
        title: "How Much Money Do You Need?",
        content: [
            "Travel costs",
            "12 months of your course fees (or pro rata fees, if your course is less than 12 months)",
            "12 months of living costs for you and any family members",
            "School fees for any school-age children (or pro rata)",
            "Use the following information to work out how much money you need for the visa. To calculate pro rata costs, divide the annual cost by 365 and multiply the result by the number of days you intend to stay in Australia."
        ],
    },
    {
        title: "Living Costs (12 Months)",
        content: [
            "Student: AUD29,710",
            "Partner: AUD10,394",
            "Child: AUD4,449",
        ],
    },
    {
        title: "Course Fees",
        content: [
            "Use the first 12 months of your course fees. If your course is 12 months or less, use the total cost. Deduct any costs you have already paid – you must provide evidence you have paid them, such as a receipt or Confirmation of Enrolment.",
            "If the course is 12 months or less, use total cost minus any amount already paid (evidence required).",
            "Example 1: AUD50,000 for 3 years → AUD16,666/year.",
            "Example 2: AUD15,000 for 10 months, AUD5,000 paid → Remaining AUD10,000.",
            "Example 3: AUD20,000 for 18 months → AUD13,333/year.",
        ],
    },
    {
        title: "Schooling Costs for Children",
        content: [
            "If you are including any school-age children in your application, add schooling costs of at least AUD13,502 per year for each child. Costs vary between states, territories and schools in Australia. You are responsible for finding out how much the child’s schooling will cost.",
            "Varies by state and school.",
            "No evidence needed if:",
            " - You're a PhD student with waived public school fees.",
            " - You received a Commonwealth Government scholarship.",
            "Proof of enrolment required.",
        ],
    },
    {
        title: "Travel Costs",
        content: [
            "From East/Southern Africa: AUD2,500",
            "From West Africa: AUD3,000",
            "From elsewhere outside Australia: AUD2,000",
            "From within Australia: AUD1,000",
            "Returning to Africa: AUD1,500",
        ],
    },
    {
        title: "Combined Applications",
        content: [
            "Include primary applicant and each family member's:",
            "- 12 months living costs (or pro rata)",
            "- School fees",
            "- Travel expenses",
        ],
    },
    {
        title: "Other Options",
        content: [
            "Secondary exchange students: provide AASES form.",
            "DFAT students: provide DFAT support letter + family financial evidence.",
            "Defence students: provide Defence support letter + family financial evidence.",
        ],
    },
    {
        title: "Subsequent Entrant Family Members",
        content: [
            "Must show evidence to cover:",
            "- Student’s remaining school fees (minus paid amount)",
            "- 12 months living costs for all members",
            "- Travel costs for all members",
        ],
    },
    {
        title: "Genuine Access to Money",
        content: [
            "If someone else is funding you, provide:",
            "- Proof of relationship",
            "- Their ID documents",
            "- History of financial support to other students (if any)",
            "- Business documents if funds come from a business",
            "- Source of deposits",
            "- Loan agreement terms & disbursement proof",
            "- Security details and repayment plan",
            "- Some education loans require you to study a specific course/provider.",
        ],
    },
];

const FinancialCapacity = () => {
    return (
        <section className="py-12 bg-gray-100">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    Financial Capacity Requirements
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {sections.map((section, idx) => (
                        <div key={idx} className="card overflow-hidden border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="p-5 bg-primary-700 flex items-center gap-3 text-white">
                                <h3 className="text-lg font-semibold">
                                    {section.title}
                                </h3>
                            </div>
                            <div className="p-5 text-gray-700">
                                <ul className="list-disc list-inside text-gray-700 space-y-2">
                                    {section.content.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FinancialCapacity;
