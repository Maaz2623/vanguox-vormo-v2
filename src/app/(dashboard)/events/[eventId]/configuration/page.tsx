"use client";
import PageHeaderContainer from "@/components/page-header-container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { XIcon } from "lucide-react";
import { trpc } from "@/trpc/client";
import { useParams } from "next/navigation";
import toast from "react-hot-toast";
import { DateRange } from "react-day-picker";
import { DatePickerWithRange } from "@/components/date-picker-with-range";
import Image from "next/image";
import { AudienceEligibility } from "@/modules/events/ui/configuration/audience-eligibility";
import { Tags } from "@/modules/events/ui/configuration/tags";
import { Brochure } from "@/modules/events/ui/configuration/brochure";
import { Requirements } from "@/modules/events/ui/configuration/requirements";
import { SubEvents } from "@/modules/events/ui/configuration/subevents";
import { Competitions } from "@/modules/events/ui/configuration/competitions";
import { RulesAndRegulations } from "@/modules/events/ui/configuration/rules-and-regulations";
import { useUploadThing } from "@/lib/uploadthing";

const ConfigurationPage = () => {
  const { eventId } = useParams();

  const [event] = trpc.events.getByEventId.useSuspenseQuery({
    eventId: eventId as string,
  });

  const [eventName, setEventName] = useState(event.name);
  const [description, setDescription] = useState(event.details.description);

  const [date, setDate] = React.useState<DateRange | undefined>({
    from: event.details.dateRange.from,
    to: event.details.dateRange.to,
  });

  const [tags, setTags] = useState(event.details.tags || []);
  const [tagName, setTagName] = useState("");

  const [rules, setRules] = useState(event.details.rulesAndRegulations || []);
  const [ruleName, setRuleName] = useState("");

  const [subEvents, setSubEvents] = useState(event.details.subEvents.events);
  const [isSubEventsEnabled, setIsSubEventsEnabled] = useState(
    event.details.subEvents.enabled
  );

  const [competitions, setCompetitions] = useState(
    event.details.competitions.competitions
  );
  const [isCompetitionsEnabled, setIsCompetitionsEnabled] = useState(
    event.details.competitions.enabled
  );

  const [requirements, setRequirements] = useState(event.details.requirements);
  const [isRequirementsEnabled, setIsRequirementsEnabled] = useState(
    event.details.requirements.enabled
  );

  const [audienceEligibility, setAudienceEligibility] = useState(
    event.details.audienceEligibility.criteria
  );
  const [isAudienceEligibilityEnabled, setIsAudienceEligibilityEnabled] =
    useState(event.details.audienceEligibility.enabled);

  const [banner, setBanner] = useState<File | null>(null);
  const [bannerUrl, setBannerUrl] = useState(event.details.bannerUrl);

  const [brochureUrl, setBrochureUrl] = useState(event.details.brochure);

  const updatedEvent: EventDetails = {
    description: description,
    dateRange: {
      from: date?.from || new Date(),
      to: date?.to || new Date(),
    },
    audienceEligibility: {
      enabled: isAudienceEligibilityEnabled,
      criteria: audienceEligibility,
    },
    tags: tags,
    rulesAndRegulations: rules,
    subEvents: {
      enabled: isSubEventsEnabled,
      events: subEvents,
    },
    competitions: {
      enabled: isCompetitionsEnabled,
      competitions: competitions,
    },
    requirements: {
      enabled: requirements.enabled,
      essentials: requirements.essentials,
    },
    bannerUrl: bannerUrl,
    brochure: brochureUrl,
  };

  const update = trpc.events.updateEventById.useMutation();

  const handleUpdate = () => {
    const mutationPromise = update.mutateAsync({
      eventId: eventId as string,
      name: eventName,
      details: updatedEvent,
    });
    toast.promise(mutationPromise, {
      loading: "Saving...",
      success: "Saved successfully!",
      error: "Failed to save",
    });
  };

  const { startUpload: startBannerUpload, isUploading } = useUploadThing(
    "imageUploader",
    {
      onClientUploadComplete: (res) => {
        if (res && res.length > 0) {
          toast.success("Uploaded");
          setBannerUrl(res[0].ufsUrl);
          console.log(res);
        }
      },
      onUploadError: (error) => {
        toast.error("Upload failed");
        console.log(error);
      },
    }
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setBanner(e.target.files[0]);
    }
  };

  const uploadFile = async () => {
    if (banner) {
      await startBannerUpload([banner]);
    }
  };

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
          <Input
            className=""
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />
        </div>
        <div className="">
          <Label>Event Description</Label>
          <Textarea
            className=""
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="">
          <Label>Event Date</Label>
          <DatePickerWithRange date={date} setDate={setDate} />
        </div>
        <div className="mt-3">
          <Label className="flex">
            Banner{" "}
            <p className="text-xs ml-1 text-muted-foreground">(.jpeg, .png)</p>
          </Label>
          <div className="flex items-center justify-between mt-1">
            {bannerUrl.length > 1 ? (
              <div className="w-full flex justify-center relative items-center">
                <XIcon
                  className="absolute -top-2 p-1 rounded-full bg-white cursor-pointer border right-2"
                  onClick={() => setBannerUrl("")}
                />
                <Image
                  src={bannerUrl}
                  alt="banner"
                  className="aspect-video border rounded-lg "
                  height={400}
                  width={450}
                />
              </div>
            ) : (
              <>
                <Input
                  className="w-3/4"
                  type="file"
                  accept="image/"
                  onChange={handleFileChange}
                />
                <Button onClick={uploadFile} disabled={!banner || isUploading}>
                  {isUploading ? "Uploading..." : "Upload"}
                </Button>
              </>
            )}
          </div>
        </div>
      </div>

      <AudienceEligibility
        isEnabled={isAudienceEligibilityEnabled}
        setIsEnabled={setIsAudienceEligibilityEnabled}
        audienceEligibility={audienceEligibility}
        setAudienceEligibility={setAudienceEligibility}
      />

      <Tags
        tagName={tagName}
        setTagName={setTagName}
        tags={tags}
        setTags={setTags}
      />

      <Brochure brochureUrl={brochureUrl} setBrochureUrl={setBrochureUrl} />

      <Requirements
        requirements={requirements}
        setRequirements={setRequirements}
        isEnabled={isRequirementsEnabled}
        setIsEnabled={setIsRequirementsEnabled}
      />

      <RulesAndRegulations
        ruleName={ruleName}
        setRuleName={setRuleName}
        rules={rules}
        setRules={setRules}
      />

      <SubEvents
        subEvents={subEvents}
        setSubEvents={setSubEvents}
        isEnabled={isSubEventsEnabled}
        setIsEnabled={setIsSubEventsEnabled}
      />

      <Competitions
        competitions={competitions}
        setIsEnabled={setIsCompetitionsEnabled}
        isEnabled={isCompetitionsEnabled}
        setCompetitions={setCompetitions}
      />

      <div className="flex justify-end md:w-1/2">
        <Button onClick={handleUpdate} disabled={update.isPending}>
          Save Configuration
        </Button>
      </div>
    </div>
  );
};

export default ConfigurationPage;
