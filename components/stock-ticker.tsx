"use client"

import { useEffect, useState } from "react"

// Stock Ticker Data
const stockData = [
  { symbol: "BET", price: "20695.03", change: "-0.37%", color: "text-red-400" },
  { symbol: "BET-TR", price: "48024.37", change: "-0.36%", color: "text-red-400" },
  { symbol: "BET-FI", price: "73075.33", change: "0.58%", color: "text-green-400" },
  { symbol: "BETPlus", price: "4092.14", change: "0.61%", color: "text-green-400" },
  { symbol: "BET-NG", price: "1507.06", change: "-0.50%", color: "text-red-400" },
  { symbol: "BET-XT", price: "1774.62", change: "-0.23%", color: "text-red-400" },
  { symbol: "BET-XT-TR", price: "4031.99", change: "-0.23%", color: "text-red-400" },
  { symbol: "BET-BK", price: "4010.14", change: "0.01%", color: "text-green-400" },
]

// Index Data
const indexData = [
  { symbol: "NASDAQ", price: "0.00", change: "0.00%" },
  { symbol: "S&P500", price: "0.00", change: "0.00%" },
  { symbol: "FTSE 100", price: "0.00", change: "0.00%" },
  { symbol: "DAX", price: "0.00", change: "0.00%" },
  { symbol: "Eurostocks 50", price: "0.00", change: "0.00%" },
  { symbol: "Dow Jones", price: "0.00", change: "0.00%" },
  { symbol: "Hang Seng", price: "0.00", change: "0.00%" },
  { symbol: "Nikkei 225", price: "0.00", change: "0.00%" },
]

export default function StockTicker() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stockData.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  // Helper to determine color for indexData change
  const getChangeColor = (change: string) => {
    return change.startsWith("-") ? "text-red-400" : "text-green-400"
  }

  return (
    <div className="bg-slate-950 border-b border-slate-800">
      
      {/* Stock Data Ticker */}
      <div className="overflow-hidden border-b border-slate-800">
        <div className="flex animate-scroll">
          {[...stockData, ...stockData].map((stock, index) => (
            <div key={index} className="flex-shrink-0 px-6 py-2 flex items-center space-x-2">
              <span className="text-white font-semibold text-sm">{stock.symbol}</span>
              <span className="text-gray-300 text-sm">{stock.price}</span>
              <span className={`text-sm ${stock.color}`}>{stock.change}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Index Data */}
      <div className="border-t border-slate-800">
        <div className="max-w-full mx-auto px-4 py-2">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 text-xs">
            {indexData.map((index) => (
              <div key={index.symbol} className="text-center">
                <div className="text-white  font-medium">{index.symbol}</div>
                <div className="text-gray-300">{index.price}</div>
                <div className={`text-sm ${getChangeColor(index.change)}`}>{index.change}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
