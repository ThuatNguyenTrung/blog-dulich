import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import Logo from "../../assets/logo.png";
import VideoFooter from "../../assets/videos/vd2.mp4";
import { NavbarLink } from "../Navbar/Nabar";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="py-10 relative">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        >
          <source src={VideoFooter} type="video/mp4" />
        </video>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 py-5 bg-white/80 backdrop-blur-xl rounded-t-xl">
            <div className="py-5 px-4 ">
              <div>
                <img
                  src={Logo}
                  alt=""
                  className="max-h-[70px] block mx-auto md:ml-0"
                />
              </div>
              <p className="text-sm">
                Được thành lập với sứ mệnh là tạo ra những trải nghiệm du lịch
                độc đáo và không quên được cho khách hàng của chúng tôi. Chúng
                tôi tin rằng mỗi hành trình là một cơ hội để kích thích sự tò
                mò, mở rộng tầm nhìn và tạo ra những kỷ niệm vĩnh cửu.
              </p>
              <div className="flex items-center gap-3 mt-3">
                <FaLocationArrow />
                <p>Khánh Hòa, Việt Nam</p>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <FaMobileAlt />
                <p>+84 327748271</p>
              </div>
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl hover:text-primary" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl hover:text-primary" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl hover:text-primary" />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold ">Liên kết quan trọng</h1>
                <ul className="flex flex-col gap-3 mt-3">
                  {NavbarLink.map(({ id, name, link }) => (
                    <li key={id} className="">
                      <NavLink
                        to={link}
                        onClick={() => window.scrollTo(0, 0)}
                        className="text-black hover:text-primary transition-all duration-200 flex items-center gap-2 hover:translate-x-1"
                      >
                        <p>&#11162;</p>
                        <p>{name}</p>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold ">Liên kết quan trọng</h1>
                <ul className="flex flex-col gap-3 mt-3">
                  {NavbarLink.map(({ id, name, link }) => (
                    <li key={id} className="">
                      <NavLink
                        to={link}
                        onClick={() => window.scrollTo(0, 0)}
                        className="text-black hover:text-primary transition-all duration-200 flex items-center gap-2 hover:translate-x-1"
                      >
                        <p>&#11162;</p>
                        <p>{name}</p>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold ">Liên kết quan trọng</h1>
                <ul className="flex flex-col gap-3 mt-3">
                  {NavbarLink.map(({ id, name, link }) => (
                    <li key={id} className="">
                      <NavLink
                        to={link}
                        onClick={() => window.scrollTo(0, 0)}
                        className="text-black hover:text-primary transition-all duration-200 flex items-center gap-2 hover:translate-x-1"
                      >
                        <p>&#11162;</p>
                        <p>{name}</p>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="text-center bg-primary text-white py-3">
            @copyright 2024 All rights reserved || Made with ❤️ by{" "}
            <span className="font-bold hover:text-yellow-500 cursor-pointer">
              THUAT
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
