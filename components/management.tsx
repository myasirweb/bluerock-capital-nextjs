"use client";
import React, { useState } from "react";
import { LucideUser, LucideBriefcase, LucideUsers, LucideUserCheck } from "lucide-react";

// Placeholder function for images
const PLACEHOLDER_IMG = (name: string) =>
  `https://placehold.co/400x400/1e293b/fff?text=${encodeURIComponent(name)}`;

const boardMembers = [
  {
    name: "Mr. Stefan N.M. Ungureanu",
    role: "President of the Council",
    bio: `Acting as a PhD professor at the Bucharest Academy of Economic Studies for over 10 years, Mr. Stefan N.M Ungureanu has experience in financial analysis, consulting, finance, and stock exchanges. He also has an extensive history within the National Romanian Securities Commission creating and supporting capital markets legislation. He has written two books and numerous white papers.`,
    image: PLACEHOLDER_IMG("Stefan Ungureanu"),
  },
  {
    name: "Mr. Franz Wanovits",
    role: "Board Member",
    bio: `Member of the Board since 2017. Graduate of the University of Mechanical Engineering in Vienna, holding an MBA in economics from Vienna Economic University. Experienced in investments in futures and has worked with Euroinvest Bank AG, Blue Rock Management GmBH, Donlon Finanzierungs-und Beteiligungs GsmbH, Effect Investment Bank AG.`,
    image: PLACEHOLDER_IMG("Franz Wanovits"),
  },
  {
    name: "Mr. Martin Alexander Nedelko",
    role: "Board Member",
    bio: `Board Member since 2017. Graduate of Law University of Salzburg and Economic University of Vienna. Worked in BLUE ROCK CAPITAL GMBH, CERTIFIED INSTITUTAUSTRIAe. V., EQUIS INVESTMENTS INC., ERSTE BANK AG, PUDENTIAL BACHE PLC, CREDITANSTALT-BANKVEREIN AG. Specializes in trading options/futures, structured instruments, and digital assets.`,
    image: PLACEHOLDER_IMG("Martin Nedelko"),
  },
];

const directors = [
  {
    name: "Mr. Stefan N.M. Ungureanu",
    role: "General Manager",
    license: "F.S.A. authorization no. 55 / 22.03.2017",
    image: PLACEHOLDER_IMG("Stefan Ungureanu"),
  },
  {
    name: "Ms. Lavinia Florentina Anton",
    role: "Deputy General Manager",
    license: "F.S.A. authorization no.86/28.05.2020",
    image: PLACEHOLDER_IMG("Lavinia Anton"),
  },
];

const Management = () => {
  const [hoveredBoard, setHoveredBoard] = useState<number | null>(null);
  const [hoveredDirector, setHoveredDirector] = useState<number | null>(null);

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
           Administration and Management of the Company
          </h1>
          <p className="text-lg sm:text-xl text-blue-300 max-w-2xl mx-auto">
           Experienced professionals leading Blue Rock Financial Services
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Board of Directors */}
        <section className="space-y-8">
          <h2 className="text-3xl font-semibold text-white text-center mb-8 flex items-center justify-center gap-2">
  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-md">
    <LucideUsers className="h-7 w-7 text-white" />
  </div>
  Board of Directors
</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <div
                key={member.name}
                className={`bg-[#0A102A] rounded-3xl shadow-lg p-6 transition-all duration-500 cursor-pointer group border border-transparent hover:border-blue-500 ${
                  hoveredBoard === index ? "scale-105 shadow-2xl shadow-blue-600/30" : "hover:scale-102 hover:shadow-xl"
                }`}
                onMouseEnter={() => setHoveredBoard(index)}
                onMouseLeave={() => setHoveredBoard(null)}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover rounded-2xl mb-4 transition-transform duration-300 group-hover:scale-105"
                />
<h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-1">
  <div className="w-10 h-10 rounded-full bg-[#121832] border border-blue-500 shadow-md flex items-center justify-center">
                      <LucideUser className="w-5 h-5 text-white" />
                    </div>
  {member.name}
</h3>



                <p className="text-blue-400 font-medium mb-2">{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Directors */}
        <section className="space-y-8">
          <h2 className="text-3xl font-semibold text-white text-center mb-8 flex items-center justify-center gap-2">
          <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-md">
            <LucideUserCheck className="h-7 w-7 text-white" />
          </div>
          Directors
        </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {directors.map((director, index) => (
              <div
                key={director.name}
                className={`bg-[#0A102A] rounded-3xl shadow-lg p-6 flex items-center gap-6 transition-all duration-500 cursor-pointer group border border-transparent hover:border-blue-500 ${
                  hoveredDirector === index ? "scale-105 shadow-2xl shadow-blue-600/30" : "hover:scale-102 hover:shadow-xl"
                }`}
                onMouseEnter={() => setHoveredDirector(index)}
                onMouseLeave={() => setHoveredDirector(null)}
              >
                <img
                  src={director.image}
                  alt={director.name}
                  className="w-32 h-32 object-cover rounded-full transition-transform duration-300 group-hover:scale-105"
                />
                <div>
                  <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-1">
                  
                  {/* <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-md">
                    <LucideBriefcase className="w-4 h-4 text-white" />
                  </div> */}

                    <div className="w-10 h-10 rounded-full bg-[#121832] border border-blue-500 shadow-md flex items-center justify-center">
                      <LucideBriefcase className="w-5 h-5 text-white" />
                    </div>
                  {director.name}
                  </h3>

                  <p className="text-blue-400 font-medium">{director.role}</p>
                  <p className="text-gray-400 text-sm">{director.license}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Management;
