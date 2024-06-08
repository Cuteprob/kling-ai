import React from "react";
// import { Icons } from "./icons";

// import { APP_NAME } from "@/constants/layout";
import { Icons } from "./icons";
import { APP_NAME } from "@/constants/layout";
import { Link } from "next-view-transitions";
import NavigationLink from "../locale/navigation-link";
import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";

type Props = {};

export default function Footer({}: Props) {
  const locale = useLocale();
  const t = useTranslations("Navigation");
  const navigation = [
    { name: "Examples", href: `${locale}/examples` },
    { name: "PlayGround", href: `${locale}/playground` },
  ];
  return (
    <footer className="container  flex w-full flex-wrap  gap-10   px-8 py-12 mt-28">
      <div className="mr-auto flex flex-1 flex-col">
        <p className="flex-1 flex flex-col gap-2">
          <span>{APP_NAME}</span>
          {/* <span>email: liangjiongxin@gmail.com</span> */}
        </p>
        <p>Email: support@klingai.org</p>
        <div className="flex items-center gap-1">
          {/* <Link
            target="_blank"
            href="https://twitter.com/abc30037274"
            className=" rounded p-2 transition-colors duration-150 hover:bg-slate-200"
          >
            <Icons.X className="h-4 w-4" />
          </Link> */}
          {/* <Link
            target="_blank"
            href="https://github.com/tonyljx/"
            className="rounded p-2 transition-colors duration-150 hover:bg-slate-200"
          >
            <Icons.gitHub className="h-4 w-4" />
          </Link> */}
        </div>
      </div>

      <div className="flex flex-1 gap-32">
        <div className="flex flex-col gap-3">
          <p className="font-bold">Link</p>

          <NavigationLink
            href="/examples"
            className={cn(
              "text-sm leading-6  hover:text-indigo-500 transition-all duration-150 font-normal"
            )}
          >
            {t("Examples")}
          </NavigationLink>

          <NavigationLink href="/playground" className="font-normal">
            {t("Playground")}
          </NavigationLink>
        </div>

        <div className="flex flex-col gap-3">
          <p className="font-bold">Link</p>

          <Link
            href="/privacy"
            className="transition-colors duration-200 hover:text-blue-500"
          >
            Privacy
          </Link>

          <Link
            href="/terms"
            className="transition-colors duration-200 hover:text-blue-500"
          >
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
