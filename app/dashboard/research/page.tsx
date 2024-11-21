"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CompanyResearch } from "@/components/company-research"
import { MarketNews } from "@/components/market-news"

export default function ResearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState(null)

  const handleSearch = () => {
    // In a real application, you would fetch data from an API here
    setSearchResults({ name: searchQuery, ticker: searchQuery.toUpperCase() })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Research</h2>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Company Search</CardTitle>
          <CardDescription>Search for a company by name or ticker symbol</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2">
            <Input
              placeholder="Enter company name or ticker"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button onClick={handleSearch}>Search</Button>
          </div>
        </CardContent>
      </Card>
      {searchResults && (
        <CompanyResearch company={searchResults} />
      )}
      <MarketNews />
    </div>
  )
}

