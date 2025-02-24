import PageHeaderContainer from "@/components/page-header-container";
import { Button } from "@/components/ui/button";
import OrganizationsTable from "@/modules/organizations/ui/components/organizations-table";
import React from "react";

const OrganizationsPage = () => {
  return (
    <div className="space-y-4">
      <PageHeaderContainer
        title="Your Organizations"
        description="Command Center for All Your Brilliant Ideas"
        components={<Button>+ New</Button>}
      />
      <OrganizationsTable />
    </div>
  );
};

export default OrganizationsPage;
