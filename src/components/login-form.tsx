'use client';


import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { MogooLogo } from "@/components/icons";

import { getProviders, signIn } from "next-auth/react";
import { useEffect, useState } from "react";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {

  const [providers, setProviders] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="flex flex-col items-center text-center">
          <MogooLogo size={96} />
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Login to your account to access Mogoo.
          </CardDescription>
        </CardHeader>
        <CardContent>
            {providers &&
          Object.values(providers).map((provider: any) => (
            <div className="flex flex-col gap-6" key={provider.name}>
                <Button
                onClick={() => signIn(provider.id)}
                className="w-full" 
                variant="outline"
                >
                Sign in with {provider.name}
                </Button>
            </div>
          ))}

        </CardContent>
      </Card>
    </div>
  )
}
