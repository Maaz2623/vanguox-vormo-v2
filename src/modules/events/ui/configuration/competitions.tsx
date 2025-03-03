"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon, TrashIcon } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

export const Competitions = ({
  competitions,
  isEnabled,
  setIsEnabled,
  setCompetitions,
}: {
  competitions: {
    title: string;
    description: string;
    date: Date;
  }[];
  isEnabled: boolean;
  setIsEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  setCompetitions: React.Dispatch<
    React.SetStateAction<
      {
        title: string;
        description: string;
        date: Date;
      }[]
    >
  >;
}) => {
  const [newCompetition, setNewCompetition] = useState({
    title: "",
    description: "",
    date: new Date(),
  });

  return (
    <div className="space-y-3 md:w-1/2 border p-4 rounded-lg bg-neutral-50 shadow-md">
      <div className="flex justify-between items-center">
        <h2 className="text-xl">Competitions</h2>
        <Switch
          className="mr-2"
          defaultChecked={isEnabled}
          onCheckedChange={() => setIsEnabled(!isEnabled)}
        />
      </div>

      <div className="">
        <Label>Competition Name</Label>
        <Input
          disabled={!isEnabled}
          className=""
          placeholder="Quiz Competition"
          onChange={(e) =>
            setNewCompetition({
              ...newCompetition,
              title: e.target.value,
            })
          }
        />
      </div>
      <div className="">
        <Label>About Competition</Label>
        <Textarea
          disabled={!isEnabled}
          className=""
          onChange={(e) =>
            setNewCompetition({
              ...newCompetition,
              description: e.target.value,
            })
          }
        />
      </div>
      <div className="flex flex-col gap-y-1">
        <Label>Date</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              disabled={!isEnabled}
              variant={"outline"}
              className={cn(
                "w-[280px] justify-start text-left font-normal",
                !newCompetition.date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {newCompetition.date ? (
                format(newCompetition.date, "PPP")
              ) : (
                <span>Pick a date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={newCompetition.date}
              onSelect={(date) =>
                setNewCompetition((prev) => ({
                  ...prev,
                  date: date || prev.date,
                }))
              }
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex justify-end items-center">
        <Button
          disabled={!isEnabled || newCompetition.title === ""}
          onClick={() => {
            setCompetitions([...competitions, newCompetition]);
            toast.success("Competition added");
            setNewCompetition({
              title: "",
              description: "",
              date: new Date(),
            });
          }}
        >
          Save
        </Button>
      </div>
      <Separator />
      <div className="mt-3 flex flex-col gap-x-3">
        {competitions.map((competition, i) => (
          <Accordion type="single" collapsible key={i} disabled={!isEnabled}>
            <AccordionItem value="item-1">
              <AccordionTrigger>{competition.title}</AccordionTrigger>
              <AccordionContent className="flex justify-between items-center">
                <div>
                  <p>{competition.description}</p>
                  <div className="mt-2 flex justify-start items-center gap-x-4 text-primary/80">
                    <div className="flex items-center">
                      <CalendarIcon className="size-4 mr-1" />
                      <p>{format(competition.date, "dd-MMM-yyy")}</p>
                    </div>
                  </div>
                </div>
                <Button
                  size={`icon`}
                  className="text-red-600 hover:bg-red-300 bg-red-300/80 border-red-500"
                  onClick={() => {
                    setCompetitions((prevCompetitions) => {
                      const updatedCompetitions = [...prevCompetitions]; // Create a copy
                      updatedCompetitions.splice(i, 1); // Remove rule at index
                      return updatedCompetitions; // Return new array
                    });
                  }}
                >
                  <TrashIcon className="" />
                </Button>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
};
