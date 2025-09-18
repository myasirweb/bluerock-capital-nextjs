"use client";
import React, { useState } from "react";
import {
  LucideDollarSign,
  LucideClipboardList,
  LucideFileText,
  LucideShield,
  LucideArrowRight,
  LucideAlertTriangle
} from "lucide-react";

const MultiAssetFund = () => {
   const [openDropdown, setOpenDropdown] = useState(false);

  const documents = [
    {
      title: "Prospectus",
      type: "pdf",
      link: "/noha-pdf/Prospecuts_NOAH-F22-Multi-Asset-Fonds_01072022-ro.pdf",
    },
    {
      title: "Net Asset Value",
      type: "link",
      link: "https://www.llbinvest.at/de/home/investmentfonds/fondsplattform-partner/overview",
    },
    {
      title: "Essential information for the investor",
      type: "pdf",
      link: "/noha-pdf/PRIIPKID_NOAH-F22-Multi-Asset-Fonds_AT_0000A1X8P7_AT0000A1X8N2_20231115_RO-1.pdf",
    },
    {
      title: "Half-yearly financial statements",
      type: "dropdown",
      years: [
        { year: 2017, link: "/noha-pdf/HB2017_NOAH-F22-Multi-Asset-Fonds-en.pdf" },
        { year: 2018, link: "/noha-pdf/HB2018_NOAH-F22-Multi-Asset-Fonds-en.pdf" },
        { year: 2019, link: "/noha-pdf/Situatii-S1-2019-NOAH.pdf" },
        { year: 2020, link: "/noha-pdf/RB2020_DE_NOAH-F22-Multi-Asset-Fonds-en.pdf" },
        { year: 2021, link: "/noha-pdf/HB2021_NOAH-F22-Multi-Asset-Fonds-en.pdf" },
        { year: 2022, link: "/noha-pdf/HB2022_NOAH-F22-Multi-Asset-Fonds-en.pdf" },
      ],
    },
  ];
  return (
    <div className="bg-[#050A19] text-gray-300 min-h-screen font-sans overflow-hidden relative">
      {/* Hero */}
      <header
        className="relative py-20 text-center px-4 rounded-b-3xl shadow-lg bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/counter.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60 rounded-b-3xl"></div>

        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            NOAH F22 Multi Asset Fund
          </h1>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 relative z-20">
        {/* About the Fund */}
        <section className="bg-[#0A102A] p-8 md:p-12 rounded-3xl shadow-2xl space-y-6">
          <h2 className="text-3xl font-semibold text-white flex items-center gap-2">
            <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-md">
              <LucideDollarSign className="w-6 h-6 text-white" />
            </div>
            About the Fund
          </h2>
          <p className="text-gray-400 leading-relaxed">
            NOAH F22 Multi Asset Fund is a collective investment body authorized in accordance with the Austrian Law on Investment Funds 2011 (InvFG), for which SSIF Blue Rock Financial Services SA acts as Distributor and Payment Agent.
          </p>
        </section>

        {/* Unit Classes */}
        <section className="bg-[#0A102A] p-8 md:p-12 rounded-3xl shadow-2xl space-y-8">
          <h2 className="text-3xl font-semibold text-white flex items-center gap-2">
            <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-md">
              <LucideClipboardList className="w-6 h-6 text-white" />
            </div>
            Unit Classes
          </h2>
          <p className="text-gray-400 leading-relaxed">The fund consists of 2 classes of units:</p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-[#121832] p-6 rounded-2xl shadow-md hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold text-blue-300 mb-2">
                Units with Distribution
              </h3>
              <p className="text-gray-400">ISIN AT0000A1X8N2</p>
            </div>
            <div className="bg-[#121832] p-6 rounded-2xl shadow-md hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold text-blue-300 mb-2">
                Reinvestment Units
              </h3>
              <p className="text-gray-400">ISIN AT0000A1X8P7</p>
            </div>
          </div>
        </section>

        {/* Warning */}
        <section className="bg-[#0A102A] p-8 md:p-12 rounded-3xl shadow-2xl space-y-6">
         <h2 className="text-3xl font-semibold text-white flex items-center gap-2">
            <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-md">
             <LucideAlertTriangle className="w-6 h-6 text-white" />
            </div>
            Warning
          </h2>
          <p className="text-gray-400 leading-relaxed">
            The investment fund is not registered in accordance with US legal regulations. The units of the investment fund are neither intended for sale in the USA nor for sale to US citizens (or to persons permanently residing in the US), to companies of persons or capital companies incorporated under US law.
          </p>
        </section>


        {/* Documents */}
        <section className="bg-[#0A102A] p-8 md:p-12 rounded-3xl shadow-2xl space-y-8">
          <h2 className="text-3xl font-semibold text-white flex items-center gap-2">
            <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-md">
              <LucideFileText className="w-6 h-6 text-white" />
            </div>
            The Documents of the Fund
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, i) => (
              <div key={i}>
                {doc.type !== "dropdown" ? (
                  <a
                    href={doc.link}
                    className="group block bg-[#121832] p-6 rounded-2xl text-center shadow-md border border-transparent hover:border-blue-500 transition-all duration-300"
                  >
                    <h4 className="text-lg font-semibold text-blue-300 mb-1 group-hover:text-blue-200">
                      {doc.title}
                    </h4>
                    <LucideArrowRight className="w-5 h-5 text-gray-500 mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ) : (
                  <div className="bg-[#121832] p-6 rounded-2xl text-center shadow-md border border-transparent hover:border-blue-500 transition-all duration-300">
                    <button
                      onClick={() => setOpenDropdown((prev) => !prev)}
                      className="w-full text-left"
                    >
                      <h4 className="text-lg font-semibold text-blue-300 mb-1 group-hover:text-blue-200">
                        {doc.title}
                      </h4>
                    </button>
                    {openDropdown && (
                      <ul className="mt-4 space-y-2 text-left">
                        {doc?.years?.map((y) => (
                          <li key={y.year}>
                            <a
                              href={y.link}
                              className="text-gray-400 hover:text-blue-300 underline"
                            >
                              Half-yearly financial statements {y.year}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="text-gray-400 leading-relaxed">
            For more information on the documents for setting up the NOAH F22 Multi Asset Fund, the evolution of the portfolio and the allocation of assets, you can access the website of the investment management company LLB Invest Kapitalanlagegesellschaft m.b.H.{" "}
            <a
              href="https://www.llbinvest.at/de/home/investmentfonds/fondsplattform-partner/overview"
              className="text-blue-400 underline hover:text-blue-300"
            >
              Click here
            </a>
            .
          </p>
        </section>
      </main>
    </div>
  );
};

export default MultiAssetFund;
