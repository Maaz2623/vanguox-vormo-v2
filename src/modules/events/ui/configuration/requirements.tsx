"use client";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { Switch } from "@/components/ui/switch";
import { events } from "@/db/schema";

export const Requirements = ({
  requirements,
  setRequirements,
  isEnabled,
  setIsEnabled,
}: {
  requirements: typeof events.$inferSelect.details.requirements;
  setRequirements: React.Dispatch<
    React.SetStateAction<{
      enabled: boolean;
      essentials: {
        paymentScreenshot: boolean;
        ticketId: boolean;
        adhaarCard: boolean;
        studentIdCard: boolean;
      };
    }>
  >;
  isEnabled: boolean;
  setIsEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="space-y-3 md:w-1/2 border p-4 rounded-lg bg-neutral-50 shadow-md">
      <h2 className="text-xl">Requirements to carry</h2>

      <div className="">
        <div className="space-y-2">
          <div className="ml-2 text-primary/90 space-y-2">
            <div className="flex justify-start items-center">
              <Switch
                className="mr-2"
                defaultChecked={isEnabled}
                onCheckedChange={() => setIsEnabled(!isEnabled)}
              />
              <p>Payment Screenshot</p>
            </div>
            <div className="flex justify-start items-center">
              <Switch
                className="mr-2"
                defaultChecked={requirements.essentials.ticketId}
                onCheckedChange={() =>
                  setRequirements((prev) => ({
                    ...prev,
                    essentials: {
                      ...prev.essentials,
                      ticketId: !prev.essentials.ticketId,
                    },
                  }))
                }
              />
              <p>Ticket ID</p>
            </div>
            <div className="flex justify-start items-center">
              <Switch
                className="mr-2"
                defaultChecked={requirements.essentials.adhaarCard}
                onCheckedChange={() =>
                  setRequirements((prev) => ({
                    ...prev,
                    essentials: {
                      ...prev.essentials,
                      adhaarCard: !prev.essentials.adhaarCard,
                    },
                  }))
                }
              />
              <p>Aadhaar Card</p>
            </div>
            <div className="flex justify-start items-center">
              <Switch
                className="mr-2"
                defaultChecked={requirements.essentials.studentIdCard}
                onCheckedChange={() =>
                  setRequirements((prev) => ({
                    ...prev,
                    essentials: {
                      ...prev.essentials,
                      studentIdCard: !prev.essentials.studentIdCard,
                    },
                  }))
                }
              />
              <p>Student ID Card</p>
            </div>
          </div>

          <Separator />
        </div>
      </div>
    </div>
  );
};
