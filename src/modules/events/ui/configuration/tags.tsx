"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { Button } from "@/components/ui/button";
import { XIcon } from "lucide-react";
export const Tags = ({
  tags,
  setTags,
  setTagName,
  tagName,
}: {
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
  setTagName: React.Dispatch<React.SetStateAction<string>>;
  tagName: string;
}) => {
  return (
    <div className="space-y-3 md:w-1/2 border p-4 rounded-lg bg-neutral-50 shadow-md">
      <h2 className="text-xl">Tags</h2>

      <div className="">
        <Label>Tag name</Label>
        <div className="flex gap-x-5">
          <Input
            className=""
            placeholder="e.g. Contingent"
            onChange={(e) => setTagName(e.target.value)}
            value={tagName}
          />
          <Button
            onClick={() => {
              setTags([...tags, tagName]);
              setTagName("");
            }}
          >
            Add
          </Button>
        </div>
        <div className="mt-2 flex flex-wrap gap-x-3">
          {tags.map((tag, index) => (
            <span
              className="px-2 text-sm mb-4 bg-neutral-200 rounded-sm flex w-fit justify-start items-center"
              key={tag}
            >
              {tag}
              <XIcon
                className="ml-1 size-3 hover:cursor-pointer"
                onClick={() => {
                  setTags((prevRules) => {
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
