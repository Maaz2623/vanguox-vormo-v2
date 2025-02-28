"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { trpc } from "@/trpc/client";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export const CreateEventModal = ({
  organizationId,
}: {
  organizationId: string;
}) => {
  const router = useRouter();

  const [name, setName] = useState("");

  const create = trpc.events.createEvent.useMutation();

  const utils = trpc.useUtils();

  const handleCreate = async () => {
    create.mutate(
      {
        name,
        organizationId: organizationId,
      },
      {
        onSuccess: (data) => {
          toast.success("Event created");
          router.push(`/events/${data.id}`);
          utils.events.invalidate();
        },
        onError: () => {
          toast.error(`Failed to create organization`);
        },
      }
    );
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>+ New</Button>
      </DialogTrigger>
      <DialogContent className="rounded-lg">
        <VisuallyHidden>
          <DialogHeader>
            <DialogTitle>Create Event</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </VisuallyHidden>
        <div className="w-full text-center text-xl">
          <h2>Create Event</h2>
        </div>
        <div className="mt-2 space-y-3">
          <div>
            <Label className="font-semibold">Event name</Label>
            <Input
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Jain College Organization"
              className="h-8 text-sm"
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleCreate} disabled={create.isPending}>
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
