"use client";
import React from 'react';
import {
  LucideBanknote,
  LucideCoins,
  LucideShield,
  LucideClock,
  LucideUsers,
  LucideDollarSign,
  LucideXCircle,
  LucideWallet,
  LucideHandshake,
  LucideSquareGanttChart,
} from 'lucide-react';

const GeneralInformation = () => {
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
          General Information
          </h1>
          <p className="text-lg sm:text-xl text-blue-300 max-w-2xl mx-auto">
           Everything you need to know about investment funds.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* What is an Investment Fund Section */}
        <section className="bg-[#0A102A] p-8 md:p-12 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
             <h2 className="text-3xl font-semibold text-white flex items-center gap-3 mb-4">
          <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-md">
           <LucideBanknote className="text-white-400 w-8 h-8" />
          </div>
              What is an investment fund?
          </h2>
            
            <p className="text-gray-400 leading-relaxed">
              Investment funds are collective investment schemes based on a diversified portfolio of assets: when you invest in a fund, you acquire ownership that corresponds to a share of a portfolio of equities or bonds already selected and actively managed by experts. This means investing in funds should be safer than buying individual securities, because of the diversification of the fund and experience of the managers.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md h-72 rounded-3xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105">
              <img
                src="/businessman.jpg"
                alt="A person holding a key with investment symbols"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950 to-transparent opacity-70"></div>
            </div>
          </div>
        </section>

        {/* Our Serviced Funds Section */}
        <section className="bg-[#0A102A] p-8 md:p-12 rounded-3xl shadow-2xl space-y-12">
           <h2 className="text-3xl font-semibold text-white text-center flex items-center justify-center gap-2">
          <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-md">
           <LucideCoins className="text-white-400 w-8 h-8" />
          </div>
             What funds do we service?
          </h2>
          
          <p className="text-gray-400 text-center max-w-3xl mx-auto">
            Blue Rock Financial Services acts as distributor and Payment Agent for 5 regulated investment funds which are passported from Austria to Romania:
          </p>
          <div className="flex justify-center">
            <ul className="list-disc list-inside text-gray-300 space-y-2 text-lg">
              <li className="font-semibold text-white">NOAH F22 Multi Asset Fund</li>
              <li>PM2(USD)/EUR</li>
              <li>PM4</li>
              <li>Ariquon Wachstum</li>
              <li>PM3(USD)/EUR</li>
            </ul>
          </div>
          <p className="text-gray-400 text-center max-w-3xl mx-auto">
  All of the above mentioned funds are managed by{" "}
  <a
    href="https://www.llbinvest.at/"
    className="font-bold text-blue-400 hover:underline"
  >
    LLB Invest Kapitalanlagegesellschaft m.b.H
  </a>
  .
