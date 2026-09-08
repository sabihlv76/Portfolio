import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { supabaseAdmin } from "@/lib/supabase";

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Email and password required");
                }

                const { data: admin, error } = await supabaseAdmin
                    .from("admins")
                    .select("*")
                    .eq("email", credentials.email)
                    .single();

                if (error || !admin) {
                    throw new Error("Invalid credentials");
                }

                const isValid = await bcrypt.compare(credentials.password, admin.password);

                if (!isValid) {
                    throw new Error("Invalid credentials");
                }

                return {
                    id: admin.id,
                    email: admin.email,
                    name: admin.name,
                };
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/admin/login",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.email = user.email;
                token.name = user.name;
            } else if (token.email) {
                const { data: freshUser } = await supabaseAdmin
                    .from("admins")
                    .select("*")
                    .eq("email", token.email as string)
                    .single();

                if (freshUser) {
                    token.name = freshUser.name;
                    token.email = freshUser.email;
                }
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id as string;
                session.user.email = token.email as string;
                session.user.name = token.name as string;
            }
            return session;
        },
    },
};
