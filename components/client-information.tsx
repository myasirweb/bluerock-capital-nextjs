"use client";
import React from 'react';
import {
  LucideBarChart,
  LucideArrowRightLeft,
  LucideFileText,
  LucideDollarSign,
  LucideShieldCheck,
  LucideBriefcase
} from 'lucide-react';

const ClientInformation = () => {
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
           Client Information
          </h1>
          <p className="text-lg sm:text-xl text-blue-300 max-w-2xl mx-auto">
            Everything you need to know about our services.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* Investment Instruments Section */}
        <section className="bg-[#0A102A] p-8 md:p-12 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
          

           <h2 className="text-3xl font-semibold text-white flex items-center gap-3 mb-4">
          <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-md">
          <LucideBriefcase className="text-white-400 w-8 h-8" />
          </div>
               Financial Instruments
          </h2>

            <p className="text-gray-400 leading-relaxed">
              Multiple studies have shown that over long periods of time, financial instruments such as stocks, bonds, and ETF’s (Exchange Traded Funds) generate investment returns that are far greater than others.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md h-72 rounded-3xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105">
              <img
                src="/chess.jpg"
                alt="A positive financial graph with a chart showing growth"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950 to-transparent opacity-70"></div>
            </div>
          </div>
        </section>

        {/* How Does Trading Work? Section */}
        <section className="bg-[#0A102A] p-8 md:p-12 rounded-3xl shadow-2xl space-y-12">

         <h2 className="text-3xl font-semibold text-white text-center flex items-center justify-center gap-3">
          <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-md">
          <LucideArrowRightLeft className="text-white-400 w-8 h-8" />
          </div>
              How Does Trading work?
          </h2>

          <div className="space-y-6 text-center max-w-4xl mx-auto">
            <p className="text-gray-400 leading-relaxed">
              To trade online you first must open an account with a broker (in this case Blue Rock Financial Services), once that process is finalized you may place an order yourself through our online system or contact one of our brokers to assist you. Once the order is placed in the market and depending on the price which you have selected, the exchange will automatically try to match a buyer and a seller.
            </p>
            <div className="relative w-full max-w-lg h-72 rounded-3xl overflow-hidden shadow-2xl mx-auto transition-transform duration-300 hover:scale-105">
              <img
                src="/stockmarket_monitor.jpg"
                alt="Diagram showing the trading process with a buyer, seller, and exchange"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950 to-transparent opacity-70"></div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Once a buyer and seller are matched, the order is executed and settled in a maximum two business days (buyer pays the money and receives the securities, seller delivers the securities and receives the money).
            </p>
          </div>
        </section>

        {/* How easy is it? Section */}
        <section className="p-8 md:p-12 space-y-12">

         <h2 className="text-3xl font-semibold text-white text-center flex items-center justify-center gap-3">
          <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-md">
          <LucideShieldCheck className="text-white-400 w-8 h-8" />
          </div>
              How easy is it?
          </h2>
          <div className="bg-[#0A102A] p-8 md:p-12 rounded-3xl shadow-lg flex flex-col items-center justify-center gap-6 text-center">
            <div className="flex justify-center">
                <div className="p-4 rounded-full bg-[#121832] border border-blue-500 shadow-md flex items-center justify-center">
                  <LucideFileText className="w-10 h-10 text-white" />
                </div>
              </div>
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
              Opening an account with Blue Rock Financial Services is very easy, we require only a small number of documents and the account can be opened and fully functional the very next day.
            </p>
          </div>
          <div className="flex justify-center mt-12">
            <div className="relative w-full max-w-lg h-72 rounded-3xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105">
              <img
                src="/stockmarket.jpg"
                alt="Illustration of a quick and easy process to open an account"
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

export default ClientInformation;
