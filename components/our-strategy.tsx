"use client";
import React from 'react';
import {
  LucideTarget,
  LucideBarChart,
  LucideClock,
  LucideHandshake,
  LucideLeaf,
  LucideShield,
  LucidePlane,
} from 'lucide-react';

const OurStrategy = () => {
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
           Our Strategy
          </h1>
          <p className="text-lg sm:text-xl text-blue-300 max-w-2xl mx-auto">
            Our approach to long-term success and sustainability.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* Investment Approach Section */}
        <section className="bg-[#0A102A] p-8 md:p-12 rounded-3xl shadow-2xl space-y-12">
      <h2 className="text-3xl font-semibold text-white text-center flex items-center justify-center gap-2">
          <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-md">
          <LucideTarget className="text-white-400 w-8 h-8" />
          </div>
            Our Fundamental Investment Approach
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <p className="text-gray-400 leading-relaxed">
                Our fundamental investment approach capitalizes on the overwhelming need for investors to achieve short-term and long-term results anywhere between 6 months to 5 years in the future. We seek to provide our investors with constant low risk gains.
              </p>
              <p className="text-gray-400 leading-relaxed">
                This strategy is based on research. Our focus is on companies and instruments whose financial results and returns are in line with the investors' profile. The research itself is based on a long-horizon approach and focuses on absolute rather than relative returns. This allows us to make use of the opportunities created by – or ignored by – the short-term trading liquidity needs of institutional investors and ETFs.
              </p>
              <p className="text-gray-400 leading-relaxed">
                If the investor wishes to accept more risk for a higher return or vice versa or has a shorter time horizon than what is generally used, our strategies can be personalized to match the investor's risk profile.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md h-72 rounded-3xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105">
                <img
                  src="/business-person-futuristic.jpg"
                  alt="A financial graph showing growth"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950 to-transparent opacity-70"></div>
              </div>
            </div>
          </div>

          <div className="space-y-4">

             <h3 className="text-xl font-semibold text-white text-center flex items-center justify-center gap-2">
          <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-md">
          <LucideHandshake className="text-white-400 w-8 h-8" />
          </div>
             Our Philosophy
          </h3>
            <p className="text-gray-400 leading-relaxed text-center max-w-3xl mx-auto">
              We believe in a thoughtful, straightforward investment philosophy – long-term investing with an emphasis on quality and diversification. All three of these elements work together. Our philosophy is one of the ways we can help you make sense of investing. We believe a long-term strategy is the best way to build and preserve your financial security. But remember that “buy and hold” doesn’t mean “buy and ignore.” You should review your portfolio at least once a year to make sure you’re still on track to meet your financial goals.
            </p>
          </div>
        </section>

        {/* Sustainability Section */}
        <section className="bg-[#0A102A] p-8 md:p-12 rounded-3xl shadow-2xl space-y-12">
            <h2 className="text-3xl font-semibold text-white text-center flex items-center justify-center gap-2">
          <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-md">
          <LucideLeaf className="text-white-400 w-8 h-8" />
          </div>
            Sustainability & Durability
          </h2>
          
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md h-72 rounded-3xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105">
                <img
                  src="/business-person.jpg"
                  alt="People working together with a recycling symbol"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950 to-transparent opacity-70"></div>
              </div>
            </div>
            <div className="md:w-1/2 space-y-6">
              <p className="text-gray-400 leading-relaxed">
                The values that define and continuously shape the identity of S.S.I.F. Blue Rock Financial Services S.A. are business ethics, a proactive attitude towards customer needs, responsibility, and adaptability. We are aware of the importance of financial education in the development of future generations, and we support young people in their final years of university, as well as graduates, by offering internship programs within the company. Through the digitization of internal processes, we have significantly reduced paper consumption within the company. As a result of the nature of the activities carried out by S.S.I.F. Blue Rock Financial Services S.A., the waste generated mainly consists of paper waste and printer cartridges. The waste resulting from current activities is deposited by employees in designated areas for recycling.</p>
              <p className="text-gray-400 leading-relaxed">
                The sustainability and sustainable development strategy of S.S.I.F. Blue Rock Financial Services S.A. takes into account the fact that Romania has joined the UN member states for sustainable development, a global action program in the field of development with a universal character, which promotes a balance between the three dimensions of sustainable development – economic, social, and environmental.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-gray-400 leading-relaxed text-center max-w-3xl mx-auto">Institutional investors are increasingly assessing company performance by including environmental, social, and governance (ESG) factors.</p>
             <p className="text-gray-400 leading-relaxed text-center max-w-3xl mx-auto">S.S.I.F. Blue Rock Financial Services S.A. promotes environmental and social characteristics and aims to achieve sustainable investments. Sustainability means responsible entrepreneurial actions for long-term economic success, in harmony with the environment and society. To assess the sustainable orientation of a potential investment, data and analyses from rating agencies, among others, may be used.</p>
             <p className="text-gray-400 leading-relaxed text-center max-w-3xl mx-auto">Sustainability-related risks are environmental, social, or governance events or conditions that may have a negative, real, or potential impact on the managed portfolio and the reputation of a company.</p>
          </div>
        </section>

        {/* Final Image */}
        <div className="flex justify-center mt-12">
          <div className="relative w-full max-w-lg h-72 rounded-3xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105">
            <img
              src="/man-trading.jpg"
              alt="A diagram showing sustainable development goals"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950 to-transparent opacity-70"></div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default OurStrategy;
