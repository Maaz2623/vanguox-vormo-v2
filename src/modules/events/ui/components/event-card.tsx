import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const EventCard = ({ id, name, slug }: EventCardProps) => {
  return (
    <Link href={`/events/${id}`}>
      <Card className="w-[280px] h-[300px] shadow-md hover:shadow-lg overflow-hidden cursor-pointer transition-all duration-300">
        {/* Hidden Header for Accessibility */}
        <VisuallyHidden>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
        </VisuallyHidden>

        <CardContent className="h-full p-0 flex flex-col">
          {/* Event Banner */}
          <div className="h-[50%] w-full bg-neutral-200" />

          {/* Event Details */}
          <div className="p-2 flex-1">
            <h2 className="text-lg font-medium">{name}</h2>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              deserunt!
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default EventCard;
