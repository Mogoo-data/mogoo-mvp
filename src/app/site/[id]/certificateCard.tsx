import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardContent
} from "@/components/ui/card"
import { SiteResult } from "@/types/types"; 

export default function CertificateCard({ data } : { data: SiteResult }) {

  return (
    <Card className="@container/card">
    <CardHeader className="relative">
      <CardTitle className="text-2xl font-semibold tabular-nums">
        International Certification
      </CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription>RE100: 符合</CardDescription>
      <CardDescription>SBTi: 生質能部分可能會有疑慮</CardDescription>
      <CardDescription>Other International Organization: [Details]</CardDescription>
    </CardContent>
  </Card>
  )
}