import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";

interface User {
  id: number;
  name: string;
  email: string;
}

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Enter Email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = {
          id: "sd",
          name: "J Smith",
          email: "jsmith@example.com",
          password: "kjsdljf",
        };

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
};

export { authOptions };
