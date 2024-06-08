"use client";

import clsx from "clsx";
import { useSelectedLayoutSegment } from "next/navigation";
import { ComponentProps } from "react";
import type { AppPathnames } from "@/config";
import { Link } from "@/navigation";
import { cn } from "@/lib/utils";

export default function NavigationLink<Pathname extends AppPathnames>({
  href,
  className,
  ...rest
}: ComponentProps<typeof Link<Pathname>>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";
  const isActive = pathname === href;

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-500 transition-all duration-150",
        className
      )}
      href={href}
      {...rest}
    />
  );
}
