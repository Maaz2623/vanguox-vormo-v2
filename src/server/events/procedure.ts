import { db } from "@/db";
import { events } from "@/db/schema";
import { createTRPCRouter, protectedProcedure } from "@/trpc/init";
import { eq } from "drizzle-orm";
import { z } from "zod";

export const eventsRouter = createTRPCRouter({
  createEvent: protectedProcedure
    .input(
      z.object({
        name: z.string().min(1),
        organizationId: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const [event] = await db
        .insert(events)
        .values({
          organizationId: input.organizationId,
          name: input.name,
        })
        .returning();

      return event;
    }),
  getByOrganizationId: protectedProcedure
    .input(
      z.object({
        organizationId: z.string(),
      })
    )
    .query(async ({ input }) => {
      const data = await db
        .select()
        .from(events)
        .where(eq(events.organizationId, input.organizationId));

      return data;
    }),
});
