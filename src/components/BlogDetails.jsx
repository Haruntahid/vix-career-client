import { useLoaderData } from "react-router-dom";

function BlogDetails() {
  const blog = useLoaderData();
  console.log(blog);
  const { title, hashtag, posted_date, long_description, author } = blog;
  return (
    <article className="container mx-auto px-6 py-24 space-y-12  bg-bg-color text-txt-color mt-10">
      <div className="w-full mx-auto space-y-4 text-center ">
        <p className="text-xl font-semibold tracking-wider uppercase text-btn-color">
          {hashtag}
        </p>
        <h1 className="text-4xl font-bold leading-tight md:text-5xl">
          {title}
        </h1>
        <p className="text-sm text-txt-color">
          by{" "}
          <a
            rel="noopener noreferrer"
            href="#"
            target="_blank"
            className="underline text-violet-400"
          >
            <span className="inline-block mr-2"> {author}</span>
          </a>
          on <time>{posted_date}</time>
        </p>
      </div>
      <div className="text-black">
        <p>{long_description}</p>
      </div>
    </article>
  );
}

export default BlogDetails;
