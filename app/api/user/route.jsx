import { NextResponse } from "next/server";
import { db } from "@/config/db";
import { use } from "react";
import { usersTable } from "@/config/schema";
export async function POST(req) {
    const { email,name}=awaitreq.json();

    //If user already exists
    const user = await db.select().from(userTable)
    .where(eq(usersTable.email, email));
    //If not then insert new user
    if(user.length===0){
        const result = await db.insert(usersTable).values({
            name:name,
            email:email
        }).returning(usersTable);

        console.log(result);
        return NextResponse.json(result)
    }
    return NextResponse.json(user[0])
}
