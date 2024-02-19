import { APP_NAME } from "@/lib/config";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export const Logo = ({
  imgClassName,
  textClassName,
}: Readonly<{ imgClassName?: string; textClassName?: string }>) => {
  return (
    <Link
      href="/"
      className="flex flex-row items-center min-w-fit mx-0 md:mx-8"
    >
      <Image
        src="https://imagedelivery.net/9UaeqBrXzrQ9mC5U6QFATQ/b78ac8ed-fcd3-4005-b1be-a868af86ca00/public"
        alt="Logo"
        width={256}
        height={256}
        className={cn("w-12 h-12", imgClassName)}
      />
      <span
        className={cn(
          "ml-4 font-bold text-xl md:text-3xl text-primary",
          textClassName
        )}
      >
        {APP_NAME}
      </span>
    </Link>
  );
};
