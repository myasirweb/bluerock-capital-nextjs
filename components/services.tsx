"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, PieChart, BarChart3, Shield, Globe, Users, ChevronRight } from "lucide-react"

const services = [
  {
    icon: PieChart,
    title: "Portfolio Management",
    description: "Professional portfolio management services tailored to your investment goals and risk tolerance.",
    features: ["Asset Allocation", "Risk Management", "Performance Monitoring", "Regular Rebalancing"],
  },
  {
    icon: TrendingUp,
    title: "Investment Funds",
    description: "Access to a wide range of investment funds including equity, bond, and mixed funds.",
    features: ["Diversified Options", "Professional Management", "Low Minimum Investment", "Regular Reporting"],
  },
  {
    icon: BarChart3,
    title: "Trading Services",
    description: "Advanced trading platform with real-time market data and professional trading tools.",
    features: ["Real-time Data", "Advanced Charts", "Order Management", "Market Analysis"],
  },
  {
    icon: Shield,
    title: "Structured Products",
    description: "Personalized structured investment products designed to meet specific investment objectives.",
    features: ["Custom Solutions", "Capital Protection", "Enhanced Returns", "Risk Mitigation"],
  },
  {
    icon: Globe,
    title: "International Markets",
    description: "Access to global markets and international investment opportunities.",
    features: ["Global Reach", "Multi-Currency", "International Funds", "Cross-Border Trading"],
  },
  {
    icon: Users,
    title: "Advisory Services",
    description: "Expert financial advisory services to help you make informed investment decisions.",
    features: ["Personal Consultation", "Market Insights", "Strategy Development", "Ongoing Support"],
  },
]

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-4 block animate-fade-in">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 text-balance animate-fade-in-up">
            Comprehensive Financial Solutions
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto text-pretty animate-fade-in-up">
            We provide a full range of financial services and investment solutions designed to help you achieve your
            financial goals with confidence and security.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`bg-slate-800 border-slate-700 transition-all duration-500 cursor-pointer group ${
                hoveredCard === index
                  ? "bg-slate-700 scale-105 shadow-2xl shadow-blue-600/20 border-blue-600/50"
                  : "hover:bg-slate-700 hover:scale-102 hover:shadow-xl"
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardContent className="p-6 md:p-8">
                <div className="mb-6">
                  <div
                    className={`w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                      hoveredCard === index
                        ? "bg-blue-500 shadow-lg shadow-blue-500/30 scale-110"
                        : "bg-blue-600 group-hover:bg-blue-500"
                    }`}
                  >
                    <service.icon className="h-7 w-7 md:h-8 md:w-8 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6 text-pretty text-sm md:text-base">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className={`flex items-center text-sm text-gray-400 transition-all duration-300 ${
                        hoveredCard === index ? "text-gray-300 translate-x-1" : ""
                      }`}
                      style={{ transitionDelay: `${featureIndex * 50}ms` }}
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full mr-3 transition-all duration-300 ${
                          hoveredCard === index ? "bg-blue-400 shadow-sm shadow-blue-400" : "bg-blue-400"
                        }`}
                      ></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className={`w-full border-blue-600 text-blue-400 bg-transparent transition-all duration-300 group ${
                    hoveredCard === index
                      ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-600/30"
                      : "hover:bg-blue-600 hover:text-white"
                  }`}
                >
                  Learn More
                  <ChevronRight
                    className={`ml-2 h-4 w-4 transition-transform duration-300 ${
                      hoveredCard === index ? "translate-x-1" : "group-hover:translate-x-1"
                    }`}
                  />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
