import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { z } from "zod";
import { isAdminAuthenticated } from "@/lib/api-auth";

const createPodcastEpisodeSchema = z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
    audioUrl: z.string().url("Audio URL must be valid"),
});

export async function GET() {
    try {
        const { data: episodes, error } = await supabaseAdmin
            .from("podcast_episodes")
            .select("*")
            .order("created_at", { ascending: false });
            
        if (error) throw error;
        
        const mappedEpisodes = episodes.map((ep: any) => ({
            id: ep.id,
            title: ep.title,
            description: ep.description,
            audioUrl: ep.audio_url,
            createdAt: ep.created_at,
            updatedAt: ep.updated_at
        }));
        
        return NextResponse.json(mappedEpisodes);
    } catch {
        return NextResponse.json({ error: "Failed to fetch episodes" }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const isAuthenticated = await isAdminAuthenticated();
        if (!isAuthenticated) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const body = await request.json();
        const parsed = createPodcastEpisodeSchema.safeParse(body);
        if (!parsed.success) {
            return NextResponse.json(
                { error: "Invalid payload", details: parsed.error.flatten() },
                { status: 400 }
            );
        }

        const { title, description, audioUrl } = parsed.data;

        const { data: episode, error } = await supabaseAdmin
            .from("podcast_episodes")
            .insert([{ title, description, audio_url: audioUrl }])
            .select()
            .single();
            
        if (error) throw error;

        return NextResponse.json({
            id: episode.id,
            title: episode.title,
            description: episode.description,
            audioUrl: episode.audio_url,
            createdAt: episode.created_at,
            updatedAt: episode.updated_at
        });
    } catch {
        return NextResponse.json({ error: "Failed to create episode" }, { status: 500 });
    }
}
