import { Link } from "react-router-dom";
import { NavbarLink } from "./Nabar";
import { FaUserCircle } from "react-icons/fa";

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "left-[-100%]"
      } fixed top-0 bottom-0 w-[75%] h-screen bg-white shadow-md rounded-r-lg text-black pt-16 px-8 flex flex-col justify-between pb-10 md:hidden trasition-all duration-300`}
    >
      <div className="card">
        <div className="flex justify-start gap-3 items-center text-slate-500">
          <FaUserCircle size={50} />
          <div>
            <h1>Xin Chào</h1>
          </div>
        </div>
        <nav className="mt-12">
          <ul className="space-y-6 text-xl">
            {NavbarLink.map(({ id, name, link }) => (
              <li key={id}>
                <Link
                  to={link}
                  onClick={() => setShowMenu(!showMenu)}
                  oncli
                  className="hover:text-primary inline-block mb-5"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="footer">
        <h1>
          Trang web được tạo bởi{" "}
          <span className="text-primary hover:underline font-bold cursor-pointer">
            Thuật
          </span>
        </h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
