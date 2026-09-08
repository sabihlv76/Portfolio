import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { isAdminAuthenticated } from "@/lib/api-auth";

const updateAboutSchema = z.object({
    id: z.string().min(1, "ID is required"),
    introLine: z.string().min(1, "Intro line is required"),
    headline: z.string().min(1, "Headline is required"),
    description: z.string().min(1, "Description is required"),
    ctaText: z.string().min(1, "CTA text is required"),
});

export async function GET() {
    try {
        const { data, error } = await supabaseAdmin
            .from("about_content")
            .select("*")
            .limit(1)
            .single();

        if (error && error.code !== "PGRST116") throw error;
        return NextResponse.json(data);
    } catch (error) {
        console.error("Error fetching about:", error);
        return NextResponse.json({ error: "Failed to fetch about content" }, { status: 500 });
    }
}

export async function PUT(request: Request) {
    try {
        const isAuthenticated = await isAdminAuthenticated();
        if (!isAuthenticated) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const body = await request.json();
        const parsed = updateAboutSchema.safeParse(body);
        if (!parsed.success) {
            return NextResponse.json(
                { error: "Invalid payload", details: parsed.error.flatten() },
                { status: 400 }
            );
        }

        const { id, introLine, headline, description, ctaText } = parsed.data;

        const { data, error } = await supabaseAdmin
            .from("about_content")
            .update({ intro_line: introLine, headline, description, cta_text: ctaText })
            .eq("id", id)
            .select()
            .single();

        if (error) throw error;

        revalidatePath("/");
        return NextResponse.json(data);
    } catch (error) {
        console.error("Error updating about:", error);
        return NextResponse.json({ error: "Failed to update about content" }, { status: 500 });
    }
}
