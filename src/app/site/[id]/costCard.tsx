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
      <CardDescription>Total Cost (NTD): {data.output_result.total_cost}</CardDescription>
      <CardDescription>
        RE Unit Price (NTD/kWh): {data.output_result.re_unit_cost}
      </CardDescription>
      <CardDescription>
        Electricity Unit Price (NTD/kWh): {data.output_result.unit_cost}
      </CardDescription>
    </CardContent>
  </Card>
  )
}