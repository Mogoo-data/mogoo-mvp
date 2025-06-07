"use client"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardContent
} from "@/components/ui/card"
import { FileText, Calculator, CircleHelp, Download, SquareArrowOutUpRight } from "lucide-react"


export default function ResourceCard() {

  return (
    <Card className="@container/card sm:col-span-2">
        <CardHeader className="relative">
          <CardTitle className="text-2xl font-semibold tabular-nums">
            Resource
          </CardTitle>
          <CardDescription>Tools and guides for procurement</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="border p-4 rounded-md">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                <h3 className="font-semibold">RFP Template</h3>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Standardized format for renewable energy requests
              </p>
              <a
                href="#"
                className="text-gray-700 hover:underline text-sm mt-2 inline-flex items-center gap-1"
              >
                Download Template
                <Download className="w-4 h-4" />
              </a>
            </div>
            <div className="border p-4 rounded-md">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5" />
                <h3 className="font-semibold">Cost Calculator</h3>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Estimate savings from renewable energy transition
              </p>
              <a
                href="#"
                className="text-gray-700 hover:underline text-sm mt-2 inline-flex items-center gap-1"
              >
                Open Calculator
                <SquareArrowOutUpRight className="w-4 h-4" />
              </a>
            </div>
            <div className="border p-4 rounded-md">
              <div className="flex items-center gap-2">
                <CircleHelp className="w-5 h-5" />
                <h3 className="font-semibold">Procurement Guide</h3>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Step-by-step process for energy procurement
              </p>
              <a
                href="#"
                className="text-gray-700 hover:underline text-sm mt-2 inline-flex items-center gap-1"
              >
                View Guide
                <SquareArrowOutUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </CardContent>

      </Card>
  )
}