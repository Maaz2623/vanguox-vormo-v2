"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import React, { useState } from "react";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { CalendarIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import toast from "react-hot-toast";
export const SubEvents = ({
  subEvents,
  setSubEvents,
  isEnabled,
  setIsEnabled,
}: {
  subEvents: {
    title: string;
    description: string;
    date: Date;
  }[];
  setSubEvents: React.Dispatch<
    React.SetStateAction<
      {
        title: string;
        description: string;
        date: Date;
      }[]
    >
  >;
  isEnabled: boolean;
  setIsEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [newSubEvent, setNewSubEvent] = useState({
    title: "",
    description: "",
    date: new Date(),
  });

  return (
    <div className="space-y-3 md:w-1/2 border p-4 rounded-lg bg-neutral-50 shadow-md">
      <div className="flex justify-between items-center">
        <h2 className="text-xl">Sub Events</h2>
        <Switch
          className="mr-2"
          defaultChecked={isEnabled}
          onCheckedChange={() => setIsEnabled(!isEnabled)}
        />
      </div>

      <div className="">
        <Label>Event Name</Label>
        <Input
          disabled={!isEnabled}
          className=""
          value={newSubEvent.title}
          placeholder="Quiz Competition"
          onChange={(e) =>
            setNewSubEvent({
              ...newSubEvent,
              title: e.target.value,
            })
          }
        />
      </div>
      <div className="">
        <Label>About Event</Label>
        <Textarea
          value={newSubEvent.description}
          disabled={!isEnabled}
          className=""
          onChange={(e) =>
            setNewSubEvent({
              ...newSubEvent,
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
                !newSubEvent.date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {newSubEvent.date ? (
                format(newSubEvent.date, "PPP")
              ) : (
                <span>Pick a date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={newSubEvent.date}
              onSelect={(date) =>
                setNewSubEvent((prev) => ({ ...prev, date: date || prev.date }))
              }
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex justify-end items-center">
        <Button
          disabled={!isEnabled}
          onClick={() => {
            setSubEvents([...subEvents, newSubEvent]);
            toast.success("Sub event added");
            setNewSubEvent({
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
        {subEvents.map((event, i) => (
          <Accordion type="single" collapsible key={i} disabled={!isEnabled}>
            <AccordionItem value="item-1">
              <AccordionTrigger>{event.title}</AccordionTrigger>
              <AccordionContent>
                <div>
                  <p>{event.description}</p>
                  <div className="mt-2 flex justify-start items-center gap-x-4 text-primary/80">
                    <div className="flex items-center">
                      <CalendarIcon className="size-4 mr-1" />
                      <p>{format(event?.date?.toString(), "dd-MMM-yyy")}</p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
};
