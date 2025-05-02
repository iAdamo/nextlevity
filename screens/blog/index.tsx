"use client";

import BlogHeader from "./BlogHeader";
import PopularArticles from "./PopularArticles";
import RecentArticles from "./RecentArticles";
import Testimonial from "./Testimonial";
import Newsletter from "../contact/Newsletter";
import AllArticles from "./AllArticles";

const BlogPage = () => {
  return (
    <article className="space-y-12 md:space-y-32">
      <BlogHeader />
      <PopularArticles />
      <RecentArticles />
      <Testimonial />
      <AllArticles />
      <Newsletter />
    </article>
  );
};

export default BlogPage;
