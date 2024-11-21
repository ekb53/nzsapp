"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function MarketNews() {
  // In a real application, you would fetch this data from an API
  const news = [
    { title: "Tech Stocks Surge Amid Positive Earnings Reports", date: "2023-07-15" },
    { title: "Federal Reserve Hints at Potential Rate Cut", date: "2023-07-14" },
    { title: "Oil Prices Stabilize Following OPEC+ Meeting", date: "2023-07-13" },
    { title: "Global Markets React to China's Economic Data", date: "2023-07-12" },
    { title: "Cryptocurrency Market Sees Increased Volatility", date: "2023-07-11" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Market News</CardTitle>
        <CardDescription>Latest financial news and market updates</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {news.map((item, index) => (
            <li key={index} className="flex justify-between">
              <span>{item.title}</span>
              <span className="text-sm text-gray-500">{item.date}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

