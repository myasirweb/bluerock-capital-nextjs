"use client";
import React from 'react';
import {
  LucideTrendingUp,
  LucideShieldCheck,
  LucideBarChart,
  LucideRocket,
  LucideBuilding,
  LucideAward,
  LucideUsers,
  LucideDollarSign,
  LucideEye,
  LucideArrowRightLeft,
} from 'lucide-react';

const ListingPostlisting = () => {
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
           Listing & Post-Listing
          </h1>
          <p className="text-lg sm:text-xl text-blue-300 max-w-2xl mx-auto">
          Understanding the process of going public and its benefits.
          </p>
        </div>
      </header>
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* What are listed shares? Section */}
        <section className="bg-[#0A102A] p-8 md:p-12 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">

           <h2 className="text-3xl font-semibold text-white flex items-center gap-3 mb-4">
          <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-md">
          <LucideDollarSign className="text-white-400 w-8 h-8" />
          </div>
              What are listed shares?
          </h2>

            <p className="text-gray-400 leading-relaxed">
              Shares are units of ownership interest in a Company or financial asset that provide for an equal distribution in any profits, if any are declared, in the form of dividends. The two main types of shares are common shares and preferred shares. Physical paper stock certificates have been replaced with electronic recording of stock shares, just as mutual fund shares are recorded electronically.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md h-72 rounded-3xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105">
              <img
                src="/bluerock_ceo.jpg"
                alt="Image representing listed shares"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950 to-transparent opacity-70"></div>
            </div>
          </div>
        </section>

        {/* What does it mean to list on an exchange? Section */}
        <section className="bg-[#0A102A] p-8 md:p-12 rounded-3xl shadow-2xl flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md h-72 rounded-3xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105">
              <img
                src="/bluerock_office.jpg"
                alt="Image representing a stock exchange listing"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950 to-transparent opacity-70"></div>
            </div>
          </div>
          <div className="md:w-1/2 space-y-6">

         <h2 className="text-3xl font-semibold text-white flex items-center gap-3 mb-4">
          <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-md">
          <LucideBuilding className="text-white-400 w-8 h-8" />
          </div>
              What does it mean to list on an exchange?
          </h2>


            <p className="text-gray-400 leading-relaxed">
              Listing means the formal admission of securities of a company to the trading platform of the Exchange. It is a significant occasion for a company in the journey of its growth and development. It enables a company to raise capital while strengthening its structure and reputation. It provides liquidity and transparency to investors and ensures effective monitoring of compliance of the issuer and trading of the securities in the interest of investors.
            </p>
          </div>
        </section>

        {/* Advantages of listing issuing shares Section */}
        <section className="p-8 md:p-12 space-y-12">

         <h2 className="text-3xl font-semibold text-white text-center flex items-center justify-center gap-3">
          <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-md">
          <LucideShieldCheck className="text-white-400 w-8 h-8" />
          </div>
               Advantages of listing issuing shares
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#0A102A] p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 space-y-4">
              <div className="flex justify-center">
                <div className="p-4 rounded-full bg-[#121832] border border-blue-500 shadow-md flex items-center justify-center">
                  <LucideRocket className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-lg text-white text-white text-center">Access to Capital for Growth</h3>
            </div>
            <div className="bg-[#0A102A] p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 space-y-4">
              <div className="flex justify-center">
                <div className="p-4 rounded-full bg-[#121832] border border-blue-500 shadow-md flex items-center justify-center">
                  <LucideEye className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-lg text-white text-white text-center">Enhanced Visibility</h3>
            </div>
            <div className="bg-[#0A102A] p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 space-y-4">
              <div className="flex justify-center">
                <div className="p-4 rounded-full bg-[#121832] border border-blue-500 shadow-md flex items-center justify-center">
                  <LucideArrowRightLeft className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-lg text-white text-white text-center">Liquidity</h3>
            </div>
            <div className="bg-[#0A102A] p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 space-y-4">
              <div className="flex justify-center">
                <div className="p-4 rounded-full bg-[#121832] border border-blue-500 shadow-md flex items-center justify-center">
                  <LucideUsers className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-lg text-white text-white text-center">Increase in employee morale</h3>
            </div>
            <div className="bg-[#0A102A] p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 space-y-4">
              <div className="flex justify-center">
                <div className="p-4 rounded-full bg-[#121832] border border-blue-500 shadow-md flex items-center justify-center">
                  <LucideBarChart className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-lg text-white text-white text-center">Transparency and efficiency</h3>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ListingPostlisting;
