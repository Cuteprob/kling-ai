import { useTranslations } from "next-intl";
import React from "react";
import { Tweet } from "react-tweet";

type Props = {};

const tweets = [
  "1799047146089619589",
  "1799285552677843215",
  "1799820194849927322",
  "1799853242274242577",
  "1799842920478163426",
  "1799423817653305815",
  "1799758387544248480",
  "1799850032713359649",
  "1799870618818515275",
  "1799504701647643069",
];

export default function TweetComponent({}: Props) {
  const t = useTranslations("IndexPage");
  return (
    <div>
      <h2 className=" text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {t("twitterTitle")}
      </h2>
      <p className="mt-6 text-lg leading-8 text-gray-600 text-center max-w-xl mx-auto">
        {t("twitterDesc")}
      </p>
      <div
        className="columns-1 sm:columns-2 md:columns-3 mt-3"
        data-theme="light"
      >
        {tweets.map((item) => (
          <Tweet key={item} id={item} />
        ))}
      </div>
    </div>
  );
}
