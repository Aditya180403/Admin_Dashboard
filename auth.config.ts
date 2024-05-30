
import type { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: '/',
  },
  providers: [
    Credentials({
      async authorize(credentials) {

        const { username, password } = credentials;

        
        if (username === 'admin' && password === 'password') {
      
          return { email: 'admin@example.com' };
        }

        return null;
      },
    }),
  ],
};
