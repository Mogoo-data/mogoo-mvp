import { create } from "domain";
import type { SVGProps } from "react";
import { number } from "zod";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type InputData = {
  company_name: string;
  country: string;
  electricity_type: number;
  growth_rate: number; // 年度用電增長率 (百分比)
  industry: string;
  procure_option: ProcureOption[];
  site_type: SiteType; // 0-3 代表不同場址類型
  annual_consumption: number; // 年度用電量 (kWh)
  target_ratio: number;
  target_year: number; // 目標年份
  use_rec: boolean
  use_onsite: boolean
  onsite_area: number; // onsite solar面積 (m2)
};

export type OutputResult = {
  type: string;
  s_prime: number; // 太陽能容量 (kW)
  w_prime: number; // 陸域風電容量 (kW)
  h_prime: number; // 小水電容量 (kW)
  ow_prime: number; // 離岸風電容量 (kW)
  on_site_solar: number; // onsite solar容量 (kW)
  solar_rec: number; // 太陽能 REC 數量 (MWh)
  biomass_rec: number; // 生質能 REC 數量 (MWh)
  solar_generation: number; // 太陽能年度發電量 (kWh)
  wind_generation: number; // 陸域風電年度發電量 (kWh)
  hydro_generation: number; // 小水電年度發電量 (kWh)
  offshore_wind_generation: number; // 離岸風電年度發電量 (kWh)
  onsite_solar_generation: number; // onsite solar年度發電量 (kWh)
  total_cost: number; // 總成本 (NTD)
  re_target: number; // 可再生能源目標 (kWh)
  ppa_generation: number; // PPA實際發電量 (kWh)
  rec_contribution: number; // REC貢獻 (kWh)
  unit_cost: number; // 單位成本 (NTD/kWh)
  re_unit_cost: number; // 再生能源度電成本 (NTD/kWh)
  total_surplus: number; // 總餘電量 (kWh)
  total_procurement: number; // 總購電量 (kWh)
  surplus_ratio: number; // 餘電比例
  additionality_score: number; // Additionality 評分 (1-5)
  implementation_difficulty: number; // 採購難度評分 (1-5)
  period_re_ratio: PeriodRERatio; // 各時段匹配率 
  monthly_tou_re_ratio: MonthlyTouReRatio[]; // 各月份時段匹配率
  optimization_mode: OptimizationStrategy; // 優化模式 0-3 代表不同模式 
  taipower_cost: number; // 台電採購成本 (NTD)
  total_electricity_cost: number; // 總電力成本 (NTD)
  total_electricity_unit_cost: number; // 總度電成本 (NTD/kWh)
};

export type PeriodRERatio = {
  peak: number,
  mid_peak: number,
  off_peak: number,
  sat_mid_peak: number
}

export type MonthlyTouReRatio = {
  month: number; // 月份，1-12
  tou_re_ratio: PeriodRERatio; // 各時段的匹配率
}

export enum OptimizationStrategy {
  Standard = 0,
  MaximizePhysical = 1,
  FixPhysical = 2,
  ReduceSurplus = 3,
}

export enum SiteType{
  DayShiftFactory = 0,
  FactoryNightShiftOneThird = 1,
  FactoryNightShiftHalf = 2,
  Office = 3,
}

export enum ProcureOption {
  PhysicalPPASolar = 0,
  PhysicalPPAOnshoreWind = 1,
  PhysicalPPAOffshoreWind = 2,
  PhysicalPPASmallHydro = 3,
  PhysicalPPABiomass = 4,
}

export const exampleReRatio: PeriodRERatio = {
  peak: 0.8,
  mid_peak: 0.75,
  off_peak: 0.7,
  sat_mid_peak: 0.65,
};

export const exampleMonthlyTouReRatio: MonthlyTouReRatio[] = [
  { month: 1, tou_re_ratio: { peak: 0.8, mid_peak: 0.75, off_peak: 0.7, sat_mid_peak: 0.65 } },
  { month: 2, tou_re_ratio: { peak: 0.82, mid_peak: 0.76, off_peak: 0.72, sat_mid_peak: 0.66 } },
  { month: 3, tou_re_ratio: { peak: 0.78, mid_peak: 0.74, off_peak: 0.68, sat_mid_peak: 0.64 } },
  { month: 4, tou_re_ratio: { peak: 0.79, mid_peak: 0.73, off_peak: 0.69, sat_mid_peak: 0.63 } },
  { month: 5, tou_re_ratio: { peak: 0.81, mid_peak: 0.77, off_peak: 0.71, sat_mid_peak: 0.67 } },
  { month: 6, tou_re_ratio: { peak: 0.83, mid_peak: 0.78, off_peak: 0.73, sat_mid_peak: 0.68 } },
  { month: 7, tou_re_ratio: { peak: 0.84, mid_peak: 0.79, off_peak: 0.74, sat_mid_peak: 0.69 } },
  { month: 8, tou_re_ratio: { peak: 0.85, mid_peak: 0.80, off_peak: 0.75, sat_mid_peak: 0.70 } },
  { month: 9, tou_re_ratio: { peak: 0.86, mid_peak: 0.81, off_peak: 0.76, sat_mid_peak: 0.71 } },
  { month: 10, tou_re_ratio: { peak: 0.87, mid_peak: 0.82, off_peak: 0.77, sat_mid_peak: 0.72 } },
  { month: 11, tou_re_ratio: { peak: 0.88, mid_peak: 0.83, off_peak: 0.78, sat_mid_peak: 0.73 } },
  { month: 12, tou_re_ratio: { peak: 0.89, mid_peak: 0.84, off_peak: 0.79, sat_mid_peak: 0.74 } },
];

