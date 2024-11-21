import { Metadata } from "next"
import Image from "next/image"

import { DashboardNav } from "@/components/dashboard-nav"
import { ProfileModal } from "@/components/profile-modal"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        <aside className="hidden w-64 flex-col bg-gray-100 md:flex">
          <div className="flex h-14 items-center border-b px-4">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={32}
              height={32}
              className="mr-2"
            />
            <span className="font-semibold">FinTech SaaS</span>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <DashboardNav />
          </div>
          <ProfileModal />
        </aside>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white">
          <div className="container mx-auto px-6 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

