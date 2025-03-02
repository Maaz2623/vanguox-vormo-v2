import { db } from "@/db";
import { events } from "@/db/schema";
import { createTRPCRouter, protectedProcedure } from "@/trpc/init";
import { TRPCError } from "@trpc/server";
import { eq } from "drizzle-orm";
import { z } from "zod";

export const eventsRouter = createTRPCRouter({
  updateEventById: protectedProcedure
    .input(
      z.object({
        eventId: z.string(),
        name: z.string(),
        details: z.object({
          description: z.string(),
          dateRange: z.object({
            from: z.coerce.date(),
            to: z.coerce.date(),
          }),
          bannerUrl: z.string().url(),
          audienceEligibility: z.object({
            enabled: z.boolean(),
            criteria: z.object({
              above18: z.boolean(),
              studentsOnly: z.boolean(),
            }),
          }),
          tags: z.array(z.string()),
          brochure: z.string().url(),
          requirements: z.object({
            enabled: z.boolean(),
            essentials: z.object({
              paymentScreenshot: z.boolean(),
              ticketId: z.boolean(),
              adhaarCard: z.boolean(),
              studentIdCard: z.boolean(),
            }),
          }),
          rulesAndRegulations: z.array(z.string()),
          subEvents: z.object({
            enabled: z.boolean(),
            events: z.array(
              z.object({
                title: z.string(),
                description: z.string(),
                date: z.coerce.date(),
              })
            ),
          }),
          competitions: z.object({
            enabled: z.boolean(),
            competitions: z.array(
              z.object({
                title: z.string(),
                description: z.string(),
                date: z.coerce.date(),
              })
            ),
          }),
        }),
      })
    )
    .mutation(async ({ input }) => {
      const { details } = input;

      const [updatedEvent] = await db
        .update(events)
        .set({
          name: input.name,
          details: details,
        })
        .where(eq(events.id, input.eventId))
        .returning(); // Ensure updated record is returned

      if (!updatedEvent) {
        throw new TRPCError({ code: "NOT_FOUND" });
      }

      return updatedEvent;
    }),
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
