import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { isOwner, organizations } from "@/constants";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { OrganizationTableActions } from "./organization-table-actions";

const OrganizationsTable = () => {
  return (
    <div>
      <div className="border-y rounded-lg overflow-hidden">
        <Table className="">
          <TableHeader className="">
            <TableRow className="bg-neutral-100">
              <TableHead className="w-[350px] font-bold">
                Organization name
              </TableHead>
              <TableHead className="font-bold">Slug</TableHead>
              <TableHead className="font-bold">Owned by</TableHead>
              <TableHead className="font-bold">Status</TableHead>
              <TableHead className="font-bold">Created At</TableHead>
              <TableHead className="font-bold">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {organizations.map((organization) => {
              return (
                <Link
                  href={`/organizations/${organization.slug}`}
                  key={organization.id}
                  legacyBehavior
                >
                  <TableRow className="cursor-pointer">
                    <TableCell>{organization.name}</TableCell>
                    <TableCell>{organization.slug}</TableCell>
                    <TableCell>
                      {isOwner ? "You" : organization.ownerEmail}
                    </TableCell>
                    <TableCell>
                      {organization.active ? (
                        <Badge
                          variant="outline"
                          className="bg-green-200/80 border border-green-500 text-green-700 w-[70px] text-center flex justify-center items-center"
                        >
                          active
                        </Badge>
                      ) : (
                        <Badge
                          variant="outline"
                          className="bg-rose-200/80 border border-rose-500 text-rose-700 text-center flex justify-center items-center w-[70px]"
                        >
                          inactive
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      {format(organization.createdAt, "yyyy-MMM-dd")}
                    </TableCell>
                    <TableCell className="pl-4">
                      <OrganizationTableActions
                        isOwner={isOwner}
                        organizationSlug={organization.slug}
                      />
                    </TableCell>
                  </TableRow>
                </Link>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default OrganizationsTable;
