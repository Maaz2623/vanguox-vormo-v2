"use client";
import { cn } from "@/lib/utils";
import EventsContainer from "@/modules/events/ui/components/events-container";
import MembersContainer from "@/modules/members/ui/components/members-container";
import { trpc } from "@/trpc/client";
import React, { useState } from "react";

const OrganizationDetailsContainer = ({
  organizationId,
}: {
  organizationId: string;
}) => {
  const organizationDetailsContainerLinks = [
    {
      url: "/organizations/code-masters/events",
      label: "Events",
      tag: "events",
    },
    {
      url: "/organizations/code-masters/members",
      label: "Members",
      tag: "members",
    },
  ];

  const [events] = trpc.events.getByOrganizationId.useSuspenseQuery({
    organizationId: organizationId,
  });

  const [isActive, setIsActive] = useState<"events" | "members">("events");

  return (
    <div className="w-full">
      <div className="w-full p-3">
        <div className="border-b flex justify-center items-center">
          {organizationDetailsContainerLinks.map((item) => {
            return (
              <div
                key={item.url}
                className="px-2 cursor-pointer w-[150px] md:w-[200px] "
                onClick={() => setIsActive(item.tag as typeof isActive)}
              >
                <div
                  className={cn(
                    "py-1 px-2 relative text-muted-foreground",
                    "transition-all duration-300 ease-in-out", // Smooth transition
                    isActive === item.tag
                      ? "border-b-2 border-primary text-primary"
                      : "border-b-2 border-transparent"
                  )}
                >
                  <p className="p-2 text-center hover:text-primary rounded-sm transition-all duration-300">
                    {item.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="p-3">
        {isActive === "events" && (
          <EventsContainer events={events} organizationId={organizationId} />
        )}
        {isActive === "members" && <MembersContainer />}
      </div>
    </div>
  );
};

export default OrganizationDetailsContainer;
