"use client";
import React from 'react';
import {
  LucideTicket,
  LucideTrendingUp,
  LucideWallet,
  LucideShield,
  LucideScale,
  LucideBuilding,
  LucideMail,
  LucidePackage,
  LucideBarChart,
  LucideLock,
  LucideCoins,
} from 'lucide-react';
import Link from 'next/link';

const IssuanceOfFinancialInstruments = () => {
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
           Issuance of Financial Instruments
          </h1>
          <p className="text-lg sm:text-xl text-blue-300 max-w-2xl mx-auto">
           Explore bonds and structured products for your financial needs.
          </p>
        </div>
      </header>
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* What are bonds? Section */}
        <section className="bg-[#0A102A] p-8 md:p-12 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">

         <h2 className="text-3xl font-semibold text-white flex items-center gap-3 mb-4">
          <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-md">
          <LucideTicket className="text-white-400 w-8 h-8" />
          </div>
               What are bonds?
          </h2>
            <p className="text-gray-400 leading-relaxed">
              Bonds are securities issued through which an issuer borrows, publicly or privately to finance certain activities or projects (expanding their work force, buying real estate, marketing, etc). The bond issuer may be a private or public company in Romania, Limited liability companies (S.R.L) cannot issue bonds in Romania.
            </p>
            <p className="text-gray-400 leading-relaxed">
              The equivalent value of the bonds is repaid by the issuer either at their maturity, in tranches or they can be converted into shares (convertible bonds). Depending on which option is chosen within the Terms & Conditions of the bond, the issuer is obliged to pay out an amount representing the equivalent value of the subscribed bonds (principal) or any interest.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Unlike the issuance of shares (which can be considered another form of financing), the issuance of bonds is the preferred tool of entrepreneurs and companies, given that this process does not dilute the company’s shareholders.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md h-72 rounded-3xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105">
              <img
                src="/bluerock_coins.jpg"
                alt="Image representing corporate bonds"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950 to-transparent opacity-70"></div>
            </div>
          </div>
        </section>

        {/* Advantages of issuing Bonds Section */}
        <section className="p-8 md:p-12 space-y-12">
         <h2 className="text-3xl font-semibold text-white text-center flex items-center justify-center gap-3">
          <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-md">
          <LucideShield className="text-white-400 w-8 h-8" />
          </div>
             Advantages of issuing Bonds
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#0A102A] p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 space-y-4">
              <div className="flex justify-center">
                <div className="p-4 rounded-full bg-[#121832] border border-blue-500 shadow-md flex items-center justify-center">
                  <LucideBuilding className="w-10 h-10 text-white" />
                </div>
              </div>
              <p className="text-md text-white text-center">The issuance of bonds does not affect the shareholder structure of the issuer.</p>
            </div>
            <div className="bg-[#0A102A] p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 space-y-4">
              <div className="flex justify-center">
                <div className="p-4 rounded-full bg-[#121832] border border-blue-500 shadow-md flex items-center justify-center">
                  <LucideWallet className="w-10 h-10 text-white" />
                </div>
              </div>
              <p className="text-md text-white text-center">The company that borrows by issuing bonds can repay the investors' money at maturity or in tranches, which offers the issuer the possibility to create a predictable cash flow.</p>
            </div>
            <div className="bg-[#0A102A] p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 space-y-4">
              <div className="flex justify-center">
                <div className="p-4 rounded-full bg-[#121832] border border-blue-500 shadow-md flex items-center justify-center">
                  <LucideScale className="w-10 h-10 text-white" />
                </div>
              </div>
              <p className="text-md text-white text-center">The bonds can be converted, at maturity, into shares, which gives the issuer the flexibility to either repay the bonds or reduce the cash expenses by paying the bond holders in newly issued shares, diluting the existing shareholders.</p>
            </div>
            <div className="bg-[#0A102A] p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 space-y-4">
              <div className="flex justify-center">
                <div className="p-4 rounded-full bg-[#121832] border border-blue-500 shadow-md flex items-center justify-center">
                  <LucideTrendingUp className="w-10 h-10 text-white" />
                </div>
              </div>
              <p className="text-md text-white text-center">The listing of the bonds on the regulated market or the alternative AeRO system administered by the Bucharest Stock Exchange gives the issuer visibility and transparency, which can significantly increase the confidence of investors and their own clients in the issuer's business.</p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="p-8 md:p-12 text-center">
          <div className="bg-[#0A102A] p-8 rounded-3xl shadow-lg space-y-4">
            <h2 className="text-3xl font-semibold text-white">
              Are you an entrepreneur and want to finance your company by issuing bonds?
            </h2>
            <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Please leave us a message below and we will shortly get in touch to see how we can help you.
            </p>
           
          <Link href="/contact">
            <button className="inline-flex items-center gap-2 font-bold text-white bg-blue-600 px-6 py-3 rounded-full hover:bg-blue-700 transition-colors duration-200 shadow-lg cursor-pointer">
              <LucideMail className="w-5 h-5" />
              Send a Message
            </button>
          </Link>
          </div>
        </section>

        {/* What are Structured Products? Section */}
        <section className="bg-[#0A102A] p-8 md:p-12 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">

             <h2 className="text-3xl font-semibold text-white flex items-center gap-3 mb-4">
          <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-md">
          <LucidePackage className="text-white-400 w-8 h-8" />
          </div>
              What are Structured Products?
          </h2>

            <p className="text-gray-400 leading-relaxed">
              Structured products are pre-packaged investments that normally include assets linked to interest plus one or more derivatives. They are generally tied to an index or basket of securities.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md h-72 rounded-3xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105">
              <img
                src="/bluerock_finances.jpg"
                alt="Image representing structured financial products"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950 to-transparent opacity-70"></div>
            </div>
          </div>
        </section>

        {/* Advantages of issuing Structured Products Section */}
        <section className="p-8 md:p-12 space-y-12">

         <h2 className="text-3xl font-semibold text-white text-center flex items-center justify-center gap-3">
          <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-md">
          <LucideShield className="text-white-400 w-8 h-8" />
          </div>
              Advantages of issuing Structured Products
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#0A102A] p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 space-y-4">
              <div className="flex justify-center">
                <div className="p-4 rounded-full bg-[#121832] border border-blue-500 shadow-md flex items-center justify-center">
                  <LucideLock className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-lg text-white text-white text-center">Principal protection (depending on the type of structured product).</h3>
            </div>
            <div className="bg-[#0A102A] p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 space-y-4">
              <div className="flex justify-center">
                <div className="p-4 rounded-full bg-[#121832] border border-blue-500 shadow-md flex items-center justify-center">
                  <LucideCoins className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-lg text-white text-white text-center">Tax-efficient access to fully taxable investments.</h3>
            </div>
            <div className="bg-[#0A102A] p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 space-y-4">
              <div className="flex justify-center">
                <div className="p-4 rounded-full bg-[#121832] border border-blue-500 shadow-md flex items-center justify-center">
                  <LucideBarChart className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-lg text-white text-white text-center">Enhanced returns within an investment (depending on the type of structured product).</h3>
            </div>
            <div className="bg-[#0A102A] p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 space-y-4">
              <div className="flex justify-center">
                <div className="p-4 rounded-full bg-[#121832] border border-blue-500 shadow-md flex items-center justify-center">
                  <LucideTrendingUp className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-lg text-white text-white text-center">Reduced volatility (or risk) within an investment (depending on the type of structured product).</h3>
            </div>
            <div className="bg-[#0A102A] p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 space-y-4">
              <div className="flex justify-center">
                <div className="p-4 rounded-full bg-[#121832] border border-blue-500 shadow-md flex items-center justify-center">
                  <LucideCoins className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-lg text-white text-white text-center">Ability to earn a positive return in low-yield or flat equity market environments.</h3>
            </div>
            <div className="bg-[#0A102A] p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 space-y-4">
              <div className="flex justify-center">
                <div className="p-4 rounded-full bg-[#121832] border border-blue-500 shadow-md flex items-center justify-center">
                  <LucideWallet className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-lg text-white text-white text-center">Ability to minimize issuer risk by using collateral secured instruments (COSIs) backed with collateral in the form of securities or cash deposits.</h3>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default IssuanceOfFinancialInstruments;
