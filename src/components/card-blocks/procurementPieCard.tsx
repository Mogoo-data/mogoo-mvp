"use client";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardContent
} from "@/components/ui/card"
import { HistoryResult, OutputResult } from "@/types/types";
import GenerationPieChart from '@/components/chart-blocks/charts/portfolio-pie-chart';

async function onAdd(index: number, data: HistoryResult) {
  try {
    const response = await fetch('/api/sites/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data, index }),
    });
    const result = await response.json();
    window.location.href = `/sites/${result.id}`;
  } catch (error) {
    console.error('API error:', error);
  }
}

export default function ProcurementPieCard({ index, data }: { index: number, data: HistoryResult }) {
  return (
    <Card className="@container/card">
      <CardHeader className="relative">
        <CardTitle className="text-2xl font-semibold tabular-nums">
          {data.output_result[index].type}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4">
          <div className="border rounded-lg p-4">
            <p className="font-semibold">Total Procurement</p>
            <p className="text-2xl font-bold">{data.output_result[index].total_procurement.toFixed(2)}</p>
            <p className="text-sm text-muted-foreground">kwh</p>
          </div>
          <div className="border rounded-lg p-4">
            <p className="font-semibold">Total Cost</p>
            <p className="text-2xl font-bold">{data.output_result[index].total_cost.toFixed()}</p>
            <p className="text-sm text-muted-foreground">NTD</p>
          </div>
          <div className="border rounded-lg p-4">
            <p className="font-semibold">Surplus Ratio</p>
            <p className="text-2xl font-bold">{(data.output_result[index].surplus_ratio * 100).toFixed(2)}</p>
            <p className="text-sm text-muted-foreground">%</p>
          </div>
        </div>
        <GenerationPieChart data={data.output_result[index]} />
                <div className="mt-4 flex justify-end">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={async () => {
              onAdd(index, data);
            }}
          >
            Add to dashboard
          </button>
        </div>
      </CardContent>
    </Card>
  )
}