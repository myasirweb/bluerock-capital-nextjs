"use client";
import React from 'react';
import {
  LucideMail,
  LucideBriefcase,
  LucideUsers,
  LucideRocket,
  LucideSparkles,
  LucideStar,
} from 'lucide-react';

const Careers = () => {
  return (
    <div className="bg-[#050A19] text-gray-300 min-h-screen font-sans overflow-hidden relative">

      {/* Hero */}
      <header
        className="relative py-20 text-center px-4 rounded-b-3xl shadow-lg bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/counter.jpg')" }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60 rounded-b-3xl"></div>

        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Careers
          </h1>
          <p className="text-lg sm:text-xl text-blue-300 max-w-2xl mx-auto">
            Shape your professional future with us.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-20 space-y-20">

        {/* Intro */}
        <section className="bg-[#0A102A] p-8 md:p-12 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-semibold text-white flex items-center gap-2">
              <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-md">
                <LucideBriefcase className="w-6 h-6 text-white" />
              </div>
              Work with us
            </h2>
            <p className="text-gray-400 leading-relaxed">
              We want to attract high-performing employees who are passionate about the activities they carry out and who want to train continuously.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We offer an attractive environment for personal development and creativity, a corporate culture based on partnership with our employees and excellent prospects for professional development and training. We are concerned about the continuous development and personal satisfaction of our employees, given that they are our interface with customers and represent us.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md h-72 rounded-3xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105">
              <img
                src="/careers.jpg"
                alt="A team of professionals collaborating"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950 to-transparent opacity-70"></div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="bg-[#0A102A] p-8 md:p-12 rounded-3xl shadow-2xl space-y-12">
          <h2 className="text-3xl font-semibold text-white text-center flex items-center justify-center gap-2">
            <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-md">
              <LucideUsers className="w-6 h-6 text-white" />
            </div>
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
               <div className="inline-block p-4 rounded-full bg-[#121832] border border-blue-500 shadow-md">
                <LucideRocket className="w-7 h-7 text-white-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Continuous Growth</h3>
              <p className="text-gray-400">
                We believe in nurturing talent and providing opportunities for continuous learning and career advancement.
              </p>
            </div>
            <div className="space-y-4">

                <div className="inline-block p-4 rounded-full bg-[#121832] border border-blue-500 shadow-md">
                <LucideStar className="w-7 h-7 text-white-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Creative Environment</h3>
              <p className="text-gray-400">
                Our corporate culture is built on creativity and partnership, valuing every employee's unique contribution.
              </p>
            </div>
            <div className="space-y-4">

              <div className="inline-block p-4 rounded-full bg-[#121832] border border-blue-500 shadow-md">
                <LucideSparkles className="w-7 h-7 text-white-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Professional Development</h3>
              <p className="text-gray-400">
                We offer excellent prospects for professional development and training to help you reach your full potential.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-[#0A102A] p-8 md:p-12 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md h-72 rounded-3xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105">
              <img
                src="/sendingemail.jpg"
                alt="A person sending an email on a laptop"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950 to-transparent opacity-70"></div>
            </div>
          </div>
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-semibold text-white flex items-center gap-2">
              <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-md">
                <LucideMail className="w-6 h-6 text-white" />
              </div>
              Would you like to join our team?
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Send an email to <span className="text-blue-300 font-bold">office@bluerock.ro</span>, indicating the position for which you want to apply and attaching a CV with your experience.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Careers;
