import NextAuth from 'next-auth';
import AppleProvider from 'next-auth/providers/apple';
import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';
import EmailProvider from 'next-auth/providers/email';
import GitHubProvider from 'next-auth/providers/github';

export default NextAuth({
	providers: [
		// OAuth authentication providers...
		GitHubProvider({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
		// // Passwordless / email sign in
		// EmailProvider({
		// 	server: process.env.MAIL_SERVER,
		// 	from: 'NextAuth.js <no-reply@example.com>',
		// }),
	],
});
