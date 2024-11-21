"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface NewsItem {
  title: string
  description: string
  url: string
  publishedAt: string
}

export function FinanceNews() {
  const [news, setNews] = useState<NewsItem[]>([])

  useEffect(() => {
    const fetchNews = async () => {
      // In a real application, you would fetch from an actual API
      // For this example, we'll use mock data
      const mockNews: NewsItem[] = [
        {
          title: "Tech Stocks Surge Amid Positive Earnings Reports",
          description: "Major tech companies report better-than-expected Q2 earnings, driving market optimism.",
          url: "#",
          publishedAt: "2023-07-15T14:30:00Z",
        },
        {
          title: "Federal Reserve Hints at Potential Rate Cut",
          description: "Fed Chair suggests possibility of rate cuts later this year, boosting market sentiment.",
          url: "#",
          publishedAt: "2023-07-15T12:45:00Z",
        },
        {
          title: "Oil Prices Stabilize Following OPEC+ Meeting",
          description: "OPEC+ agrees to maintain current production levels, bringing stability to oil markets.",
          url: "#",
          publishedAt: "2023-07-15T10:15:00Z",
        },
      ]
      setNews(mockNews)
    }

    fetchNews()
  }, [])

  return (
    <div className="space-y-4">
      {news.map((item, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
            <CardDescription className="text-xs">
              {new Date(item.publishedAt).toLocaleString()}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{item.description}</p>
            <a href={item.url} className="text-sm text-blue-500 hover:underline mt-2 inline-block">
              Read more
            </a>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

