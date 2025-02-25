"use client";

import { SafeAreaView } from "@/components/ui/safe-area-view";
import NavBar from "@/components/layout/NavBar";
import PreFooter from "@/components/layout/PreFooter";
import Footer from "@/components/layout/Footer";
import BlogHeader from "./BlogHeader";
import PopularArticles from "./PopularArticles";
import RecentArticles from "./RecentArticles";
import Testimonial from "./Testimonial";
import Newsletter from "../contact/Newsletter";
import AllArticles from "./AllArticles";

const BlogPage = () => {
  return (
    <SafeAreaView>
      <NavBar />
      <BlogHeader />
      <PopularArticles />
      <RecentArticles />
      <Testimonial />
      <AllArticles />
      <Newsletter />
      <PreFooter />
      <Footer />
    </SafeAreaView>
  );
};

export default BlogPage;
