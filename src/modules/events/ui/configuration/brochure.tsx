"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { XIcon } from "lucide-react";
import toast from "react-hot-toast";
import Image from "next/image";
import { useUploadThing } from "@/lib/uploadthing";

export const Brochure = ({
  brochureUrl,
  setBrochureUrl,
}: {
  brochureUrl: string;
  setBrochureUrl: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [brochure, setBrochure] = useState<File | null>(null);

  const { startUpload: startBrochureUpload, isUploading } = useUploadThing(
    "pdfUploader",
    {
      onClientUploadComplete: (res) => {
        if (res && res.length > 0) {
          toast.success("Uploaded");
          setBrochureUrl(res[0].ufsUrl);
          console.log(res);
        }
      },
      onUploadError: (error) => {
        toast.error("Upload failed");
        console.log(error);
      },
    }
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setBrochure(e.target.files[0]);
    }
  };

  const uploadFile = async () => {
    if (brochure) {
      await startBrochureUpload([brochure]);
    }
  };

  return (
    <div className="space-y-3 md:w-1/2 border p-4 rounded-lg bg-neutral-50 shadow-md">
      <h2 className="text-xl">Brochure</h2>

      <div className="mt-3">
        <Label className="flex">
          Brochure{" "}
          <p className="text-xs ml-1 text-muted-foreground">(.jpeg, .png)</p>
        </Label>
        <div className="flex items-center justify-between mt-1">
          {brochureUrl.length > 1 ? (
            <div className="w-full flex justify-center relative items-center">
              <XIcon
                className="absolute -top-2 p-1 rounded-full bg-white cursor-pointer border right-2"
                onClick={() => setBrochureUrl("")}
              />
              <Image
                src={brochureUrl}
                alt="banner"
                className="aspect-video border rounded-lg "
                height={400}
                width={450}
              />
            </div>
          ) : (
            <>
              <Input
                className="w-3/4"
                type="file"
                onChange={handleFileChange}
                accept="application/pdf"
              />
              <Button onClick={uploadFile} disabled={!brochure || isUploading}>
                {isUploading ? "Uploading..." : "Upload"}
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
