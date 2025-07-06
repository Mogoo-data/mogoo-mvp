"use client";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardContent
} from "@/components/ui/card"
import { InputData } from "@/types/types";

export default function BasicCard({ data }: { data: InputData }) {

  if (!data) {
    return <div className="text-center p-4">No data available.</div>;
  }
  return (
    <Card className="@container/card">
    <CardHeader className="relative">
      <CardTitle className="text-2xl font-semibold tabular-nums">
        Basic Info
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid grid-cols-5 gap-4">
        <div className="border rounded-lg p-4">
          <p className="font-semibold">Facility</p>
          <p className="text-2xl font-bold">{data.company_name}</p>
        </div>
        <div className="border rounded-lg p-4">
          <p className="font-semibold">Country</p>
          <p className="text-2xl font-bold">{data.country}</p>
        </div>
        <div className="border rounded-lg p-4">
          <p className="font-semibold">Annual Consumption</p>
          <p className="text-2xl font-bold">{data.annual_consumption}</p>
          <p className="text-sm text-muted-foreground">kwh</p>

        </div>
        <div className="border rounded-lg p-4">
          <p className="font-semibold">RE Target Ratio</p>
          <p className="text-2xl font-bold">{data.target_ratio}</p>
          <p className="text-sm text-muted-foreground">%</p>

        </div>
        <div className="border rounded-lg p-4">
          <p className="font-semibold">RE Target Year</p>
          <p className="text-2xl font-bold">{data.target_year}</p>
        </div>
      </div>
    </CardContent>
  </Card>
  )
}