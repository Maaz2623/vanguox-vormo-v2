import { eventsRouter } from "@/server/events/procedure";
import { createTRPCRouter } from "../init";
import { organziationsRouter } from "@/server/organizations/procedure";
export const appRouter = createTRPCRouter({
  organizations: organziationsRouter,
  events: eventsRouter
});
// export type definition of API
export type AppRouter = typeof appRouter;
