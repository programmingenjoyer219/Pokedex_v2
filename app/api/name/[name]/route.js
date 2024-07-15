import { NextResponse } from "next/server";
import { Pokemon } from "@/models/pokemon";
import connectDB from "@/config/db";

export async function GET(request, { params }) {
    const { name } = params;
    console.log(`Data for ${name} requested`)
    try {
        await connectDB();
        const data = await Pokemon.find({ "name.english": { $regex: name.toLowerCase(), $options: 'i' } }).sort({ id: 1 });
        return NextResponse.json({ result: data });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ result: [], message: error }, { status: 404 });
    }
}