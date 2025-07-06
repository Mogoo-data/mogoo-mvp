import { NextRequest, NextResponse } from 'next/server'
import { HistoryResult, SiteResult } from "@/types/types";
import { connectDB } from "@/lib/db";
import { getToken } from "next-auth/jwt";


export async function POST(req: NextRequest) {

  // 1. Authenticate the user
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  if (!token?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // 2. get input data from the request body
  const body = await req.json();
  const history: HistoryResult = body.data;
  const index: number = body.index;

  // 3. Save to DB
  const db = await connectDB(); 
  if (!db) {
    return NextResponse.json({ error: 'Failed to connect to database' }, { status: 500 });
  }
  const collection = db.collection("sites");
  if (!collection) {
    return NextResponse.json({ error: 'Collection not found' }, { status: 404 });
  }

  const doc = {
    user_email: token.email,
    created_at: new Date().toISOString(),
    input_data: history.input_data,
    output_result: history.output_result[index],
  };
  const result = await collection.insertOne(doc);

  // 4. Return the result
  if (!result) {
    return NextResponse.json({ error: 'Failed to create site result' }, { status: 500 });
  }
  return NextResponse.json({
    id: result.insertedId.toString(),
  }, {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  })

}