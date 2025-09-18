import Header from "@/components/header"
import StockTicker from "@/components/stock-ticker"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Portfolio from "@/components/portfolio"
import Statistics from "@/components/statistics"
import WhyUs from "@/components/why-us"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* <StockTicker />
      <Header /> */}
      <Hero />
      {/* <Services /> */}
      {/* <Portfolio /> */}
      {/* <Statistics /> */}
      <WhyUs />
      <ContactSection />
      {/* <Footer /> */}
    </div>
  )
}
