"use client";
import React from "react";
import {
  LucideClipboardList,
  LucideFileText,
  LucideDollarSign,
  LucideAlertTriangle,
  LucideArrowRight,
} from "lucide-react";

const PBGrowth = () => {
    return(
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
      LGT PB Growth EUR
    </h1>
  </div>
</header>
 {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 relative z-20">
        {/* Mutual Funds */}
        <section className="bg-[#0A102A] p-8 md:p-12 rounded-3xl shadow-2xl space-y-6">
          <h2 className="text-3xl font-semibold text-white flex items-center gap-2">
            <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-md">
              <LucideDollarSign className="w-6 h-6 text-white" />
            </div>
            Mutual Funds
          </h2>
          <p className="text-gray-400 leading-relaxed">
            S.S.I.F. Blue Rock Financial Services S.A. is the distributor and
            paying agent for the below fund which is administered by LLB Invest
            Kapitalanlagegesellschaft m.b.H
          </p>
          <p className="text-gray-400 leading-relaxed">
            This fund is Authorised in Austria as well as Germany and is
            regulated by the Austrian Financial Market Authority (FMA).
          </p>
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
            The investment fund was is not registered in accordance with US
            legal regulations. Thus, the units of the investment fund are
            neither intended for sale in the USA nor for sale to US citizens (or
            to persons permanently residing in the US), to companies of persons
            or capital companies incorporated under US law.
          </p>
        </section>

        {/* Essential Information */}
        <section className="bg-[#0A102A] p-8 md:p-12 rounded-3xl shadow-2xl space-y-8">
          <h2 className="text-3xl font-semibold text-white flex items-center gap-2">
            <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-md">
              <LucideClipboardList className="w-6 h-6 text-white" />
            </div>
            Essential Information for Investors
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {[
    { title: "Notification For Investors", link: "/growth-pdf/notificare-Prospecte-LGT-PB-28.10.2024.pdf" },
    { title: "Information on – (R)", link: "/growth-pdf/PRIIPKID_LGT-PB-Growth-EUR-R_AT0000A255L9_20250506_ro-.pdf" },
    { title: "Information on – (R2)", link: "/growth-pdf/PRIIPKID_LGT-PB-Growth-EUR-R2_AT0000A255M7_20250506_ro.pdf" },
    { title: "Information on – (R3)", link: "/growth-pdf/PRIIPKID_LGT-PB-Growth-EUR-R3_AT0000A255N5_20250506_ro.pdf" },
    { title: "Information on – (R4)", link: "/growth-pdf/PRIIPKID_LGT-PB-Growth-EUR-R4_AT0000A255P0_20250506_ro.pdf" },
    { title: "Prospectus USD", link: "/growth-pdf/VKP_LGT-PB-Growth-EUR_01012025_RO_with-ANNEX-II-73.pdf" },
    { title: "Annual Report", link: "/growth-pdf/HB2024_LGT-PB-Growth-EUR-en.pdf" },
    { title: "Financial Information", link: "/growth-pdf/StB2023_LGT-PB-Growth-EUR-en.pdf" },
  ].map((item, i) => (
    <a
      key={i}
      href={item.link}
      className="group block bg-[#121832] p-6 rounded-2xl text-center shadow-md border border-transparent hover:border-blue-500 transition-all duration-300"
    >
      <h4 className="text-lg font-semibold text-blue-300 mb-1 group-hover:text-blue-200">
        {item.title}
      </h4>
      <LucideArrowRight className="w-5 h-5 text-gray-500 mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
    </a>
  ))}
</div>

        </section>
      </main>

 </div>


    );
}

export default PBGrowth