"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FinancialMetrics } from "@/components/financial-metrics"
import { FinancialRatios } from "@/components/financial-ratios"
import { CashFlowAnalysis } from "@/components/cash-flow-analysis"

export default function FinancialAnalysisPage() {
  const [selectedCompany, setSelectedCompany] = useState("AAPL")

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Financial Analysis</h2>
        <Select value={selectedCompany} onValueChange={setSelectedCompany}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select company" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="AAPL">Apple Inc.</SelectItem>
            <SelectItem value="GOOGL">Alphabet Inc.</SelectItem>
            <SelectItem value="MSFT">Microsoft Corporation</SelectItem>
            <SelectItem value="AMZN">Amazon.com, Inc.</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Tabs defaultValue="metrics" className="space-y-4">
        <TabsList>
          <TabsTrigger value="metrics">Key Metrics</TabsTrigger>
          <TabsTrigger value="ratios">Financial Ratios</TabsTrigger>
          <TabsTrigger value="cashflow">Cash Flow Analysis</TabsTrigger>
        </TabsList>
        <TabsContent value="metrics">
          <Card>
            <CardHeader>
              <CardTitle>Key Financial Metrics</CardTitle>
              <CardDescription>Overview of important financial metrics for {selectedCompany}</CardDescription>
            </CardHeader>
            <CardContent>
              <FinancialMetrics company={selectedCompany} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="ratios">
          <Card>
            <CardHeader>
              <CardTitle>Financial Ratios</CardTitle>
              <CardDescription>Key financial ratios for {selectedCompany}</CardDescription>
            </CardHeader>
            <CardContent>
              <FinancialRatios company={selectedCompany} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="cashflow">
          <Card>
            <CardHeader>
              <CardTitle>Cash Flow Analysis</CardTitle>
              <CardDescription>Detailed cash flow analysis for {selectedCompany}</CardDescription>
            </CardHeader>
            <CardContent>
              <CashFlowAnalysis company={selectedCompany} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

