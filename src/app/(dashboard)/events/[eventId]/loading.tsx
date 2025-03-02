import { Loader2Icon } from "lucide-react";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex flex-col justify-center items-center text-neutral-600">
        <Loader2Icon className="animate-spin size-7" />
        <p>Loading...</p>
      </div>
    </div>
  );
}
