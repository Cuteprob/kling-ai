"use client";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import React, { Suspense, useEffect, useState } from "react";

import { Dialog } from "@headlessui/react";
import { Loader2, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
// import Link from "next/link";
import { APP_NAME } from "@/constants/layout";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Link } from "next-view-transitions";
import NavigationLink from "../locale/navigation-link";
import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcher from "../locale/locale-switcher";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Examples", href: "/examples" },
  { name: "PlayGround", href: "/playground" },
  // { name: "Generate", href: "/create" },
  // { name: "Pricing", href: "/price" },
  // { name: "Blog", href: "/blogs" },
];

// type Props = {
//   Credits?: React.ReactNode;
// };
type Props = {
  params: { locale: string };
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathname = usePathname();
  const t = useTranslations("Navigation");
  const locale = useLocale();

  console.log(pathname);

  console.log(`/${locale}/${t("Examples")}`);

  return (
    <header className="container">
      {/* absolute inset-x-0 top-0 z-50 */}
      <nav
        className="flex items-center justify-between py-6 lg:py-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <NavigationLink
            href="/"
            className="flex gap-2 font-mono items-center"
          >
            <img
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/logo.svg"
              alt={`${APP_NAME} Logo`}
              width={50}
              height={37}
            />
            <span className="text-xl font-semibold">{APP_NAME}</span>
          </NavigationLink>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <NavigationLink
            href="/"
            className={cn({
              "text-indigo-500": `/${locale}` === pathname,
            })}
          >
            {t("home")}
          </NavigationLink>

          <NavigationLink
            href="/examples"
            className={cn(
              "text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-500 transition-all duration-150",
              {
                "text-indigo-500":
                  `/${locale}/${t("Examples")}`.toLowerCase() === pathname,
              }
            )}
          >
            {t("Examples")}
          </NavigationLink>

          {/* <NavigationLink
            href="/playground"
            className={cn({
              "text-indigo-500":
                `/${locale}/${t("Playground")}`.toLowerCase() === pathname,
            })}
          >
            {t("Playground")}
          </NavigationLink> */}
        </div>

        <LocaleSwitcher />
      </nav>

      {/* 移动端 */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/logo.svg"
                alt={`${APP_NAME} Logo`}
                width={50}
                height={37}
              />
            </a>
            <Button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              variant={"ghost"}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </Button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <NavigationLink
                  href="/"
                  className={cn({
                    "text-indigo-500": `/${locale}` === pathname,
                  })}
                >
                  {t("home")}
                </NavigationLink>

                <NavigationLink
                  href="/examples"
                  className={cn(
                    "text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-500 transition-all duration-150",
                    {
                      "text-indigo-500":
                        `/${locale}/${t("Examples")}`.toLowerCase() ===
                        pathname,
                    }
                  )}
                >
                  {t("Examples")}
                </NavigationLink>
                {/* {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))} */}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
