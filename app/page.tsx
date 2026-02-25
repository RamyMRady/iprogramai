import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Code, BookOpen, Zap, Star, ArrowRight, CheckCircle } from "lucide-react"

export default function HomePage() {
  const features = [
    {
      icon: BookOpen,
      title: "30-Day Curriculum",
      description: "Structured learning path from AI basics to advanced prompt engineering and real-world projects.",
      href: "/course",
      color: "from-violet-600 to-purple-600"
    },
    {
      icon: Zap,
      title: "AI Playground",
      description: "Experiment with different AI models in real-time. Test prompts and see immediate results.",
      href: "/playground",
      color: "from-purple-600 to-blue-600"
    },
    {
      icon: Code,
      title: "Prompt Library",
      description: "Access 100+ curated prompts for writing, coding, analysis, and creative projects.",
      href: "/prompts",
      color: "from-blue-600 to-cyan-600"
    }
  ]

  const stats = [
    { value: "10,000+", label: "Students Enrolled" },
    { value: "30", label: "Day Curriculum" },
    { value: "100+", label: "AI Prompts" },
    { value: "95%", label: "Completion Rate" }
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Engineer",
      content: "iProgramAI transformed how I think about AI. The 30-day curriculum is perfectly structured and the playground makes learning hands-on.",
      rating: 5
    },
    {
      name: "Marcus Johnson",
      role: "Product Manager",
      content: "The prompt library alone is worth it. I've saved hours by using and adapting the curated prompts for my daily work.",
      rating: 5
    },
    {
      name: "Priya Patel",
      role: "Data Scientist",
      content: "Finally a course that bridges theory and practice. The AI playground helped me understand models in ways textbooks never could.",
      rating: 5
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-transparent to-purple-900/20" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm mb-8">
            <Brain className="h-4 w-4" />
            <span>AI-Powered Learning Platform</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Learn{" "}
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI
            </span>{" "}
            in{" "}
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              30 Days
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Master artificial intelligence with hands-on projects, interactive playground, 
            and curated prompt library. From zero to AI expert in just one month.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-violet-600 hover:bg-violet-700 text-white px-8 h-12">
              <Link href="/signup">
                Start Learning Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white/20 hover:bg-white/10 px-8 h-12">
              <Link href="/course">View Curriculum</Link>
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-gray-500">
            {["No credit card required", "30-day free trial", "Cancel anytime"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-violet-500" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need to Master AI</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Three powerful tools designed to accelerate your AI learning journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Link key={feature.title} href={feature.href}>
                <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer h-full">
                  <CardContent className="p-6">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-4`}>
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 border-y border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Students Say</h2>
            <p className="text-gray-400 text-lg">Join thousands of learners who transformed their careers</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="bg-white/5 border-white/10">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">&quot;{testimonial.content}&quot;</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-gradient-to-r from-violet-900/40 to-purple-900/40 border border-violet-500/20 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your AI Journey?</h2>
            <p className="text-gray-400 text-lg mb-8">
              Join 10,000+ students already learning with iProgramAI
            </p>
            <Button size="lg" asChild className="bg-violet-600 hover:bg-violet-700 px-10 h-12">
              <Link href="/signup">
                Get Started for Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Brain className="h-6 w-6 text-violet-500" />
            <span className="font-semibold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              iProgramAI
            </span>
          </div>
          <p className="text-gray-500 text-sm">© 2024 iProgramAI. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-gray-300 transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">Terms</Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
