import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { universitiescanberra } from "../data/universities";
import { Building2, BusFront, CarFront, ThermometerSun } from 'lucide-react';

const Canberra: React.FC = () => {
  const [expanded, setExpanded] = useState(null);
  const toggle = (index: any) => {
    setExpanded(expanded === index ? null : index);
  };
    React.useEffect(() => {
        document.title = 'Student Visa Information | Study in Australia';
    }, []);

  const infoData = [
    {
      title: "Climate",
      icon: <ThermometerSun className="w-5 h-5 text-primary-600" />,
      content:
        "Temperate continental – warm summers (Dec–Feb, 12–28°C) and cold winters (Jun–Aug, -2–12°C). Frost is common in winter. Low humidity and clear skies most of the year.",
    },
    {
      title: "Working Culture",
      icon: <Building2 className="w-5 h-5 text-primary-600" />,
      content:
        "Government-driven jobs dominate Canberra, especially in public service, defence, and policy. Work hours are typically 9 AM–5 PM, with a formal dress code and a strong work-life balance.",
    },
    {
      title: "Transport in Canberra",
      icon: <BusFront className="w-5 h-5 text-primary-600" />,
      content: (
        <>
          <p>
            Modes: Buses and light rail operated by <strong>Transport Canberra</strong>.
          </p>
          <ul className="list-disc list-inside mt-2 text-sm text-gray-600 space-y-1">
            <li>Light Rail: 1 line (Gungahlin to City).</li>
            <li>Bus Network: Extensive but mostly bus-dependent.</li>
            <li>Smart Card: <strong>MyWay</strong>.</li>
            <li>Pros: Frequent "Rapid" buses, cheap fares.</li>
            <li>Cons: No trains, limited off-peak services, decentralized coverage.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Driving & License Info",
      icon: <CarFront className="w-5 h-5 text-primary-600" />,
      content: (
        <>
          <p>
            Licensing handled by <strong>Access Canberra</strong>.
          </p>
          <ul className="list-disc list-inside mt-2 text-sm text-gray-600 space-y-1">
            <li>Learner’s Permit (15y 9mo+): Pass a theory test.</li>
            <li>Must hold for 6 months (if under 25) before practical test.</li>
            <li>P1 License (Red P): 1 year → P2 License (Green P): 2 years.</li>
            <li>No logbook or minimum driving hours required.</li>
            <li>Overseas drivers can drive for 3 months before converting.</li>
          </ul>
        </>
      ),
    },
  ];


    return (
        <>
        <section className="relative bg-primary-800 py-12 md:py-24">
            <img
            src="/images/CANBERRA.png"
            alt="Canberra Skyline"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Study in Canberra</h1>
            </div>
            </div>
        </section>


        <motion.section
            className="bg-primary-50 py-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Top Universities & Master’s Programs
            </h2>
            <p className="text-xl text-gray-600 text-center mb-6">
                Canberra, Australia's capital, is home to world-class universities offering high-quality education with strong ties to government, research, and industry.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {universitiescanberra.map((uni, index) => (
                <motion.div
                    key={index}
                    className="bg-white border border-gray-400 rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden p-6"
                    whileHover={{ scale: 1.03 }}
                >
                    <div className="flex items-center gap-2 mb-4">
                    <HiOutlineAcademicCap className="text-primary-600 w-6 h-6" />
                    <h3 className="text-lg font-semibold">{uni.name}</h3>
                    </div>
                    <p className="text-primary-700 text-sm font-semibold mb-2">{uni.ranking}</p>

                    <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-1">Popular Master&apos;s Programs:</h4>
                    <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                        {uni.programs.map((program, idx) => (
                        <li key={idx}>{program}</li>
                        ))}
                    </ul>
                    </div>

                    {uni.keyFeatures && (
                    <div className="mb-4">
                        <h4 className="font-semibold text-sm mb-1">Key Features:</h4>
                        <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                        {uni.keyFeatures.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                        ))}
                        </ul>
                    </div>
                    )}

                    <a
                    href={uni.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full mt-4 bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium text-center hover:bg-primary-700 transition"
                    >
                    Visit Website
                    </a>
                </motion.div>
                ))}
            </div>

            {/* <div className="container mx-auto py-6">
                <div className="flex flex-col md:flex-row border border-gray-400 rounded-2xl overflow-hidden hover:shadow-xl transition">
                <img src="https://region.com.au/wp-content/uploads/2021/07/2021-07-13-NLA-Letters-13-1200x630.jpg" alt="Study Areas in Canberra" className="max-h-[315px] max-h-[400px] object-contain rounded-lg" />
                <div className="bg-white p-8 md:w-1/2">
                    <h3 className="text-2xl font-bold mb-4">Key Study Areas in Canberra</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li><strong>Business & Management:</strong> MBA, Finance, Marketing</li>
                    <li><strong>Engineering & IT:</strong> AI, Robotics, Data Science</li>
                    <li><strong>Health Sciences:</strong> Medicine, Nursing, Public Health</li>
                    <li><strong>Law & Social Sciences</strong></li>
                    <li><strong>Creative Arts & Design:</strong> UTS & UNSW are top-ranked</li>
                    <li><strong>Environmental Science & Sustainability</strong></li>
                    </ul>
                </div>
                </div>
            </div> */}

            </div>
        </motion.section>

    <motion.section
        className="py-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
    >
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <img
            // src="https://cdn.uniacco.com/blog/wp-content/uploads/2020/12/09124125/srikant-sahoo-r2L6vCKaVRk-unsplash.jpg"
            src="https://img.freepik.com/free-vector/canberra-australia-line-skyline-with-white-background-vector-illustration-business-travel-tourism-concept-with-modern-buildings-image-presentation-banner-website_596401-371.jpg"
            alt="Info Visual"
            className="w-full max-h-[400px] object-contain rounded-xl shadow-lg"
        />

        <div>
            <h4 className="text-4xl font-bold text-primary mb-8 text-left">Other's Information</h4>

            <div className="space-y-4">
            {infoData.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                    className="w-full flex items-center justify-between p-4 hover:bg-gray-100"
                    onClick={() => toggle(index)}
                >
                    <div className="flex items-center gap-3">
                    {item.icon}
                    <span className="text-base font-semibold">{item.title}</span>
                    </div>
                    <span className="text-xl">{expanded === index ? "−" : "+"}</span>
                </button>
                {expanded === index && (
                    <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="p-4 pt-0 text-sm text-gray-700 leading-relaxed"
                    >
                    {item.content}
                    </motion.div>
                )}
                </div>
            ))}
            </div>
        </div>
        </div>
    </motion.section>
        </>
    );
};

export default Canberra;
