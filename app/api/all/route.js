import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectionString } from "@/lib/db";
import { Pokemon } from "@/lib/models/pokemon";
import { pokemonData } from "@/pokemonData";

export async function GET() {
    try {
        await mongoose.connect(connectionString)
        const data = await Pokemon.find({});
        return NextResponse.json({ result: data })

        // return NextResponse.json({ result: pokemonData });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ result: [], message: error })
    }
}