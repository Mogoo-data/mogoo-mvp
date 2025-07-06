import Chart from "./bar-chart";
import { PeriodRERatio } from "@/types/types";

export default function ReRatioBarChart({data}: {data: PeriodRERatio}) {

  const chartData = [
    { period: 'peak', value: data.peak },
    { period: 'mid_peak', value: data.mid_peak },
    { period: 'off_peak', value: data.off_peak },
    { period: 'sat_mid_peak', value: data.sat_mid_peak }
  ]

  return (
    <section className="flex h-full flex-col gap-2">

      <div className="relative flex-grow">
        <Chart data={chartData}/>
      </div>
    </section>
  );
}
