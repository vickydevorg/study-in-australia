import React from 'react';
import { FileText, Clock, DollarSign, HelpCircle, Shield} from 'lucide-react';
import GSRequirement from '../components/GSRequirement';

const VisaInfo: React.FC = () => {
    React.useEffect(() => {
        document.title = 'Student Visa Information | Study in Australia';
    }, []);

    const visaTypes = [
        {
            name: 'Student Visa (Subclass 500)',
            description: 'The primary visa for international students studying full-time in Australia.',
            eligibility: 'Enrolled in a CRICOS-registered course, meet financial requirements, English proficiency, and health insurance.',
            duration: 'Duration of your course, with additional months after completion.',
            icon: <FileText className="w-6 h-6" />
        },
        {
            name: 'Student Guardian Visa (Subclass 590)',
            description: 'For guardians of international students under 18 years of age.',
            eligibility: 'Nominated by the student\'s parents, meet character requirements, and provide accommodation.',
            duration: 'Same as the student visa period or until the student turns 18.',
            icon: <Shield className="w-6 h-6" />
        },
        {
            name: 'Temporary Graduate Visa (Subclass 485)',
            description: 'Allows recent graduates to work in Australia after completing their studies.',
            eligibility: 'Completed at least 2 years of study in Australia, meet English requirements, and under 50 years of age.',
            duration: '2-4 years, depending on the qualification level obtained.',
            icon: <GraduationCap className="w-6 h-6" />
        }
    ];
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
    ]
    const sectionsSmall: Section[] = [
        {
            title: "Options to Prove Financial Support",
            content: [
                "Deposits of money from a financial institution",
                "A government loan or loans from a financial institution",
                "Scholarships or similar financial support",
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
        }
    ];
    return (
        <>
            <section className="bg-primary-800 py-16 md:py-24">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Australian Student Visa Information
                        </h1>
                        <p className="text-xl text-gray-100">
                            Everything you need to know about obtaining and maintaining your student visa for studying in Australia.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="card p-6 border border-gray-100 hover:shadow-md transition-shadow">
                            <Clock className="w-10 h-10 text-primary-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Processing Time</h3>
                            <p className="text-gray-600">
                                Student visa applications typically take 4-6 weeks to process. Apply at least 2-3 months before your course start date.
                            </p>
                        </div>

                        <div className="card p-6 border border-gray-100 hover:shadow-md transition-shadow">
                            <DollarSign className="w-10 h-10 text-primary-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Visa Costs</h3>
                            <p className="text-gray-600">
                                The current student visa application fee is AUD 630. Additional costs may include health examinations and biometrics.
                            </p>
                        </div>

                        <div className="card p-6 border border-gray-100 hover:shadow-md transition-shadow">
                            <HelpCircle className="w-10 h-10 text-primary-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Visa Assistance</h3>
                            <p className="text-gray-600">
                                Our team provides guidance throughout the visa application process. Contact us for personalized support.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-gray-100">
                <div className="container">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                        Financial Capacity Requirements
                    </h2>
                    <div className="grid grid-cols-1 gap-5">
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
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
                        {sectionsSmall.map((section, idx) => (
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

            <section className="section bg-white">
                <div className="container">
                    <h2 className="text-3xl font-bold mb-6 text-center text-primary-600">Visa Application Process</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <div className="space-y-5">
                                <div className="flex">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center mr-4"> 1 </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Education documents provided to the university for the offer letter</h3>
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center mr-4"> 2 </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Proof of payment done to the university </h3>
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center mr-4"> 3 </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">IELTS TRF </h3>
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center mr-4"> 4 </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Visa GS Q&A </h3>
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center mr-4"> 5 </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Passport – old and new – all pages</h3>
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center mr-4"> 6 </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Curriculum Vitae </h3>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center mr-4">7</div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Vaccination Certificate <br/> Covid <br/> download online <br/><a  target='_blank' href="https://selfregistration.cowin.gov.in/"> https://selfregistration.cowin.gov.in/</a></h3>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center mr-4">8 </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">ID proofs of the primary applicant and parents (all – Aadhar, PAN, and passport ) </h3>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center mr-4">9</div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Savings Account statement for all the accounts used for visa funds- 6 months old</h3>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center mr-4">10</div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Bank Letter for all the bank statements</h3>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center mr-4"> 11 </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">ITRS of the parents and candidate (if working)- last 3 years</h3>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center mr-4">12</div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">50rs NOC letter Affidavit from parents</h3>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center mr-4">13</div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">50 rs Affidavit on behalf of the candidate showcasing the genuineness of the documents. </h3>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center mr-4">14</div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">COE from the university </h3>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center mr-4">15</div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Health Insurance OSHC</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="space-y-5">
                                <div className="flex">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center mr-4"> 16 </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">CA certificate with updated date</h3>
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center mr-4"> 17 </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Loan Letter</h3>
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center mr-4">18</div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Loan disbursal letter</h3>
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center mr-4"> 19</div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Loan Account statement </h3>
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center mr-4">20</div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Summary of Funds prepared by the student </h3>
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center mr-4"> 21 </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Bank Manager details for all the banks used for the application. </h3>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center mr-4">22</div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">If parents are self-employed then GST certificate, current account statement for the last three months, profit and loss statement, or Company ITRS</h3>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center mr-4">23</div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">If parents are employed then the last three months' salary slips and salary account statement for last 6 months </h3>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center mr-4">24</div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Property evaluation certificate </h3>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center mr-4">25</div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Passport size photos</h3>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center mr-4">26</div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">HAP ID is being created – medical reports</h3>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center mr-4">27</div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Visa application 2000 AUD including taxes</h3>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center mr-4">28</div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Manager details wherever you have worked or are working currently – name, ph no and email ID </h3>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center mr-4">29</div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Employment letter, last 6 months' salary slips </h3>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center mr-4">30</div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Work experience letter </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 


            <section className="bg-primary-50 py-12">
                <div className="container text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Have Questions About Student Visas?</h2>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        Our visa specialists can guide you through the entire application process and help increase your chances of approval.
                    </p>
                    <a href="#consultation" className="btn btn-primary">Get Expert Visa Guidance</a>
                </div>
            </section>

            <GSRequirement/>
        </>
    );
};

const GraduationCap = ({ className = "", ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        {...props}
    >
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
    </svg>
);

export default VisaInfo;