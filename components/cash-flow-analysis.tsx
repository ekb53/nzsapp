"use client"

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts"

const data = {
  AAPL: [
    { year: 2018, operating: 77434, investing: -45977, financing: -87876 },
    { year: 2019, operating: 69391, investing: -45896, financing: -90976 },
    { year: 2020, operating: 80674, investing: -4289, financing: -86820 },
    { year: 2021, operating: 104038, investing: -14545, financing: -93353 },
    { year: 2022, operating: 122151, investing: -22354, financing: -110749 },
  ],
  GOOGL: [
    { year: 2018, operating: 47971, investing: -28504, financing: -13179 },
    { year: 2019, operating: 54520, investing: -29491, financing: -23209 },
    { year: 2020, operating: 65124, investing: -32773, financing: -24408 },
    { year: 2021, operating: 91652, investing: -142395, financing: 1997 },
    { year: 2022, operating: 91495, investing: -40701, financing: -55511 },
  ],
  MSFT: [
    { year: 2018, operating: 43884, investing: -6061, financing: -33590 },
    { year: 2019, operating: 52185, investing: -15773, financing: -36858 },
    { year: 2020, operating: 60675, investing: -12223, financing: -46031 },
    { year: 2021, operating: 76740, investing: -27577, financing: -51010 },
    { year: 2022, operating: 89035, investing: -30311, financing: -62966 },
  ],
  AMZN: [
    { year: 2018, operating: 30723, investing: -12369, financing: -7686 },
    { year: 2019, operating: 38514, investing: -24281, financing: -10066 },
    { year: 2020, operating: 66064, investing: -59611, financing: -1104 },
    { year: 2021, operating: 46327, investing: -58154, financing: 6291 },
    { year: 2022, operating: 46752, investing: -27547, financing: -15010 },
  ],
}

export function CashFlowAnalysis({ company }: { company: string }) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data[company]}>
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="operating" stroke="#8884d8" name="Operating Cash Flow" />
        <Line type="monotone" dataKey="investing" stroke="#82ca9d" name="Investing Cash Flow" />
        <Line type="monotone" dataKey="financing" stroke="#ffc658" name="Financing Cash Flow" />
      </LineChart>
    </ResponsiveContainer>
  )
}

