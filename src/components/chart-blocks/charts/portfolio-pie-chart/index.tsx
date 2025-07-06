import Chart from "./pie-chart";
import { OutputResult } from "@/types/types";

export function CapacityPieChart({data}: {data: OutputResult}) {
  const energyData = [
    { type: 'Solar', value: data.s_prime, unit: 'kW' },
    { type: 'Wind', value: data.w_prime, unit: 'kW' },
    { type: 'Hydro', value: data.h_prime, unit: 'kW' },
    { type: 'Off-shore Wind', value: data.ow_prime, unit: 'kW' },
    { type: 'On-site Solar', value: data.on_site_solar, unit: 'kW' },
  ]

  return (
    <section className="flex h-full flex-col gap-2">

      <div className="relative flex-grow">
        <Chart data={energyData}/>
      </div>
    </section>
  );
}


export default function GenerationPieChart({data}: {data: OutputResult}) {
  const energyData = [
    { type: 'Solar', value: data.solar_rec, unit: 'kWh' },
    { type: 'Wind', value: data.wind_generation, unit: 'kWh' },
    { type: 'Hydro', value: data.hydro_generation, unit: 'kWh' },
    { type: 'Off-shore Wind', value: data.offshore_wind_generation, unit: 'kWh' },
    { type: 'On-site Solar', value: data.onsite_solar_generation, unit: 'kWh' },
  ]

  return (
    <section className="flex h-full flex-col gap-2">
      <div className="relative flex-grow">
        <Chart data={energyData}/>
      </div>
    </section>
  );
}
