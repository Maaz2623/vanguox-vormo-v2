import { db } from "@/db";
import { organizations, users } from "@/db/schema";
import { createTRPCRouter, protectedProcedure } from "@/trpc/init";
import { TRPCError } from "@trpc/server";
import { eq } from "drizzle-orm";
import { z } from "zod";

export const organziationsRouter = createTRPCRouter({
  getOrganizationById: protectedProcedure
    .input(
      z.object({
        organizationId: z.string().min(1),
      })
    )
    .query(async ({ input }) => {
      const [organization] = await db
        .select({
          id: organizations.id,
          slug: organizations.slug,
          name: organizations.name,
          logoUrl: organizations.logoUrl,
          tagline: organizations.tagline,
          upiId: organizations.upiId,
          paymentGateway: organizations.paymentGateway,
          createdAt: organizations.createdAt,
          updatedAt: organizations.updatedAt,
          owner: {
            email: users.email,
            clerkId: users.clerkId,
            imageUrl: users.imageUrl,
          },
        })
        .from(organizations)
        .leftJoin(users, eq(organizations.owner, users.clerkId))
        .where(eq(organizations.id, input.organizationId));

      if (!organization) {
        throw new TRPCError({
          code: "NOT_FOUND",
        });
      }

      return organization;
    }),
  getOrganizationBySlug: protectedProcedure
    .input(
      z.object({
        slug: z.string().min(1),
      })
    )
    .query(async ({ input }) => {
      const [organization] = await db
        .select({
          id: organizations.id,
          slug: organizations.slug,
          name: organizations.name,
          logoUrl: organizations.logoUrl,
          tagline: organizations.tagline,
          upiId: organizations.upiId,
          paymentGateway: organizations.paymentGateway,
          createdAt: organizations.createdAt,
          updatedAt: organizations.updatedAt,
          owner: {
            email: users.email,
            clerkId: users.clerkId,
          },
        })
        .from(organizations)
        .leftJoin(users, eq(organizations.owner, users.clerkId))
        .where(eq(organizations.slug, input.slug));

      if (!organization) {
        throw new TRPCError({
          code: "NOT_FOUND",
        });
      }

      return organization;
    }),
  createOrganization: protectedProcedure
    .input(
      z.object({
        name: z.string().min(1),
        owner: z.string().min(1),
        slug: z.string().min(1),
      })
    )
    .mutation(async ({ input }) => {
      const [organization] = await db
        .insert(organizations)
        .values({
          name: input.name,
          owner: input.owner,
          slug: input.slug,
        })
        .returning();

      return organization;
    }),
  getOrganizationsByClerkId: protectedProcedure
    .input(
      z.object({
        clerkId: z.string(),
      })
    )
    .query(async () => {
      const data = await db
        .select({
          id: organizations.id,
          slug: organizations.slug,
          name: organizations.name,
          logoUrl: organizations.logoUrl,
          tagline: organizations.tagline,
          upiId: organizations.upiId,
          paymentGateway: organizations.paymentGateway,
          createdAt: organizations.createdAt,
          updatedAt: organizations.updatedAt,
          owner: {
            email: users.email,
          },
        })
        .from(organizations)
        .leftJoin(users, eq(organizations.owner, users.clerkId));

      return data;
    }),
});
