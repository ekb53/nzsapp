"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const generateData = (strategy, timeframe) => {
  const dataPoints = timeframe === "1d" ? 24 : timeframe === "1w" ? 7 : timeframe === "1m" ? 30 : 12
  const data = []
  let baseValue = 100

  for (let i = 0; i < dataPoints; i++) {
    const change = (Math.random() - 0.5) * 10
    baseValue += change
    data.push({
      time: timeframe === "1d" ? `${i}:00` : timeframe === "1w" ? `Day ${i + 1}` : timeframe === "1m" ? `Day ${i + 1}` : `Month ${i + 1}`,
      value: baseValue,
    })
  }

  return data
}

export function StockChart({ strategy, timeframe }) {
  const data = generateData(strategy, timeframe)

  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis dataKey="time" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value.toFixed(2)}`} />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke={strategy === "quality" ? "#8884d8" : strategy === "growth" ? "#82ca9d" : "#ffc658"} activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  )
}

