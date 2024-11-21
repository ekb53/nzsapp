"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const ratios = {
  AAPL: [
    { name: "P/E Ratio", value: 28.5 },
    { name: "Price to Book Ratio", value: 44.6 },
    { name: "Debt to Equity Ratio", value: 2.5 },
    { name: "Current Ratio", value: 0.9 },
    { name: "Return on Equity", value: 0.145 },
  ],
  GOOGL: [
    { name: "P/E Ratio", value: 25.2 },
    { name: "Price to Book Ratio", value: 5.8 },
    { name: "Debt to Equity Ratio", value: 0.07 },
    { name: "Current Ratio", value: 2.7 },
    { name: "Return on Equity", value: 0.23 },
  ],
  MSFT: [
    { name: "P/E Ratio", value: 34.1 },
    { name: "Price to Book Ratio", value: 11.7 },
    { name: "Debt to Equity Ratio", value: 0.42 },
    { name: "Current Ratio", value: 1.9 },
    { name: "Return on Equity", value: 0.43 },
  ],
  AMZN: [
    { name: "P/E Ratio", value: 58.7 },
    { name: "Price to Book Ratio", value: 8.9 },
    { name: "Debt to Equity Ratio", value: 1.2 },
    { name: "Current Ratio", value: 1.1 },
    { name: "Return on Equity", value: 0.09 },
  ],
}

export function FinancialRatios({ company }: { company: string }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Ratio</TableHead>
          <TableHead>Value</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {ratios[company].map((ratio) => (
          <TableRow key={ratio.name}>
            <TableCell>{ratio.name}</TableCell>
            <TableCell>{ratio.value.toFixed(2)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

