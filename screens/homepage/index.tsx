import { SafeAreaView } from "@/components/ui";
import NavBar from "@/components/Layout/NavBar";
import HomeHeader from "@/screens/homepage/HomeHeader";
import Categories from "@/screens/homepage/Categories";
import ReviewsSection from "@/screens/homepage/ReviewsSection";
import ReviewsSection2 from "@/screens/homepage/ReviewsSection2";

import PreFooter from "@/components/Layout/PreFooter";
import Footer from "@/components/Layout/Footer";
import FaqSection from "@/screens/homepage/FaqSection";
import MoreInfo from "@/screens/homepage/MoreInfo";
import MarketingSolution from "./MaketingSolution";

const HomePage = () => {
  return (
    <SafeAreaView>
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
