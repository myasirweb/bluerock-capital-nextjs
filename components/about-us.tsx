"use client"
import React, { useState } from 'react';
import {
  LucideBuilding,
  LucideScale,
  LucideFileText,
  LucideBarChart,
  LucideArrowRight,
  LucidePlane,
  LucideDollarSign,
  LucideShield,
  LucideMap,
  LucideClipboardList,
  LucideTarget
} from 'lucide-react';

const AboutUs = () => {

  const [selectedPdf, setSelectedPdf] = useState(null);

  const financialStatements = [
  {
    year: 2016,
    financialFile: '/about-pdf/2016-IFRS.pdf',
    leverageFile:  '/about-pdf/2016-leverage-ratio.pdf'
  },
  {
    year: 2017,
     financialFile: '/about-pdf/2017-IFRS.pdf',
    leverageFile:  '/about-pdf/2017-leverage-ratio.pdf'
  },
  {
    year: 2018,
    financialFile: '/about-pdf/2018-IFRS.pdf',
    leverageFile:  '/about-pdf/2018-leverage-ratio.pdf'
  },
   {
    year: 2019,
     financialFile: '/about-pdf/2019-IFRS.pdf',
    leverageFile:  '/about-pdf/2019-leverage-ratio.pdf'
  },
   {
    year: 2020,
    financialFile: '/about-pdf/2020-IFRS.pdf',
    leverageFile:  '/about-pdf/2020-leverage-ratio.pdf'
  },
   {
    year: 2021,
    financialFile: '/about-pdf/2021-IFRS.pdf',
    leverageFile:  '/about-pdf/2021-leverage-ratio.pdf'
  },
   {
    year: 2022,
     financialFile: '/about-pdf/2022-IFRS.pdf',
    leverageFile:  '/about-pdf/2022-leverage-ratio.pdf'
  },
   {
    year: 2023,
    financialFile: '/about-pdf/2023-IFRS.pdf',
    leverageFile:  '/about-pdf/2023-leverage-ratio.pdf'
  },
   {
    year: 2024,
     financialFile: '/about-pdf/2024-IFRS.pdf',
    leverageFile:  '/about-pdf/2024-leverage-ratio.pdf'
  },

  ];
  const investmentServices = [
    "Receipt and transmission of orders relating to one or more financial instruments.",
    "Execution of orders on behalf of clients.",
    "House account trading.",
    "Portfolio management.",
    "Investment consulting.",
    "Subscribing financial instruments and / or placing financial instruments with firm commitment.",
    "Placement of financial instruments without firm commitment.",
    "Operating a SOT.",
  ];
  const ancillaryServices = [
    "Preservation and management of financial instruments on behalf of clients, including custody and ancillary services, such as cash / guarantee management and excluding the provision and administration of securities accounts at the highest level. The provision and administration of securities accounts at the highest level are the “centralized administration service” referred to in point A (2) of the Annex to Regulation (EU) No. 909/2014.",
    "Granting credits or loans to an investor to enable him / her to conduct a transaction with one or more financial instruments, a transaction involving the firm granting the loan or the loan.",
    "Consultancy provided to companies in terms of capital structure, industrial strategy and related issues; consultancy and services in the field of mergers and acquisitions of enterprises.",
    "Exchange services where these services are related to the provision of investment services.",
    "Investment research and financial analysis or any other form of general recommendation on transactions in financial instruments.",
    "Underwriting services.",
    "Investment services and activities as well as ancillary services of the type included in this Section or in Section A on derivative financial instruments included in Section C, points 5-7 and 10, where they are related to the provision of investment services or ancillary services."
  ];
  const financialInstruments = [
    "Securities",
    "Instruments of the money market",
    "Units of collective investment undertakings",
    "Options, futures, swaps, forward rate agreements and any other derivative contracts relating to securities, currencies, interest or profitability rates, emission allowances or other derivatives, financial indices or financial ratios may be settled by physical delivery or in cash",
    "Options contracts, futures contracts, swap contracts, forward contracts and any other derivative contracts relating to commodities to be settled in cash or may be settled in cash at the request of one of the parties other than in the case of a breach of obligations; or of another incident leading to termination",
    "Options contracts, futures contracts, swap contracts, forward contracts and any other derivative contract relating to commodities that may be settled by physical delivery, provided that they are traded on a regulated market, SMT or a trading venue, except for products wholesale energy traded on a SOT to be settled by physical delivery",
    "Options contracts, futures contracts, swap contracts, forward contracts and any other derivative contracts relating to commodities which may be settled by physical delivery, not otherwise provided in paragraph 6 of this Section and not having commercial purposes, which presents the characteristics of other derivative financial instruments",
    "Derivatives that serve to transfer credit risk",
    "Financial Differences",
    "Options, futures, swap contracts, forward rate agreements and any other derivative contracts relating to climatic variables, freight rates or inflation rates or other official economic statistics to be settled in cash or settled in cash at the request of one of the parties other than in the case of a breach of obligations or other incident leading to termination, as well as any other derivative contracts relating to assets, rights, obligations, indices and indicators not otherwise provided for in this section, which presents the characteristics of other financial derivatives, taking into account whether, in particular, they are traded on a regulated market, a CMO or a SMT",
    "Emission Certificates consisting of any units recognized as complying with the requirements of Government Decision no. 780/2006 on establishing the scheme for greenhouse gas emission allowance trading, as subsequently amended and supplemented, and Government Emergency Ordinance no. 115/2011 on establishing the institutional framework and authorizing the Government, through the Ministry of Public Finance, to auction the greenhouse gas emission allowances allocated to Romania at the level of the European Union, approved by Law no. 163/2012, as subsequently amended and supplemented.",
  ];
  const passportedCountries = [
    "Austria", "Bulgaria", "Czech Republic", "Germany", "Italy", "Luxemburg",
    "Malta", "Poland", "Portugal", "Slovakia"
  ];
  return (
    <div className="bg-[#050A19] text-gray-300 min-h-screen font-sans overflow-hidden relative">
      
<header
  className="relative py-20 text-center px-4 rounded-b-3xl shadow-lg bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/counter.jpg')" }}
