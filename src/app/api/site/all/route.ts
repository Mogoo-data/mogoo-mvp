import { NextRequest } from 'next/server'
import { exampleSiteResult } from "@/types/types";

// TODO: GET /api/site/all
export async function GET(req: NextRequest) {
  const data = [exampleSiteResult, exampleSiteResult, exampleSiteResult];

  // TODO: Get the data list from the database 
  // 1. Authenticate the user
  // 2. Connect to MongoDB
  // 3. Find the item

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

