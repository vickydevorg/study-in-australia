import React from 'react';
import { motion } from 'framer-motion';
import { FileText, FolderCheck, Landmark, WalletCards, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import homePageContent from '../../data/homePageContent.json';

const ApplicationGuide: React.FC = () => {
  const guide = homePageContent.applicationGuide;

  const cards = [
    {
      icon: FileText,
      title: 'Student Documents',
      items: guide.studentDocuments,
      accent: 'from-emerald-500 to-green-400',
    },
    {
      icon: FolderCheck,
      title: "Parent's Financial Documents",
      items: guide.parentsFinancialDocuments,
      accent: 'from-green-500 to-lime-400',
    },
    {
      icon: Landmark,
      title: 'Additional Sponsor Documents',
      items: guide.additionalSponsorDocuments,
      accent: 'from-teal-500 to-emerald-400',
    },
    {
      icon: WalletCards,
      title: 'Available Funds Proof',
      items: guide.availableFundsProof,
      accent: 'from-lime-500 to-green-400',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(220,252,231,0.9),_transparent_24%)]" />
      <div className="container relative">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 xl:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 lg:sticky lg:top-24"
          >
            <div className="overflow-hidden rounded-[32px] border border-emerald-100 bg-white shadow-xl">
              <div className="border-b border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-green-50 p-8">
                <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm">
                  Application Process
                </span>
                <h2 className="mt-5 text-3xl md:text-4xl font-bold text-slate-900">
                  {guide.hyperlinkLabel}
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-600">
                  Prepare your application file with academic records, work documents, financial evidence, sponsor proofs, and GS-related support before admissions and visa planning.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-emerald-100 bg-white p-4">
                    <p className="text-sm font-semibold text-emerald-700">4 key areas</p>
                    <p className="mt-1 text-sm text-slate-600">Documents, sponsors, funds, and compliance items.</p>
                  </div>
                  <div className="rounded-2xl border border-emerald-100 bg-white p-4">
                    <p className="text-sm font-semibold text-emerald-700">Ready to review</p>
                    <p className="mt-1 text-sm text-slate-600">Organized checklists for quicker preparation.</p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80"
                  alt="Application planning desk"
                  className="h-56 w-full rounded-[24px] object-cover"
                />
                <div className="mt-6">
                  <Link to="/application-process" className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 to-green-500 px-6 py-3 text-white font-semibold shadow-lg hover:shadow-xl transition">
                    Detailed Application Guide
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-8">
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative overflow-hidden rounded-[30px] border border-emerald-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl"
              >
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${card.accent}`} />
                <div className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${card.accent} text-white shadow-md`}>
                  <card.icon className="w-5 h-5" />
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-slate-900">{card.title}</h3>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
                  {card.items.map((item) => (
                    <li key={item} className="rounded-2xl border border-emerald-100 bg-gradient-to-r from-white to-emerald-50/60 px-4 py-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationGuide;
