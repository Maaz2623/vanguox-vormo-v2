import PageHeaderContainer from "@/components/page-header-container";
import TicketCard from "@/components/ticket-card";
import { Separator } from "@/components/ui/separator";
import React from "react";

const TicketsPage = () => {
  return (
    <div>
      <PageHeaderContainer
        title="Manage your tickets"
        description="All your present and past tickets which you have bought"
      />
      <Separator className="mb-8" />
      <div className="border min-h-screen rounded-lg md:flex justify-end shadow-inner p-4 bg-neutral-100">
        <div className="flex justify-end flex-col gap-y-8 md:w-1/3">
          <TicketCard />
          <TicketCard />
          <TicketCard />
        </div>
      </div>
    </div>
  );
};

export default TicketsPage;
