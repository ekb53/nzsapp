"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function CompanyResearch({ company }) {
  // In a real application, you would fetch this data from an API
  const financialData = [
    { metric: "Market Cap", value: "$2.5T" },
    { metric: "P/E Ratio", value: "28.5" },
    { metric: "Dividend Yield", value: "0.5%" },
    { metric: "52 Week High", value: "$182.94" },
    { metric: "52 Week Low", value: "$124.17" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>{company.name} ({company.ticker})</CardTitle>
        <CardDescription>Key financial metrics and information</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Metric</TableHead>
              <TableHead>Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {financialData.map((item) => (
              <TableRow key={item.metric}>
                <TableCell>{item.metric}</TableCell>
                <TableCell>{item.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