</p>

        </section>

        {/* Pros Section */}
        <section className="p-8 md:p-12 space-y-12">

         <h2 className="text-3xl font-semibold text-white text-center flex items-center justify-center gap-3">
          <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-md">
          <LucideShield className="text-white-400 w-8 h-8" />
          </div>
              Pros
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#0A102A] p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 space-y-4"> 
                <div className="flex justify-center">
                <div className="p-4 rounded-full bg-[#121832] border border-blue-500 shadow-md flex items-center justify-center">
                  <LucideWallet className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white text-center">Diversification</h3>
              <p className="text-gray-400 text-center">
                Investment funds spread their holdings across several different investment vehicles, which reduces the effect any single security or class of securities will have on the overall portfolio. Because investment funds can contain hundreds or thousands of securities, investors are not likely to be fazed if one of the securities does not do well.
              </p>
            </div>
            <div className="bg-[#0A102A] p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 space-y-4">
              <div className="flex justify-center">
                <div className="p-4 rounded-full bg-[#121832] border border-blue-500 shadow-md flex items-center justify-center">
                  <LucideUsers className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white text-center">Expert Management</h3>
              <p className="text-gray-400 text-center">
                Many investors lack the financial know-how to manage their own portfolio. However, non-index investment funds are managed by professionals who dedicate their careers to helping investors receive the best risk-return trade-off according to their objectives.
              </p>
            </div>
            <div className="bg-[#0A102A] p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 space-y-4">
              <div className="flex justify-center">
                <div className="p-4 rounded-full bg-[#121832] border border-blue-500 shadow-md flex items-center justify-center">
                  <LucideClock className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white text-center">Liquidity</h3>
              <p className="text-gray-400 text-center">
                Investment funds, unlike some of the individual investments they may hold, can be traded daily. Though not as liquid as stocks which can be traded. Buy and sell orders are filled after market close.
              </p>
            </div>
            <div className="bg-[#0A102A] p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 space-y-4">
              <div className="flex justify-center">
                <div className="p-4 rounded-full bg-[#121832] border border-blue-500 shadow-md flex items-center justify-center">
                  <LucideHandshake className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white text-center">Convenience</h3>
              <p className="text-gray-400 text-center">
                If you were investing on your own you would ideally spend time researching securities. You would also have to purchase a huge range of securities to acquire holdings comparable to most investment funds. Then, you would have to monitor all those securities. Choosing an investment fund is ideal for people who do not have the time to micromanage their portfolios.
              </p>
            </div>
            <div className="bg-[#0A102A] p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 space-y-4">
              <div className="flex justify-center">
                <div className="p-4 rounded-full bg-[#121832] border border-blue-500 shadow-md flex items-center justify-center">
                  <LucideCoins className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white text-center">Reinvestment of Income</h3>
              <p className="text-gray-400 text-center">
                Another benefit of investment funds is that they allow you to reinvest your and interest in additional fund shares. In effect, this allows you to take advantage of the opportunity to grow your portfolio without paying regular transaction fees for purchasing additional investment fund shares.
              </p>
            </div>
            <div className="bg-[#0A102A] p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 space-y-4">
              <div className="flex justify-center">
                <div className="p-4 rounded-full bg-[#121832] border border-blue-500 shadow-md flex items-center justify-center">
                  <LucideSquareGanttChart className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white text-center">Range of Investment Options and Objectives</h3>
              <p className="text-gray-400 text-center">
                There are funds for the highly aggressive investor and the middle-of-the-road investor – for example, emerging markets funds, investment-grade bond funds, and balanced funds, respectively. There are also life cycle funds to ramp down risk as you near retirement. There are funds with a buy-and-hold philosophy, and others that are in and out of holdings almost daily. No matter your investing style, there is bound to be a perfect fund to match it.
              </p>
            </div>
            <div className="bg-[#0A102A] p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 space-y-4">
              <div className="flex justify-center">
                <div className="p-4 rounded-full bg-[#121832] border border-blue-500 shadow-md flex items-center justify-center">
                  <LucideDollarSign className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white text-center">Affordability</h3>
              <p className="text-gray-400 text-center">
                For as little as $50 per month, you can own shares in Google (NASDAQ: GOOG), Berkshire Hathaway (NYSE: BRK.A), and a host of other expensive securities via investment funds. At the time of this writing, a share of Berkshire Hathaway costs over $313,000 a share.
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <div className="relative w-full max-w-lg h-72 rounded-3xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105">
              <img
                src="/financial-data.jpg"
                alt="A positive financial graph with a chart showing growth"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950 to-transparent opacity-70"></div>
            </div>
          </div>
        </section>

        {/* Cons Section */}
        <section className="bg-[#0A102A] p-8 md:p-12 rounded-3xl shadow-2xl space-y-12">
          <h2 className="text-3xl font-semibold text-white text-center flex items-center justify-center gap-3">
            <LucideXCircle className="text-red-400 w-8 h-8" />
            Cons
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#050A19] p-6 rounded-2xl shadow-inner border border-red-500 space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <LucideXCircle className="text-red-400 w-6 h-6" />
                No Control
              </h3>
              <p className="text-gray-400">
                On the flip side, you have no control over investment funds: you cannot influence purchases and sales, and you never know the exact composition of the fund at any given moment.
              </p>
            </div>
            <div className="bg-[#050A19] p-6 rounded-2xl shadow-inner border border-red-500 space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <LucideClock className="text-red-400 w-6 h-6" />
                Delayed Value
              </h3>
              <p className="text-gray-400">
                Moreover, you cannot track real-time changes in the value of your fund units, like you can with shares. When you buy or sell your units, you do not find out their value at the moment of purchase or sale until a few hours later because it takes the fund some time to work out the net asset value.
              </p>
            </div>
            <div className="bg-[#050A19] p-6 rounded-2xl shadow-inner border border-red-500 space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <LucideCoins className="text-red-400 w-6 h-6" />
                Management Fees
              </h3>
              <p className="text-gray-400">
                You are obliged to pay management charges every year, even if the funds in which you have invested deliver negative results.
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <div className="relative w-full max-w-lg h-72 rounded-3xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105">
              <img
                src="/lightbulb_planning.jpg"
                alt="A negative financial graph with a chart showing a decline"
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

export default GeneralInformation;
