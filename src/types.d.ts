interface EventCardProps {
  id: string;
  name: string;
}

// export const ZodEventDetails = z.object({
//   description: z.string(),
//   dateRange: z.object({
//     from: z.coerce.date(),
//     to: z.coerce.date(),
//   }),
//   bannerUrl: z.string().url(),
//   audienceEligibility: z.object({
//     enabled: z.boolean(),
//     criteria: z.object({
//       above18: z.boolean(),
//       studentsOnly: z.boolean(),
//     }),
//   }),
//   tags: z.array(z.string()),
//   brochure: z.string().url(),
//   requirements: z.object({
//     enabled: z.boolean(),
//     essentials: z.object({
//       paymentScreenshot: z.boolean(),
//       ticketId: z.boolean(),
//       adhaarCard: z.boolean(),
//       studentIdCard: z.boolean(),
//     }),
//   }),
//   rulesAndRegulations: z.array(z.string()),
//   subEvents: z.object({
//     enabled: z.boolean(),
//     events: z.array(
//       z.object({
//         title: z.string(),
//         description: z.string(),
//         date: z.coerce.date(),
//       })
//     ),
//   }),
//   competitions: z.object({
//     enabled: z.boolean(),
//     competitions: z.array(
//       z.object({
//         title: z.string(),
//         description: z.string(),
//         date: z.coerce.date(),
//       })
//     ),
//   }),
// });

interface EventDetails {
  description: string;
  dateRange: {
    from: Date;
    to: Date;
  };
  bannerUrl: string;
  audienceEligibility: {
    enabled: boolean;
    criteria: {
      above18: boolean;
      studentsOnly: boolean;
    };
  };
  tags: string[];
  brochure: string;
  requirements: {
    enabled: boolean;
    essentials: {
      paymentScreenshot: boolean;
      ticketId: boolean;
      adhaarCard: boolean;
      studentIdCard: boolean;
    };
  };
  rulesAndRegulations: string[];
  subEvents: {
    enabled: boolean;
    events: {
      title: string;
      description: string;
      date: Date;
    }[];
  };
  competitions: {
    enabled: boolean;
    competitions: {
      title: string;
      description: string;
      date: Date;
    }[];
  };
}

// export type EventDetailsSchema = z.infer<typeof ZodEventDetails>;
