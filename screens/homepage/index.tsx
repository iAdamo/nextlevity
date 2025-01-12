import { SafeAreaView } from "@/components/ui";
import NavBar from "@/components/Layout/NavBar";
import HomeHeader from "@/components/HomeHeader";
import HomeServiceSection from "@/components/HomeServiceSection";
import ProductSection from "@/components/ProductSection";
import Categories from "@/components/Categories";

const HomePage = () => {
  return (
    <SafeAreaView>
      <NavBar />
      <HomeHeader />
      <HomeServiceSection />
      <Categories />
      <ProductSection />
    </SafeAreaView>
  );
};

export default HomePage;
