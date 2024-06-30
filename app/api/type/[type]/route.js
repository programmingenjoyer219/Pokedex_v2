import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectionString } from "@/lib/db";
import { Pokemon } from "@/lib/models/pokemon";

function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

export async function GET(request, { params }) {
    const { type } = params;
    console.log(`Data for pokemon-type: ${type} requested`)
    try {
        await mongoose.connect(connectionString)
        const data = await Pokemon.find({ type: { $elemMatch: { $eq: toTitleCase(type) } } }).sort({ id: 1 });
        return NextResponse.json({ result: data });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ result: [], message: error });
    }
}