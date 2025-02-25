import PageHeaderContainer from "@/components/page-header-container";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import EventCard from "@/modules/events/ui/components/event-card";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { events } from "@/constants";

const HomePage = () => {
  return (
    <div className="space-y-4">
      <PageHeaderContainer
        title="Explore events"
        description="Warning: Attending These Events May Cause Fun"
        components={<Button>+ New</Button>}
      />
      <Separator />

      {/* Search Component */}
      <div className="h-12 rounded-lg flex justify-start items-center overflow-hidden gap-x-4">
        <div className="flex justify-start items-center border rounded-lg focus-visible:ring-2">
          <div className="size-9 flex justify-center items-center">
            <SearchIcon className="text-muted-foreground size-4 mx-2" />
            <Separator orientation="vertical" />
          </div>
          <Input
            className="border-0 shadow-none focus-visible:ring-0 "
            placeholder="Search by title"
          />
        </div>

        {/* Select Dropdown */}
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Event Cards Container  */}
      <div className=" min-h-screen flex md:justify-start justify-center flex-wrap gap-y-8 gap-x-8 p-2">
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

export default HomePage;
