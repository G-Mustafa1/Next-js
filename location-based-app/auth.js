import { connectDB } from "@/lib/config/db";
import { Users } from "@/lib/models/Users";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const handleUser = async (profile) => {
  await connectDB();

  let user = await Users.findOne({ email: profile.email });

  if (!user) {
    user = await Users.create({
      fullName: profile.name,
      email: profile.email,
      profileImage: profile.picture,
    });
  }

  return user;
};

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],

  callbacks: {
    async signIn({ profile }) {
      await handleUser(profile);
      return true;
    },

    async jwt({ token, account, profile }) {
      // ONLY on first sign-in
      if (account && profile) {
        const userDb = await Users.findOne({ email: profile.email });
        console.log("userDb", userDb);
        

        token.id = userDb._id.toString();   // ✅ FIX
        token.role = userDb.role;
      }
      return token;
    },

    async session({ session, token }) {
      session.user.id = token.id;          // string
      session.user.role = token.role;
      return session;
    },
  },
});
