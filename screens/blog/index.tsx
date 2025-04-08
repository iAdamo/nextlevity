"use client";

import { SafeAreaView } from "@/components/ui/safe-area-view";
import BlogHeader from "./BlogHeader";
import PopularArticles from "./PopularArticles";
import RecentArticles from "./RecentArticles";
import Testimonial from "./Testimonial";
import Newsletter from "../contact/Newsletter";
import AllArticles from "./AllArticles";

const BlogPage = () => {
  return (
    <SafeAreaView>
      <BlogHeader />
      <PopularArticles />
      <RecentArticles />
      <Testimonial />
      <AllArticles />
      <Newsletter />
    </SafeAreaView>
  );
};

export default BlogPage;
