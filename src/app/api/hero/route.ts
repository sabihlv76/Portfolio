import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { isAdminAuthenticated } from "@/lib/api-auth";

const updateHeroSchema = z.object({
    id: z.string().min(1, "ID is required"),
    headline: z.string().min(1, "Headline is required"),
    subtitle: z.string().min(1, "Subtitle is required"),
    ctaText: z.string().min(1, "CTA text is required"),
    studentsCount: z.string().min(1, "Students count is required"),
    roleTitle: z.string().min(1, "Role title is required"),
    roleSubtitle: z.string().min(1, "Role subtitle is required"),
});

export async function GET() {
    try {
        const { data, error } = await supabaseAdmin
            .from("hero_content")
            .select("*")
            .limit(1)
            .single();

        if (error && error.code !== "PGRST116") throw error;
        return NextResponse.json(data);
    } catch (error) {
        console.error("Error fetching hero:", error);
        return NextResponse.json({ error: "Failed to fetch hero content" }, { status: 500 });
    }
}

export async function PUT(request: Request) {
    try {
        const isAuthenticated = await isAdminAuthenticated();
        if (!isAuthenticated) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const body = await request.json();
        const parsed = updateHeroSchema.safeParse(body);
        if (!parsed.success) {
            return NextResponse.json(
                { error: "Invalid payload", details: parsed.error.flatten() },
                { status: 400 }
            );
        }

        const { id, headline, subtitle, ctaText, studentsCount, roleTitle, roleSubtitle } = parsed.data;

        const { data, error } = await supabaseAdmin
            .from("hero_content")
            .update({ headline, subtitle, cta_text: ctaText, students_count: studentsCount, role_title: roleTitle, role_subtitle: roleSubtitle })
            .eq("id", id)
            .select()
            .single();

        if (error) throw error;

        revalidatePath("/");
        return NextResponse.json(data);
    } catch (error) {
        console.error("Error updating hero:", error);
        return NextResponse.json({ error: "Failed to update hero content" }, { status: 500 });
    }
}
