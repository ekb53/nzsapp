"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart, LineChart, Settings, Search, Home, Bot } from 'lucide-react'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function DashboardNav() {
  const pathname = usePathname()

  return (
    <nav className="grid items-start gap-2">
      <Link href="/dashboard">
        <Button variant="ghost" className="w-full justify-start">
          <Home className="mr-2 h-4 w-4" />
          Home
        </Button>
      </Link>
      <Link href="/dashboard/analysis">
        <Button variant="ghost" className="w-full justify-start">
          <BarChart className="mr-2 h-4 w-4" />
          Financial Analysis
        </Button>
      </Link>
      <Link href="/dashboard/charting">
        <Button variant="ghost" className="w-full justify-start">
          <LineChart className="mr-2 h-4 w-4" />
          Charting
        </Button>
      </Link>
      <Link href="/dashboard/research">
        <Button variant="ghost" className="w-full justify-start">
          <Search className="mr-2 h-4 w-4" />
          Research
        </Button>
      </Link>
      <Link href="/dashboard/discover">
        <Button variant="ghost" className="w-full justify-start">
          <BarChart className="mr-2 h-4 w-4" />
          Discover
        </Button>
      </Link>
      <Link href="/dashboard/discover/win-win">
        <Button variant="ghost" className="w-full justify-start">
          <Bot className="mr-2 h-4 w-4" />
          Win-Win
        </Button>
      </Link>
      <Link href="/dashboard/settings">
        <Button variant="ghost" className="w-full justify-start">
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
      </Link>
    </nav>
  )
}

