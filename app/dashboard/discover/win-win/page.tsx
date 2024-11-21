"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function WinWinPage() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hello! I'm your AI assistant trained on our company's documentation and investing philosophies. How can I help you today?" }
  ])
  const [input, setInput] = useState("")

  const handleSendMessage = async () => {
    if (input.trim() === "") return

    const userMessage = { role: "user", content: input }
    setMessages(prevMessages => [...prevMessages, userMessage])
    setInput("")

    // In a real application, you would send the user's message to your AI model here
    // and get a response. For this example, we'll simulate a response.
    setTimeout(() => {
      const aiResponse = { role: "assistant", content: "I'm processing your request. In a real application, I would provide a response based on the company's documentation, investing philosophies, and current market research." }
      setMessages(prevMessages => [...prevMessages, aiResponse])
    }, 1000)
  }

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Win-Win AI Assistant</h2>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Chat with AI</CardTitle>
          <CardDescription>Ask questions about our investing strategies or get market insights</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[400px] w-full rounded-md border p-4">
            {messages.map((message, index) => (
              <div key={index} className={`mb-4 ${message.role === "user" ? "text-right" : "text-left"}`}>
                <span className={`inline-block rounded-lg px-3 py-2 ${message.role === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`}>
                  {message.content}
                </span>
              </div>
            ))}
          </ScrollArea>
          <div className="flex mt-4">
            <Input
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <Button onClick={handleSendMessage} className="ml-2">Send</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

