"use client";
import React from "react";
import Link from "next/link";
import { format } from "date-fns";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { OrganizationTableActions } from "./organization-table-actions";
import { isOwner } from "@/constants";
import { trpc } from "@/trpc/client";

const OrganizationsTable = ({ clerkId }: { clerkId: string }) => {
  const [organizations] =
    trpc.organizations.getOrganizationsByClerkId.useSuspenseQuery({
      clerkId,
    });

  return (
    <div className="border rounded-lg shadow-sm overflow-hidden">
      <Table className="w-full">
        <TableHeader>
          <TableRow className="bg-neutral-100 text-sm">
            <TableHead className="w-[300px] font-semibold">
              Organization
            </TableHead>
            <TableHead className="font-semibold">Slug</TableHead>
            <TableHead className="font-semibold">Owned by</TableHead>
            <TableHead className="font-semibold">Created At</TableHead>
            <TableHead className="font-semibold text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {organizations.map((organization) => (
            <TableRow
              key={organization.id}
              className="hover:bg-gray-100 transition cursor-pointer"
            >
              <TableCell className="font-medium">
                <Link
                  href={`/organizations/${organization.slug}`}
                  className="hover:underline"
                >
                  {organization.name}
                </Link>
              </TableCell>
              <TableCell>{organization.slug}</TableCell>
              <TableCell>
                <HoverCard>
                  <HoverCardTrigger>
                    {isOwner ? "You" : organization.owner?.email}
                  </HoverCardTrigger>
                  <HoverCardContent>
                    The React Framework – created and maintained by @vercel.
                  </HoverCardContent>
                </HoverCard>
              </TableCell>

              <TableCell>
                {format(organization.createdAt, "dd-MMMM-yyyy")}
              </TableCell>
              <TableCell className="text-center">
                <OrganizationTableActions
                  isOwner={isOwner}
                  organizationSlug={organization.slug}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default OrganizationsTable;
