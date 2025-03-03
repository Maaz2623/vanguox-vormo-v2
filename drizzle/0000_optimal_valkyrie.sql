CREATE TABLE "events" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"organization_id" uuid NOT NULL,
	"name" text NOT NULL,
	"details" jsonb DEFAULT '{"description":"","dateRange":{"from":"2025-04-10T00:00:00.000Z","to":"2025-04-12T23:59:59.999Z"},"bannerUrl":"","audienceEligibility":{"enabled":false,"criteria":{"above18":false,"studentsOnly":false}},"tags":[],"brochure":"","requirements":{"enabled":false,"essentials":{"paymentScreenshot":false,"ticketId":false,"adhaarCard":false,"studentIdCard":false}},"rulesAndRegulations":[],"subEvents":{"enabled":false,"events":[]},"competitions":{"enabled":false,"competitions":[]}}'::jsonb NOT NULL,
	"rating" numeric,
	"max_registrations" numeric,
	"registraions_status" boolean,
	"price" numeric,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "events_id_unique" UNIQUE("id")
);