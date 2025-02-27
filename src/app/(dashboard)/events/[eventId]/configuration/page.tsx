"use client";
import PageHeaderContainer from "@/components/page-header-container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { CalendarIcon, TrophyIcon, UsersIcon, XIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { competitions, rules, tags } from "@/constants";
import { DatePickerWithRange } from "@/components/date-picker-with-range";
import { DatePicker } from "@/components/date-picker";

const ConfigurationPage = () => {
  return (
    <div className="space-y-6 pb-[1000px]">
      <PageHeaderContainer
        title="Configure your event"
        description="Manage your event settings"
      />
      <Separator />

      <div className="space-y-3 md:w-1/2 border p-4 rounded-lg bg-neutral-50 shadow-md">
        <h2 className="text-xl">Basic Information</h2>

        <div className="">
          <Label>Event Name</Label>
          <Input className="" />
        </div>
        <div className="">
          <Label>Event Description</Label>
          <Textarea className="" />
        </div>
        <div className="">
          <Label>Event Date</Label>
          <DatePickerWithRange />
        </div>
        <div className="mt-3">
          <Label className="flex">
            Banner{" "}
            <p className="text-xs ml-1 text-muted-foreground">(.jpeg, .png)</p>
          </Label>
          <Input type="file" />
        </div>
      </div>

      <div className="space-y-3 md:w-1/2 border p-4 rounded-lg bg-neutral-50 shadow-md">
        <div className="justify-between flex items-center">
          <h2 className="text-xl">Audience Eligibility</h2>
        </div>

        <div className="flex justify-start items-center">
          <Switch className="mr-2" />
          <p>Students Only</p>
        </div>

        <div className="flex justify-start items-center">
          <Switch className="mr-2" />
          <p>Age 18+</p>
        </div>

        <div className="flex justify-start items-center">
          <Switch className="mr-2" />
          <p>VIP Members</p>
        </div>

        <div className="flex justify-start items-center">
          <Switch className="mr-2" />
          <p>Event Participants Only</p>
        </div>
      </div>

      <div className="space-y-3 md:w-1/2 border p-4 rounded-lg bg-neutral-50 shadow-md">
        <h2 className="text-xl">Optional Information</h2>

        <div className="">
          <Label>Tags</Label>
          <div className="flex gap-x-5">
            <Input className="" placeholder="e.g. Contingent" />
            <Button>Add</Button>
          </div>
          <div className="mt-2 flex flex-wrap gap-x-3">
            {tags.map((tag) => (
              <span
                className="px-2 text-sm mb-4 bg-neutral-200 rounded-sm flex w-fit justify-start items-center"
                key={tag}
              >
                {tag}
                <XIcon className="ml-1 size-3 hover:cursor-pointer" />
              </span>
            ))}
          </div>
        </div>
        <div className="">
          <Label>Brochure</Label>
          <Input className="cursor-pointer" type="file" />
        </div>
      </div>

      <div className="space-y-3 md:w-1/2 border p-4 rounded-lg bg-neutral-50 shadow-md">
        <h2 className="text-xl">Requirements to carry</h2>

        <div className="">
          <div className="space-y-2">
            <div className="flex justify-start items-center">
              <Switch className="mr-2" />
              <p>Student ID Card</p>
            </div>
            <div className="flex justify-start items-center">
              <Switch className="mr-2" />
              <p>Ticket ID</p>
            </div>
            <div className="flex justify-start items-center">
              <Switch className="mr-2" />
              <p>Adhaar Card</p>
            </div>
            <div className="flex justify-start items-center">
              <Switch className="mr-2" />
              <p>Payment Screenshot</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3 md:w-1/2 border p-4 rounded-lg bg-neutral-50 shadow-md">
        <h2 className="text-xl">Rules and Regulations</h2>

        <div className="">
          <Label>Rules</Label>
          <div className="flex gap-x-5">
            <Input className="" placeholder="e.g. No littering" />
            <Button>Add</Button>
          </div>
          <div className="mt-3 flex flex-col gap-x-3">
            {rules.map((rule) => (
              <span
                className="px-2 text-sm mb-4 bg-neutral-200 rounded-sm flex w-fit justify-start items-center"
                key={rule}
              >
                {rule}
                <XIcon className="ml-1 size-3 hover:cursor-pointer" />
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="space-y-3 md:w-1/2 border p-4 rounded-lg bg-neutral-50 shadow-md">
        <div className="flex justify-between items-center">
          <h2 className="text-xl">Stars</h2>
          <Switch className="mr-2" />
        </div>

        <div className="">
          <Label>Stars</Label>
          <Input className="cursor-pointer" type="number" max={5} />
        </div>
      </div>

      <div className="space-y-3 md:w-1/2 border p-4 rounded-lg bg-neutral-50 shadow-md">
        <div className="flex justify-between items-center">
          <h2 className="text-xl">Sub Events</h2>
          <Switch className="mr-2" />
        </div>

        <div className="">
          <Label>Event Name</Label>
          <Input className="" placeholder="Quiz Competition" />
        </div>
        <div className="">
          <Label>About Event</Label>
          <Textarea className="" />
        </div>
        <div className="flex flex-col gap-y-1">
          <Label>Date</Label>
          <DatePicker />
        </div>
        <div className="flex justify-end items-center">
          <Button>Save</Button>
        </div>
        <Separator />
        <div className="mt-3 flex flex-col gap-x-3">
          {competitions.map((competition, i) => (
            <Accordion type="single" collapsible key={i}>
              <AccordionItem value="item-1">
                <AccordionTrigger>{competition.label}</AccordionTrigger>
                <AccordionContent>
                  <div>
                    <p>{competition.description}</p>
                    <div className="mt-2 flex justify-start items-center gap-x-4 text-primary/80">
                      <div className="flex items-center">
                        <CalendarIcon className="size-4 mr-1" />
                        <p>12-Jan-2025</p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>

      <div className="space-y-3 md:w-1/2 border p-4 rounded-lg bg-neutral-50 shadow-md">
        <div className="flex justify-between items-center">
          <h2 className="text-xl">Competitions</h2>
          <Switch className="mr-2" />
        </div>

        <div className="">
          <Label>Competition Name</Label>
          <Input className="" placeholder="Quiz Competition" />
        </div>
        <div className="">
          <Label>About Competition</Label>
          <Textarea className="" />
        </div>
        <div>
          <Label>Prize</Label>
          <Select>
            <div className="flex">
              <SelectTrigger className="w-[180px] rounded-l-lg rounded-r-none ring-0 focus-visible:ring-0 ">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <Input
                className="rounded-l-none rounded-r-lg focus-visible:ring-0 ring-0"
                placeholder="Enter Value"
              />
            </div>
            <SelectContent>
              <SelectItem value="light">Cash</SelectItem>
              <SelectItem value="system">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Participation type</Label>
          <Select>
            <div className="flex">
              <SelectTrigger className="w-[180px] rounded-l-lg rounded-r-none focus-visible:ring-0 ">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <Input
                className="rounded-l-none rounded-r-lg focus-visible:ring-0 ring-0"
                placeholder="Enter Value"
              />
            </div>
            <SelectContent>
              <SelectItem value="light">Team</SelectItem>
              <SelectItem value="system">Individual</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex justify-end items-center">
          <Button>Save</Button>
        </div>
        <Separator />
        <div className="mt-3 flex flex-col gap-x-3">
          {competitions.map((competition, i) => (
            <Accordion type="single" collapsible key={i}>
              <AccordionItem value="item-1">
                <AccordionTrigger>{competition.label}</AccordionTrigger>
                <AccordionContent>
                  <div>
                    <p>{competition.description}</p>
                    <div className="mt-2 flex justify-start items-center gap-x-4 text-primary/80">
                      <div className="flex items-center">
                        <TrophyIcon className="size-4 mr-1" />
                        <p>{competition.prize}</p>
                      </div>{" "}
                      <div className="flex items-center">
                        <UsersIcon className="size-4 mr-1" />
                        <p>{competition.teamSize}</p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>

      <div className="flex justify-end md:w-1/2">
        <Button>Save Configuration</Button>
      </div>
    </div>
  );
};

export default ConfigurationPage;
