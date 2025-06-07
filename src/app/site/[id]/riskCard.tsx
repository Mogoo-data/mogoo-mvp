import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardContent
} from "@/components/ui/card"
import { SiteResult } from "@/types/types"; 

export default function RiskCard({ data } : { data: SiteResult }) {

  return (
    <Card className="@container/card">
    <CardHeader className="relative">
      <CardTitle className="text-2xl font-semibold tabular-nums">
        Risk
      </CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription>Score: 2 (in 10)</CardDescription>
      <CardDescription>Content:</CardDescription>
      <ul className="list-disc pl-6">
        <li>風力買家要求高需要及早部屬</li>
      </ul>
    </CardContent>
  </Card>
  )
}