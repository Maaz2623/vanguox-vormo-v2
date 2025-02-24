import React from "react";

interface PageProps {
  params: Promise<{
    organizationSlug: string;
  }>;
}

const OrganizationSlug = async ({ params }: PageProps) => {
  const { organizationSlug } = await params;

  return <div>{organizationSlug}</div>;
};

export default OrganizationSlug;
