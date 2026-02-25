"use client"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Github, Eye, EyeOff, CheckCircle } from "lucide-react"

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Demo mode: Account creation simulated! Redirecting to dashboard...")
  }

  const benefits = [
    "Access to 30-day AI curriculum",
    "Unlimited AI playground usage",
    "Full prompt library access",
  ]

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-16 py-8">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-transparent to-purple-900/20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-3xl" />
      
      <div className="relative w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <Brain className="h-8 w-8 text-violet-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              iProgramAI
            </span>
          </Link>
          <h1 className="text-3xl font-bold text-white mb-2">Start learning today</h1>
          <p className="text-gray-400">Create your free account and begin your AI journey</p>
        </div>
        
        <div className="flex justify-center gap-6 mb-6">
          {benefits.map((benefit) => (
            <div key={benefit} className="flex items-center gap-1.5 text-xs text-gray-400">
              <CheckCircle className="h-3.5 w-3.5 text-violet-500 flex-shrink-0" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>

        <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="grid grid-cols-2 gap-3 mb-6">
              <Button
                variant="outline"
                className="border-white/10 hover:bg-white/10 text-gray-300"
                onClick={() => alert("OAuth not configured in demo mode")}
              >
                <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google
              </Button>
              <Button
                variant="outline"
                className="border-white/10 hover:bg-white/10 text-gray-300"
                onClick={() => alert("OAuth not configured in demo mode")}
              >
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Button>
            </div>
            
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-[#0a0a1f] px-3 text-gray-500">or continue with email</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-gray-300 text-sm mb-1.5 block">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-black/40 border-white/10 text-white placeholder-gray-600 focus:border-violet-500"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-gray-300 text-sm mb-1.5 block">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-black/40 border-white/10 text-white placeholder-gray-600 focus:border-violet-500"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="password" className="text-gray-300 text-sm mb-1.5 block">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Min. 8 characters"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-black/40 border-white/10 text-white placeholder-gray-600 focus:border-violet-500 pr-10"
                    minLength={8}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              
              <Button type="submit" className="w-full bg-violet-600 hover:bg-violet-700 text-white h-11">
                Create Free Account
              </Button>
              
              <p className="text-xs text-gray-500 text-center">
                By signing up, you agree to our{" "}
                <Link href="#" className="text-violet-400 hover:underline">Terms of Service</Link>
                {" "}and{" "}
                <Link href="#" className="text-violet-400 hover:underline">Privacy Policy</Link>
              </p>
            </form>
            
            <p className="text-center text-gray-500 text-sm mt-6">
              Already have an account?{" "}
              <Link href="/login" className="text-violet-400 hover:text-violet-300 font-medium">
                Sign in
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
