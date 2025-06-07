"use client";

import { useState } from "react"

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { HelpCircle } from "lucide-react"
import { formOptions } from "@/config/form"
import SelectComponent from "@/components/selectComponent"

const formSchema = z.object({
  country: z.string().nonempty("Please select a valid input."),
  company_name: z.string().min(2, "Company name must be at least 2 characters."),
  procure_option: z.array(z.string()).min(1, "Please select at least one procure option."),
  industry: z.string().nonempty("Please select a valid input."),
  electricity_type: z.string().nonempty("Please select a valid input."),
  site_type: z.string().nonempty("Please select a valid input."),
  annual_consumption: z
    .string()
    .refine((val) => val && !isNaN(Number(val)) && val.trim() !== "", "It must be a numeric string."),
  target_ratio: z
    .string()
    .refine((val) => {
      const num = Number(val);
      return val && num >= 0 && num <= 100 && val.trim() !== "";
    }, "Percentage must be between 0 and 100."),
  target_year: z.string().nonempty("Please select a valid input."),
  growth_rate: z.number().min(0, "Must be a positive number").optional(),
});

export default function CaculatorPage() {

  const [formStep, setFormStep] = useState(1)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      country: "",
      company_name: "",
      procure_option: [],
      industry: "",
      electricity_type: "",
      site_type: "",
      annual_consumption: "",
      target_ratio: "",
      target_year: "",
      growth_rate: 0,
    },
  })

  // Handle form submission
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
  <div className="container">
    <div className="mx-auto p-8">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex flex-col items-center">
              <div
                className={`rounded-full h-12 w-12 flex items-center justify-center border-2 ${formStep >= step
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-muted-foreground text-muted-foreground"
                  }`}
              >
                {step}
              </div>
              <span
                className={`text-sm font-medium mt-2 ${formStep >= step ? "text-primary" : "text-muted-foreground"}`}
              >
                {step === 1 ? "Company Information" : step === 2 ? "Energy Profile" : "Procurement Options"}
              </span>
            </div>
          ))}
        </div>
        <div className="relative mt-2">
          <div className="absolute top-0 left-0 right-0 h-1 bg-muted-foreground/30">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${((formStep - 1) / 2) * 100}%` }}
            />
          </div>
        </div>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {formStep === 1 && (
            <Card>
              <CardHeader>
                <CardTitle>Company Information</CardTitle>
                <CardDescription>
                  Please provide your company details to help us calculate the optimal green energy mix.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <FormField
                  control={form.control}
                  name="company_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="name">Company Name</FormLabel>
                      <FormControl>
                        <Input id="name" {...field} placeholder="Mogoo" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="country">Country</FormLabel>
                      <SelectComponent
                        id="country"
                        field={field}
                        placeholder="Select a country"
                        options={formOptions.countries}
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="industry"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center justify-between">
                        <FormLabel htmlFor="industry">Industry</FormLabel>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-5 w-5">
                                <HelpCircle className="h-4 w-4" />
                                <span className="sr-only">Industry information</span>
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="max-w-xs">
                                Different industries have different energy needs and options for green energy
                                implementation.
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <SelectComponent
                        id="industry"
                        field={field}
                        placeholder="Select your industry"
                        options={formOptions.industryOptions}
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="site_type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="siteType">Site Type</FormLabel>
                      <SelectComponent
                        id="siteType"
                        field={field}
                        placeholder="Select your site type"
                        options={formOptions.siteTypeOptions}
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" disabled>
                  Back
                </Button>
                <Button
                  type="button"
                  onClick={() => {
                    form.trigger(["company_name", "country", "industry", "site_type"]).then((isValid) => {
                      if (isValid) {
                        setFormStep(2);
                      }
                    });
                  }}
                >
                  Next Step
                </Button>
              </CardFooter>
            </Card>
          )}

          {formStep === 2 && (
            <Card>
              <CardHeader>
                <CardTitle>Energy Profile</CardTitle>
                <CardDescription>Tell us about your current energy consumption and future plans.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <FormField
                  control={form.control}
                  name="electricity_type"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center justify-between">
                        <FormLabel htmlFor="powerType">Electricity Type</FormLabel>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-5 w-5">
                                <HelpCircle className="h-4 w-4" />
                                <span className="sr-only">Electricity type information</span>
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="max-w-xs">
                                The voltage level affects pricing and available green energy options.
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <SelectComponent
                        id="powerType"
                        field={field}
                        placeholder="Select electricity type"
                        options={formOptions.electricityTypeOptions}
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="annual_consumption"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="annualConsumption">Annual Energy Consumption (kWh)</FormLabel>
                      <FormControl>
                        <Input id="annualConsumption" type="number" placeholder="1000000" {...field} />
                      </FormControl>
                      <FormMessage />
                      <p className="text-xs text-muted-foreground">
                        You can find this information on your energy bill or by contacting your utility provider.
                      </p>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="target_year"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="targetYear">Target Year for Green Energy Implementation</FormLabel>
                      <SelectComponent
                        id="targetYear"
                        field={field}
                        placeholder="Select target year"
                        options={formOptions.targetYear}
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="growth_rate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="expectedchangeRate">Percentage Change (%)</FormLabel>
                      <FormControl>
                        <Input id="expectedchangeRate" type="number" placeholder="10" {...field} />
                      </FormControl>
                      <FormMessage />
                      <p className="text-xs text-muted-foreground">
                        Estimated percentage by which your energy consumption will change.
                      </p>
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => setFormStep(1)}>
                  Previous Step
                </Button>
                <Button
                  type="button"
                  onClick={() => {
                    form.trigger(["electricity_type", "annual_consumption", "target_year", "growth_rate"]).then((isValid) => {
                      if (isValid) {
                        setFormStep(3);
                      }
                    });
                  }}
                >
                  Next Step
                </Button>
              </CardFooter>
            </Card>
          )}

          {formStep === 3 && (
            <Card>
              <CardHeader>
                <CardTitle>Procurement Options</CardTitle>
                <CardDescription>
                  Select your preferred green energy procurement options and priorities.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <Label>Available Procurement Options</Label>
                  <div className="grid gap-3">
                    {formOptions.procureOptions.map((option) => {
                      
                      return (
                        <FormField
                          key={option} // Add unique key prop here
                          control={form.control}
                          name="procure_option"
                          render={({ field }) => (
                            <FormItem>
                              <div
                                className="flex items-start space-x-3 border rounded-md p-3 hover:bg-muted/50"
                              >
                                <Checkbox
                                  id={option.replace(/\s+/g, "-").toLowerCase()}
                                  checked={field.value.includes(option)}
                                  onCheckedChange={(checked) => {
                                    if (checked) {
                                      field.onChange([...field.value, option]);
                                    } else {
                                      field.onChange(field.value.filter((item) => item !== option));
                                    }
                                  }}
                                />
                                <div>
                                  <Label
                                    htmlFor={option.replace(/\s+/g, "-").toLowerCase()}
                                    className="flex items-center gap-2 font-medium"
                                  >
                                    {option}
                                  </Label>
                                  <p className="text-xs text-muted-foreground mt-1">
                                    {option.includes("solar") &&
                                      "Direct purchase of solar energy through a Power Purchase Agreement."}
                                    {option.includes("onshore wind") &&
                                      "Direct purchase of onshore wind energy through a Power Purchase Agreement."}
                                    {option.includes("offshore wind") &&
                                      "Direct purchase of offshore wind energy through a Power Purchase Agreement."}
                                    {option.includes("hydro") &&
                                      "Direct purchase of small hydroelectric energy through a Power Purchase Agreement."}
                                    {option.includes("biomass") &&
                                      "Direct purchase of biomass energy through a Power Purchase Agreement."}
                                  </p>
                                </div>
                              </div>
                            </FormItem>
                          )}
                        />
                      )
                    })}
                  </div>
                </div>

                <FormField
                  control={form.control}
                  name="target_ratio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="usagePercentage">Target Green Energy Percentage (%)</FormLabel>
                      <FormControl>
                        <Input
                          id="usagePercentage"
                          type="number"
                          placeholder="50"
                          min="0"
                          max="100"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                      <p className="text-xs text-muted-foreground">
                        What percentage of your total energy consumption do you aim to source from green energy?
                      </p>
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => setFormStep(2)}>
                  Previous Step
                </Button>
                <Button type="submit">Calculate Optimal Mix</Button>
              </CardFooter>
            </Card>
          )}
        </form>
      </Form>

    </div>
  </div>
  )
}
