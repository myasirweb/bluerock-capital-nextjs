import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ArrowDownRight } from "lucide-react"

const portfolioData = [
  {
    name: "Growth Portfolio",
    return: "+12.5%",
    period: "YTD",
    trend: "up",
    description: "Focused on high-growth potential investments",
    allocation: [
      { asset: "Equities", percentage: 70 },
      { asset: "Bonds", percentage: 20 },
      { asset: "Alternatives", percentage: 10 },
    ],
  },
  {
    name: "Balanced Portfolio",
    return: "+8.3%",
    period: "YTD",
    trend: "up",
    description: "Balanced approach between growth and stability",
    allocation: [
      { asset: "Equities", percentage: 50 },
      { asset: "Bonds", percentage: 40 },
      { asset: "Cash", percentage: 10 },
    ],
  },
  {
    name: "Conservative Portfolio",
    return: "+5.7%",
    period: "YTD",
    trend: "up",
    description: "Capital preservation with steady income",
    allocation: [
      { asset: "Bonds", percentage: 60 },
      { asset: "Equities", percentage: 30 },
      { asset: "Cash", percentage: 10 },
    ],
  },
]

const marketIndices = [
  { name: "BET", value: "20,695.03", change: "-0.37%", trend: "down" },
  { name: "S&P 500", value: "4,524.37", change: "+0.85%", trend: "up" },
  { name: "FTSE 100", value: "7,307.33", change: "+0.58%", trend: "up" },
  { name: "DAX", value: "15,892.14", change: "+1.23%", trend: "up" },
]

export default function Portfolio() {
  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Portfolio Performance */}
          <div>
            <div className="mb-8">
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-4 block">
                Portfolio Performance
              </span>
              <h2 className="text-4xl font-bold text-white mb-4 text-balance">Proven Investment Results</h2>
              <p className="text-gray-300 text-lg text-pretty">
                Our professionally managed portfolios deliver consistent returns across different risk profiles and
                market conditions.
              </p>
            </div>

            <div className="space-y-6">
              {portfolioData.map((portfolio, index) => (
                <Card
                  key={index}
                  className="bg-slate-700 border-slate-600 hover:bg-slate-600 transition-colors duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1">{portfolio.name}</h3>
                        <p className="text-gray-400 text-sm">{portfolio.description}</p>
                      </div>
                      <div className="text-right">
                        <div
                          className={`flex items-center text-2xl font-bold ${
                            portfolio.trend === "up" ? "text-green-400" : "text-red-400"
                          }`}
                        >
                          {portfolio.trend === "up" ? (
                            <ArrowUpRight className="h-6 w-6 mr-1" />
                          ) : (
                            <ArrowDownRight className="h-6 w-6 mr-1" />
                          )}
                          {portfolio.return}
                        </div>
                        <div className="text-gray-400 text-sm">{portfolio.period}</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {portfolio.allocation.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center justify-between text-sm">
                          <span className="text-gray-300">{item.asset}</span>
                          <div className="flex items-center space-x-2">
                            <div className="w-20 h-2 bg-slate-600 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-blue-500 rounded-full"
                                style={{ width: `${item.percentage}%` }}
                              ></div>
                            </div>
                            <span className="text-gray-400 w-8">{item.percentage}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Market Overview */}
          <div>
            <div className="mb-8">
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-4 block">
                Market Overview
              </span>
              <h2 className="text-4xl font-bold text-white mb-4 text-balance">Real-Time Market Data</h2>
              <p className="text-gray-300 text-lg text-pretty">
                Stay informed with live market data and professional analysis to make better investment decisions.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {marketIndices.map((index, indexNum) => (
                <Card key={indexNum} className="bg-slate-700 border-slate-600">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-lg font-semibold text-white">{index.name}</h4>
                        <p className="text-2xl font-bold text-gray-300">{index.value}</p>
                      </div>
                      <div
                        className={`flex items-center text-lg font-semibold ${
                          index.trend === "up" ? "text-green-400" : "text-red-400"
                        }`}
                      >
                        {index.trend === "up" ? (
                          <ArrowUpRight className="h-5 w-5 mr-1" />
                        ) : (
                          <ArrowDownRight className="h-5 w-5 mr-1" />
                        )}
                        {index.change}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Investing?</h3>
              <p className="text-blue-100 mb-6 text-pretty">
                Join thousands of investors who trust BlueRock with their financial future.
              </p>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Open Account Today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
