"use client"

import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  FileUserIcon,
  Frame,
  GalleryVerticalEnd,
  Map,
  Newspaper,
  PieChart,
  ScanSearch,
  User2Icon
} from "lucide-react"
import * as React from "react"

import { NavMain } from "@/components/layout/user/nav-main"
import { NavProjects } from "@/components/layout/user/nav-projects"
import { NavUser } from "@/components/layout/user/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "You",
    email: "@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Exercises",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Sleep Tracker",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Health Tools",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: User2Icon,
      isActive: true,
      items: [
        {
          title: "Exercises",
          url: "#",
        },
        {
          title: "Sleep Tracker",
          url: "#",
        },
        {
          title: "Health Tools",
          url: "#",
        },
      ],
    },
    {
      title: "Symptom Search",
      url: "#",
      icon: Bot,
    },
    {
      title: "Medicine Finder",
      url: "#",
      icon: BookOpen,
    },
    {
      title: "Disease Glossary",
      url: "#",
      icon: ScanSearch,
    },
    {
      title: "Personalized AI",
      url: "#",
      icon: FileUserIcon,
    },
    {
      title: "Smart Watch Dashboard",
      url: "#",
      icon: Newspaper
    }
  ],
  projects: [
    {
      name: "Web Map",
      url: "#",
      icon: Frame,
    },
    {
      name: "Statistics",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Glossary",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
