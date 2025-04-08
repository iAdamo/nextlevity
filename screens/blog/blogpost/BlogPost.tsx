import { useParams } from "next/navigation";

const BlogPost = () => {
  const { title } = useParams();
  return (
    <div>
      <h1>Blog Post: {title}</h1>
      {/* Add your blog post content here */}
    </div>
  );
};

export default BlogPost;
