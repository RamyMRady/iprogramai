"use client"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Send, Trash2, Bot, User, Loader2 } from "lucide-react"

type Message = {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

const models = [
  { id: "gpt-4", name: "GPT-4" },
  { id: "gpt-3.5", name: "GPT-3.5 Turbo" },
  { id: "claude-3", name: "Claude 3 Opus" },
  { id: "claude-instant", name: "Claude Instant" },
  { id: "gemini-pro", name: "Gemini Pro" },
]

const demoResponses = [
  "That's a great question! Let me break this down for you. AI language models like me work by predicting the next most likely token based on the context provided. We're trained on vast amounts of text data and learn patterns, relationships, and structures in language.",
  "Absolutely! Prompt engineering is the practice of crafting inputs to AI systems to get optimal outputs. Key techniques include: 1) Being specific and clear, 2) Providing examples (few-shot prompting), 3) Using step-by-step reasoning (chain-of-thought), and 4) Setting the right context and constraints.",
  "Great point! There are several AI models available today, each with unique strengths. GPT-4 excels at complex reasoning, Claude is known for nuanced understanding and safety, while Gemini integrates well with Google's ecosystem. The best choice depends on your specific use case.",
  "Interesting! Let me think through this systematically. First, we should consider the underlying architecture - transformer-based models use attention mechanisms to process and generate text. This allows them to capture long-range dependencies in text, which is crucial for coherent responses.",
]

export default function PlaygroundPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hello! I'm your AI assistant. Ask me anything about artificial intelligence, prompt engineering, or any topic you'd like to explore. I'm here to help!",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [selectedModel, setSelectedModel] = useState("gpt-4")
  const [systemPrompt, setSystemPrompt] = useState("You are a helpful AI assistant specializing in explaining AI concepts clearly and concisely.")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSend = async () => {
    if (!input.trim() || isLoading) return
    
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    }
    
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)
    
    await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 1000))
    
    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: demoResponses[Math.floor(Math.random() * demoResponses.length)],
      timestamp: new Date(),
    }
    
    setMessages((prev) => [...prev, assistantMessage])
    setIsLoading(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const clearChat = () => {
    setMessages([
      {
        id: "1",
        role: "assistant",
        content: "Chat cleared! How can I help you?",
        timestamp: new Date(),
      },
    ])
  }

  return (
    <div className="min-h-screen pt-24 pb-6 px-4">
      <div className="max-w-6xl mx-auto h-[calc(100vh-7rem)]">
        <div className="flex flex-col lg:flex-row gap-4 h-full">
          <div className="lg:w-72 flex-shrink-0 space-y-4">
            <div>
              <h1 className="text-2xl font-bold mb-1">AI <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">Playground</span></h1>
              <p className="text-gray-500 text-sm">Experiment with AI models</p>
            </div>
            
            <Card className="bg-white/5 border-white/10 p-4">
              <label className="text-sm font-medium text-gray-300 block mb-2">Model</label>
              <select
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-violet-500"
              >
                {models.map((m) => (
                  <option key={m.id} value={m.id}>{m.name}</option>
                ))}
              </select>
            </Card>
            
            <Card className="bg-white/5 border-white/10 p-4">
              <label className="text-sm font-medium text-gray-300 block mb-2">System Prompt</label>
              <textarea
                value={systemPrompt}
                onChange={(e) => setSystemPrompt(e.target.value)}
                rows={5}
                className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-violet-500 resize-none"
                placeholder="Enter system prompt..."
              />
            </Card>
            
            <Button
              variant="outline"
              className="w-full border-red-500/30 text-red-400 hover:bg-red-500/10 hover:text-red-300"
              onClick={clearChat}
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Clear Chat
            </Button>
          </div>

          <div className="flex-1 flex flex-col min-h-0">
            <Card className="flex-1 bg-white/5 border-white/10 flex flex-col min-h-0">
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${message.role === "user" ? "flex-row-reverse" : ""}`}
                  >
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      message.role === "assistant" ? "bg-violet-600" : "bg-gray-700"
                    }`}>
                      {message.role === "assistant" ? (
                        <Bot className="h-4 w-4 text-white" />
                      ) : (
                        <User className="h-4 w-4 text-white" />
                      )}
                    </div>
                    <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      message.role === "user"
                        ? "bg-violet-600 text-white rounded-tr-sm"
                        : "bg-white/10 text-gray-200 rounded-tl-sm"
                    }`}>
                      {message.content}
                    </div>
                  </div>
                ))}
                
                {isLoading && (
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center">
                      <Bot className="h-4 w-4 text-white" />
                    </div>
                    <div className="bg-white/10 rounded-2xl rounded-tl-sm px-4 py-3">
                      <Loader2 className="h-4 w-4 text-violet-400 animate-spin" />
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
              
              <div className="border-t border-white/10 p-4">
                <div className="flex gap-3">
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Send a message... (Enter to send, Shift+Enter for new line)"
                    rows={2}
                    className="flex-1 bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-violet-500 resize-none placeholder-gray-600"
                  />
                  <Button
                    onClick={handleSend}
                    disabled={!input.trim() || isLoading}
                    className="self-end bg-violet-600 hover:bg-violet-700 h-10 w-10 p-0 rounded-xl"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
