"use client"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Copy, Check, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

const categories = ["All", "Writing", "Coding", "Analysis", "Creative", "Business"]

const prompts = [
  {
    id: 1,
    title: "Blog Post Writer",
    description: "Generate engaging blog posts on any topic",
    category: "Writing",
    prompt: "Write a comprehensive, engaging blog post about [TOPIC]. Include an attention-grabbing headline, introduction, 3-5 main sections with subheadings, practical examples, and a conclusion with a call to action. Tone should be [professional/casual/educational].",
  },
  {
    id: 2,
    title: "Code Review Assistant",
    description: "Get detailed code review feedback",
    category: "Coding",
    prompt: "Review the following code and provide: 1) Overall code quality assessment, 2) Potential bugs or security issues, 3) Performance improvements, 4) Best practices violations, 5) Specific suggestions for improvement. Code: [PASTE CODE HERE]",
  },
  {
    id: 3,
    title: "Data Analysis Framework",
    description: "Structured approach to analyzing datasets",
    category: "Analysis",
    prompt: "Analyze the following data and provide: 1) Key trends and patterns, 2) Notable outliers or anomalies, 3) Actionable insights, 4) Recommended next steps, 5) Potential areas for deeper investigation. Data context: [DESCRIBE DATA]",
  },
  {
    id: 4,
    title: "Short Story Creator",
    description: "Generate creative short stories with rich detail",
    category: "Creative",
    prompt: "Write a captivating short story (500-800 words) with the following parameters: Genre: [GENRE], Setting: [SETTING], Main character: [CHARACTER DESCRIPTION], Central conflict: [CONFLICT], Theme: [THEME]. Include vivid sensory details and dialogue.",
  },
  {
    id: 5,
    title: "Technical Documentation",
    description: "Create clear technical documentation",
    category: "Coding",
    prompt: "Create comprehensive technical documentation for [FEATURE/API/SYSTEM]. Include: Overview, Prerequisites, Installation/Setup, Usage examples with code snippets, Parameters/Options reference, Common errors and troubleshooting, FAQ section.",
  },
  {
    id: 6,
    title: "Market Research Summary",
    description: "Analyze and summarize market research",
    category: "Business",
    prompt: "Based on the following market information, provide a detailed analysis: 1) Market size and growth potential, 2) Key competitors and their positioning, 3) Target customer segments, 4) Unmet needs and opportunities, 5) Recommended market entry strategy. Market: [MARKET INFO]",
  },
  {
    id: 7,
    title: "Email Campaign Writer",
    description: "Write compelling marketing emails",
    category: "Writing",
    prompt: "Write a compelling email campaign sequence (3 emails) for [PRODUCT/SERVICE]. Email 1: Awareness/Problem-focused. Email 2: Solution/Benefits-focused. Email 3: Urgency/CTA-focused. Target audience: [AUDIENCE]. Key benefit: [MAIN BENEFIT].",
  },
  {
    id: 8,
    title: "Algorithm Explainer",
    description: "Explain complex algorithms simply",
    category: "Coding",
    prompt: "Explain the [ALGORITHM NAME] algorithm as if teaching to a [beginner/intermediate/advanced] developer. Include: Plain English explanation, Step-by-step walkthrough, Visual representation (using ASCII art or description), Time and space complexity, Real-world use cases, Python implementation example.",
  },
  {
    id: 9,
    title: "Competitive Analysis",
    description: "Thorough competitive analysis framework",
    category: "Analysis",
    prompt: "Conduct a comprehensive competitive analysis for [COMPANY/PRODUCT] vs [COMPETITORS]. Cover: Feature comparison matrix, Pricing strategy analysis, Target market differences, Marketing approach comparison, Strengths and weaknesses (SWOT), Strategic recommendations.",
  },
  {
    id: 10,
    title: "World Building Assistant",
    description: "Create rich fictional worlds",
    category: "Creative",
    prompt: "Help me build a detailed fictional world with the following seed idea: [IDEA]. Develop: Geography and climate, History and major events, Political systems and factions, Culture, customs, and religions, Magic/technology system (if applicable), Economy and trade, Notable characters and their motivations.",
  },
  {
    id: 11,
    title: "Executive Summary Writer",
    description: "Create concise executive summaries",
    category: "Business",
    prompt: "Transform the following detailed document into a concise executive summary (max 500 words) for C-level executives. Focus on: Key findings and insights, Business impact and ROI, Critical decisions needed, Risk assessment, Recommended immediate actions. Document: [PASTE DOCUMENT]",
  },
  {
    id: 12,
    title: "UX Copy Writer",
    description: "Write user-friendly interface copy",
    category: "Writing",
    prompt: "Write UX copy for [APP/FEATURE]. Create variations for: Onboarding flow (3 screens), Empty states (2 scenarios), Error messages (common errors), Success states, Tooltips and help text, Button labels and CTAs. Tone: [friendly/professional/playful]. Product: [DESCRIPTION]",
  },
]

const categoryColors: Record<string, string> = {
  Writing: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  Coding: "bg-green-500/20 text-green-300 border-green-500/30",
  Analysis: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  Creative: "bg-pink-500/20 text-pink-300 border-pink-500/30",
  Business: "bg-orange-500/20 text-orange-300 border-orange-500/30",
}

export default function PromptsPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [copiedId, setCopiedId] = useState<number | null>(null)

  const filtered = prompts.filter((p) => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory
    const matchesSearch =
      searchQuery === "" ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const copyToClipboard = async (id: number, text: string) => {
    await navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-3">
            Prompt{" "}
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              Library
            </span>
          </h1>
          <p className="text-gray-400 text-lg mb-6">
            Curated prompts to supercharge your AI interactions
          </p>
          
          <div className="relative max-w-md mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search prompts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white/5 border-white/10 text-white placeholder-gray-500 focus:border-violet-500"
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
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
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((prompt) => (
            <Card key={prompt.id} className="bg-white/5 border-white/10 hover:bg-white/[0.08] transition-colors group">
              <CardContent className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <Badge
                    variant="outline"
                    className={`text-xs ${categoryColors[prompt.category]}`}
                  >
                    {prompt.category}
                  </Badge>
                  <button
                    onClick={() => copyToClipboard(prompt.id, prompt.prompt)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-lg hover:bg-white/10"
                  >
                    {copiedId === prompt.id ? (
                      <Check className="h-4 w-4 text-green-400" />
                    ) : (
                      <Copy className="h-4 w-4 text-gray-400" />
                    )}
                  </button>
                </div>
                <h3 className="font-semibold text-white mb-2">{prompt.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{prompt.description}</p>
                <div className="bg-black/30 rounded-lg p-3 text-xs text-gray-500 leading-relaxed line-clamp-3 font-mono">
                  {prompt.prompt}
                </div>
                <button
                  onClick={() => copyToClipboard(prompt.id, prompt.prompt)}
                  className="mt-3 w-full py-2 rounded-lg border border-white/10 text-xs text-gray-400 hover:bg-white/10 hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  {copiedId === prompt.id ? (
                    <>
                      <Check className="h-3 w-3 text-green-400" />
                      <span className="text-green-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3" />
                      Copy Prompt
                    </>
                  )}
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            <p className="text-lg">No prompts found matching your search.</p>
            <p className="text-sm mt-2">Try a different search term or category.</p>
          </div>
        )}
      </div>
    </div>
  )
}
