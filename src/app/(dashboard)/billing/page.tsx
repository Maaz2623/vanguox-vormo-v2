import PageHeaderContainer from "@/components/page-header-container";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import OrganizationsTable from "@/modules/organizations/ui/components/organizations-table";
import { SearchIcon } from "lucide-react";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const BillingPage = () => {
  return (
    <div>
      <PageHeaderContainer
        title="Billing"
        description="Manage your organization hostings"
      />
      <Separator className="mb-8" />
      <div className="mb-2 justify-center gap-y-3 md:gap-y-0  md:justify-between items-center flex md:flex-row flex-col ">
        <div className="flex justify-start items-center gap-x-4">
          <div className="flex justify-start items-center border rounded-lg focus-visible:ring-2">
            <div className="size-9 flex justify-center items-center">
              <SearchIcon className="text-muted-foreground size-4 mx-2" />
              <Separator orientation="vertical" />
            </div>
            <Input
              className="border-0 shadow-none focus-visible:ring-0 "
              placeholder="Search by title"
            />
          </div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button>Activate Plan</Button>
      </div>
      <div>
        <OrganizationsTable />
      </div>
    </div>
  );
};

export default BillingPage;
