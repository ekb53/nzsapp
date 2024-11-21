"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    date: "Jan",
    "John Doe": 4000,
    "Jane Smith": 2400,
    "Bob Johnson": 2400,
  },
  {
    date: "Feb",
    "John Doe": 3000,
    "Jane Smith": 1398,
    "Bob Johnson": 2210,
  },
  {
    date: "Mar",
    "John Doe": 2000,
    "Jane Smith": 9800,
    "Bob Johnson": 2290,
  },
  {
    date: "Apr",
    "John Doe": 2780,
    "Jane Smith": 3908,
    "Bob Johnson": 2000,
  },
  {
    date: "May",
    "John Doe": 1890,
    "Jane Smith": 4800,
    "Bob Johnson": 2181,
  },
  {
    date: "Jun",
    "John Doe": 2390,
    "Jane Smith": 3800,
    "Bob Johnson": 2500,
  },
]

export function PortfolioPerformance() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis dataKey="date" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip />
        <Line type="monotone" dataKey="John Doe" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="Jane Smith" stroke="#82ca9d" />
        <Line type="monotone" dataKey="Bob Johnson" stroke="#ffc658" />
      </LineChart>
    </ResponsiveContainer>
  )
}

