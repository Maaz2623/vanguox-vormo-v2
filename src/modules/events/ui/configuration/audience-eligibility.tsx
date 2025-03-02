"use client";
import React from "react";
import { Switch } from "@/components/ui/switch";
import { events } from "@/db/schema";

export const AudienceEligibility = ({
  audienceEligibility,
  setAudienceEligibility,
  isEnabled,
  setIsEnabled,
}: {
  audienceEligibility: typeof events.$inferSelect.details.audienceEligibility.criteria;
  setAudienceEligibility: React.Dispatch<
    React.SetStateAction<{
      above18: boolean;
      studentsOnly: boolean;
    }>
  >;
  isEnabled: boolean;
  setIsEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="space-y-3 md:w-1/2 border p-4 rounded-lg bg-neutral-50 shadow-md">
      <div className="justify-between flex items-center">
        <h2 className="text-xl">Audience Eligibility</h2>
        <Switch
          className="mr-2"
          defaultChecked={isEnabled}
          onCheckedChange={() => setIsEnabled(!isEnabled)}
        />
      </div>

      <div className="flex justify-start items-center">
        <Switch
          disabled={!isEnabled}
          className="mr-2"
          defaultChecked={audienceEligibility.studentsOnly} // `checked` should be controlled, not `defaultChecked`
          onCheckedChange={() =>
            setAudienceEligibility((prev) => ({
              ...prev,
              studentsOnly: !prev.studentsOnly, // Update inside `criteria`
            }))
          }
        />
        <p>Students Only</p>
      </div>

      <div className="flex justify-start items-center">
        <Switch
          disabled={!isEnabled}
          className="mr-2"
          defaultChecked={audienceEligibility.above18}
          onCheckedChange={() =>
            setAudienceEligibility((prev) => ({
              ...prev,
              above18: !prev.above18, // Update inside `criteria`
            }))
          }
        />
        <p>18+ Only</p>
      </div>
    </div>
  );
};
