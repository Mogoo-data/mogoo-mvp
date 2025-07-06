import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardContent
} from "@/components/ui/card"
import { SiteResult } from "@/types/types"; 

export default function CostCard({ data } : { data: SiteResult }) {

  return (
    <Card className="@container/card">
    <CardHeader className="relative">
      <CardTitle className="text-2xl font-semibold tabular-nums">
        Cost
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid grid-cols-3 gap-4">
        <div className="border rounded-lg p-4">
          <p className="font-semibold">Total Electricity Cost </p>
            <p className="text-2xl font-bold">{data.output_result.total_electricity_cost.toFixed(2)}</p>
          <p className="text-sm text-muted-foreground">NTD</p>
        </div>
        <div className="border rounded-lg p-4">
          <p className="font-semibold">RE Unit Price </p>
          <p className="text-2xl font-bold">{data.output_result.re_unit_cost.toFixed(2)}</p>
          <p className="text-sm text-muted-foreground">NTD/kWh</p>
        </div>
        <div className="border rounded-lg p-4">
          <p className="font-semibold">Total Electricity Unit Price</p>
          <p className="text-2xl font-bold">{data.output_result.total_electricity_unit_cost.toFixed(2)}</p>
          <p className="text-sm text-muted-foreground">NTD/kWh</p>
        </div>
      </div>
    </CardContent>
  </Card>
  )
}