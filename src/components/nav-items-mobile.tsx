"use client";

import { Logo } from "@/components/logo";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { menus } from "@/lib/config";
import { cn } from "@/lib/utils";
import { ChevronRight, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavbarItemsMobile = () => {
  const path = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="ml-auto md:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="ml-1">
            <Logo />
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col">
          <Link href="#" className={cn(buttonVariants(), "flex flex-row mt-6")}>
            Generate
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
          {menus.map((menu) => (
            <SheetClose key={menu.name} asChild>
              <Link
                href={menu.href}
                className={cn(
                  buttonVariants({ variant: "ghost", size: "sm" }),
                  "justify-start text-lg mb-1",
                  `${path === menu.href ? "bg-gray-500/20" : "bg-transparent"}`
                )}
              >
                {menu.name}
              </Link>
            </SheetClose>
          ))}
          <Separator className="mb-3" />
        </div>
      </SheetContent>
    </Sheet>
  );
};
