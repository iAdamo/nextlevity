import { SafeAreaView } from "@/components/ui";
import NavBar from "@/components/Layout/NavBar";
import HomeHeader from "@/screens/homepage/HomeHeader";
import HomeServiceSection from "@/screens/homepage/HomeServiceSection";
import ProductSection from "@/screens/homepage/ProductSection";
import Categories from "@/screens/homepage/Categories";
import ReviewsSection from "@/screens/homepage/ReviewsSection";
import TeamSection from "@/screens/homepage/TeamSection";
import PreFooter from "@/components/Layout/PreFooter";
import Footer from "@/components/Layout/Footer";
import FaqSection from "@/screens/homepage/FaqSection";
import VideoSection from "@/screens/homepage/VideoSection";
import MakeItHappenSection from "@/screens/homepage/MakeItHappenSection";
import MoreInfo from "@/screens/homepage/MoreInfo";

const HomePage = () => {
  return (
    <SafeAreaView>
      <NavBar />
      <HomeHeader />
      <Categories />
      <HomeServiceSection />
      <ProductSection />
      <VideoSection />
      <MoreInfo />
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
