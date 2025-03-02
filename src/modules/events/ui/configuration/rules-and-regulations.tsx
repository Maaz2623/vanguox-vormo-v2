"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { Button } from "@/components/ui/button";
import { XIcon } from "lucide-react";

export const RulesAndRegulations = ({
  ruleName,
  setRuleName,
  rules,
  setRules,
}: {
  ruleName: string;
  setRuleName: React.Dispatch<React.SetStateAction<string>>;
  rules: string[];
  setRules: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  "use client";
  return (
    <div className="space-y-3 md:w-1/2 border p-4 rounded-lg bg-neutral-50 shadow-md">
      <h2 className="text-xl">Rules and Regulations</h2>

      <div className="">
        <Label>Rules</Label>
        <div className="flex gap-x-5">
          <Input
            className=""
            placeholder="e.g. No littering"
            onChange={(e) => setRuleName(e.target.value)}
            value={ruleName}
          />
          <Button
            onClick={() => {
              setRules([...rules, ruleName]);
              setRuleName("");
            }}
          >
            Add
          </Button>
        </div>
        <div className="mt-3 flex flex-col gap-x-3">
          {rules.map((rule, index) => (
            <span
              className="px-2 text-sm mb-4 bg-neutral-200 rounded-sm flex w-fit justify-start items-center"
              key={rule}
            >
              {rule}
              <XIcon
                className="ml-1 size-3 hover:cursor-pointer hover:text-red-500"
                onClick={() => {
                  setRules((prevRules) => {
                    const updatedRules = [...prevRules]; // Create a copy
                    updatedRules.splice(index, 1); // Remove rule at index
                    return updatedRules; // Return new array
                  });
                }}
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
