import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from 'plugins/prisma';

export const authOptions = {
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
			profile(profile) {
				return {
					id: profile.id.toString(),
					username: profile.username,
				};
			},
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
	adapter: PrismaAdapter(prisma),
	callbacks: {
		session: ({ session, user }) => ({
			...session,
			user: {
				...session.user,
				id: user.id,
				username: user.username,
			},
		}),
	},
};

export default NextAuth(authOptions);
