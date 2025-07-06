import Chart from "./line-chart";
import { MonthlyTouReRatio } from "@/types/types";

export default function ReRatioMonthlyLineChart({data}: {data: MonthlyTouReRatio[]}) {

  var chartData: { month: string; period: string; value: number }[] = [];
  data.forEach((item) => {
    chartData.push(
      { month: item.month, period: 'Peak', value: item.tou_re_ratio.peak },
      { month: item.month, period: 'mid_peak', value: item.tou_re_ratio.mid_peak },
      { month: item.month, period: 'off_peak', value: item.tou_re_ratio.off_peak },
      { month: item.month, period: 'sat_mid_peak', value: item.tou_re_ratio.sat_mid_peak }
    );
  });

  return (
    <section className="flex h-full flex-col gap-2">

      <div className="relative flex-grow">
        <Chart data={chartData}/>
      </div>
    </section>
  );
}
