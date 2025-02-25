import React from "react";
import EventCard from "./event-card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { events } from "@/constants";

interface EventsContainerProps {
  slug?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const EventsContainer = ({ slug }: EventsContainerProps) => {
  return (
    <div className="w-full flex-col space-y-6">
      <div className="justify-center flex items-center h-12">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">All</SelectItem>
            <SelectItem value="dark">Contingent</SelectItem>
            <SelectItem value="system">Solaris</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-x-8 gap-y-8">
      {events.map((event) => (
          <EventCard
            slug={event.slug}
            id={event.id}
            name={event.name}
            key={event.id}
          />
        ))}
      </div>
    </div>
  );
};

export default EventsContainer;
