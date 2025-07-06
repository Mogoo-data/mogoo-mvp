import { NextRequest, NextResponse } from 'next/server'
import { HistoryResult } from "@/types/types";
import { connectDB } from "@/lib/db";
import { getToken } from "next-auth/jwt";


export async function GET(req: NextRequest) {
  // 1. Authenticate the user 
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (!token?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // 2. Connect to MongoDB and get the data
  const db = await connectDB(); // connect to your MongoDB
  const collection = db.collection("histories");
  const data = await collection
    .find({ user_email: token.email })
    .sort({ created_at: -1 })
    .limit(10)
    .toArray(); 

  const result: HistoryResult[] = data.map((item: any) => ({
    id: item._id.toString(),
    ...item,
  }));

  // 3. return the data
  if (!result) {
    return new Response(JSON.stringify({ error: "No data found" }), {
      status: 404,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  return new Response(JSON.stringify(result), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

