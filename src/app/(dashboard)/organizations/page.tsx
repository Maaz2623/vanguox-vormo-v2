import PageHeaderContainer from "@/components/page-header-container";
import { CreateOrganizationModal } from "@/modules/organizations/create-organization-modal";
import OrganizationsTable from "@/modules/organizations/ui/components/organizations-table";
import { HydrateClient, trpc } from "@/trpc/server";
import { auth } from "@clerk/nextjs/server";
import React from "react";

const OrganizationsPage = async () => {
  const { userId } = await auth();

  void trpc.organizations.getOrganizationsByClerkId.prefetch({
    clerkId: userId as string,
  });

  return (
    <HydrateClient>
      <div className="space-y-4">
        <PageHeaderContainer
          title="Your Organizations"
          description="Command Center for All Your Brilliant Ideas"
          components={<CreateOrganizationModal />}
        />
        <OrganizationsTable clerkId={userId as string} />
      </div>
    </HydrateClient>
  );
};

export default OrganizationsPage;
