import { NextRequest, NextResponse } from 'next/server'
import {
  exampleDataResult, exampleLowCostResult, exampleLowSurplusResult,
  OutputResult, DataResult, InputData
} from "@/types/types";

function generateResult(input: InputData): OutputResult[] {
  // Placeholder logic for your actual computation
  return [
    exampleLowCostResult,
    exampleLowSurplusResult
  ]
}

export async function POST(req: NextRequest) {

  // get input data from the request body
  const body = await req.json();
  const inputData: InputData = body.input_data;

  if (!inputData || typeof inputData !== 'object') {
    return NextResponse.json({ error: 'Invalid inputData' }, { status: 400 })
  }

  // 1. Generate outputs
  const outputData = generateResult(inputData)

  // 2. Prepare data result
  const dataResult: DataResult = {
    id: 1, // This should be replaced with a unique ID from your database
    input_data: inputData,
    output_result: outputData,
  }

  // 3. Save to DB

  return NextResponse.json({
    id: dataResult.id,
    data: dataResult,
  }, {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  })

}