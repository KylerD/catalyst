import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { VALID_PASSWORD, VALID_USERNAME } from "./config";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const expectedUsername = VALID_USERNAME;
        const expectedPassword = VALID_PASSWORD;

        const providedUser = {
          username: credentials?.username,
          password: credentials?.password,
        };

        if (
          providedUser.username === expectedUsername &&
          providedUser.password === expectedPassword
        ) {
          return {
            id: "1",
            name: "Kainos Catalyst",
            email: "kyle.davidson@kainos.com",
          };
        }
        return null;
      },
    }),
  ],
});
