"use client";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardContent
} from "@/components/ui/card"
import { SiteResult, MonthlyTouReRatio } from "@/types/types";
import ReRatioMonthlyLineChart from '@/components/chart-blocks/charts/re-ratio-monthly-chart';
import ReRatioBarChart from '@/components/chart-blocks/charts/re-ratio-chart';

export default function ReRatioCard({ data }: { data: SiteResult }) {

  return (
    <Card className="@container/card">
      <CardHeader className="relative">
        <CardTitle className="text-2xl font-semibold tabular-nums">
          Re Ratio
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-rows gap-6">
          <div>
            <h2 className="text-muted-foreground p-4">
              Annual Re analysis
            </h2>
            <div className="p-4">
              {/* <ReRatioBarChart data={data.output_result.period_re_ratio} /> */}
              <div className="grid grid-cols-4 gap-4">
                <div className="border rounded-lg p-4">
                  <p className="font-semibold">Peak</p>
                  <p className="text-2xl font-bold">{(data.output_result.period_re_ratio.peak * 100).toFixed(2)}</p>
                  <p className="text-sm text-muted-foreground">%</p>
                </div>
                <div className="border rounded-lg p-4">
                  <p className="font-semibold">Mid Peak</p>
                  <p className="text-2xl font-bold">{(data.output_result.period_re_ratio.mid_peak * 100).toFixed(2)}</p>
                  <p className="text-sm text-muted-foreground">%</p>
                </div>
                <div className="border rounded-lg p-4">
                  <p className="font-semibold">Off Peak</p>
                  <p className="text-2xl font-bold">{(data.output_result.period_re_ratio.off_peak * 100).toFixed(2)}</p>
                  <p className="text-sm text-muted-foreground">%</p>
                </div>
                <div className="border rounded-lg p-4">
                  <p className="font-semibold">Sat. Mid Peak</p>
                  <p className="text-2xl font-bold">{(data.output_result.period_re_ratio.sat_mid_peak * 100).toFixed(2)}</p>
                  <p className="text-sm text-muted-foreground">%</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-muted-foreground p-4">
              Monthly RE Ratio analysis
            </h2>
            <div className="p-4">
              <ReRatioMonthlyLineChart data={data.output_result.monthly_tou_re_ratio} />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}