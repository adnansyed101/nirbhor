<<<<<<< HEAD
"use client"

import { IconCirclePlusFilled, IconMail, type Icon } from "@tabler/icons-react"

import { Button } from "@/components/ui/button"
=======
"use client";

import {
  IconCirclePlusFilled,
  IconMail,
  IconNotification,
  type Icon,
} from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
>>>>>>> 222347d536ade3db785f376d13d5facdc517ddad
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
<<<<<<< HEAD
} from "@/components/ui/sidebar"
=======
} from "@/components/ui/sidebar";
import Link from "next/link";
>>>>>>> 222347d536ade3db785f376d13d5facdc517ddad

export function NavMain({
  items,
}: {
  items: {
<<<<<<< HEAD
    title: string
    url: string
    icon?: Icon
  }[]
=======
    title: string;
    url: string;
    icon?: Icon;
  }[];
>>>>>>> 222347d536ade3db785f376d13d5facdc517ddad
}) {
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2">
            <SidebarMenuButton
              tooltip="Quick Create"
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground min-w-8 duration-200 ease-linear"
            >
              <IconCirclePlusFilled />
<<<<<<< HEAD
              <span>Quick Create</span>
            </SidebarMenuButton>
            <Button
              size="icon"
              className="size-8 group-data-[collapsible=icon]:opacity-0"
              variant="outline"
            >
              <IconMail />
              <span className="sr-only">Inbox</span>
            </Button>
=======
              <span>New Post</span>
            </SidebarMenuButton>
>>>>>>> 222347d536ade3db785f376d13d5facdc517ddad
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
<<<<<<< HEAD
              <SidebarMenuButton tooltip={item.title}>
                {item.icon && <item.icon />}
                <span>{item.title}</span>
              </SidebarMenuButton>
=======
              <Link href={item.url}>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </Link>
>>>>>>> 222347d536ade3db785f376d13d5facdc517ddad
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
<<<<<<< HEAD
  )
=======
  );
>>>>>>> 222347d536ade3db785f376d13d5facdc517ddad
}
