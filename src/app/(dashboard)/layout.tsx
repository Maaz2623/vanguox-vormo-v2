import { AppSidebar } from "@/components/app-sidebar";
import Navbar from "@/components/navbar";
import { SidebarProvider } from "@/components/ui/sidebar";

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
        <main className="mt-12 p-8 w-full">{children}</main>
      </SidebarProvider>
    </div>
  );
}
