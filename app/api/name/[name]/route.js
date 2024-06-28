import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectionString } from "@/lib/db";
import { Pokemon } from "@/lib/models/pokemon";

export async function GET(request, { params }) {
    const { name } = params;
    console.log(`Data for ${name} requested`)
    try {
        await mongoose.connect(connectionString)
        const data = await Pokemon.find({ "name.english": { $regex: name.toLowerCase(), $options: 'i' } });
        return NextResponse.json({ result: data });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ result: [], message: error });
    }
}