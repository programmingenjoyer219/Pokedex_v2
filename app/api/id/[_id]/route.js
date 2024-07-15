import { NextResponse } from "next/server";
import { Pokemon } from "@/models/pokemon";
import connectDB from "@/config/db";

export async function GET(request, { params }) {
    const { _id } = params;
    console.log(`Data for pokemon:${_id} requested`)
    try {
        await connectDB();
        const data = await Pokemon.find({ _id: _id }).sort({ id: 1 });
        return NextResponse.json({ result: data });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ result: [], message: error }, { status: 404 });
    }
}