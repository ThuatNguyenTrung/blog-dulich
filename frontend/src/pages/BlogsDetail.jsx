import { useLocation } from "react-router-dom";
import Blogs from "../components/Blogs/Blogs";

const BlogsDetail = () => {
  const location = useLocation();
  const { img, title, description, author, date } = location.state;
  return (
    <>
      <div className="pt-20">
        <div className="h-[300px] overflow-hidden">
          <img
            src={img}
            alt=""
            className="h-full w-full object-cover hover:scale-110 duration-700 transition"
          />
        </div>
        <div className="container space-y-4 my-5">
          <p className="text-sm text-slate-600">
            Được viết bởi {author} vào ngày {date}
          </p>
          <h1 className="text-2xl font-bold">{title}</h1>
          <p>{description}</p>
        </div>
        <Blogs />
      </div>
    </>
  );
};

export default BlogsDetail;
