import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithupProvider from "next-auth/providers/github";
import clientPromise from "../../../util/mongo";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import dbConnect from "@/util/dbConnect";
import bcrypt from "bcryptjs";

dbConnect();

type GithubProvider = {
  clientId: string;
  clientSecret: string;
};

interface Credentials {
  email: string;
  password: string;
}

export default NextAuth({
  // adapter: MongoDBAdapter(clientPromise),
  providers: [
    GithupProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    } as GithubProvider),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials) {
          throw new Error("Credentials are undefined");
        }
        const email = credentials.email;
        const password = credentials.password;
        const user = await User.findOne({ email: email });
        if (!user) {
          throw new Error("You are not registered");
        }
        if (user) {
          return signInUser(user, password);
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
});

type User = {
  email: string;
  password: string;
};

const signInUser = async (user: User, password: string) => {
  const isMATCH = await bcrypt.compare(password, user.password);
  if (!isMATCH) {
    throw new Error("Password is incorrect");
  }
  return user;
};
