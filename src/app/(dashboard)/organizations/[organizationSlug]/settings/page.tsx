"use client";
import PageHeaderContainer from "@/components/page-header-container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { trpc } from "@/trpc/client";
import { useParams } from "next/navigation";
import React from "react";

const OrganizationSettings = () => {
  const params = useParams();

  const [data] = trpc.organizations.getOrganizationBySlug.useSuspenseQuery({
    slug: params.organizationSlug as string,
  });

  console.log(data);

  return (
    <div className="space-y-4">
      <PageHeaderContainer
        title="Organization Settings"
        description="Manage your network from here"
      />

      <Separator />

      <div className="mb-4 space-y-8">
        <div className="flex justify-between items-center">
          <div className="space-y-3 md:w-1/2 border p-4 rounded-lg bg-neutral-50 shadow-md">
            <h2 className="text-xl">Basic Information</h2>

            <div className="">
              <Label>Event Name</Label>
              <Input className="" defaultValue={data.name} />
            </div>
            <div className="mt-3 space-y-1">
              <Label className="flex">
                Logo{" "}
                <p className="text-xs ml-1 text-muted-foreground">
                  (.jpeg, .png)
                </p>
              </Label>
              <Input type="file" defaultValue={data.logoUrl || ""} />
            </div>
          </div>
        </div>

        <div className="space-y-3 md:w-1/2 border p-4 rounded-lg bg-neutral-50 shadow-md">
          <div className="flex justify-between items-center">
            <h2 className="text-xl">Payments</h2>
            <Switch />
          </div>

          <div className="">
            <Label>UPI Id</Label>
            <Input
              className=""
              placeholder="e.g someone@oksbi"
              defaultValue={data.upiId || ""}
            />
          </div>
        </div>

        <div className="space-y-3 md:w-1/2 border p-4 rounded-lg bg-neutral-50 shadow-md">
          <div className="flex justify-between items-center">
            <h2 className="text-xl">Organization Ownership</h2>
          </div>

          <div className="">
            <Label>Owner Email</Label>
            <Input
              className=""
              placeholder="e.g someone@oksbi"
              defaultValue={data.owner?.email}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationSettings;
