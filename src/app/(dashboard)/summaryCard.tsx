import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardContent
} from "@/components/ui/card"
import { SiteResult } from "@/types/types";

interface SummaryCardProps {
  data: SiteResult[];
}

export default function SummaryCard({ data } : SummaryCardProps) {
  const summarizedData = data.reduce<{ country: string; sites: number }[]>(
    (acc, { input_data: { country } }) => {
      const existing = acc.find(item => item.country === country);
      if (existing) {
        existing.sites += 1;
      } else {
        acc.push({ country, sites: 1 });
      }
      return acc;
    },
    []
  );

  return (
    <Card className="@container/card">
        <CardHeader className="relative">
          <CardTitle className="text-2xl font-semibold tabular-nums"> Summary </CardTitle>
          <CardDescription>The summary of all sites</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex justify-between font-semibold py-2">
            <span>Country</span>
            <span># of Sites</span>
          </div>
          <ul className="space-y-2">
            {summarizedData.map(({ country, sites }) => (
              <li key={country} className="flex justify-between">
                <span>{country}</span>
                <Badge>{sites}</Badge>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
  )
}