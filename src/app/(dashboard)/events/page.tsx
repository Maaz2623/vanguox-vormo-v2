import PageHeaderContainer from "@/components/page-header-container";
import { Button } from "@/components/ui/button";
import EventCard from "@/modules/events/ui/components/event-card";
import React from "react";

const HomePage = () => {
  return (
    <div className="space-y-4">
      <PageHeaderContainer
        title="Explore events"
        description="Warning: Attending These Events May Cause Fun"
        components={<Button>+ New</Button>}
      />
      <div className="border border-green-500 min-h-screen flex flex-wrap gap-y-8 gap-x-8 p-2">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
};

export default HomePage;
