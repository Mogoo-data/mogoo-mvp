import { create } from "domain";
import type { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type InputData = {
  company_name: string;
  country: string;
  electricity_type: number;
  growth_rate: number; // 年度用電增長率 (百分比)
  industry: string;
  procure_option: number[];
  site_type: number; // 0-3 代表不同場址類型
  annual_consumption: number; // 年度用電量 (kWh)
  target_ratio: number;
  target_year: number; // 目標年份
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
  additionality_score: number; // Additionality 評分
  implementation_difficulty: number; // 採購難度評分
  period_re_ratio: number; // 各時段匹配率
  monthly_tou_re_ratio: number; // 各月份時段匹配率
  optimization_mode: string; // 優化模式
  taipower_cost: number; // 台電採購成本 (NTD)
  total_electricity_cost: number; // 總電力成本 (NTD)
  total_electricity_unit_cost: number; // 總度電成本 (NTD/kWh)
};

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
      additionality_score: 85,
      implementation_difficulty: 3,
      period_re_ratio: 0.8,
      monthly_tou_re_ratio: 0.75,
      optimization_mode: "cost",
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
  additionality_score: 85,
  implementation_difficulty: 3,
  period_re_ratio: 0.8,
  monthly_tou_re_ratio: 0.75,
  optimization_mode: "cost",
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