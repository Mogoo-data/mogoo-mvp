import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardContent
} from "@/components/ui/card"
import { SiteResult } from "@/types/types"; 

export default function SurplusPowerCard({ data } : { data: SiteResult }) {

  return (
    <Card className="@container/card">
    <CardHeader className="relative">
      <CardTitle className="text-2xl font-semibold tabular-nums">
        Surplus Power
      </CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription>
        Surplus Power Ratio: {data.output_result.surplus_ratio}%
      </CardDescription>
      <CardDescription>
        Most Surplus Power Time Period: [Time Period]
      </CardDescription>
    </CardContent>
  </Card>
  )
}