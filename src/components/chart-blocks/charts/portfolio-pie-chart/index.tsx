import Chart from "./pie-chart";
import { OutputResult } from "@/types/types";

export default function PortfolioPieChart({data}: {data: OutputResult}) {
  const energyData = [
    { type: 'Solar', value: data.s_prime },
    { type: 'Wind', value: data.w_prime },
    { type: 'Hydro', value: data.h_prime },
    { type: 'Off-shore Wind', value: data.ow_prime },
    { type: 'On-site Solar', value: data.on_site_solar },
  ]

  return (
    <section className="flex h-full flex-col gap-2">

      <div className="relative flex-grow">
        <Chart data={energyData}/>
      </div>
    </section>
  );
}
