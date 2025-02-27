import { BuildingIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { headers } from "next/headers";

const TicketCardMobileView = () => {
  return (
    <div className="w-full border rounded-lg bg-white aspect-video shadow-md p-4 flex flex-col justify-between">
      {/* Top Section: Ticket ID & Price */}
      <div className="flex justify-between">
        <div>
          <p className="text-sm text-muted-foreground">Ticket ID</p>
          <p className="text-xl text-primary/80 font-semibold">9J7GH</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Price</p>
          <p className="text-lg font-medium">₹999</p>
        </div>
      </div>

      {/* Middle Section: Organization & Event */}
      <div className="border-t pt-3 mt-3">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-muted-foreground">Organization</p>
            <Link
              href={`/organizations/tsf`}
              className="text-lg font-medium flex items-center hover:underline underline-offset-1"
            >
              <BuildingIcon className="mr-1 size-4" />
              The Student Forum
            </Link>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Event</p>
            <Link
              href={`/events/tsf`}
              className="text-lg font-medium flex items-center hover:underline underline-offset-1"
            >
              <BuildingIcon className="mr-1 size-4" />
              Quiz
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section: Status & Validity */}
      <div className="border-t pt-3 mt-3 flex justify-between">
        <div>
          <p className="text-sm text-muted-foreground">Status</p>
          <p className="text-lg font-medium text-green-600">Active</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Validity</p>
          <p className="text-lg font-medium">20-Oct-2025</p>
        </div>
      </div>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>More Information</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

const TicketCard = async () => {
  const userAgent = (await headers()).get("user-agent") || "";

  // Basic check for mobile devices
  const isMobile =
    /android|iphone|ipad|ipod|blackberry|opera mini|iemobile|wpdesktop/i.test(
      userAgent
    );

  if (isMobile) {
    return <TicketCardMobileView />;
  }

  return (
    <div className="w-full border rounded-lg bg-white aspect-video shadow-md p-4 flex flex-col justify-between">
      {/* Top Section: Ticket ID & Price */}
      <div className="flex justify-between">
        <div>
          <p className="text-sm text-muted-foreground">Ticket ID</p>
          <p className="text-xl text-primary/80 font-semibold">9J7GH</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Price</p>
          <p className="text-lg font-medium">₹999</p>
        </div>
      </div>

      {/* Middle Section: Organization & Event */}
      <div className="border-t pt-3 mt-3">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-muted-foreground">Organization</p>
            <Link
              href={`/organizations/tsf`}
              className="text-lg font-medium flex items-center hover:underline underline-offset-1"
            >
              <BuildingIcon className="mr-1 size-4" />
              The Student Forum
            </Link>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Event</p>
            <Link
              href={`/events/tsf`}
              className="text-lg font-medium flex items-center hover:underline underline-offset-1"
            >
              <BuildingIcon className="mr-1 size-4" />
              Quiz
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section: Status & Validity */}
      <div className="border-t pt-3 mt-3 flex justify-between">
        <div>
          <p className="text-sm text-muted-foreground">Status</p>
          <p className="text-lg font-medium text-green-600">Active</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Validity</p>
          <p className="text-lg font-medium">20-Oct-2025</p>
        </div>
      </div>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>More Information</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default TicketCard;
