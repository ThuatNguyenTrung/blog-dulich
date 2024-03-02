import Video1 from "../assets/videos/vd1.mp4";
import BannerPic from "../components/BannerPic/BannerPic";
import Hero from "../components/Hero/Hero";
import Places from "../components/Places/Places";
import Banner1 from "../assets/banner.jpg";
import Banner2 from "../assets/nha-trang.jpg";
import Blogs from "../components/Blogs/Blogs";
import Banner from "../components/Banner/Banner";
import Testimonial from "../components/Testimonial/Testimonial";
import { useState } from "react";
import OrderPopup from "../components/OrderPopup/OrderPopup";

const Home = () => {
  const [orderPopup, setOrderPopup] = useState(false);
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  return (
    <>
      <div>
        <div className="relative h[700px]">
          <video
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full object-cover h-[700px] z-[-1]"
          >
            <source src={Video1} type="video/mp4" />
          </video>
          <Hero handleOrderPopup={handleOrderPopup} />
        </div>
        <Places />
        <BannerPic img={Banner1} />
        <Blogs />
        <Banner />
        <BannerPic img={Banner2} />
        <Testimonial />
        <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
    </>
  );
};

export default Home;
