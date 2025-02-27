import { AppSidebar } from "@/components/app-sidebar";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { SidebarProvider } from "@/components/ui/sidebar";
import { isSubscribed } from "@/constants";
import { XIcon } from "lucide-react";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <SidebarProvider>
        <Navbar />
        <AppSidebar />
        <main className="mt-12 p-8 w-full">
          {!isSubscribed && (
            <div className="mb-3 flex-col md:flex-row flex justify-between items-center text-red-600 border border-red-500/80 bg-red-300/20 w-full rounded-md pl-3">
              <p className="text-sm text-center">
                You don&apos;t have subscription. So your organizations and
                their events won&apos;t be visible to others.
              </p>
              <div className="flex justify-center items-center">
                <Button className="text-red-500 font-semibold" variant={`link`}>
                  Subscribe now
                </Button>
                <XIcon className="text-neutral-800 mr-2 size-4 cursor-pointer" />
              </div>
            </div>
          )}
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
}
