import React, { useState } from 'react';
import { ThermometerSun, Building2, BusFront, Briefcase, CarFront, Award, Stethoscope, BookOpen, Laptop } from 'lucide-react';
import { motion } from 'framer-motion';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { universitiesSydney } from "../data/universities";

const Sydney: React.FC = () => {
    const [expanded, setExpanded] = useState(null);
    const toggle = (index: any) => {
        setExpanded(expanded === index ? null : index);
    };
    React.useEffect(() => {
        document.title = 'Student Visa Information | Study in Australia';
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    const infoData = [
        {
            title: "Climate",
            icon: <ThermometerSun className="w-5 h-5 text-primary-600" />,
            content:
                "Humid subtropical – warm summers (Dec–Feb, 18–26°C) and mild winters (Jun–Aug, 8–17°C). High humidity in summer, occasional heavy rain.",
        },
        {
            title: "Working Culture",
            icon: <Building2 className="w-5 h-5 text-primary-600" />,
            content:
                "Corporate and competitive – finance, tech, and law dominate. Business formal in CBD, smart casual in creative industries. Longer hours in finance (some workplaces expect late finishes). Networking is crucial (many after-work events).",
        },
        {
            title: "Public Transport",
            icon: <BusFront className="w-5 h-5 text-primary-600" />,
            content: (
                <>
                    <p>
                        Modes: Trains, buses, ferries, light rail. Managed by{" "}
                        <strong>Transport for NSW</strong>.
                    </p>
                    <ul className="list-disc list-inside mt-2 text-sm text-gray-600 space-y-1">
                        <li>Trains: Extensive (Sydney Trains + intercity).</li>
                        <li>Ferries: Iconic (e.g., Manly, Parramatta River).</li>
                        <li>Light Rail: 2 lines (CBD & Inner West).</li>
                        <li>Buses: Extensive but traffic-delayed.</li>
                        <li>Smart Card: <strong>Opal</strong>.</li>
                        <li>Coverage: Best in Australia (but congestion issues).</li>
                        <li>Pros: Ferries are scenic, frequent trains.</li>
                        <li>Cons: Expensive, train delays common.</li>
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
                        Licensing handled by <strong>Service NSW</strong>.
                    </p>
                    <ul className="list-disc list-inside mt-2 text-sm text-gray-600 space-y-1">
                        <li>Learner’s Permit (16+): Pass theory test.</li>
                        <li>Hazard Perception Test (HPT): After 10 months.</li>
                        <li>Practical Test: Complete 120+ hours (20 at night).</li>
                        <li>P1 License (Red P): Must be 17+, valid for 1 year.</li>
                        <li>P2 License (Green P): Valid for 2 years.</li>
                        <li>Full License: Granted after completing P2.</li>
                        <li>Logbook mandatory for under 25s.</li>
                        <li>Overseas license holders can drive for up to 3 months.</li>
                    </ul>
                </>
            ),
        },
    ];

    const accommodationData = [
        {
            title: "Co-renting",
            content:
                "Co-renting in Sydney means two or more people rent a property together, sharing legal responsibility. All co-renters must be on the rental agreement and are jointly responsible for rent and property upkeep.",
            points: [
                "Each tenant is listed on the rental agreement.",
                "All co-renters are responsible for rent, bills, and maintenance.",
                "Conflicts should be resolved internally.",
                "The landlord must be notified when a tenant joins or leaves.",
            ],
            image: 'https://media.istockphoto.com/id/1320795558/photo/signing-on-the-agreement-term-of-car-rental-service-business-and-transportation-service.jpg?s=612x612&w=0&k=20&c=hc4z-DWUnx-O9u3AgtEQclZdFfWnO2Ch8heHJg5Q06U='
        },
        {
            title: "Sub-letting",
            content:
                "Sub-letting happens when a tenant rents out part or all of the property to someone else. This requires written permission from the property owner or real estate agent in Sydney.",
            points: [
                "Written permission from the rental provider is mandatory.",
                "Illegal sub-letting may lead to eviction.",
                "The main tenant handles repairs and rent.",
                "Unauthorized sub-tenants can be removed.",
            ],
            image: 'https://www.financialexpress.com/wp-content/uploads/2020/01/rent660.jpg?w=440'
        },
        {
            title: "Bond & Responsibilities",
            content:
                "In Sydney, bonds protect both parties. Co-renters typically split the bond equally. For sub-lets, the head tenant is responsible for lodging the bond correctly.",
            points: [
                "Bond must be lodged with NSW Fair Trading (Rental Bonds Online).",
                "Co-renters should update bond details when someone moves out.",
                "Incorrect handling may delay bond refunds.",
                "Disputes can be taken to NSW Civil and Administrative Tribunal (NCAT).",
            ],
            image: 'https://media.gettyimages.com/id/588263194/photo/fun-outdoors.jpg?s=612x612&w=gi&k=20&c=BWsmN7ENMg003ywW2eH5MU65qE8b1XFRu6ePUq3tC2Y='
        },
    ]

    return (
        <>
            <section className="relative bg-primary-800 py-12 md:py-24">
                <img
                    src="https://cdn.britannica.com/86/156586-050-EFB37140/Harbour-Bridge-Sydney.jpg"
                    alt="Melbourne Skyline"
                    className="absolute inset-0 w-full h-full object-cover opacity-30 "
                />
                <div className="container relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6"> Study in Sydney </h1>
                    </div>
                </div>
            </section>

            <section className="section bg-white py-10">
                <div className="container">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 font-semibold rounded-full text-sm tracking-wide">
                            Why study in NSW 
                        </span>
                        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-800">
                            Employability
                        </h2>
                        <p className="mt-4 max-2xl mx-auto text-gray-600 text-lg">
                            Education institutions in Sydney and NSW focus on developing practical skills, industry experience, and global qualifications to help students succeed in their careers. Courses are designed to be job-ready, with a strong emphasis on communication, networking, and entrepreneurial thinking. Students gain transferable skills, build valuable connections through internships and mentorships, and graduate with a globally recognised qualification.
                            <br/><b className='text-primary-600'>NSW universities and training providers lead in student outcomes, preparing students for success now and in the future.</b>
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-14">
                        <span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 font-semibold rounded-full text-sm tracking-wide">
                            Go whale watching
                        </span>
                        <p className="text-gray-600 max-xl mx-auto mt-4">
                            During May to November each year, the NSW coast is known as the “Humpback Highway''. You’re most likely to spot humpback and southern right whales, but you may see rarer species like orcas and blue whales. Stroll along cliff tops and lookouts or book a spot on a <a href='https://www.visitnsw.com/things-to-do/nature-and-parks/whale-watching' target='_blank' className='text-primary-600'><b>whale-watchingExternal Link</b> </a> cruise for a closer look.
                        </p>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
                    >

                        <div className="relative bg-white border-l-4 border-red-500 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">South Coast</h3>
                            <p className="text-gray-600 text-sm">
                                Visit the <a href='https://www.visitnsw.com/destinations/south-coast/food-and-wine' target='_blank' className='text-primary-600'><b>South CoastExternal Link</b></a>  for all things seafood. There are so many local producers in this region and sample oysters, prawns, kingfish and tuna as you travel the coast. For a budget option, enjoy fresh takeaway fish and chips on the beach.
                            </p>
                        </div>

                        <div className="relative bg-white border-l-4 border-blue-500 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Cabramatta</h3>
                            <p className="text-gray-600 text-sm">
                                Famous for its Vietnamese restaurants, <a href='https://www.sydney.com/destinations/sydney/sydney-west/cabramatta' target='_blank' className='text-primary-600'><b>CabramattaExternal Link</b></a>  is home to some of Sydney’s best casual restaurants. Every local will have their own favourite spot for rich pho, filling banh mi or fresh goi cuon. If you’re not sure where to start, join a food tour of the area to learn more about its dishes and history.
                            </p>
                        </div>

                        <div className="relative bg-white border-l-4 border-green-500 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Hunter Valley</h3>
                            <p className="text-gray-600 text-sm">
                               The <a href='https://www.visitnsw.com/destinations/hunter/hunter-valley' target='_blank' className='text-primary-600'><b>Hunter Valley,External Link</b></a>  located in the <a href='https://www.study.nsw.gov.au/why-nsw/destinations/newcastle-and-hunter/' target='_blank' className='text-primary-600'><b>Hunter Region,</b></a> is best known as the birthplace of Australian wines. It’s also a go to for all things cheese and chocolate – there's even an annual Hunter Valley Cheese and Chocolate Festival!

                            </p>
                        </div>

                        <div className="relative bg-white border-l-4 border-yellow-500 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Ashfield</h3>
                            <p className="text-gray-600 text-sm">
                                Known as ‘Little Shanghai’, Ashfield in Sydney’s Inner West is the perfect place to try authentic Chinese dumplings, shallot pancakes, fried dough sticks and spring rolls. You can take a large group of friends to one of the area’s yum cha restaurants.
                            </p>
                        </div>

                        <div className="relative bg-white border-l-4 border-purple-500 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">North Coast – Woolgoolga</h3>
                            <p className="text-gray-600 text-sm">
                                <a href='https://www.visitnsw.com/destinations/north-coast/coffs-harbour-area/woolgoolga' target='_blank' className='text-primary-600'><b>WoolgoolaExternal Link</b></a>  on <a href='https://www.study.nsw.gov.au/why-nsw/destinations/north-coast/' target='_blank' className='text-primary-600'><b>NSW’s North Coast</b></a> is widely known for its blueberry industry. The area is full of blueberry farms you can visit. It’s also home to the annual Blues and Berries festival, where you can enjoy blueberry pie while listening to live blues music.

                            </p>
                        </div>

                        <div className="relative bg-white border-l-4 border-pink-500 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Leichhardt</h3>
                            <p className="text-gray-600 text-sm">
                                Sydney’s ‘Little Italy’, Leichhardt is the heart of NSW’s Italian community. Taste the delights of Italian-owned businesses along Norton Street. Enjoy an espresso, biscotti and cannoli from one of the many cafés or bakeries or take your friends out for pizza and pasta.

                            </p>
                        </div>

                        <div className="relative bg-white border-l-4 border-indigo-500 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Northern NSW</h3>
                            <p className="text-gray-600 text-sm">
                                 With its warmer weather, <a href='https://www.visitnsw.com/destinations/north-coast' target='_blank' className='text-primary-600'><b>Northern NSWExternal Link</b></a>  is ideal for growing fresh, tropical fruits and macadamia nuts. Look no further if you want to try Australia’s best avocado on toast. There are a range of local farmers markets you can visit so you can stock up on produce.

                            </p>
                        </div>

                        <div className="relative bg-white border-l-4 border-teal-500 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Young – Country NSW</h3>
                            <p className="text-gray-600 text-sm">
                                <a href='https://www.visitnsw.com/destinations/country-nsw/young-area/young' target='_blank' className='text-primary-600'><b>YoungExternal Link</b></a>  is Australia’s cherry capital. Located in <a href='https://www.study.nsw.gov.au/why-nsw/destinations/regional-nsw/' target='_blank' className='text-primary-600'><b>Country NSW,</b></a> this is a must-visit between late October and late January. During this time, you can try cherry picking and eat fresh fruit from the trees. There are over 20 stone fruit orchards to explore in the area, as well as the National Cherry Festival, held on the first weekend in December.
                            </p>
                        </div>

                        <div className="relative bg-white border-l-4 border-red-500 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Parramatta</h3>
                            <p className="text-gray-600 text-sm">
                                Whether you're craving buttery, flaky naan bread straight from the tandoor, or a Goan prawn curry in a rich, spicy sauce, the vast array of eateries in <a href='https://atparramatta.com/discover/eat-and-drink/cheap-eats/five-unique-indian-eateries-in-parramatta' target='_blank' className='text-primary-600'><b>Parramatta's CBDExternal Link</b></a>  and surrounding neighbourhoods are ready to take your tastebuds on a journey.

                            </p>
                        </div>

                    </motion.div>
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
                        Melbourne is a top destination for international students, offering world-class universities and a wide range of master's degree programs. Here’s a guide to some of the best universities and popular courses for international students:
                    </p>

                    {/* Grid - 3 items in a row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {universitiesSydney.map((uni, index) => (
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

                                {uni.scholarships && (
                                    <div className="mb-4">
                                        <h4 className="font-semibold text-sm mb-1">Scholarships:</h4>
                                        <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                                            {uni.scholarships.map((scholarship, idx) => (
                                                <li key={idx}>{scholarship}</li>
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

                </div>
            </motion.section>

            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                    <div className="mb-14 text-center">
                        <span className="inline-block px-4 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium mb-2">
                            Living in Sydney
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                            Accommodation Options
                        </h2>
                        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                            Understand co-renting, sub-letting, and your responsibilities while living and studying in Sydney.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        {accommodationData.map((data,) => (
                            <>
                                <div>
                                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                                        {data.title}
                                    </h2>
                                    <p className="text-gray-600 mb-6">{data.content}</p>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        {data.points.map((point, idx) => (
                                            <li key={idx}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="overflow-hidden rounded-2xl shadow-md">
                                    <img
                                        src={data.image}
                                        alt="Student Accommodation in Sydney"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </section>


            <motion.section
                className="py-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <img
                        src="https://cdn.britannica.com/86/156586-050-EFB37140/Harbour-Bridge-Sydney.jpg"
                        alt="Info Visual"
                        className="w-full max-h-[400px] object-contain rounded-xl shadow-lg"
                    />

                    <div>
                        <div>
                            <h4 className="text-4xl font-bold text-primary mb-8 text-left">Other's Information</h4>
                        </div>
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

export default Sydney;