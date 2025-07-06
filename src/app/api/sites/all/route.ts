import { NextRequest, NextResponse } from 'next/server'
import { SiteResult } from "@/types/types";
import { connectDB } from "@/lib/db";
import { getToken } from "next-auth/jwt";

export async function GET(req: NextRequest) {

  // 1. Authenticate the user
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (!token?.email) {
    console.log("Unauthorized access attempt detected. Token:", token);
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // 2. Connect to Datrabase and get the data
  const db = await connectDB(); 
  if (!db) {
    return new Response(JSON.stringify({ error: "Failed to connect to database" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const collection = db.collection("sites");
  if (!collection) {
    return new Response(JSON.stringify({ error: "Collection not found" }), {
      status: 404,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  
  const data = await collection
      .find({user_email: token.email })
      .sort({ created_at: -1 })
      .limit(100)
      .toArray();

  const result: SiteResult[] = data.map((item: any) => ({
    id: item._id.toString(),
    created_at: item.created_at,
    input_data: item.input_data,
    output_result: item.output_result,
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

