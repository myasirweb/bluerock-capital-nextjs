"use client";
import React from "react";
import {
  LucideBarChart,
  LucideShieldCheck,
  LucideFileText,
  LucideCoins,
  LucideClock,
  LucideTrendingUp,
  LucideWallet,
  LucideLink,
} from "lucide-react";

const BucharestStockExchange = () => {
  return (
    <div className="bg-[#050A19] text-gray-300 min-h-screen font-sans">

      <header
        className="relative py-20 text-center px-4 rounded-b-3xl shadow-lg bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/counter.jpg')" }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60 rounded-b-3xl"></div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            BUCHAREST STOCK EXCHANGE
          </h1>
          <p className="text-lg sm:text-xl text-blue-300 max-w-2xl mx-auto">
            A brief history and the advantages of the local market.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Public Offers Section */}
        <section className="bg-[#0A102A] p-8 md:p-12 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-semibold text-white mb-4">
              Public offers brokered by S.S.I.F. Blue Rock Financial Services
              S.A
            </h2>
            <h3 className="text-xl font-bold text-blue-300">
              Increase In Share Capital – PERSEUS FINTECH S.A. – PVBS
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <LucideFileText className="text-white w-5 h-5" />
                <a
                  href="/bucharest-pdf/D-728-prospect-UE-crestere-Perseus-Fintech-19-iulie-2023.pdf"
                  className="text-gray-400 hover:text-blue-300 underline"
                >
                  ASF Decision 728
                </a>
              </li>

              <li className="flex items-center gap-2">
                <LucideFileText className="text-white w-5 h-5" />
                <a
                  href="/bucharest-pdf/Prospect-UE-crestere-Perseus-Fintech-final-aprobat-19-iulie-2023-v2.pdf"
                  className="text-gray-400 hover:text-blue-300 underline"
                >
                  Terms & Conditions
                </a>
              </li>

              <li className="flex items-center gap-2">
                <LucideFileText className="text-white w-5 h-5" />
                <a
                  href="/bucharest-pdf/Formular-Subscriere-PVBS.pdf"
                  className="text-gray-400 hover:text-blue-300 underline"
                >
                  Subscription Form
                </a>
              </li>

              <li className="flex items-center gap-2">
                <LucideFileText className="text-white w-5 h-5" />
                <a
                  href="/bucharest-pdf/Formular-retragere-a-acceptului-de-subscriere-PVBS.pdf"
                  className="text-gray-400 hover:text-blue-300 underline"
                >
                  Subscription Acceptance Withdrawal Form
                </a>
              </li>

              <li className="flex items-center gap-2">
                <LucideFileText className="text-white w-5 h-5" />
                <a
                  href="/bucharest-pdf/Notificare-inchidere-oferta-PVBS.pdf"
                  className="text-gray-400 hover:text-blue-300 underline"
                >
                  Subscription Closing Notice
                </a>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md h-72 rounded-3xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105">
              <img
                src="/bursa_de.jpg"
                alt="Image representing public offers and finance"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950 to-transparent opacity-70"></div>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="bg-[#0A102A] p-8 md:p-12 rounded-3xl shadow-2xl space-y-12">
          <h2 className="text-3xl font-semibold text-white text-center flex items-center justify-center gap-3">
            <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-md">
              <LucideClock className="text-white-400 w-8 h-8" />
            </div>
            History
          </h2>
          <div className="space-y-6 text-center max-w-4xl mx-auto">
            <p className="text-gray-400 leading-relaxed">
              The Bucharest Stock Exchange was initially created as a
              commodities Exchange back in 1839, and on December 1st 1882, the
              exchange was transformed into a stock exchange. During the
              communist regime the Bucharest stock exchange was closed and
              reopened again in 1995.
            </p>
            <div className="relative w-full max-w-lg h-72 rounded-3xl overflow-hidden shadow-2xl mx-auto transition-transform duration-300 hover:scale-105">
              <img
                src="/history.jpg"
                alt="Historical building of the Bucharest Stock Exchange"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950 to-transparent opacity-70"></div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Since then, the Exchange has seen significant growth and
              development through milestones. On February 2008, Erste Bank
              listed on the BVB and became the first international company
              listed on this market, then the BVB listed itself under the symbol
              “BVB”. As of 2014 the “AeRo” market was launched. AeRo is an MTF
              which allows SME’s and start-up companies to list receive
              coverage.
            </p>
            <p className="text-gray-400 leading-relaxed">
              As of September 2019 Romania was promoted to “emerging market”
              status by FTSE Russell, effective September 2020.
            </p>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="p-8 md:p-12 space-y-12">
          <h2 className="text-3xl font-semibold text-white text-center flex items-center justify-center gap-3">
            <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-md">
              <LucideShieldCheck className="text-white-400 w-8 h-8" />
            </div>
            Advantages
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#0A102A] p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 space-y-4">
              <div className="flex justify-center">
                <div className="p-4 rounded-full bg-[#121832] border border-blue-500 shadow-md flex items-center justify-center">
                  <LucideCoins className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white text-center">
                High dividend yields
              </h3>
            </div>
            <div className="bg-[#0A102A] p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 space-y-4">
              <div className="flex justify-center">
                <div className="p-4 rounded-full bg-[#121832] border border-blue-500 shadow-md flex items-center justify-center">
                  <LucideTrendingUp className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white text-center">
                Investing in a country of high growth
              </h3>
            </div>
            <div className="bg-[#0A102A] p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 space-y-4">
              <div className="flex justify-center">
                <div className="p-4 rounded-full bg-[#121832] border border-blue-500 shadow-md flex items-center justify-center">
                  <LucideWallet className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white text-center">
                Exposure to the Romanian Currency (RON)
              </h3>
            </div>
            <div className="bg-[#0A102A] p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 space-y-4">
              <div className="flex justify-center">
                <div className="p-4 rounded-full bg-[#121832] border border-blue-500 shadow-md flex items-center justify-center">
                  <LucideBarChart className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white text-center">
                Good place to start for beginners
              </h3>
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <div className="relative w-full max-w-lg h-72 rounded-3xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105">
              <img
                src="/behnam-norouzi.jpg"
                alt="Image of the Bucharest Stock Exchange building"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950 to-transparent opacity-70"></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BucharestStockExchange;
