const BannerPic = ({ img }) => {
  const bannerImage = {
    backgroundImage: `url(${img})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "400px",
  };
  return <div data-aos="zoom-in" style={bannerImage} className="w-full"></div>;
};

export default BannerPic;
