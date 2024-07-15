import { NextResponse } from "next/server";
import { Pokemon } from "@/models/pokemon";
import connectDB from "@/config/db";

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
        await connectDB();
        const data = await Pokemon.find({ type: { $elemMatch: { $eq: toTitleCase(type) } } }).sort({ id: 1 });
        return NextResponse.json({ result: data });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ result: [], message: error });
    }
}