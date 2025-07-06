import { connectDB } from "@/lib/db";
import { NextRequest, NextResponse } from 'next/server'
import { OutputResult, HistoryResult, InputData } from "@/types/types";
import { getToken } from "next-auth/jwt";

async function generateResult(input: InputData): Promise<OutputResult[] | undefined> {
  try {
    const res = await fetch('http://localhost:8000/compute', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input),
    });

    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`Error: ${errText}`);
    }

    const result = await res.json();
    console.log('Result:', result);
    return Array.isArray(result) ? result as OutputResult[] : [result as OutputResult];
  } catch (err) {
    console.error('Failed:', err);
  }
}

export async function POST(req: NextRequest) {

  // 1. Authenticate the user
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (!token?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  // 2. Parse the request body
  const body = await req.json();
  const inputData: InputData = body.input_data;

  if (!inputData || typeof inputData !== 'object') {
    return NextResponse.json({ error: 'Invalid inputData' }, { status: 400 })
  }

  // 3. Generate the output data
  const outputData = await generateResult(inputData);

  if (!outputData) {
    return NextResponse.json({ error: 'Failed to generate output data' }, { status: 500 });
  }

  // 4. Save to DB
  const db = await connectDB(); // connect to your MongoDB
  const collection = db.collection("histories");
  const doc = {
    user_email: token.email,
    created_at: new Date().toISOString(),
    input_data: inputData,
    output_result: outputData,
  };
  const result = await collection.insertOne(doc);

  // 5. Return the result
  if (!result) {
    return NextResponse.json({ error: 'Failed to create history' }, { status: 500 });
  }
  return NextResponse.json({
    id: result.insertedId.toString(),
    data: doc,
  }, {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  })
}