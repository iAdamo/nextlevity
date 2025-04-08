"use client";

import { SafeAreaView } from "@/components/ui/safe-area-view";
import NavBar from "@/components/layout/NavBar";
import PreFooter from "@/components/layout/PreFooter";
import Footer from "@/components/layout/Footer";
import HomeHeader from "@/screens/homepage/HomeHeader";
import Categories from "@/screens/homepage/Categories";
import ReviewsSection from "@/screens/homepage/ReviewsSection";
import ReviewsSection2 from "@/screens/homepage/ReviewsSection2";
import FaqSection from "@/screens/homepage/FaqSection";
import MoreInfo from "@/screens/homepage/MoreInfo";
import MarketingSolution from "./MaketingSolution";

const HomePage = () => {
  return (
    <SafeAreaView className="gap-10">
      <NavBar />
      <HomeHeader />
      <MoreInfo />
      <MarketingSolution />
      <Categories />
      <ReviewsSection />
      <ReviewsSection2 />
      <FaqSection />
      <PreFooter />
      <Footer />
    </SafeAreaView>
  );
};

export default HomePage;
