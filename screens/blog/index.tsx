import { SafeAreaView } from "@/components/ui/safe-area-view";
import NavBar from "@/screens/layout/NavBar";
import PreFooter from "@/screens/layout/PreFooter";
import Footer from "@/screens/layout/Footer";
import BlogHeader from "./BlogHeader";

const BlogPage = () => {
  return (
    <SafeAreaView>
      <NavBar />
      <BlogHeader />
      <PreFooter />
      <Footer />
    </SafeAreaView>
  );
};

export default BlogPage;
