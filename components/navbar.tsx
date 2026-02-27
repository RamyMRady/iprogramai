"use client"
import Link from "next/link"
import { useState } from "react"
import { Menu, X, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 backdrop-blur-md bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Brain className="h-8 w-8 text-violet-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              iProgramAI
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="/course" className="text-gray-300 hover:text-white transition-colors">Course</Link>
            <Link href="/playground" className="text-gray-300 hover:text-white transition-colors">Playground</Link>
            <Link href="/prompts" className="text-gray-300 hover:text-white transition-colors">Prompts</Link>
          </div>
          
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" asChild>
              <Link href="/login">Sign In</Link>
            </Button>
            <Button asChild className="bg-violet-600 hover:bg-violet-700">
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>
          
          <button
            className="md:hidden text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              <Link href="/course" className="text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Course</Link>
              <Link href="/playground" className="text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Playground</Link>
              <Link href="/prompts" className="text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Prompts</Link>
              <Link href="/login" className="text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Sign In</Link>
              <Link href="/signup" className="text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Get Started</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
