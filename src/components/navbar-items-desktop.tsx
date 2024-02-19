"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { menus } from "@/lib/config";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarItemsDesktop() {
  const path = usePathname();
  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList>
        {menus.map((menu) => (
          <NavigationMenuItem key={menu.name}>
            <Link href={menu.href} legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  `${path === menu.href ? "bg-gray-500/20" : "bg-transparent"}`
                )}
              >
                {menu.name}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
