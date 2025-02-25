import React from "react";
import Link from "next/link";
import { format } from "date-fns";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { isOwner, organizations } from "@/constants";
import { UserButton } from "@clerk/nextjs";

const MembersTable = () => {
  return (
    <div>
      
      <div className="border rounded-lg shadow-sm overflow-hidden">
        <Table className="w-full">
          <TableHeader>
            <TableRow className="bg-neutral-100 text-sm">
              <TableHead className="w-[80px] font-semibold text-center">
                Profile
              </TableHead>
              <TableHead className="w-[300px] font-semibold">Name</TableHead>
              <TableHead className="font-semibold">Email</TableHead>
              <TableHead className="font-semibold">Ranking</TableHead>
              <TableHead className="font-semibold">Joined At</TableHead>
              {isOwner && (
                <TableHead className="font-semibold text-center">
                  Actions
                </TableHead>
              )}
            </TableRow>
          </TableHeader>
          <TableBody>
            {organizations.map((organization) => (
              <TableRow
                key={organization.id}
                className="hover:bg-gray-100 transition cursor-pointer"
              >
                <TableCell className="text-center">{<UserButton />}</TableCell>
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
                  {organization.active ? (
                    <Badge className="bg-green-200/80 w-[80px] flex justify-center items-center hover:bg-green-300 border border-green-500 text-green-700 px-3 py-1">
                      Active
                    </Badge>
                  ) : (
                    <Badge className="bg-rose-200/80 border w-[80px] flex justify-center items-center hover:bg-rose-300 border-rose-500 text-rose-700 px-3 py-1">
                      Inactive
                    </Badge>
                  )}
                </TableCell>
                <TableCell>
                  {format(organization.createdAt, "yyyy-MMM-dd")}
                </TableCell>
                {isOwner && <TableCell className="text-center"></TableCell>}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default MembersTable;
