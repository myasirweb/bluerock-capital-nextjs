"use client";
import React from 'react';
import {
  LucideGlobe,
  LucideTrendingUp,
  LucideScale,
  LucideFileText,
  LucideLink,
  LucideCoins,
  LucideFileQuestion,
  LucideHandshake,
  LucideFileSearch,
  LucideShieldCheck,
} from 'lucide-react';


const ForeignMarkets = () => {
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
           Foreign Markets
          </h1>
          <p className="text-lg sm:text-xl text-blue-300 max-w-2xl mx-auto">
           Explore opportunities beyond the local market.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* Introduction Section */}
        <section className="bg-[#0A102A] p-8 md:p-12 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
             <h2 className="text-3xl font-semibold text-white flex items-center gap-3 mb-4">
          <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-md">
          <LucideGlobe className="text-white-400 w-8 h-8" />
          </div>
               Our Services
          </h2>

            <p className="text-gray-400 leading-relaxed">
              Due to our significant experience in issuing corporate bonds we not only offer execution and custody services for instruments listed on the European and American exchanges, but we also offer execution and custody services for unlisted financial instruments as long as they can be settled through our Clearing House.
            </p>
            <p className="text-gray-400 leading-relaxed">
              External markets attributes are somewhat different when compared to the Romanian BVB as each external exchange has its own rules, execution policy and specialization.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md h-72 rounded-3xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105">
              <img
                src="/jakub.jpg"
                alt="Image representing global financial markets"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950 to-transparent opacity-70"></div>
            </div>
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
              <h3 className="text-lg text-white text-white text-center">Larger number of financial instruments available to be bought and sold.</h3>
            </div>
            <div className="bg-[#0A102A] p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 space-y-4">
              <div className="flex justify-center">
                <div className="p-4 rounded-full bg-[#121832] border border-blue-500 shadow-md flex items-center justify-center">
                  <LucideTrendingUp className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-lg text-white text-white text-center">Higher trading volumes and volatility.</h3>
            </div>
            <div className="bg-[#0A102A] p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 space-y-4">
              <div className="flex justify-center">
                <div className="p-4 rounded-full bg-[#121832] border border-blue-500 shadow-md flex items-center justify-center">
                  <LucideScale className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-lg text-white text-center">Higher exposure to event driven changes in the market.</h3>
            </div>
            <div className="bg-[#0A102A] p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 space-y-4">
              <div className="flex justify-center">
                <div className="p-4 rounded-full bg-[#121832] border border-blue-500 shadow-md flex items-center justify-center">
                  <LucideHandshake className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-lg text-white text-white text-center">Higher liquidity.</h3>
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <div className="relative w-full max-w-lg h-72 rounded-3xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105">
              <img
                src="/trade-screen.jpg"
                alt="Image representing global investment benefits"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950 to-transparent opacity-70"></div>
            </div>
          </div>
        </section>

        {/* Executing Locations Section */}
        <section className="bg-[#0A102A] p-8 md:p-12 rounded-3xl shadow-2xl space-y-12">

        <h2 className="text-3xl font-semibold text-white text-center flex items-center justify-center gap-3">
          <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-md">
          <LucideLink className="text-white-400 w-8 h-8" />
          </div>
              Main Executing Locations
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[2018, 2019, 2020, 2021, 2022, 2023, 2024].map((year) => (
              <a
                key={year}
                href={`/foregin-pdf/Report-BRFS-Markts-${year}.pdf`} // each year’s PDF
                className="bg-gray-800 p-4 rounded-xl shadow-md hover:bg-gray-700 transition-colors duration-200 flex items-center justify-center gap-3"
              >
                <LucideFileText className="text-blue-400 w-6 h-6" />
                <span className="font-medium text-white">Report-BRFS-Markts-{year}.pdf</span>
              </a>
            ))}

          </div>
        </section>

        {/* OTC Section */}
        <section className="p-8 md:p-12 space-y-8">

             <h2 className="text-3xl font-semibold text-white text-center flex items-center justify-center gap-3">
          <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-md">
          <LucideFileText className="text-white-400 w-8 h-8" />
          </div>
             OTC
          </h2>


          <div className="bg-[#0A102A] p-8 rounded-3xl shadow-lg text-center space-y-4">
            <p className="text-gray-400 leading-relaxed">
              Publication of OTC transactions carried out by S.S.I.F. Blue Rock Financial Services S.A. is carried out through the Bulgarian Stock Exchange as an “Approved publication arrangement” registered in the ESMA register on 25.10.2018.
            </p>
            <a
              href="https://www.bse-sofia.bg/"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-bold transition-colors duration-200"
            >
              Bulgarian Stock Exchange
              <LucideLink className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* PTP Withholding Section */}
        <section className="bg-[#0A102A] p-8 md:p-12 rounded-3xl shadow-2xl space-y-12">

             <h2 className="text-3xl font-semibold text-white text-center flex items-center justify-center gap-3">
          <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-md">
          <LucideFileQuestion className="text-white-400 w-8 h-8" />
          </div>
              Withholding on Publicly Traded Partnerships under IRS Sec. 1446(f)
          </h2>
          <div className="space-y-6 text-gray-400 leading-relaxed">
            <p>
              As a result of recent U.S. legislation under Internal Revenue Code Section 1446(f), gross proceeds from sales of and certain distributions from Publicly Traded Partnerships (“PTPs”) will be subject to 10% withholding starting on January 1, 2023. Please note the following:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>
                Withholding applies to PTPs held by non-U.S. tax residents (both individuals and entities).
              </li>
              <li>
                Exemption from withholding may apply if a PTP releases a public statement called a “Qualified Notice” to indicate that the PTP meets the requirements of IRC Sec. 1446(f)-4(b)(3) to be exempt from withholding.
              </li>
              <li>
                Options and other derivative transactions with a PTP as the underlying security are not subject to withholding. However, if the option or derivative is converted into a PTP interest, a subsequent sale of such PTP interest will be subject to withholding.
              </li>
              <li>
                Withholding will be reported on the year-end Form 1042-S, <span className="italic">Foreign Person’s U.S. Source Income Subject to Withholding</span>.
              </li>
            </ul>
            <p className="mt-4">
              <a
                href="http://www.irs.gov/individuals/international-taxpayers/partnership-withholding"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-bold transition-colors duration-200"
              >
                Additional information about IRC Sec. 1446(f) is available on the IRS website.
                <LucideLink className="w-4 h-4" />
              </a>
            </p>
            <p>
              This list identifies PTP securities which will be subject to withholding under IRC Sec. 1446(f) unless a “Qualified Notice” exemption is applicable at the time of the sale. For example, if a PTP publishes a Qualified Notice before December 31, 2022, then the PTP will be exempt from withholding in early 2023 once IRC Sec. 1446(f) takes effect. However, the PTP will be required to periodically reissue Qualified Notices as the validity period of each Qualified Notice is only 92 days from its posting. Clients should refer to the PTP’s website for information relating to Qualified Notices as this list identifies all PTPs irrespective of whether they have issued a Qualified Notice. Please note that this list of PTPs will be updated on a best efforts basis and is subject to change without notice.
            </p>
            <a
               href="/foregin-pdf/Lista-PTP-10.pdf" 
              className="inline-flex items-center gap-2 font-bold text-white bg-blue-600 px-6 py-3 rounded-full hover:bg-blue-700 transition-colors duration-200 shadow-lg"
            >
              PTP 10% List
              <LucideFileSearch className="w-5 h-5" />
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
    <img src="/bluerock_city.jpg" alt="Image 1" className="w-full h-48 object-cover rounded-xl shadow-lg" />
    <img src="/bluerock_city_night.jpg" alt="Image 2" className="w-full h-48 object-cover rounded-xl shadow-lg" />
    <img src="/blurock_bigben.jpg" alt="Image 3" className="w-full h-48 object-cover rounded-xl shadow-lg" />
    <img src="/new_york_stock.jpg" alt="Image 4" className="w-full h-48 object-cover rounded-xl shadow-lg" />
  </div>
        </section>

      </main>
    </div>
  );
};

export default ForeignMarkets;
