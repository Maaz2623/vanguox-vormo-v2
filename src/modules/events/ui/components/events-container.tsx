import React from "react";
import EventCard from "./event-card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { events } from "@/db/schema";
import { CreateEventModal } from "../create-event-modal";

interface EventsContainerProps {
  events: Array<typeof events.$inferSelect>;
  organizationId: string;
}

const EventsContainer = ({ events, organizationId }: EventsContainerProps) => {
  return (
    <div className="w-full flex-col space-y-6">
      <div className="justify-between flex items-center h-12">
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
        <CreateEventModal organizationId={organizationId} />
      </div>
      <div className="flex justify-center items-center flex-wrap gap-x-8 gap-y-8">
        {events.map((event) => (
          <EventCard id={event.id} name={event.name} key={event.id} />
        ))}
      </div>
    </div>
  );
};

export default EventsContainer;