export const exampleLowCostResult: OutputResult = {
  type: "lowest cost",
      s_prime: 500,
      w_prime: 300,
      h_prime: 100,
      ow_prime: 200,
      on_site_solar: 150,
      solar_rec: 1000,
      biomass_rec: 500,
      solar_generation: 120000,
      wind_generation: 80000,
      hydro_generation: 40000,
      offshore_wind_generation: 60000,
      onsite_solar_generation: 50000,
      total_cost: 10000000,
      re_target: 500000,
      ppa_generation: 300000,
      rec_contribution: 200000,
      unit_cost: 2.5,
      re_unit_cost: 3.0,
      total_surplus: 10000,
      total_procurement: 900000,
      surplus_ratio: 0.01,
      additionality_score: 5,
      implementation_difficulty: 3,
      period_re_ratio: exampleReRatio,
      monthly_tou_re_ratio: exampleMonthlyTouReRatio,
      optimization_mode: 0,
      taipower_cost: 8000000,
      total_electricity_cost: 12000000,
      total_electricity_unit_cost: 2.4,
};

export const exampleLowSurplusResult: OutputResult = {
  type: "lowest surplus",
  s_prime: 200,
  w_prime: 500,
  h_prime: 400,
  ow_prime: 100,
  on_site_solar: 50,
  solar_rec: 1000,
  biomass_rec: 500,
  solar_generation: 120000,
  wind_generation: 80000,
  hydro_generation: 40000,
  offshore_wind_generation: 60000,
  onsite_solar_generation: 50000,
  total_cost: 10000000,
  re_target: 500000,
  ppa_generation: 300000,
  rec_contribution: 200000,
  unit_cost: 2.5,
  re_unit_cost: 3.0,
  total_surplus: 10000,
  total_procurement: 900000,
  surplus_ratio: 0.01,
  additionality_score: 5,
  implementation_difficulty: 3,
  period_re_ratio: exampleReRatio,
  monthly_tou_re_ratio: exampleMonthlyTouReRatio,
  optimization_mode: 0,
  taipower_cost: 8000000,
  total_electricity_cost: 12000000,
  total_electricity_unit_cost: 2.4,
}

export type HistoryResult = {
  id: string;
  created_at?: string; // Optional, can be used for created_at timestamp
  input_data: InputData;
  output_result: OutputResult[];
};

export type SiteResult = {
  id: string;
  created_at?: string; // Optional, can be used for created_at timestamp
  input_data: InputData;
  output_result: OutputResult;
}

// Example of a DataResult object
export const exampleDataResult: HistoryResult = {
  id: "001",
  created_at: "2023-10-01T12:00:00Z",
  input_data: {
    company_name: "Example Corp",
    country: "Taiwan",
    electricity_type: 1,
    growth_rate: 5,
    industry: "Manufacturing",
    procure_option: [1, 2],
    site_type: 2,
    annual_consumption: 1000000,
    target_ratio: 50,
    target_year: 2030,
    use_rec: false,
    use_onsite: false,
    onsite_area: 0,
  },
  output_result: [
    exampleLowCostResult,
    exampleLowSurplusResult,
  ],
};

export const exampleSiteResult: SiteResult = {
  id: "001",
  created_at: "2023-10-01T12:00:00Z",
  input_data: {
    company_name: "Example Corp",
    country: "Taiwan",
    electricity_type: 1,
    growth_rate: 5,
    industry: "Manufacturing",
    procure_option: [1, 2],
    site_type: 2,
    annual_consumption: 1000000,
    target_ratio: 50,
    target_year: 2030,
    use_rec: false,
    use_onsite: false,
    onsite_area: 0,
  },
  output_result: exampleLowCostResult
};

export type MarketNews = {
  title: string;
  description: string;
  time: string; // Optional, can be used for news publication time
  piority: string; // e.g., "High", "Medium", "Low"
};

export const marketNewsExample: MarketNews[] = [
  {
    title: "New Renewable Energy Policy Announced",
    description: "The government has announced a new policy to promote renewable energy adoption across the country.",
    time: "2023-10-01T10:00:00Z",
    piority: "High",
  },
  {
    title: "Solar Panel Subsidies Increased",
    description: "Subsidies for solar panel installations have been increased to encourage more households to switch to solar energy.",
    time: "2023-10-02T12:00:00Z",
    piority: "Medium",
  },
  {
    title: "Wind Energy Projects Approved",
    description: "Several new wind energy projects have been approved, aiming to boost the country's renewable energy capacity.",
    time: "2023-10-03T14:30:00Z",
    piority: "Low",
  },
  {
    title: "Biomass Energy Research Grants Available",
    description: "Grants are now available for research in biomass energy technologies to promote sustainable energy solutions.",
    time: "2023-10-04T09:15:00Z",
    piority: "Medium",
  }
];