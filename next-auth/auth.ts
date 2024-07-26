import NextAuth from "next-auth"
import db from "./prisma/prisma"
import Google from "next-auth/providers/google"
import GitHub from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { verifyPassword } from "./lib/bcryptPassword"

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(db),
  providers: [
    Google,
    GitHub,
  ]
})