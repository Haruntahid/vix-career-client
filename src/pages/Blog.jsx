import { Helmet } from "react-helmet-async";
import BlogCard from "../components/BlogCard";
import { useLoaderData } from "react-router-dom";
function Blog() {
  const blogs = useLoaderData();
  return (
    <>
      <Helmet>
        <title>Vix-Career | Blogs</title>
      </Helmet>
      <div className="container mx-auto">
        <div className="bg-btn-color px-10 rounded-2xl flex items-center justify-between mt-10">
          <p className="lg:text-6xl text-txt-color font-bold">
            Read Top Articals <br /> from Devlopers
          </p>
          <img
            className=""
            src="https://i.ibb.co/y00trxV/pngtree-colorful-blog-speech-bubble-vector-png-image-6633021.png"
            alt=""
          />
        </div>
      </div>
      {/* cards */}
      <p className="text-6xl text-btn-color text-center font-bold mt-20 mb-10">
        Blogs
      </p>
      <div className="space-y-5">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </>
  );
}

export default Blog;
