"use client";

// import { SafeAreaView } from "@/components/ui/safe-area-view";
import HomeHeader from "@/screens/homepage/HomeHeader";
import Categories from "@/screens/homepage/Categories";
import ReviewsSection from "@/screens/homepage/ReviewsSection";
import ReviewsSection2 from "@/screens/homepage/ReviewsSection2";
import FaqSection from "@/screens/homepage/FaqSection";
import MoreInfo from "@/screens/homepage/MoreInfo";
import MarketingSolution from "./MaketingSolution";

const HomePage = () => {
  return (
    <main className="space-y-10 md:space-y-20">
      <HomeHeader />
      <MoreInfo />
      <MarketingSolution />
      <Categories />
      <ReviewsSection />
      <ReviewsSection2 />
      <FaqSection />
    </main>
  )
};

export default HomePage;
