import { ChevronRight } from "lucide-react";
import { DarkModeToggle } from "./dark-mode-toggle";
import { Logo } from "./logo";
import MaxWidthWrapper from "./max-width-wrapper";
import { NavbarItemsMobile } from "./nav-items-mobile";
import NavbarItemsDesktop from "./navbar-items-desktop";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full h-16 sticky z-50 inset-x-0 backdrop-blur-md bg-background/20 flex items-center border-b">
      <header className="w-full">
        <MaxWidthWrapper className="flex flex-row">
          <Logo />
          <div className="px-0 md:px-4 justify-end w-full flex flex-row items-center gap-4 mr-4">
            <NavbarItemsDesktop />
            <DarkModeToggle />
            <Link
              href="#"
              className={cn(buttonVariants(), "flex flex-row mt-6")}
            >
              Generate
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <NavbarItemsMobile />
        </MaxWidthWrapper>
      </header>
    </div>
  );
}
