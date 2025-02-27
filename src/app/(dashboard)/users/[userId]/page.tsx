import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { exo2, poppins } from "@/constants";
import { cn } from "@/lib/utils";
import UserDetailsContainer from "@/modules/members/ui/components/user-details-container";
import { OrganizationStatisticsContainer } from "@/modules/organizations/ui/components/organization-statistics-container";
import { UserIcon, UserPlusIcon } from "lucide-react";
import React from "react";

const ProfilePage = () => {
  return (
    <div className="pb-[1000px]">
      <div className="flex justify-center flex-col py-2 items-center space-y-4">
        <div className="size-32 rounded-full bg-neutral-200" />

        <div className="flex flex-col justify-center items-center">
          <h1
            className={cn(
              `text-3xl text-center flex items-center font-semibold ${exo2.className}`
            )}
          >
            <UserIcon className="mr-2 size-6 text-primary/80" />
            Mohammed Maaz
          </h1>
          <p
            className={`${poppins.className} text-center text-muted-foreground text-sm`}
          >
            The forum for the students by the students.
          </p>
        </div>

        <OrganizationStatisticsContainer />

        <div className="p-3 w-full flex flex-col space-y-3 justify-center items-center">
          <Button size={`sm`} className="w-[250px]">
            <UserPlusIcon className="size-5" />
            Follow
          </Button>
        </div>

        <Separator />

        <UserDetailsContainer email="mohammedmaaz2623@gmail.com" />
      </div>
    </div>
  );
};

export default ProfilePage;
