import { auth } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

// Reusable authentication middleware
const requireAuth = async () => {
  const { userId } = await auth();
  if (!userId) throw new UploadThingError("Unauthorized");
  return { userId };
};

export const ourFileRouter = {
  imageUploader: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })
    .middleware(requireAuth)
    .onUploadComplete(async ({ metadata, file }) => {
      if (!file.type.startsWith("image/")) {
        throw new UploadThingError("Only image files are allowed.");
      }

      console.log("Upload complete for userId:", metadata.userId);
      console.log("file url", file.ufsUrl);

      return { uploadedBy: metadata.userId };
    }),

  pdfUploader: f({
    pdf: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })
    .middleware(requireAuth)
    .onUploadComplete(async ({ metadata, file }) => {
      if (file.type !== "application/pdf") {
        throw new UploadThingError("Only PDF files are allowed.");
      }

      console.log("Upload complete for userId:", metadata.userId);
      console.log("file url", file.ufsUrl);

      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
