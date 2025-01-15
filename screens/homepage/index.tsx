import { SafeAreaView } from "@/components/ui";
import NavBar from "@/components/Layout/NavBar";
import HomeHeader from "@/components/HomeHeader";
import HomeServiceSection from "@/components/HomeServiceSection";
import ProductSection from "@/components/ProductSection";
import Categories from "@/components/Categories";
import ReviewsSection from "@/components/ReviewsSection";
import TeamSection from "@/components/TeamSection";
import PreFooter from "@/components/PreFooter";
import Footer from "@/components/Layout/Footer";
import FaqSection from "@/components/FaqSection";
import VideoSection from "@/components/VideoSection";
import MakeItHappenSection from "@/components/MakeItHappenSection";

const HomePage = () => {
  return (
    <SafeAreaView>
      <NavBar />
      <HomeHeader />
      <Categories />
      <HomeServiceSection />
      <ProductSection />
      <VideoSection />
      <ReviewsSection />
      <MakeItHappenSection />
      <FaqSection />
      <TeamSection />
      <PreFooter />
      <Footer />
    </SafeAreaView>
  );
};

export default HomePage;
