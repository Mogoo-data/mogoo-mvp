"use client";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardContent
} from "@/components/ui/card"
import { OutputResult } from "@/types/types";
import PortfolioPieChart from '@/components/chart-blocks/charts/portfolio-pie-chart';


export default function ProcurementPieCard({ data }: { data: OutputResult }) {
  return (
    <Card className="@container/card">
      <CardHeader className="relative">
        <CardTitle className="text-2xl font-semibold tabular-nums">
          {data.type}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <PortfolioPieChart data={data} />
        <div className="mt-4 flex justify-end">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => console.log('Add to dashboard clicked')}
          >
            Add to dashboard
          </button>
        </div>
      </CardContent>
    </Card>
  )
}