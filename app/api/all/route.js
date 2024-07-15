import { NextResponse } from "next/server";
import { Pokemon } from "@/models/pokemon";
import connectDB from "@/config/db";

export async function GET() {
    try {
        await connectDB();
        const data = await Pokemon.find({}).sort({ id: 1 });
        return NextResponse.json({ result: data })

    } catch (error) {
        console.error(error);
        return NextResponse.json({ result: [], message: error })
    }
}