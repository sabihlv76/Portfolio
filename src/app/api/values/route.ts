import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { isAdminAuthenticated } from "@/lib/api-auth";

const createValueSchema = z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
    order: z.number().int().nonnegative("Order must be zero or greater"),
});

const updateValueSchema = createValueSchema.extend({
    id: z.string().min(1, "ID is required"),
});

export async function GET() {
    try {
        const { data, error } = await supabaseAdmin
            .from("values")
            .select("*")
            .order("order", { ascending: true });

        if (error) throw error;
        return NextResponse.json(data);
    } catch (error) {
        console.error("Error fetching values:", error);
        return NextResponse.json({ error: "Failed to fetch values" }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const isAuthenticated = await isAdminAuthenticated();
        if (!isAuthenticated) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const body = await request.json();
        const parsed = createValueSchema.safeParse(body);
        if (!parsed.success) {
            return NextResponse.json(
                { error: "Invalid payload", details: parsed.error.flatten() },
                { status: 400 }
            );
        }

        const { title, description, order } = parsed.data;

        const { data, error } = await supabaseAdmin
            .from("values")
            .insert({ title, description, order })
            .select()
            .single();

        if (error) throw error;

        revalidatePath("/");
        return NextResponse.json(data);
    } catch (error) {
        console.error("Error creating value:", error);
        return NextResponse.json({ error: "Failed to create value" }, { status: 500 });
    }
}

export async function PUT(request: Request) {
    try {
        const isAuthenticated = await isAdminAuthenticated();
        if (!isAuthenticated) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const body = await request.json();
        const parsed = updateValueSchema.safeParse(body);
        if (!parsed.success) {
            return NextResponse.json(
                { error: "Invalid payload", details: parsed.error.flatten() },
                { status: 400 }
            );
        }

        const { id, title, description, order } = parsed.data;

        const { data, error } = await supabaseAdmin
            .from("values")
            .update({ title, description, order })
            .eq("id", id)
            .select()
            .single();

        if (error) throw error;

        revalidatePath("/");
        return NextResponse.json(data);
    } catch (error) {
        console.error("Error updating value:", error);
        return NextResponse.json({ error: "Failed to update value" }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    try {
        const isAuthenticated = await isAdminAuthenticated();
        if (!isAuthenticated) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { searchParams } = new URL(request.url);
        const id = searchParams.get("id");

        if (!id) {
            return NextResponse.json({ error: "ID is required" }, { status: 400 });
        }

        const { error } = await supabaseAdmin
            .from("values")
            .delete()
            .eq("id", id);

        if (error) throw error;

        revalidatePath("/");
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error deleting value:", error);
        return NextResponse.json({ error: "Failed to delete value" }, { status: 500 });
    }
}
