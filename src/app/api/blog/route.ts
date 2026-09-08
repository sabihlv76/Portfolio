import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { z } from "zod";
import { isAdminAuthenticated } from "@/lib/api-auth";

const createBlogPostSchema = z.object({
    title: z.string().min(1, "Title is required"),
    content: z.string().min(1, "Content is required"),
    imageUrl: z.string().url("Image URL must be valid").optional().or(z.literal("")),
});

export async function GET() {
    try {
        const { data: posts, error } = await supabaseAdmin
            .from("blog_posts")
            .select("*")
            .order("created_at", { ascending: false });
            
        if (error) throw error;
        
        // Map db snake_case to camelCase since frontend likely used prisma auto-generated schema
        const mappedPosts = posts.map((post: any) => ({
            id: post.id,
            title: post.title,
            content: post.content,
            imageUrl: post.image_url,
            createdAt: post.created_at,
            updatedAt: post.updated_at
        }));
        
        return NextResponse.json(mappedPosts);
    } catch {
        return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const isAuthenticated = await isAdminAuthenticated();
        if (!isAuthenticated) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const body = await request.json();
        const parsed = createBlogPostSchema.safeParse(body);
        if (!parsed.success) {
            return NextResponse.json(
                { error: "Invalid payload", details: parsed.error.flatten() },
                { status: 400 }
            );
        }

        const { title, content, imageUrl } = parsed.data;

        const { data: post, error } = await supabaseAdmin
            .from("blog_posts")
            .insert([{ title, content, image_url: imageUrl || null }])
            .select()
            .single();
            
        if (error) throw error;

        return NextResponse.json({
            id: post.id,
            title: post.title,
            content: post.content,
            imageUrl: post.image_url,
            createdAt: post.created_at,
            updatedAt: post.updated_at
        });
    } catch {
        return NextResponse.json({ error: "Failed to create post" }, { status: 500 });
    }
}
