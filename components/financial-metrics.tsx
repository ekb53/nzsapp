"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = {
  AAPL: [
    { name: "Revenue", value: 365817 },
    { name: "Net Income", value: 94680 },
    { name: "Total Assets", value: 323888 },
    { name: "Total Liabilities", value: 258549 },
  ],
  GOOGL: [
    { name: "Revenue", value: 257637 },
    { name: "Net Income", value: 59972 },
    { name: "Total Assets", value: 359268 },
    { name: "Total Liabilities", value: 107633 },
  ],
  MSFT: [
    { name: "Revenue", value: 198270 },
    { name: "Net Income", value: 72738 },
    { name: "Total Assets", value: 364840 },
    { name: "Total Liabilities", value: 198300 },
  ],
  AMZN: [
    { name: "Revenue", value: 469822 },
    { name: "Net Income", value: 33364 },
    { name: "Total Assets", value: 420549 },
    { name: "Total Liabilities", value: 282304 },
  ],
}

export function FinancialMetrics({ company }: { company: string }) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data[company]}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  )
}

