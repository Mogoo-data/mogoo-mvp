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

  return (
    <Card className="@container/card">
    <CardHeader className="relative">
      <CardTitle className="text-2xl font-semibold tabular-nums">
        Basic Info
      </CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription>Facility: {data.company_name}</CardDescription>
      <CardDescription>RE Target Ratio: {data.target_ratio} %</CardDescription>
      <CardDescription>RE Target Year:  {data.target_year}</CardDescription>
      <CardDescription>
        Scenario: [Scenario Name or "Default"]
      </CardDescription>
      <CardDescription>Description: [Description]</CardDescription>
    </CardContent>
  </Card>
  )
}