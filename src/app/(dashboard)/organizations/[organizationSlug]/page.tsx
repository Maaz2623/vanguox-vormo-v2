import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { exo2, poppins } from "@/constants";
import { cn } from "@/lib/utils";
import OrganizationDetailsContainer from "@/modules/organizations/ui/components/organization-details-container";
import { OrganizationStatisticsContainer } from "@/modules/organizations/ui/components/organization-statistics-container";
import { BuildingIcon, CreditCardIcon, UserPlusIcon } from "lucide-react";
import React from "react";

interface PageProps {
  params: Promise<{
    organizationSlug: string;
  }>;
}

const OrganizationSlug = async ({ params }: PageProps) => {
  const { organizationSlug } = await params;

  return (
    <div className="pb-[1000px]">
      <div className="flex justify-center flex-col py-2 items-center space-y-4">
        <div className="size-32 rounded-full bg-neutral-200" />

        <div className="flex flex-col justify-center items-center">
          <h1
            className={cn(
              `text-3xl text-center flex items-center font-semibold ${exo2.className}`
            )}
          >
            <BuildingIcon className="mr-2 size-6 text-primary/80" />
            The Student Forum
          </h1>
          <p
            className={`${poppins.className} text-center text-muted-foreground text-sm`}
          >
            The forum for the students by the students.
          </p>
        </div>

        <OrganizationStatisticsContainer />

        <div className="p-3 w-full flex flex-col space-y-3 justify-center items-center">
          <Button size={`sm`} className="w-[250px]">
            <UserPlusIcon className="size-5" />
            Join
          </Button>
          <Button size={`sm`} className="w-[250px]" variant={`outline`}>
            <CreditCardIcon className="size-5" />
            Subscribe
          </Button>
        </div>

        <Separator />

        <OrganizationDetailsContainer slug={organizationSlug} />
      </div>
    </div>
  );
};

export default OrganizationSlug;
