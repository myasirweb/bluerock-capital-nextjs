"use client";
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Shield, Users, Award, TrendingUp, CheckCircle, Sparkles } from "lucide-react"
import { useState } from "react";


const highlights = [
  {
    icon: Building2,
    title: "Established Since 1997",
    description: "Operating with Romanian capital market authorization under MiFID II directives"
  },
  {
    icon: Shield,
    title: "Austrian Ownership",
    description: "99.99% owned by Blue Rock Capital GmbH since 2011, ensuring stability and trust"
  },
  {
    icon: TrendingUp,
    title: "Full Service Range",
    description: "Authorized to perform the complete range of financial services and investment activities"
  },
  {
    icon: CheckCircle,
    title: "Client-First Approach",
    description: "Every decision made in the best interest of our clients from the very first contract"
  }
]

export default function WhyUs() {
  //  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  return (
    <section className="py-24" style={{ backgroundColor: '#010212' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
       <div className="flex justify-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-full border border-blue-500/30 mb-6">
          <Sparkles className="h-4 w-4 text-cyan-400" />
          <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">
            One Step Ahead
          </span>
        </div>
      </div>
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-financial-text mb-8">
            Why Us
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left Content - Company Description */}
          <div className="space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                We are a <span className="text-financial-accent font-semibold">financial services company</span> authorized 
                in accordance with the Romanian capital market legislation which transposes the provisions of 
                Directive 2014/65/EU (MiFID II), established in <span className="text-financial-gold font-semibold">1997</span>, 
                operating until June 5, 2014 under the name of Transylvania Capital.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Since 2011, the company is <span className="text-financial-gold font-semibold">99.99% owned</span> by 
                the Austrian shareholder <span className="text-financial-accent font-semibold">Blue Rock Capital GmbH</span>.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Blue Rock Financial Services is authorized to perform the <span className="text-financial-accent font-semibold">full range of financial services</span> and 
                investment activities provided by the internal and community legal framework. Each investment service provided to our clients 
                is based on our promise to always act in the <span className="text-financial-gold font-semibold">best interest of our client</span>, 
                which is a commitment that we make starting right at the contracting stage.
              </p>

              <p className="text-financial-text-muted text-lg leading-relaxed">
                For us, acting "in the best interest of the client" means not only the best execution of client orders, 
                but also a <span className="text-financial-accent font-semibold">long-term partnership</span> created from the beginning of our contractual relationship, 
                diversity of services offered, and through our high level of professional competence—all aspects that create 
                <span className="text-financial-gold font-semibold"> lasting value for each client</span>.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-financial-surface to-financial-dark border border-financial-border">
              <p className="text-financial-text text-xl italic">
                "Providing investment services for our clients has been the main goal of our business 
                in which we have successfully provided since our inception."
              </p>
            </div>
          </div>

          {/* Right Content - Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-square rounded-xl overflow-hidden shadow-financial group">
                <img 
                  src="/two-young-worker.jpg" 
                  alt="Professional financial office environment" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-financial group">
                <img 
                  src="/business-team.jpg" 
                  alt="Financial consultation meeting" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-financial group">
                <img 
                  src="/businessman.jpg"
                  alt="Financial growth visualization" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden shadow-financial group">
                <img
                  src="/business-person-futuristic.jpg"
                  alt="Professional partnership handshake"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <Card
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="bg-[#112143] border-gray-700 rounded-3xl transition-all duration-500 group relative overflow-hidden p-0"
              style={{
                boxShadow: hoveredIndex === index ? '0 0 20px rgba(168, 85, 247, 0.4)' : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
              }}
            >
              <div className="relative z-10 p-8 text-center flex flex-col items-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                  <highlight.icon className="h-8 w-8 text-white transition-transform duration-500 group-hover:rotate-[360deg]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                  {highlight.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
              {/* Highlight card background glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}
              ></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}