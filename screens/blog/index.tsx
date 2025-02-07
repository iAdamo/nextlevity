import { SafeAreaView } from "@/components/ui";
import NavBar from "@/components/Layout/NavBar";
import PreFooter from "@/components/Layout/PreFooter";
import Footer from "@/components/Layout/Footer";
import HeadOne from "./HeadOne";
import AboutUs from "./AboutUs";

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
