// Form model with the provided options
enum SiteTypeOptions {
  DayShiftFactory = "Day Shift Factory",
  FactoryNightShiftOneThird = "24-Hour Factory (Night Shift Production Line 1/3)",
  FactoryNightShiftHalf = "24-Hour Factory (Night Shift Production Line 1/2)",
  Office = "Office",
}

enum CountryOptions {
  Taiwan = "Taiwan",
  Korea = "Korea",
  Japan = "Japan",
  Thailand = "Thailand",
}

enum ProcureOptions {
  PhysicalPPASolar = "Physical PPA- solar",
  PhysicalPPAOnshoreWind = "Physical PPA- onshore wind",
  PhysicalPPAOffshoreWind = "Physical PPA- offshore wind",
  PhysicalPPASmallHydro = "Physical PPA- small hydro",
  PhysicalPPABiomass = "Physical PPA- biomass",
}

enum IndustryOptions {
  Agriculture = "Agriculture",
  Automotive = "Automotive",
  Chemicals = "Chemicals",
  Construction = "Construction",
  ConsumerGoods = "Consumer Goods",
  Energy = "Energy",
  FinancialServices = "Financial Services",
  FoodAndBeverage = "Food & Beverage",
  Healthcare = "Healthcare",
  Manufacturing = "Manufacturing",
  Mining = "Mining",
  OilAndGas = "Oil & Gas",
  Pharmaceuticals = "Pharmaceuticals",
  RealEstate = "Real Estate",
  Retail = "Retail",
  Technology = "Technology",
  Telecommunications = "Telecommunications",
  Transportation = "Transportation",
  Utilities = "Utilities",
  Other = "Other",
}

enum ElectricityTypeOptions {
  LowVoltageDemandPower = "low voltage demand power",
  HighVoltageDemandPower = "High voltage demand power",
  ExtraHighVoltageDemandPower = "Extra high voltage demand power",
}

enum ExpandReduceOptions {
  No = "No",
  Expand = "Expand",
  Reduce = "Reduce",
}

export const formOptions = {
  countries: Object.values(CountryOptions),
  procureOptions: Object.values(ProcureOptions),
  industryOptions: Object.values(IndustryOptions),
  electricityTypeOptions: Object.values(ElectricityTypeOptions),
  siteTypeOptions: Object.values(SiteTypeOptions),
  targetYear: Array.from({ length: 25 }, (_, i) => (new Date().getFullYear() + i).toString()),
  expandReduceOptions: Object.values(ExpandReduceOptions),
}
