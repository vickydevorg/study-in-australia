import React from "react";

const GSRequirement = () => {
return (
<section className="bg-white py-12 px-4 md:px-10">
    <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center">
            Genuine Student (GS) Requirement
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-gray-50 border-l-4 border-indigo-600 rounded-2xl p-6 shadow hover:shadow-md transition">
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                    What is GS Criterion?
                </h3>
                <p className="text-gray-700">
                    To be granted a student visa, applicants must satisfy the Genuine Student (GS) criterion. Responses
                    must be in English and limited to 150 words per question.
                </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-50 border-l-4 border-green-600 rounded-2xl p-6 shadow hover:shadow-md transition">
                <h3 className="text-xl font-semibold text-green-700 mb-2">
                    Required Questions in Application
                </h3>
                <ul className="list-disc ml-5 text-gray-700">
                    <li>Current personal circumstances</li>
                    <li>Reason for choosing the course and provider</li>
                    <li>How the course benefits the applicant</li>
                    <li>Any additional relevant info</li>
                </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50 border-l-4 border-blue-600 rounded-2xl p-6 shadow hover:shadow-md transition">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                    Supporting Evidence to Include
                </h3>
                <ul className="list-disc ml-5 text-gray-700">
                    <li>Academic transcripts & certificates</li>
                    <li>Australian study history & progress</li>
                    <li>Study gap explanations</li>
                    <li>Employer details & job history</li>
                    <li>Income, tax, or bank statements</li>
                    <li>Employment offers post-study</li>
                </ul>
            </div>

            {/* Card 4 */}
            <div className="bg-gray-50 border-l-4 border-red-500 rounded-2xl p-6 shadow hover:shadow-md transition">
                <h3 className="text-xl font-semibold text-red-600 mb-2">
                    Personal & Economic Ties
                </h3>
                <p className="text-gray-700">
                    Provide details on family, community, and employment ties. Include justification for not studying in
                    your home country and evidence of any unrest or service obligations.
                </p>
            </div>

            {/* Card 5 */}
            <div className="bg-gray-50 border-l-4 border-yellow-500 rounded-2xl p-6 shadow hover:shadow-md transition">
                <h3 className="text-xl font-semibold text-yellow-600 mb-2">
                    What DHA Considers
                </h3>
                <ul className="list-disc ml-5 text-gray-700">
                    <li>Your personal & economic circumstances</li>
                    <li>Knowledge about the course & provider</li>
                    <li>Course relevance to career goals</li>
                    <li>Expected benefits & salary outcomes</li>
                    <li>Immigration & visa history</li>
                </ul>
            </div>

            {/* Card 6 */}
            <div className="bg-gray-50 border-l-4 border-purple-600 rounded-2xl p-6 shadow hover:shadow-md transition">
                <h3 className="text-xl font-semibold text-purple-700 mb-2">
                    Important Notes
                </h3>
                <p className="text-gray-700">
                    Avoid generic statements. Claims must be supported by strong evidence. All documentation should be
                    uploaded via your ImmiAccount.
                </p>
            </div>
        </div>
    </div>
</section>
);
};

export default GSRequirement;