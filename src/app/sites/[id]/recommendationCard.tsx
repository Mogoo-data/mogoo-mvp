import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardContent
} from "@/components/ui/card"
import { SiteResult } from "@/types/types"; 

export default function RecommendationCard({ data } : { data: SiteResult }) {

  return (
    <Card className="@container/card">
    <CardHeader className="relative">
      <CardTitle className="text-2xl font-semibold tabular-nums">
      Recommendation
      </CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="list-disc pl-6">
        <li>改善週六用電，可以大幅縮減餘電比例</li>
        <li>[Other Recommendations]</li>
      </ul>
    </CardContent>
  </Card>
  )
}