>
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60 rounded-b-3xl"></div>

  {/* Content */}
  <div className="relative z-10">
    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
      General Information
    </h1>
    <p className="text-lg sm:text-xl text-blue-300 max-w-2xl mx-auto">
      A licensed and experienced financial services partner.
    </p>
  </div>
</header>
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20 relative z-20">

        {/* Section: Company Overview */}
        <section className="bg-[#0A102A] p-8 md:p-12 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 space-y-6">
             <h2 className="text-3xl font-semibold text-white flex items-center gap-2">
              <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-md">
                <LucideBuilding className="w-6 h-6 text-white" />
              </div>
              Our Company History
            </h2>
            <p className="text-gray-400 leading-relaxed">
             Our Company was founded in 1997 and since 2011 our shareholders are 100% Austrian with a large experience in Romanian capital markets, having previously owned S.S.I.F. “Austro-Rom” from 1995 until 2006.  (which is a founding member of the Bucharest Stock Exchange). The company has successfully issued a significant number of corporate bonds with have a total value of approximately 400 million euros.
            </p>
            <p className="text-gray-400 leading-relaxed">Throughout our history our company has prided itself on being a “boutique” financial institution, as we believe that every problem has a solution.</p>
           <p className="text-gray-400 leading-relaxed">Blue Rock Financial Services is fully licensed by the Romanian Financial Services Authority, as evidenced in decision 1942/24.06.2003 and registered in the F.S.A register under nr. PJR01SSIF/190057 to act as a financial intermediary for its clients. Registered at the Bucharest trade register under nr. 740/14241/2011, C.U.I 9814029</p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md h-72 rounded-3xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105">
              <img
                src="/two-young-worker.jpg"
                alt="A stylish office building representing our boutique services"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950 to-transparent opacity-70"></div>
            </div>
          </div>
        </section>

        {/* Section: Legal and Regulatory */}
        <section className="bg-[#0A102A] p-8 md:p-12 rounded-3xl shadow-2xl space-y-12">
           <h2 className="text-3xl font-semibold text-white flex items-center gap-2">
              <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-md">
                <LucideShield className="w-6 h-6 text-white" />
              </div>
              Legal and Regulatory Information
            </h2>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-blue-300 flex items-center gap-2">
                <span className="w-10 h-10 rounded-full bg-[#121832] border border-blue-500 shadow-md flex items-center justify-center">
                  <LucideScale className="w-5 h-5 text-white" />
                </span>
                Licensing and Registration
               </h3>

                <p className="text-gray-400 leading-relaxed">
                 Blue Rock Financial Services is passported to the following countries:
                </p>
              </div>
              <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-300 flex items-center gap-2">
                <span className="w-10 h-10 rounded-full bg-[#121832] border border-blue-500 shadow-md flex items-center justify-center">
                  <LucideClipboardList className="w-5 h-5 text-white" />
                </span>
               Dispute Resolution
              </h3>
              <p className="text-gray-400 leading-relaxed">The companies share capital is valued at 7.061.327 lei</p>
                <p className="text-gray-400 leading-relaxed">
                  For any disputes regarding the services provided by S.S.I.F. Blue Rock Financial Services S.A. you can address the internal control department, during working hours from Monday to Friday between 9 am and 6:30 pm, which we will analyze, investigate and respond to your request within maximum 30 days from the date of the request
                </p>
                <p className="text-gray-400 leading-relaxed">
                  The complaint will be made in writing and sent to the representative of the internal control department, including by e-mail to office@bluerock.ro, g.ilie@bluerock.ro or to the registered office. in urgent cases, complaints can also be made by telephone.</p>
              </div>
            </div>
            <div className="space-y-6">
               <h3 className="text-3xl font-semibold text-white flex items-center gap-2">
              <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-md">
                <LucideMap className="w-6 h-6 text-white" />
              </div>
              Passported Countries
            </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {passportedCountries.map((country, index) => (
          <a
            key={index}
            href="https://data.asfromania.ro/registru/pasaportue.php?lng=1"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#121832] p-3 rounded-lg text-white font-medium transition-transform duration-300 hover:scale-105 hover:bg-[#1a2546]"
          >
            <span className="w-10 h-10 rounded-full bg-[#121832] border border-blue-500 shadow-md flex items-center justify-center">
              <LucidePlane className="w-5 h-5 text-white" />
            </span>
            <span>{country}</span>
          </a>
        ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section: Financial Statements */}
        <section className="bg-[#0A102A] p-8 md:p-12 rounded-3xl shadow-2xl space-y-8">
           <h2 className="text-3xl font-semibold text-white flex items-center gap-2">
              <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-md">
                <LucideFileText className="w-6 h-6 text-white" />
              </div>
              Financial Statements
            </h2>
          <p className="text-gray-400">
            Below you may find the companies financial statements:
          </p>
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {financialStatements.map((item) => (
    <React.Fragment key={item.year}>
      {/* Financial Data */}
      <a
        href={item.financialFile}
        className="group bg-[#121832] p-6 rounded-2xl text-center shadow-md border border-transparent hover:border-blue-500 transition-all duration-300"
      >
        <h4 className="text-lg font-semibold text-blue-300 mb-1 group-hover:text-blue-200">
          Financial Data {item.year} IFRS
        </h4>
        <LucideArrowRight className="w-5 h-5 text-gray-500 mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
      </a>

      {/* Leverage Ratio */}
      <a
        href={item.leverageFile}
        className="group bg-[#121832] p-6 rounded-2xl text-center shadow-md border border-transparent hover:border-green-500 transition-all duration-300"
      >
        <h4 className="text-lg font-semibold text-green-300 mb-1 group-hover:text-green-200">
          Leverage Ratio {item.year}
        </h4>
        <LucideArrowRight className="w-5 h-5 text-gray-500 mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
      </a>
    </React.Fragment>
  ))}
</div>

        </section>

        {/* Section: Services and Financial Instruments */}
        <section className="bg-[#0A102A] p-8 md:p-12 rounded-3xl shadow-2xl space-y-12">
           <h2 className="text-3xl font-semibold text-white flex items-center gap-2">
              <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-md">
                <LucideDollarSign className="w-6 h-6 text-white" />
              </div>
             Investment Services And Activities
            </h2>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-6">
               <p className="text-gray-400">S.S.I.F. Blue Rock Financial Services SA is authorized to perform following investment services and activities:</p>
              <ul className="space-y-4">
                {investmentServices.map((service, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-400">
                    <LucideArrowRight className="text-blue-400 w-5 h-5 flex-shrink-0" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-blue-300 flex items-center gap-2">
                {/* Ancillary Services Header can have gradient icon if needed */}
              </h3>
              <ul className="space-y-4">
                {ancillaryServices.map((service, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-400">
                    <LucideArrowRight className="text-blue-400 w-5 h-5 flex-shrink-0" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="space-y-6">
             <h3 className="text-3xl font-semibold text-white flex items-center gap-2">
              <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-md">
                <LucideTarget className="w-6 h-6 text-white" />
              </div>
              Financial Instruments
            </h3>
            <ul className="space-y-4">
              {financialInstruments.map((instrument, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-400">
                  <LucideArrowRight className="text-blue-400 w-5 h-5 flex-shrink-0" />
                  <span>{instrument}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

      </main>
    </div>
  );
};

export default AboutUs;
