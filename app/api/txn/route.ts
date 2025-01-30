import { NextResponse } from "next/server";

export async function GET(req: Request){
    const {username, password} = await req.json();

    console.log(username);
    console.log(password);
    
    return new NextResponse("Hello how are you")
}