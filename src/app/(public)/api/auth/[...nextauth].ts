import { env } from "@/src/env/env"
import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions: NextAuthOptions = ({
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_ID,
      clientSecret: env.GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    })

  ],

  pages: {
    signIn: "/auth",
  },
  secret: env.NEXTAUTH_SECRET,
})

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }