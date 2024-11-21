"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ChartImport({ onImport }) {
  const [chartType, setChartType] = useState("")
  const [file, setFile] = useState(null)

  const handleImport = () => {
    if (chartType && file) {
      // In a real application, you would process the file here
      onImport({ type: chartType, name: file.name })
      setChartType("")
      setFile(null)
    }
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="chart-type">Chart Type</Label>
        <Select value={chartType} onValueChange={setChartType}>
          <SelectTrigger id="chart-type">
            <SelectValue placeholder="Select chart type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="tableau">Tableau</SelectItem>
            <SelectItem value="powerbi">Power BI</SelectItem>
            <SelectItem value="excel">Excel</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="chart-file">Chart File</Label>
        <Input
          id="chart-file"
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
      </div>
      <Button onClick={handleImport} disabled={!chartType || !file}>
        Import Chart
      </Button>
    </div>
  )
}

