import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createUser, getUser } from "./data-service";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth, request }) {
      return !!auth?.user;
    },
    async signIn({ user, account, profile }) {
      try {
        const existingGuest = await getUser(user.email);
        const userName = user.name.split(" ").at(0);
        const userSurname = user.name.split(" ").at(1);
        if (!existingGuest) {
          await createUser({
            email: user.email,
            name: userName,
            surname: userSurname,
          });
        }
        return true;
      } catch {
        return false;
      }
    },
    async session({ session, user }) {
      const dbUser = await getUser(session.user.email);
      session.user.guestId = dbUser.id;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

export const { handlers, signIn, signOut, auth } = NextAuth(authConfig);
