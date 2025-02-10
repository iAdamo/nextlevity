import { SafeAreaView } from "@/components/ui/safe-area-view";
import NavBar from "@/screens/layout/NavBar";
import PreFooter from "@/screens/layout/PreFooter";
import Footer from "@/screens/layout/Footer";
import HeadOne from "../about/HeadOne";
import AboutUs from "../about/AboutUs";

const BlogPage = () => {
  return (
    <SafeAreaView>
      <NavBar />
      <HeadOne />
      <AboutUs />
      <PreFooter />
      <Footer />
    </SafeAreaView>
  );
};

export default BlogPage;
