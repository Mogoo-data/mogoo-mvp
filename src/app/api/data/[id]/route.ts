import { NextRequest } from 'next/server'
import { exampleDataResult } from "@/types/types";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {

  // TODO: Get the data from the database 
  // 1. Authenticate the user
  // 2. Connect to MongoDB
  // 3. Find the item

  const data = exampleDataResult;
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

