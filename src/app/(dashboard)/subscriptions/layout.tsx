import { Button } from "@/components/ui/button";
import { isOwner, isSubscribed } from "@/constants";
import { XIcon } from "lucide-react";

export default async function SubscriptionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {!isSubscribed && isOwner && (
        <div className="mb-3 flex-col md:flex-row flex justify-between items-center text-red-600 border border-red-500/80 bg-red-300/20 w-full rounded-md pl-3">
          <p className="text-sm text-center">
            You don&apos;t have any active subscription. So your organizations
            and their events won&apos;t be visible to others.
          </p>
          <div className="flex justify-center items-center">
            <Button className="text-red-500 font-semibold" variant={`link`}>
              Subscribe now
            </Button>
            <XIcon className="text-neutral-800 mr-2 size-4 cursor-pointer" />
          </div>
        </div>
      )}
      {children}
    </div>
  );
}
