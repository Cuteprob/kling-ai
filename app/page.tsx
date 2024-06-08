import Image from "next/image";
import HeroPage from "./_pages/hero";
import { CarouselVideo } from "./_components/video-carousel";
import FAQ from "@/components/common/faq";
import { qa } from "@/constants/layout";
import Features from "./_pages/features";

export default function Home() {
  return (
    <main className="container">
      <HeroPage />
      <Features />
      <FAQ />
    </main>
  );
}
