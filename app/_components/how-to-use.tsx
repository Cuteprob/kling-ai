import { useTranslations } from "next-intl";
import React from "react";

type Props = {};

export default function HowToUse({}: Props) {
  const t = useTranslations("IndexPage.how");
  return (
    <div>
      {/* Section HIW */}
      <section>
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          {/* Text */}
          <p className="text-center text-sm font-bold uppercase">
            3 easy steps
          </p>
          <h2 className="text-center text-3xl font-bold md:text-5xl">
            {t("title")}
          </h2>
          <p className="mx-auto mb-12 mt-4 max-w-lg text-center text-[#647084]">
            {t("desc")}
          </p>
          {/* Content */}
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex flex-col gap-4 rounded-md border border-solid border-[#dfdfdf] bg-white p-8 md:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#276ef1]">
                <p className="text-xl font-bold text-white">1</p>
              </div>
              <p className="text-xl font-semibold">{t("step1.title")}</p>
              <p className="text-sm text-[#647084]">{t("step1.desc")}</p>
              <img src={"/kuaiying.png"} alt="kling ai qr code in kuaiying" />
            </div>
            <div className="flex flex-col gap-4 rounded-md border border-solid border-[#dfdfdf] bg-white p-8 md:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#276ef1]">
                <p className="text-xl font-bold text-white">2</p>
              </div>
              <p className="text-xl font-semibold">{t("step2.title")}</p>
              <p className="text-sm text-[#647084]">{t("step2.desc")}</p>
              <img
                src={"/kuaiying-2.png"}
                alt="kuaiying app kling ai entrance"
              />
            </div>
            <div className="flex flex-col gap-4 rounded-md border border-solid border-[#dfdfdf] bg-white p-8 md:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#276ef1]">
                <p className="text-xl font-bold text-white">3</p>
              </div>
              <p className="text-xl font-semibold">{t("step2.title")}</p>
              <p className="text-sm text-[#647084]">{t("step3.desc")}</p>
              <img src={"/kuaiying-3.png"} alt="kling ai application address" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
