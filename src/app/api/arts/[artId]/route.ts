import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs"
import { NextResponse } from "next/server"

export async function PATCH(req:Request, {params}:{params:{artId:string}}) {
    try {
        const {userId} = auth()
        if (!userId) {
            return new NextResponse("Unaothorized", {status:401})
        }
        const values = await req.json()
        const art = await db.art.update({where:{userId, id:params.artId}, data:{...values}})
        return NextResponse.json(art)
    } catch (error) {
        console.log("[ART_ID]",error)
        return new NextResponse("Internal error", {status:500})
    }
}