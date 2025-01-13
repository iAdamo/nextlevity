import { SafeAreaView } from "@/components/ui";
import NavBar from "@/components/Layout/NavBar";
import HomeHeader from "@/components/HomeHeader";
import HomeServiceSection from "@/components/HomeServiceSection";
import ProductSection from "@/components/ProductSection";
import Categories from "@/components/Categories";
import ReviewsSection from "@/components/ReviewsSection";
import TeamSection from "@/components/TeamSection";

const HomePage = () => {
  return (
    <SafeAreaView>
      <NavBar />
      <HomeHeader />
      <HomeServiceSection />
      <Categories />
      <ProductSection />
      <ReviewsSection />
      <TeamSection />
    </SafeAreaView>
  );
};

export default HomePage;
