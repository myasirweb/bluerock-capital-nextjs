"use client";
import React from 'react';
import {
  LucideTarget,
  LucideBarChart,
  LucideClock,
  LucideTrophy,
  LucideLightbulb,
  LucideBriefcase,
} from 'lucide-react';

const Description = () => {
  return (
    <div className="bg-[#050A19] text-gray-300 min-h-screen font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        body { font-family: 'Inter', sans-serif; }
      `}</style>
<header
        className="relative py-20 text-center px-4 rounded-b-3xl shadow-lg bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/counter.jpg')" }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60 rounded-b-3xl"></div>
        
        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
           Description
          </h1>
          <p className="text-lg sm:text-xl text-blue-300 max-w-2xl mx-auto">
           Understand the role of an asset manager at Blue Rock Financial Services.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* What is an Asset Manager Section */}
        <section className="bg-[#0A102A] p-8 md:p-12 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-semibold text-white flex items-center gap-2">
              <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-md">
               <LucideTrophy className="text-white-400 w-8 h-8" />
              </div>
                 What is an asset manager?
              </h2>



            <p className="text-gray-400 leading-relaxed">
              Asset managers at Blue Rock Financial Services are primarily responsible for creating and managing investment allocations for private clients. Some portfolio managers work with individuals and families, while others focus their attention on institutional or corporate investors.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md h-72 rounded-3xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105">
              <img
                src="/financial-data.jpg"
                alt="A professional analyzing financial charts"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950 to-transparent opacity-70"></div>
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section className="bg-[#0A102A] p-8 md:p-12 rounded-3xl shadow-2xl space-y-12">
          <h2 className="text-3xl font-semibold text-white text-center flex items-center justify-center gap-2">
          <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-md">
          <LucideLightbulb className="text-white-400 w-8 h-8" />
          </div>
              How does it work?
          </h2>



          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <p className="text-gray-400 leading-relaxed">
                Clients of Blue Rock Financial Services are placed into investment allocations developed or managed by an asset manager after suitability is established. An asset manager determines a client’s appropriate level of risk based on the client’s personal financial situation, time horizon, risk preferences, return expectations and market conditions. To achieve this successfully, portfolio managers perform an interview to fully understand a client’s investment needs and ensure those needs are met.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md h-72 rounded-3xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105">
                <img
                  src="/counter.jpg"
                  alt="A financial consultant in a meeting with a client"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950 to-transparent opacity-70"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="bg-[#0A102A] p-8 md:p-12 rounded-3xl shadow-2xl space-y-12">
         
          <h2 className="text-3xl font-semibold text-white text-center flex items-center justify-center gap-2">
          <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-md">
          <LucideTarget className="text-white-400 w-8 h-8" />
          </div>
              What are the advantages?
          </h2>

          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4 flex flex-col items-center">
              <div className="inline-block p-4 rounded-full bg-[#121832] border border-blue-500 shadow-md">
                <LucideBarChart className="w-7 h-7 text-white-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Specific Skill Expertise</h3>
              <p className="text-gray-400">
                Benefit from the specialized knowledge and skills of a professional asset manager.
              </p>
            </div>
            <div className="space-y-4 flex flex-col items-center">
              <div className="inline-block p-4 rounded-full bg-[#121832] border border-blue-500 shadow-md">
                <LucideClock className="w-7 h-7 text-white-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Time Savings</h3>
              <p className="text-gray-400">
                Save valuable time by entrusting your investment allocations to experts.
              </p>
            </div>
            <div className="space-y-4 flex flex-col items-center">
              <div className="inline-block p-4 rounded-full bg-[#121832] border border-blue-500 shadow-md">
                <LucideBriefcase className="w-7 h-7 text-white-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Professional Management</h3>
              <p className="text-gray-400">
                Benefit from a professionally managed setup that would be difficult to handle alone.
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <div className="relative w-full max-w-lg h-72 rounded-3xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105">
              <img
                src="/bluerockstrategy.jpg"
                alt="Diagram showing investment advantages"
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

export default Description;
