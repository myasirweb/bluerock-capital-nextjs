"use client";

import React, { useState } from "react";
import { LucideMail } from "lucide-react";

// Placeholder image generator
const PLACEHOLDER_IMG_URL = (name: string) =>
  `https://placehold.co/200x200/1e293b/d4e5f7?text=${encodeURIComponent(name)}`;

const teamMembers = [
  { name: "Gabriel Ilie", role: "Compliance Officer", email: "g.ilie@bluerock.ro" },
  { name: "Charles Elian", role: "Senior broker & Product Administrator", email: "c.elian@bluerock.ro" },
  { name: "Constantin Dinu", role: "Senior Stockbroker", email: "d.constantin@bluerock.ro" },
  { name: "Catalin Busa", role: "Stockbrocker", email: "c.busa@bluerock.ro" },
  { name: "Claudiu Pocorea", role: "Senior Stockbroker", email: "c.pocorea@bluerock.ro" },
  { name: "Cosmin Vizitiu-Hera", role: "Back office officer", email: "c.vizitiu@bluerock.ro" },
  { name: "Radu Mihai", role: "Tied Agent", email: "r.mihai@bluerock.ro" },
];

const Team: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="bg-[#050A19] min-h-screen text-gray-300 font-sans">
      {/* Header like Management section */}

     <header
        className="relative py-20 text-center px-4 rounded-b-3xl shadow-lg bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/counter.jpg')" }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60 rounded-b-3xl"></div>
        
        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
           Our Team
          </h1>
          <p className="text-lg sm:text-xl text-blue-300 max-w-2xl mx-auto">
            Meet the professionals who drive our financial expertise.
          </p>
        </div>
      </header>

      {/* Team Grid */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`bg-[#0A102A] rounded-3xl p-6 flex flex-col items-center text-center shadow-lg transition-all duration-500 cursor-pointer group border border-transparent hover:border-blue-500
                ${hoveredCard === index ? "scale-105 shadow-2xl shadow-blue-600/40" : "hover:scale-102 hover:shadow-xl"}`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Member Image */}
              <div
                className={`w-28 h-28 mb-4 rounded-full overflow-hidden border-4 border-blue-500 transition-all duration-300 ${
                  hoveredCard === index ? "scale-110 shadow-lg shadow-blue-500/40" : ""
                }`}
              >
                <img
                  src={PLACEHOLDER_IMG_URL(member.name)}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name and Role */}
              <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-blue-100 transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-blue-400 mb-2">{member.role}</p>

              {/* Email */}
              <div
                className={`flex items-center gap-2 text-sm transition-all duration-300 ${
                  hoveredCard === index ? "text-gray-100 translate-x-1" : "text-gray-400"
                }`}
              >
                <LucideMail className="w-4 h-4 text-white" />
                <a
                  href={`mailto:${member.email}`}
                  className="hover:text-blue-400 transition-colors"
                >
                  {member.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Team;
