"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar";
import { sidebarGeneralItems, sidebarPrivateItems } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const AppSidebar = () => {
  const { open } = useSidebar();

  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon" className="mt-12">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarGeneralItems.map((item) => {
                const isActive = item.url === pathname;

                return (
                  <SidebarMenuItem key={item.title} className="">
                    <SidebarMenuButton
                      asChild
                      className={cn("", isActive && "bg-muted-foreground/15")}
                    >
                      <Link href={item.url}>
                        <item.icon
                          className={cn(
                            "",
                            !open && isActive && "text-green-600"
                          )}
                        />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarSeparator />
        <SidebarGroup>
          <SidebarGroupLabel>My Account</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarPrivateItems.map((item) => {
                const isActive = pathname.includes(item.url);

                return (
                  <SidebarMenuItem key={item.title} className="">
                    <SidebarMenuButton
                      asChild
                      className={cn("", isActive && "bg-muted-foreground/15")}
                    >
                      <Link href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
