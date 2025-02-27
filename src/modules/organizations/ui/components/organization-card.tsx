import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { cn } from "@/lib/utils";
import { exo2 } from "@/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const OrganizationCard = () => {
  return (
    <Card className="shadow-md">
      <VisuallyHidden>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
      </VisuallyHidden>
      <CardContent className="w-[200px] py-6 px-4">
        <div className="flex justify-center items-center flex-col space-y-3">
          <div className="bg-neutral-200 size-16 rounded-full" />
          <div className="">
            <Link
              href={`/organizations/tsf`}
              className={cn(
                `${exo2.className} font-semibold text-lg hover:underline hover:underline-offset-1`
              )}
            >
              The Student Forum
            </Link>
            <p className="text-sm text-center text-muted-foreground">
              Forum for the students by the students
            </p>
          </div>
          <Button size={`sm`} className="w-[100px] h-7">
            Join
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrganizationCard;
