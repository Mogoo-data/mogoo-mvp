import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from "@/lib/db";
import { ObjectId } from "mongodb";
import { getToken } from "next-auth/jwt";


export async function GET(req: NextRequest, { params }: { params: { id: string } }) {

  // 1. Authenticate the user
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  if (!token?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // 2. Connect to MongoDB
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
  .findOne({ 
    _id: new ObjectId(params.id),
    user_email: token.email,
  });

  // 3. return the data
  if (!data) {
    return new Response(JSON.stringify({ error: "Data not found" }), {
      status: 404,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const result = {
    id: data._id.toString(),
    created_at: data.created_at,
    input_data: data.input_data,
    output_result: data.output_result,
  };  

  // 4. return the result
  return new Response(JSON.stringify(result), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}


