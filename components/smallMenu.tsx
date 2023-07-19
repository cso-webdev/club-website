"use client"

import React from "react"
import { Menu } from "lucide-react"

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"

type Props = {}

export default function SmallMenu({}: Props) {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>
          <Menu />
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>About Us</MenubarItem>
          <MenubarItem> Videos</MenubarItem>
          <MenubarItem> Resources</MenubarItem>
          <MenubarItem> Upcoming Events</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
