import { poppins } from "@/constants";
import { cn } from "@/lib/utils";

export const OrganizationStatisticsContainer = () => {
  return (
    <div className="border bg-neutral-50 p-2 md:p-3 flex gap-x-3 md:gap-x-4 rounded-lg  ">
      <div
        className={cn(
          "aspect-video border p-4 rounded-lg bg-neutral-100 w-[100px] md:w-[150px]"
        )}
      >
        <p
          className={cn(
            `${poppins.className} text-sm md:text-base font-semibold text-primary/90`
          )}
        >
          Events
        </p>
        <div className={cn("md:text-2xl flex items-end ")}>
          <p className="font-bold text-primary/95">586</p>
          <p className="text-[10px] md:text-xs mb-1 md:mb-1.5 font-semibold ml-1 text-primary/90">
            hosted
          </p>
        </div>
      </div>
      <div
        className={cn(
          "aspect-video border p-4 rounded-lg bg-neutral-100 w-[100px] md:w-[150px]"
        )}
      >
        <p
          className={cn(
            `${poppins.className} text-sm md:text-base font-semibold text-primary/90`
          )}
        >
          Events
        </p>
        <div className={cn("md:text-2xl flex items-end ")}>
          <p className="font-bold text-primary/95">586</p>
          <p className="text-[10px] md:text-xs mb-1 md:mb-1.5  font-semibold ml-1 text-primary/90">
            hosted
          </p>
        </div>
      </div>
      <div
        className={cn(
          "aspect-video border p-4 rounded-lg bg-neutral-100 w-[100px] md:w-[150px]"
        )}
      >
        <p
          className={cn(
            `${poppins.className} text-sm md:text-base font-semibold text-primary/90`
          )}
        >
          Events
        </p>
        <div className={cn("md:text-2xl flex items-end ")}>
          <p className="font-bold text-primary/95">586</p>
          <p className="text-[10px] md:text-xs mb-1 md:mb-1.5 font-semibold ml-1 text-primary/90">
            hosted
          </p>
        </div>
      </div>
    </div>
  );
};
