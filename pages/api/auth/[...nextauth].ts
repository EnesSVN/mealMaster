import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithupProvider from "next-auth/providers/github";
import clientPromise from "../../../util/mongo";
type GithubProvider = {
  clientId: string;
  clientSecret: string;
};

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GithupProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    } as GithubProvider),
  ],
  pages: {
    signIn: "/auth/login",
  },
});
