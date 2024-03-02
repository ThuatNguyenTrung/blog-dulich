import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { useState } from "react";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { FaCaretDown } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";

export const NavbarLink = [
  {
    id: 1,
    name: "Trang chủ",
    link: "/",
  },
  {
    id: 2,
    name: "Bài viết",
    link: "/blogs",
  },
  {
    id: 3,
    name: "Địa điểm",
    link: "/places",
  },
  {
    id: 4,
    name: "Giới thiệu",
    link: "/about",
  },
];

export const DropdownLink = [
  {
    id: 1,
    name: "Dịch vụ của chúng tôi",
    link: "/#services",
  },
  {
    id: 2,
    name: "Thương hiệu hàng đầu",
    link: "/#brands",
  },
  {
    id: 3,
    name: "Vị trí ",
    link: "/#location",
  },
];
const Nabar = ({ handleOrderPopup }) => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  return (
    <>
      <nav className="fixed top-0 right-0 w-full z-50 bg-white backdrop:blur-sm text-black shadow-md">
        <div className="bg-gradient-to-r from-primary to-secondary text-white">
          <div className="container py-[2px] hidden sm:block">
            <div className=" flex items-center justify-between">
              <p className="text-sm">
                Giảm giá 20% cho đơn đặt phòng tiếp theo
              </p>
              <p>Điện thoại +84 327748271</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="">
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                <img src={Logo} alt="" className="w-[70px]" />
              </Link>
            </div>
            <div className="hidden md:block">
              <ul className="flex gap-6 items-center">
                {NavbarLink.map(({ id, name, link }) => (
                  <li key={id} className="hover:text-primary">
                    <NavLink
                      onClick={() => window.scrollTo(0, 0)}
                      to={link}
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      {name}
                    </NavLink>
                  </li>
                ))}
                <li className="group relative">
                  <NavLink className="text-black flex gap-[2px] items-center hover:text-primary">
                    Liên kết
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 transition-all duration-200" />
                    </span>
                  </NavLink>
                  <div className="absolute  hidden group-hover:block transition-all duration-200 w-[200px] bg-white shadow-md rounded-md p-2">
                    <ul className="space-y-3">
                      {DropdownLink.map(({ id, name, link }) => (
                        <li key={id} className=" ">
                          <NavLink
                            to={link}
                            className="hover:text-primary text-black w-full p-2 hover:bg-primary/20 rounded-md inline-block "
                          >
                            {name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex gap-4">
              <button
                onClick={handleOrderPopup}
                className="bg-gradient-to-r from-primary to-secondary text-white px-3 py-1 rounded-full hover:bg-gradient-to-l trasition-all duration-600 hover:scale-105"
              >
                Đặt ngay
              </button>
              <div className="md:hidden block">
                {showMenu ? (
                  <HiMenuAlt1
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                ) : (
                  <HiMenuAlt3
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      </nav>
    </>
  );
};

export default Nabar;
