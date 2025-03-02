import {
  boolean,
  jsonb,
  numeric,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uniqueIndex,
  uuid,
} from "drizzle-orm/pg-core";

export const ticketStatus = pgEnum("ticket_status", [
  "active",
  "redeemed",
  "pending",
  "expired",
]);

export const transactionStatus = pgEnum("transaction_status", [
  "pending",
  "processing",
  "failed",
  "successfull",
]);

export const subscriptionStatus = pgEnum("subscription_status", [
  "active",
  "expired",
  "pending",
  "processing",
]);

export const users = pgTable(
  "users",
  {
    id: uuid("id").unique().notNull().primaryKey().defaultRandom(),
    email: text("email").unique().notNull(),
    clerkId: text("clerk_id").unique().notNull(),
    name: text("name").notNull(),
    imageUrl: text("image_url").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (t) => [uniqueIndex("clerk_id_idx").on(t.clerkId)]
);

export const organizations = pgTable(
  "organizations",
  {
    id: uuid("id").unique().notNull().primaryKey().defaultRandom(),
    owner: text("owner")
      .references(() => users.clerkId, {
        onDelete: "cascade",
      })
      .notNull(),
    slug: text("slug").unique().notNull(),
    logoUrl: text("logo_url"),
    name: text("name").notNull(),
    tagline: text("tagline"),
    upiId: text("upi_id"),
    paymentGateway: boolean("payment_gateway").default(false),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (t) => [uniqueIndex("slug_idx").on(t.slug)]
);

export const stars = pgTable("stars", {
  id: uuid("id").unique().notNull().primaryKey().defaultRandom(),
  name: text("name").notNull(),
  organizationId: uuid("organization_id").references(() => organizations.id, {
    onDelete: "cascade",
  }),
  rating: numeric("rating"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const events = pgTable("events", {
  id: uuid("id").notNull().unique().primaryKey().defaultRandom(),
  organizationId: uuid("organization_id")
    .references(() => organizations.id, { onDelete: "cascade" })
    .notNull(),
  name: text("name").notNull(),
  details: jsonb("details")
    .$type<EventDetails>()
    .default({
      description:
        "An exciting event with multiple activities and competitions.",
      dateRange: {
        from: new Date("2025-04-10T00:00:00.000Z"),
        to: new Date("2025-04-12T23:59:59.999Z"),
      },
      bannerUrl: "https://example.com/default-banner.jpg",
      audienceEligibility: {
        enabled: true,
        criteria: {
          above18: false,
          studentsOnly: true,
        },
      },
      tags: ["tech", "workshop", "competition"],
      brochure: "https://example.com/default-brochure.pdf",
      requirements: {
        enabled: true,
        essentials: {
          paymentScreenshot: true,
          ticketId: true,
          adhaarCard: false,
          studentIdCard: true,
        },
      },
      rulesAndRegulations: [
        "All participants must carry a valid ID card.",
        "The decision of the judges will be final.",
        "Any form of misconduct will lead to disqualification.",
      ],
      subEvents: {
        enabled: true,
        events: [
          {
            title: "Tech Talk",
            description: "A discussion on the latest technology trends.",
            date: new Date("2025-04-10T10:00:00.000Z"),
          },
          {
            title: "Workshop on AI",
            description: "Hands-on session on building AI models.",
            date: new Date("2025-04-11T14:00:00.000Z"),
          },
        ],
      },
      competitions: {
        enabled: true,
        competitions: [
          {
            title: "Coding Contest",
            description: "Solve programming challenges in a limited time.",
            date: new Date("2025-04-12T10:00:00.000Z"),
          },
          {
            title: "Hackathon",
            description: "A 24-hour hackathon to build innovative solutions.",
            date: new Date("2025-04-12T12:00:00.000Z"),
          },
        ],
      },
    })
    .notNull(), // Storing all event-related details
  stars: uuid("stars_id").references(() => stars.id),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const tickets = pgTable("tickets", {
  id: uuid("id").unique().notNull().primaryKey().defaultRandom(),
  eventId: uuid("event_id")
    .references(() => events.id)
    .notNull(),
  status: ticketStatus().default("pending"),
  validity: timestamp("validity").notNull(),
  transactionId: uuid("transaction_id").references(() => transactions.id),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const transactions = pgTable("transactions", {
  id: uuid("id").unique().notNull().primaryKey().defaultRandom(),
  amount: numeric("price", {
    precision: 10,
    scale: 2,
  }).notNull(),
  status: transactionStatus().default("pending"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const subscriptions = pgTable("subscriptions", {
  id: uuid("id").unique().notNull().primaryKey().defaultRandom(),
  organizationId: uuid("organization_id")
    .notNull()
    .references(() => organizations.id),
  transactionId: uuid("transaction_id")
    .notNull()
    .references(() => transactions.id),
  status: subscriptionStatus().default("pending"),
  validity: timestamp("validity").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const memberships = pgTable("memberships", {
  id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
  organizationId: uuid("organization_id").references(() => organizations.id),
  clerkId: text("user_id").references(() => users.clerkId, {
    onDelete: "cascade",
  }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
