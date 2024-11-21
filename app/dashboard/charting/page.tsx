"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChartImport } from "@/components/chart-import"
import { PresentationPreview } from "@/components/presentation-preview"

export default function ChartingPage() {
  const [importedCharts, setImportedCharts] = useState([])
  const [presentationTitle, setPresentationTitle] = useState("")

  const handleChartImport = (chart) => {
    setImportedCharts([...importedCharts, chart])
  }

  const handleCreatePresentation = () => {
    // Logic to create presentation goes here
    console.log("Creating presentation:", { title: presentationTitle, charts: importedCharts })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Charting</h2>
      </div>
      <Tabs defaultValue="import" className="space-y-4">
        <TabsList>
          <TabsTrigger value="import">Import Charts</TabsTrigger>
          <TabsTrigger value="presentation">Create Presentation</TabsTrigger>
        </TabsList>
        <TabsContent value="import">
          <Card>
            <CardHeader>
              <CardTitle>Import Charts</CardTitle>
              <CardDescription>Import charts from Tableau, Power BI, or Excel</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartImport onImport={handleChartImport} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="presentation">
          <Card>
            <CardHeader>
              <CardTitle>Create Presentation</CardTitle>
              <CardDescription>Prepare a presentation using imported charts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="presentation-title">Presentation Title</Label>
                  <Input
                    id="presentation-title"
                    placeholder="Enter presentation title"
                    value={presentationTitle}
                    onChange={(e) => setPresentationTitle(e.target.value)}
                  />
                </div>
                <PresentationPreview charts={importedCharts} />
                <Button onClick={handleCreatePresentation}>Create Presentation</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

