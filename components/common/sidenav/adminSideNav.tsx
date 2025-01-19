"use client";
import { NextComponentType } from "next";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { DirectNotification, Home, Setting } from "iconsax-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import { Calendar, Inbox, Search, Settings } from "lucide-react";

const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

const AdminSideNav: React.FC = () => {
  const path = usePathname();

  return (
    <Sidebar className="border-r-2 mt-16">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem
                className={`flex h-12 border rounded-lg p-4 items-center `}
              >
                <SidebarMenuButton asChild>
                  <Link href="/dashboard">
                    <Home
                      color="#eee"
                      variant={path === "/dashboard" ? "Bulk" : "Outline"}
                      size={54}
                    />
                    <span>Home</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem
                className={`flex h-12 border rounded-lg p-4 items-center ${path === "/notifications" ? "bg-" : ""} `}
              >
                <SidebarMenuButton asChild>
                  <Link href="/inbox">
                    <DirectNotification
                      color="#eee"
                      variant={path === "/inbox" ? "Bulk" : "Outline"}
                      size={54}
                    />
                    <span>Inbox</span>
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuBadge>24</SidebarMenuBadge>
              </SidebarMenuItem>

              <Collapsible className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <div
                      className={`flex h-12 border rounded-lg p-4 items-center ${path === "/notifications" ? "bg-" : ""} `}
                    >
                      <SidebarMenuButton>
                        <Setting
                          color="#eee"
                          variant={path === "/settings" ? "Bulk" : "Outline"}
                          size={54}
                        />
                        <span>Settings</span>
                      </SidebarMenuButton>
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem className="h-12  border-b rounded-lg p-4 items-center w-full">
                        <Link href="/dashboard/permissions">Permissions</Link>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem className="h-12  border-b rounded-lg p-4 items-center w-full">
                        <Link href="/dashboard/users">Users</Link>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem className="h-12  border-b rounded-lg p-4 items-center w-full">
                        <Link href="/notifications">Notifications</Link>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>

              {/* {items.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className={`flex h-12 border rounded-lg p-4 items-center ${path === item.path ? "bg-red-200" : ""} `}
                >
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon color="red" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))} */}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AdminSideNav;
