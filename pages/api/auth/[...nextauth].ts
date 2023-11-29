import NextAuth from "next-auth";
import GithupProvider from "next-auth/providers/github";

type GithubProvider = {
  clientId: string;
  clientSecret: string;
};

export default NextAuth({
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
