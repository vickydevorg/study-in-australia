import React from 'react';

const CostOfLiving = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Cost of Living in Australia</h1>
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-gray-700 mb-4">
            Understanding the cost of living in Australia is essential for international students planning their education journey. 
            Australia offers a high quality of life but comes with corresponding living expenses that vary by city and lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-3">Accommodation</h2>
            <ul className="space-y-2 text-gray-700">
              <li><span className="font-medium">On-campus:</span> AU$150-$350 per week</li>
              <li><span className="font-medium">Shared rental:</span> AU$100-$250 per week</li>
              <li><span className="font-medium">Private rental:</span> AU$250-$550 per week</li>
              <li><span className="font-medium">Homestay:</span> AU$250-$350 per week</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-3">Other Expenses</h2>
            <ul className="space-y-2 text-gray-700">
              <li><span className="font-medium">Groceries:</span> AU$100-$150 per week</li>
              <li><span className="font-medium">Utilities:</span> AU$50-$100 per week</li>
              <li><span className="font-medium">Internet:</span> AU$20-$40 per week</li>
              <li><span className="font-medium">Phone:</span> AU$15-$30 per week</li>
              <li><span className="font-medium">Transport:</span> AU$30-$60 per week</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Cost Comparison by City</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-3 px-4 text-left">City</th>
                  <th className="py-3 px-4 text-left">Accommodation (Weekly)</th>
                  <th className="py-3 px-4 text-left">Food (Weekly)</th>
                  <th className="py-3 px-4 text-left">Transport (Weekly)</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-t">
                  <td className="py-3 px-4">Sydney</td>
                  <td className="py-3 px-4">AU$200-$500</td>
                  <td className="py-3 px-4">AU$120-$170</td>
                  <td className="py-3 px-4">AU$40-$70</td>
                </tr>
                <tr className="border-t">
                  <td className="py-3 px-4">Melbourne</td>
                  <td className="py-3 px-4">AU$180-$450</td>
                  <td className="py-3 px-4">AU$100-$150</td>
                  <td className="py-3 px-4">AU$35-$60</td>
                </tr>
                <tr className="border-t">
                  <td className="py-3 px-4">Brisbane</td>
                  <td className="py-3 px-4">AU$150-$400</td>
                  <td className="py-3 px-4">AU$90-$140</td>
                  <td className="py-3 px-4">AU$30-$55</td>
                </tr>
                <tr className="border-t">
                  <td className="py-3 px-4">Perth</td>
                  <td className="py-3 px-4">AU$140-$380</td>
                  <td className="py-3 px-4">AU$90-$140</td>
                  <td className="py-3 px-4">AU$30-$50</td>
                </tr>
                <tr className="border-t">
                  <td className="py-3 px-4">Adelaide</td>
                  <td className="py-3 px-4">AU$130-$350</td>
                  <td className="py-3 px-4">AU$80-$130</td>
                  <td className="py-3 px-4">AU$25-$45</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Student Visa Financial Requirements</h2>
          <p className="text-gray-700 mb-4">
            When applying for a student visa, you need to demonstrate that you have enough funds to cover your stay in Australia. 
            As of 2023, the Department of Home Affairs requires you to have:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Tuition fees for one academic year</li>
            <li>Living costs of AU$21,041 per year for the main student</li>
            <li>Additional funds for accompanying family members</li>
            <li>Return airfare costs</li>
          </ul>
          <p className="text-gray-700">
            Please note that these amounts may change, so always check the latest requirements on the 
            <a href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500" className="text-blue-600 hover:underline ml-1" target="_blank" rel="noopener noreferrer">
              official Department of Home Affairs website
            </a>.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Budgeting Tips</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="inline-block w-6 h-6 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center mr-2 mt-0.5">1</span>
              <span>Use student discounts - Your student ID card can get you discounts on transport, entertainment, and shopping.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-6 h-6 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center mr-2 mt-0.5">2</span>
              <span>Cook at home - Eating out is expensive in Australia. Try to cook your own meals whenever possible.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-6 h-6 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center mr-2 mt-0.5">3</span>
              <span>Consider share housing - Living with roommates can significantly reduce your accommodation costs.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-6 h-6 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center mr-2 mt-0.5">4</span>
              <span>Look for part-time work - Student visas typically allow you to work up to 20 hours per week during term time.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-6 h-6 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center mr-2 mt-0.5">5</span>
              <span>Use public transport - Public transport is usually cheaper than owning a car or using taxis regularly.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CostOfLiving;