import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  BuildingIcon,
  CalendarIcon,
  CalendarRangeIcon,
  GraduationCapIcon,
  PaperclipIcon,
  StarIcon,
  TrophyIcon,
  UsersIcon,
} from "lucide-react";
import { headers } from "next/headers";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Link from "next/link";
import React from "react";
import { competitions } from "@/constants";
import { Badge } from "@/components/ui/badge";

const MobileEventIdPage = () => {
  return (
    <div className="">
      {/* Image and Buy Button  */}
      <div className="aspect-auto shrink-0 rounded-lg flex justify-center items-center space-y-3">
        <div className=" bg-neutral-100 h-[320px] w-full md:w-[450px] rounded-lg" />
      </div>

      <div className="py-3 md:ml-[450px] space-y-4">
        {/* Event Name and description  */}

        <div>
          <h1 className="text-2xl">Event Name</h1>
          <p className="text-muted-foreground text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            pariatur odit ducimus repellat rerum modi, molestiae reiciendis
            ratione blanditiis perferendis?
          </p>
        </div>

        {/* Organization Link */}

        <Link
          href={`/organizations/tsf`}
          className="flex items-center text-primary/90 hover:underline-offset-1 hover:underline cursor-pointer"
        >
          <BuildingIcon className="size-5 mr-1" />
          <p>The Student Forum</p>
        </Link>

        {/* Rating  */}

        <div className="bg-neutral-200 rounded-md w-fit px-1">
          <div className="flex items-center justify-center">
            <span className="text-sm">4.5</span>
            <StarIcon className="size-4" fill="black" strokeWidth={0.3} />
          </div>
        </div>

        {/* Target Audience  */}
        <div className="flex justify-start items-center text-primary/80">
          <GraduationCapIcon className="mr-1" />
          <p className="">Students only</p>
        </div>

        {/* Date  */}
        <div className="flex justify-start items-center text-primary/90">
          <CalendarRangeIcon className="size-4 mr-1" />
          <p>20th &ndash; 26th January 2025</p>
        </div>

        {/* Brochure  */}
        <Link
          href={`/organizations/tsf`}
          className="flex justify-start items-center text-primary/90 hover:underline underline-offset-1"
        >
          <PaperclipIcon className="size-4 mr-1" />
          <p>Brochure</p>
        </Link>

        <Button className="w-full">$250</Button>

        <Separator />

        {/* About Event  */}
        <div>
          <h2 className="text-xl text-primary">About Event</h2>
          <p className="text-primary/90">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
            laboriosam ut veniam culpa nulla nemo temporibus atque. Corrupti
            quod hic voluptatum aut natus quibusdam nisi quia? Deleniti
            laudantium temporibus exercitationem officia adipisci ducimus
            accusantium dolores ut hic a dolor amet nihil quaerat, quas fugiat
            nobis tempora, illum quia, ex minima.
          </p>
        </div>

        <Separator />

        {/* Requirements  */}
        <div className="">
          <h2 className="text-xl">Requirements</h2>
          <div className="ml-2 text-primary/90">
            <li className="">College Id Card</li>
            <li className="">Subscription/Ticket Id</li>
          </div>
        </div>

        <Separator />

        {/* Sub-Events  */}

        <div>
          <h2 className="text-xl">Sub Events</h2>
          <div className="px-4 py-2 bg-neutral-100 rounded-lg">
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

        <Separator />

        {/* Competitions  */}

        <div>
          <h2 className="text-xl">Competitions</h2>
          <div className="px-4 py-2 bg-neutral-100 rounded-lg">
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

        <Separator />

        {/* Rules and Regulations  */}
        <div className="">
          <h2 className="text-xl">Rules and Regulations</h2>
          <div className="ml-2 text-primary/90">
            <li className="">College ID Card is mandatory for entry.</li>
            <li className="">
              Subscription/Ticket ID must be presented at the entrance.
            </li>
            <li className="">
              Participants must adhere to the event schedule.
            </li>
            <li className="">
              Respect all attendees, organizers, and venue staff.
            </li>
            <li className="">
              Use of offensive language or behavior will not be tolerated.
            </li>
            <li className="">
              Any form of misconduct may result in disqualification or removal.
            </li>
            <li className="">
              Mobile phones must be kept on silent mode during sessions.
            </li>
            <li className="">
              Photography and videography are allowed only in designated areas.
            </li>
            <li className="">Outside food and beverages are not permitted.</li>
            <li className="">
              The decision of the organizers will be final in all matters.
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

const EventIdPage = async () => {
  const userAgent = (await headers()).get("user-agent") || "";

  // Basic check for mobile devices
  const isMobile =
    /android|iphone|ipad|ipod|blackberry|opera mini|iemobile|wpdesktop/i.test(
      userAgent
    );

  if (isMobile) {
    return <MobileEventIdPage />;
  }

  return (
    <div className="relative">
      {/* Image and Buy Button  */}
      <div className="aspect-auto absolute left-0 top-0 shrink-0 rounded-lg space-y-3">
        <div className=" bg-neutral-100 h-[250px] md:h-[450px] w-[250px] md:w-[450px] rounded-lg" />
        <div className="md:flex hidden">
          <Button className="w-full">$150</Button>
        </div>
      </div>

      <div className="py-3 md:ml-[450px] space-y-4 px-5">
        {/* Event Name and description  */}

        <div>
          <h1 className="text-2xl flex justify-start items-center gap-x-4">
            <p>Event Name</p>

            <Badge className="text-xs border-green-500 bg-green-300/40 text-green-600 tracking-wide">
              Registrations Open
            </Badge><Badge className="text-xs border-rose-500 bg-rose-300/40 text-rose-600 tracking-wide">
              Registrations Open
            </Badge>
          </h1>
          <p className="text-muted-foreground text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            pariatur odit ducimus repellat rerum modi, molestiae reiciendis
            ratione blanditiis perferendis?
          </p>
        </div>

        {/* Organization Link */}

        <Link
          href={`/organizations/tsf`}
          className="flex items-center text-primary/90 hover:underline-offset-1 hover:underline cursor-pointer"
        >
          <BuildingIcon className="size-5 mr-1" />
          <p>The Student Forum</p>
        </Link>

        {/* Rating  */}

        <div className="bg-neutral-200 rounded-md w-fit px-1">
          <div className="flex items-center justify-center">
            <span className="text-sm">4.5</span>
            <StarIcon className="size-4" fill="black" strokeWidth={0.3} />
          </div>
        </div>

        {/* Target Audience  */}
        <div className="flex justify-start items-center text-primary/80">
          <GraduationCapIcon className="mr-1" />
          <p className="">Students only</p>
        </div>

        {/* Date  */}
        <div className="flex justify-start items-center text-primary/90">
          <CalendarRangeIcon className="size-4 mr-1" />
          <p>20th &ndash; 26th January 2025</p>
        </div>

        {/* Brochure  */}
        <Link
          href={`/organizations/tsf`}
          className="flex justify-start items-center text-primary/90 hover:underline underline-offset-1"
        >
          <PaperclipIcon className="size-4 mr-1" />
          <p>Brochure</p>
        </Link>

        <Separator />

        {/* About Event  */}
        <div>
          <h2 className="text-xl text-primary">About Event</h2>
          <p className="text-primary/90">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
            laboriosam ut veniam culpa nulla nemo temporibus atque. Corrupti
            quod hic voluptatum aut natus quibusdam nisi quia? Deleniti
            laudantium temporibus exercitationem officia adipisci ducimus
            accusantium dolores ut hic a dolor amet nihil quaerat, quas fugiat
            nobis tempora, illum quia, ex minima.
          </p>
        </div>

        <Separator />

        {/* Requirements  */}
        <div className="">
          <h2 className="text-xl">Requirements</h2>
          <div className="ml-2 text-primary/90">
            <li className="">College Id Card</li>
            <li className="">Subscription/Ticket Id</li>
          </div>
        </div>

        <Separator />

        {/* Sub-Events  */}

        <div>
          <h2 className="text-xl">Sub Events</h2>
          <div className="px-4 py-2 bg-neutral-100 rounded-lg">
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

        <Separator />

        {/* Competitions  */}

        <div>
          <h2 className="text-xl">Competitions</h2>
          <div className="px-4 py-2 bg-neutral-100 rounded-lg">
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

        <Separator />

        {/* Rules and Regulations  */}
        <div className="">
          <h2 className="text-xl">Rules and Regulations</h2>
          <div className="ml-2 text-primary/90">
            <li className="">College ID Card is mandatory for entry.</li>
            <li className="">
              Subscription/Ticket ID must be presented at the entrance.
            </li>
            <li className="">
              Participants must adhere to the event schedule.
            </li>
            <li className="">
              Respect all attendees, organizers, and venue staff.
            </li>
            <li className="">
              Use of offensive language or behavior will not be tolerated.
            </li>
            <li className="">
              Any form of misconduct may result in disqualification or removal.
            </li>
            <li className="">
              Mobile phones must be kept on silent mode during sessions.
            </li>
            <li className="">
              Photography and videography are allowed only in designated areas.
            </li>
            <li className="">Outside food and beverages are not permitted.</li>
            <li className="">
              The decision of the organizers will be final in all matters.
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventIdPage;
