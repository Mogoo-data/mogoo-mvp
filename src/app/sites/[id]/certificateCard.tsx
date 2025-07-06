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
        Certification
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid grid-cols-3 gap-4">
        <div className="border rounded-lg p-4">
          <p className="font-semibold">RE100</p>
          <p className="text-2xl font-bold">Pass</p>
        </div>
        <div className="border rounded-lg p-4">
          <p className="font-semibold">SBTi </p>
          <p className="text-2xl font-bold">Pass</p>

        </div>
        <div className="border rounded-lg p-4">
          <p className="font-semibold">Other International Organization:</p>
          <p className="text-2xl font-bold">[Details]</p>
        </div>
      </div>
    </CardContent>
  </Card>
  )
}