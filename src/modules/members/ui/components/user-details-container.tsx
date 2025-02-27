"use client";
import { cn } from "@/lib/utils";
import OrganizationCard from "@/modules/organizations/ui/components/organization-card";
import React, { useState } from "react";

const OrganizationCardsContainer = () => {
  return (
    <div className="w-full flex flex-wrap gap-x-8 gap-y-8 justify-center">
      <OrganizationCard />
      <OrganizationCard />
      <OrganizationCard />
      <OrganizationCard />
      <OrganizationCard />
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const UserDetailsContainer = ({ email }: { email: string }) => {
  const organizationDetailsContainerLinks = [
    {
      url: "/organizations/code-masters/events",
      label: "Achievements",
      tag: "achievements",
    },
    {
      url: "/organizations/code-masters/members",
      label: "Organizations",
      tag: "organizations",
    },
  ];

  const [isActive, setIsActive] = useState<"achievements" | "organizations">(
    "achievements"
  );

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
        {isActive === "achievements" && "Achievements"}
        {isActive === "organizations" && <OrganizationCardsContainer />}
      </div>
    </div>
  );
};

export default UserDetailsContainer;
