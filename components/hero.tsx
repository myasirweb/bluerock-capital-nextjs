"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"

const heroSlides = [
  {
    title: "Open your trading account online",
    subtitle: "Easy, fast, accessible 100% online",
    buttonText: "Open Account",
    backgroundImage: "/business-people-working-together.jpg",
  },
  {
    title: "Portfolio Management",
    subtitle: "Transfer your portfolio to us",
    buttonText: "Learn How",
    backgroundImage: "/medium-shot.jpg",
  },
  {
    title: "Why BlueRock?",
    subtitle: "We are one step ahead",
    buttonText: "Read More",
    backgroundImage: "/stock-exchange-trading-forex-finance-graphic-concept.jpg",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  const currentHero = heroSlides[currentSlide]

  return (
    <section
       className="relative h-[650px] md:h-[750px] lg:h-[850px] overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url('${currentHero.backgroundImage}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight text-balance">
              {currentHero.title}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 md:mb-8 text-pretty">
              {currentHero.subtitle}
            </p>
            <Button
  size="lg"
  className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:from-blue-500 hover:to-blue-700"
>
  {currentHero.buttonText}
</Button>

          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/60 text-white p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/60 text-white p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
      </button>

      {/* Auto-play Control */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute top-4 right-4 z-20 bg-black/30 hover:bg-black/60 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
      >
        <Play className={`h-4 w-4 transition-transform duration-300 ${isAutoPlaying ? "rotate-0" : "rotate-90"}`} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-blue-600 scale-125 shadow-lg shadow-blue-600/50"
                : "bg-white/50 hover:bg-white/70 hover:scale-110"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 md:w-1/3 h-full bg-gradient-to-l from-blue-600/20 to-transparent"></div>
    </section>
  )
}
