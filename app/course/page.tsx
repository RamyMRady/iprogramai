"use client"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lock, CheckCircle, Play } from "lucide-react"

const categories = ["All", "Basics", "Prompting", "Tools", "Projects"]

const curriculum = [
  { day: 1, title: "What is Artificial Intelligence?", category: "Basics", unlocked: true, completed: true },
  { day: 2, title: "History and Evolution of AI", category: "Basics", unlocked: true, completed: true },
  { day: 3, title: "Machine Learning Fundamentals", category: "Basics", unlocked: true, completed: true },
  { day: 4, title: "Neural Networks Explained", category: "Basics", unlocked: true, completed: false },
  { day: 5, title: "Large Language Models (LLMs)", category: "Basics", unlocked: true, completed: false },
  { day: 6, title: "Introduction to Prompt Engineering", category: "Prompting", unlocked: false, completed: false },
  { day: 7, title: "Zero-Shot Prompting", category: "Prompting", unlocked: false, completed: false },
  { day: 8, title: "Few-Shot Prompting", category: "Prompting", unlocked: false, completed: false },
  { day: 9, title: "Chain-of-Thought Prompting", category: "Prompting", unlocked: false, completed: false },
  { day: 10, title: "Role-Playing and Personas", category: "Prompting", unlocked: false, completed: false },
  { day: 11, title: "ChatGPT Deep Dive", category: "Tools", unlocked: false, completed: false },
  { day: 12, title: "Claude and Anthropic AI", category: "Tools", unlocked: false, completed: false },
  { day: 13, title: "Google Gemini", category: "Tools", unlocked: false, completed: false },
  { day: 14, title: "Midjourney for Image Generation", category: "Tools", unlocked: false, completed: false },
  { day: 15, title: "AI Writing Tools", category: "Tools", unlocked: false, completed: false },
  { day: 16, title: "AI Code Assistants", category: "Tools", unlocked: false, completed: false },
  { day: 17, title: "Building AI Workflows", category: "Projects", unlocked: false, completed: false },
  { day: 18, title: "AI-Powered Content Creation", category: "Projects", unlocked: false, completed: false },
  { day: 19, title: "Automating Tasks with AI", category: "Projects", unlocked: false, completed: false },
  { day: 20, title: "AI for Data Analysis", category: "Projects", unlocked: false, completed: false },
  { day: 21, title: "Advanced Prompt Patterns", category: "Prompting", unlocked: false, completed: false },
  { day: 22, title: "Prompt Chaining", category: "Prompting", unlocked: false, completed: false },
  { day: 23, title: "AI Ethics and Safety", category: "Basics", unlocked: false, completed: false },
  { day: 24, title: "Fine-tuning Models", category: "Tools", unlocked: false, completed: false },
  { day: 25, title: "RAG and Vector Databases", category: "Tools", unlocked: false, completed: false },
  { day: 26, title: "Building AI Agents", category: "Projects", unlocked: false, completed: false },
  { day: 27, title: "AI in Production", category: "Projects", unlocked: false, completed: false },
  { day: 28, title: "Capstone: AI Business Tool", category: "Projects", unlocked: false, completed: false },
  { day: 29, title: "Capstone: AI Content System", category: "Projects", unlocked: false, completed: false },
  { day: 30, title: "Graduation & Next Steps", category: "Projects", unlocked: false, completed: false },
]

const categoryColors: Record<string, string> = {
  Basics: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  Prompting: "bg-violet-500/20 text-violet-300 border-violet-500/30",
  Tools: "bg-green-500/20 text-green-300 border-green-500/30",
  Projects: "bg-orange-500/20 text-orange-300 border-orange-500/30",
}

export default function CoursePage() {
  const [activeCategory, setActiveCategory] = useState("All")
  
  const filtered = curriculum.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  )
  
  const completed = curriculum.filter((item) => item.completed).length
  const progress = Math.round((completed / curriculum.length) * 100)

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-3">
            30-Day AI{" "}
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              Curriculum
            </span>
          </h1>
          <p className="text-gray-400 text-lg mb-6">
            A structured path from AI beginner to proficient practitioner
          </p>
          
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm text-gray-400">Your Progress</span>
              <span className="text-sm font-semibold text-violet-400">{completed}/30 days complete ({progress}%)</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-violet-600 to-purple-600 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-violet-600 text-white"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((item) => (
            <Card
              key={item.day}
              className={`border transition-all duration-200 ${
                item.completed
                  ? "bg-violet-900/20 border-violet-500/30"
                  : item.unlocked
                  ? "bg-white/5 border-white/10 hover:bg-white/10 hover:scale-[1.02] cursor-pointer"
                  : "bg-white/[0.02] border-white/5 opacity-60"
              }`}
            >
              <CardContent className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl font-bold text-white/20">
                    {String(item.day).padStart(2, "0")}
                  </span>
                  {item.completed ? (
                    <CheckCircle className="h-5 w-5 text-violet-400" />
                  ) : item.unlocked ? (
                    <Play className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Lock className="h-5 w-5 text-gray-600" />
                  )}
                </div>
                <h3 className={`font-semibold mb-3 leading-snug ${item.unlocked ? "text-white" : "text-gray-500"}`}>
                  {item.title}
                </h3>
                <Badge
                  variant="outline"
                  className={`text-xs ${categoryColors[item.category]}`}
                >
                  {item.category}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
