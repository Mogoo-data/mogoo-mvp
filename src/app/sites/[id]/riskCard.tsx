import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardContent
} from "@/components/ui/card"
import { SiteResult } from "@/types/types"; 
import StarRating from "@/components/starRating";

export default function RiskCard({ data } : { data: SiteResult }) {

  return (
    <Card className="@container/card">
    <CardHeader className="relative">
      <CardTitle className="text-2xl font-semibold tabular-nums">
        Diificulties and Risks
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid grid-cols-3 gap-4">
        <div className="border rounded-lg p-4">
          <p className="font-semibold">Additionality Rating</p>
          <StarRating rating={Math.round(data.output_result.additionality_score * 2) / 2} />
        </div>
        <div className="border rounded-lg p-4">
          <p className="font-semibold">Purchasing Difficulty </p>
          <StarRating rating={Math.round(data.output_result.implementation_difficulty * 2) / 2 } />
        </div>
      </div>
    </CardContent>
  </Card>
  )
}