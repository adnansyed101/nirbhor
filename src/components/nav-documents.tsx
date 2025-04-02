<<<<<<< HEAD
"use client"
=======
"use client";
>>>>>>> 222347d536ade3db785f376d13d5facdc517ddad

import {
  IconDots,
  IconFolder,
  IconShare3,
  IconTrash,
  type Icon,
<<<<<<< HEAD
} from "@tabler/icons-react"
=======
} from "@tabler/icons-react";
>>>>>>> 222347d536ade3db785f376d13d5facdc517ddad

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
<<<<<<< HEAD
} from "@/components/ui/dropdown-menu"
=======
} from "@/components/ui/dropdown-menu";
>>>>>>> 222347d536ade3db785f376d13d5facdc517ddad
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
<<<<<<< HEAD
} from "@/components/ui/sidebar"
=======
} from "@/components/ui/sidebar";
>>>>>>> 222347d536ade3db785f376d13d5facdc517ddad

export function NavDocuments({
  items,
}: {
  items: {
<<<<<<< HEAD
    name: string
    url: string
    icon: Icon
  }[]
}) {
  const { isMobile } = useSidebar()
=======
    name: string;
    url: string;
    icon: Icon;
  }[];
}) {
  const { isMobile } = useSidebar();
>>>>>>> 222347d536ade3db785f376d13d5facdc517ddad

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Documents</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild>
              <a href={item.url}>
                <item.icon />
                <span>{item.name}</span>
              </a>
            </SidebarMenuButton>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuAction
                  showOnHover
                  className="data-[state=open]:bg-accent rounded-sm"
                >
                  <IconDots />
                  <span className="sr-only">More</span>
                </SidebarMenuAction>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-24 rounded-lg"
                side={isMobile ? "bottom" : "right"}
                align={isMobile ? "end" : "start"}
              >
                <DropdownMenuItem>
                  <IconFolder />
                  <span>Open</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <IconShare3 />
                  <span>Share</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                  <IconTrash />
                  <span>Delete</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        ))}
<<<<<<< HEAD
        <SidebarMenuItem>
          <SidebarMenuButton className="text-sidebar-foreground/70">
            <IconDots className="text-sidebar-foreground/70" />
            <span>More</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  )
=======
      </SidebarMenu>
    </SidebarGroup>
  );
>>>>>>> 222347d536ade3db785f376d13d5facdc517ddad
}
