import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function BlogCard({ blog }) {
  const { _id, title, hashtag, posted_date, description, author } = blog;
  return (
    <>
      <div className="container mx-auto text-txt-color">
        <div className=" px-10 py-6 rounded-lg shadow-sm bg-bg-color">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">{posted_date}</span>
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-2 py-1 font-bold rounded bg-violet-400 text-gray-900"
            >
              {hashtag.split()}
            </a>
          </div>
          <div className="mt-3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-2xl font-bold hover:underline"
            >
              {title}
            </a>
            <p className="mt-2">{description}</p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <Link to={`${_id}`} className="hover:underline text-violet-400">
              Read more
            </Link>
            <div>
              <a className="flex items-center">
                <span className="hover:underline text-gray-400">{author}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

BlogCard.propTypes = {
  blog: PropTypes.object,
};

export default BlogCard;
