import { useTranslations } from "next-intl";
import HeroPage from "../_pages/hero";
import Features from "../_pages/features";
import FAQ from "@/components/common/faq";
import { qa } from "@/constants/layout";
import TweetComponent from "../_components/tweet-component";
import HowToUse from "../_components/how-to-use";

export default function Index() {
  return (
    <main className="container">
      {/* <h1>{t("title")}</h1> */}
      <HeroPage />
      <Features />
      <HowToUse />
      <TweetComponent />
      <FAQ />
    </main>
  );
}
