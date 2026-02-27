import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const demoEmail = process.env.DEMO_USER_EMAIL || "demo@iprogramai.com"
const demoPassword = process.env.DEMO_USER_PASSWORD || "demo123"

export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: process.env.AUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (credentials?.email === demoEmail && credentials?.password === demoPassword) {
          return {
            id: "1",
            email: demoEmail,
            name: "Demo User",
          }
        }
        return null
      }
    })
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
})
