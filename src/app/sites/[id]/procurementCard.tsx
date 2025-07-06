"use client";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardContent
} from "@/components/ui/card"
import { SiteResult } from "@/types/types";
import GenerationPieChart from '@/components/chart-blocks/charts/portfolio-pie-chart';

export default function ProcurementCard({ data }: { data: SiteResult }) {
  return (
    <Card className="@container/card">
      <CardHeader className="relative">
        <CardTitle className="text-2xl font-semibold tabular-nums">
          Procurement Plan Summary
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="p-4 items-center">
          <GenerationPieChart data={data.output_result} />
        </div>
      </CardContent>
    </Card>
  )
}