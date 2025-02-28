import { db } from "@/db";
import { events } from "@/db/schema";
import { createTRPCRouter, protectedProcedure } from "@/trpc/init";
import { TRPCError } from "@trpc/server";
import { eq } from "drizzle-orm";
import { z } from "zod";

export const eventsRouter = createTRPCRouter({
  getByEventId: protectedProcedure
    .input(
      z.object({
        eventId: z.string(),
      })
    )
    .query(async ({ input }) => {
      const [data] = await db
        .select()
        .from(events)
        .where(eq(events.id, input.eventId))
        .limit(1);

      if (!data) {
        throw new TRPCError({
          code: "NOT_FOUND",
        });
      }

      return data;
    }),
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
