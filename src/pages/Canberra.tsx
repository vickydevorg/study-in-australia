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


	type SectionProps = {
		title: string;
		color: string;
		items: string[];
	};

	const Section: React.FC<SectionProps> = ({ title, color, items }) => (
		<div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
			<div className={`h-2 ${color}`}></div>
			<div className="p-6">
				<div className="flex items-center mb-4 text-indigo-700">
					<h3 className="text-xl font-semibold ml-2">{title}</h3>
				</div>
				<ul className="list-disc list-inside space-y-1 text-gray-700">
					{items.map((item, i) => (
						<li key={i}>{item}</li>
					))}
				</ul>
			</div>
		</div>
	);
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
			<section className="section bg-white py-10">
				<div className="container">
					<div className="text-center mb-16">
						<span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 font-semibold rounded-full text-sm tracking-wide">
							Why Choose Canberra
						</span>
						<h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-800">
							A Global City Full of Opportunities
						</h2>
						<p className="mt-4 mx-auto text-gray-600 text-lg">
							Canberra is Australia’s capital and one of its most welcoming, liveable, and student-friendly cities. Known for its clean air, safe neighborhoods, and high quality of life, over one-third of Canberra’s population was born overseas, making it culturally diverse and globally connected. The city is home to top-ranked universities like ANU and the University of Canberra, and offers a relaxed lifestyle with access to green spaces, modern infrastructure, and world-class museums and galleries — all within minutes of each other. Canberra combines the opportunities of a capital city with the comfort of a close-knit community, making it an ideal place for international students to live, study, and thrive.
						</p>
					</div>

				</div>
			</section>

			<motion.section
				className="bg-gray-50 py-12 px-6 md:px-16"
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				viewport={{ once: true }}
			>
				<div className="max-w-6xl mx-auto space-y-12">
					<h1 className="text-4xl font-bold text-center mb-10 text-primary-700">
						Top Places to Visit in Canberra
					</h1>

					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						<Section
							title="🏛️ Iconic Landmarks & Museums"
							color="bg-purple-600"
							items={[
								'Parliament House – Tour Australia’s political heart, including the House of Reps and Senate.',
								'Australian War Memorial – A moving tribute to military history with a stunning memorial pool.',
								'National Gallery of Australia (NGA) – Home to Indigenous art, international masterpieces, and the famous Blue Poles by Jackson Pollock.',
								'Questacon – Interactive science museum perfect for hands-on learning.',
								'National Museum of Australia – Discover Australia’s social history and Indigenous culture.',
							]}
						/>

						<Section
							title="🌿 Nature & Outdoor Activities"
							color="bg-green-600"
							items={[
								'Lake Burley Griffin – Cycle, kayak, or picnic by the lake with views of the city.',
								'Australian National Botanic Gardens – Explore native flora and bushwalking trails.',
								'Mount Ainslie Lookout – Best panoramic views of Canberra’s city layout.',
								'Tidbinbilla Nature Reserve – Spot kangaroos, koalas, and emus in the wild.',
							]}
						/>

						<Section
							title="🎭 Arts, Culture & Entertainment"
							color="bg-pink-600"
							items={[
								'Canberra Theatre Centre – Catch plays, concerts, and comedy shows.',
								'NewActon Precinct – Trendy artsy district with cafes, bars, and indie cinemas.',
								'Lonsdale Street (Braddon) – Hipster hub with street art, brunch spots, and boutique shopping.',
							]}
						/>

						<Section
							title="🍽️ Food & Nightlife"
							color="bg-orange-500"
							items={[
								'Capital Region Farmers Market – Fresh local produce every Saturday.',
								'Dickson Asian Food District – Best dumplings, ramen, and bubble tea.',
								'Kingston Foreshore – Waterfront dining with upscale restaurants.',
							]}
						/>

						<Section
							title="🎉 Things to Do as a Student"
							color="bg-blue-500"
							items={[
								'Free Events – Enlighten Festival, Floriade (spring flower festival), and National Multicultural Festival.',
								'Student Discounts – Many museums, galleries, and transport options offer student deals.',
								'Clubs & Societies – ANU and UC have active student communities (sports, debating, cultural clubs).',
								'Weekend Getaways – Easy trips to Snowy Mountains, Sydney (3hrs), or the South Coast.',
							]}
						/>

						<Section
							title="🚌 Living in Canberra"
							color="bg-teal-500"
							items={[
								'Affordable compared to Sydney/Melbourne – Shared housing & good public transport.',
								'Bike-Friendly – Dedicated cycling paths around the city.',
								'Four Distinct Seasons – Warm summers, colorful autumns, chilly winters (perfect for cozy café study sessions).',
							]}
						/>

						<Section
							title="✈️ Quick Tips for Students"
							color="bg-red-500"
							items={[
								'Public Transport: MyWay card for buses & light rail.',
								'Part-Time Jobs: Hospitality, tutoring, or university research roles.',
								'Must-Try: A "cheese & wine night" at The Hamlet (Braddon’s food truck hub).',
							]}
						/>
					</div>

					<p className="text-center text-lg font-semibold text-primary-800 mt-12">
						Canberra is more than just politics—it’s a smart, scenic, and student-friendly city with endless opportunities!
					</p>
				</div>
			</motion.section>


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
						src="https://www.australiaforeveryone.com.au/files/act/images/parliament-house4.jpg"
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
