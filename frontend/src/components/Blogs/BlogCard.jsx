import { Link } from "react-router-dom";
const BlogCard = ({ img, title, description, author, date }) => {
  return (
    <>
      <Link
        to={`/blogs/${title}`}
        onClick={() => window.scrollTo(0, 0)}
        state={{ img, title, description, author, date }}
      >
        <div className="shadow-lg p-4 space-y-3">
          <div className="overflow-hidden">
            <img
              src={img}
              alt=""
              className="h-[250px] w-full object-cover hover:scale-110 hover:skew-x-2 duration-700 transition"
            />
          </div>
          <div className="flex justify-between items-center text-slate-600">
            <p>{date}</p>
            <p className="line-clamp-1">By: {author}</p>
          </div>
          <div className="space-y-2">
            <h1 className="font-bold text-xl line-clamp-1">{title}</h1>
            <p className="line-clamp-2">{description}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BlogCard;
