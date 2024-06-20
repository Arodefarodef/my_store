import CredentialsProvider from "next-auth/providers/credentials";

export const options = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: {
          name: "email",
          label: "Username",
          type: "text",
          placeholder: "jsmith",
        },
        password: { name: "password", label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const URL: string =
          "https://your-store-iota.vercel.app/api/user/signin";

        const res = await fetch(URL, {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        const user = await res.json();

        console.log(user);

        if (user) {
          return {
            ...user,
            name: user?.data?.name,
            email: user?.data?.email,
            role: user?.data?.role,
          };
        }
        return null;
      },
    }),
  ],

  pages: {
    signIn: "/signin",
  },

  callbacks: {
    async redirect() {
      return "/";
    },
    async jwt({ token, user }: any) {
      if (user) user.role = token.role;

      return token;
    },
    async session({ session, token }: any) {
      if (session) session.token.role = token.role;

      return session;
    },

    // async session({ session, user, token }: any) {
    //   return session;
    // },
    // async jwt({ token, user, account, profile, isNewUser }: any) {
    //   return token;
    // },
  },
};
