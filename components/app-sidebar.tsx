"use client";

import {
  AudioWaveform,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
} from "lucide-react";
import * as React from "react";

import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuItem,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import {
  DirectNotification,
  Home,
  House,
  Notification,
  People,
  Setting,
  Setting2,
} from "iconsax-react";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuSub,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavMain } from "./nav-main";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const path = usePathname();

  const data = {
    user: {
      name: "shadcn",
      email: "m@example.com",
      avatar: "/avatars/shadcn.jpg",
    },
    teams: [
      {
        name: "Acme Inc",
        logo: GalleryVerticalEnd,
        plan: "Enterprise",
      },
      {
        name: "Acme Corp.",
        logo: AudioWaveform,
        plan: "Startup",
      },
      {
        name: "Evil Corp.",
        logo: Command,
        plan: "Free",
      },
    ],
    navMain: [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: (
          <House
            size={24}
            color="currentColor"
            className="w-5 h-5 text-zinc-800 dark:text-white"
            variant={`${path === "/dashboard" ? "Bulk" : "Outline"}`}
          />
        ),
        isActive: true,
      },
      {
        title: "Notifications",
        url: "#",
        icon: (
          <Notification
            size={24}
            color="currentColor"
            className="w-5 h-5 text-zinc-800 dark:text-white"
            variant={`${path === "/notifications" ? "Bulk" : "Outline"}`}
          />
        ),
        items: [
          {
            title: "Inbox",
            url: "/notifications",
          },
          {
            title: "Send",
            url: "#",
          },
        ],
      },

      {
        title: "Settings",
        url: "/settings",
        icon: (
          <Setting2
            size={24}
            color="currentColor"
            className="w-5 h-5 text-zinc-800 dark:text-white"
            variant={`${path === "/settings" ? "Bulk" : "Outline"}`}
          />
        ),
        items: [
          {
            title: "Members",
            url: "#",
          },
          {
            title: "Team",
            url: "#",
          },
          {
            title: "Permissions",
            url: "/settings/permissions",
          },
          {
            title: "Profile",
            url: "#",
          },
        ],
      },
    ],
    projects: [
      {
        name: "Design Engineering",
        url: "#",
        icon: Frame,
      },
      {
        name: "Sales & Marketing",
        url: "#",
        icon: PieChart,
      },
      {
        name: "Travel",
        url: "#",
        icon: Map,
      },
    ],
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
