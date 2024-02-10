import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req:Request) {
    try {
        const {userId} = auth()
        if (!userId) {
            return new NextResponse("Unauthorized", {status:401})
        }
        const {title} = await req.json()
        const art = await db.art.create({data:{title, userId}})
        return NextResponse.json(art)
    } catch (error) {
        console.log("[ART]", error);
        return new NextResponse("Internal error", {status: 500})
    }
}