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
import PortfolioPieChart from '@/components/chart-blocks/charts/portfolio-pie-chart';
export default function ProcurementCard({ data }: { data: SiteResult }) {

  return (
    <Card className="@container/card">
      <CardHeader className="relative">
        <CardTitle className="text-2xl font-semibold tabular-nums">
          Procurement Plan Summary
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <PortfolioPieChart data={data.output_result} />
          <div className="grid gap-2">
            <div className="border p-4 rounded-md">

              <div className="flex items-center gap-2">
                <h3 className="font-semibold">Annually Peak RE Ratio</h3>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                [Annually Peak RE Ratio]%
              </p>
            </div>
            <div className="border p-4 rounded-md">

              <div className="flex items-center gap-2">
                <h3 className="font-semibold">Annually Mid-Peak RE Ratio</h3>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                [Annually Mid-Peak RE Ratio]%
              </p>
            </div>
            <div className="border p-4 rounded-md">

              <div className="flex items-center gap-2">
                <h3 className="font-semibold"> Annually Off-Peak RE Ratio</h3>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                [Annually Off-Peak RE Ratio]%
              </p>
            </div>
            <div className="border p-4 rounded-md">

              <div className="flex items-center gap-2">
                <h3 className="font-semibold"> Annually Sat. Mid-Peak RE Ratio:</h3>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                [Annually Sat. Mid-Peak RE Ratio]%
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}