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

export const organizations = pgTable("organizations", {
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
  upiId: text("upi_id").notNull(),
  paymentGateway: boolean("payment_gateway").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

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
    .references(() => organizations.id, {
      onDelete: "cascade",
    })
    .notNull(),
  name: text("name").notNull(),
  description: text("description"),
  dateRange: jsonb("date_range"),
  bannerUrl: text("banner_url"),
  stars: uuid("stars_id").references(() => stars.id),
  audienceEligibility: jsonb("audience_eligibility"),
  tags: text("tags").array(),
  brochure: text("brochure"),
  requirements: jsonb("requirements"),
  rulesAndRegulations: text("rules_and_regulations").array(),
  subEvents: jsonb("sub_events"),
  competitions: jsonb("competitions"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const tickets = pgTable("tickets", {
  id: uuid("id").unique().notNull().primaryKey().defaultRandom(),
  eventId: uuid("event_id")
    .references(() => events.id)
    .notNull(),
  ticketId: uuid("ticket_id").unique().notNull(),
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

export const memberships = pgTable("memberships", {
  id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
  organizationId: uuid("organization_id").references(() => organizations.id),
  clerkId: text("user_id").references(() => users.clerkId, {
    onDelete: "cascade",
  }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
