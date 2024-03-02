import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Huy",
    text: "Tôi rất hài lòng với chất lượng dịch vụ của công ty du lịch này. Hướng dẫn viên rất am hiểu về địa điểm và lịch trình được tổ chức rất hợp lý.",
    img: "http://picsum.photos/200",
  },
  {
    id: 2,
    name: "Hà",
    text: "Dịch vụ của họ thật tuyệt vời! Từ việc đặt phòng khách sạn đến các hoạt động trong chuyến đi, mọi thứ đều được chuẩn bị cẩn thận và chuyên nghiệp.",
    img: "http://picsum.photos/201",
  },
  {
    id: 3,
    name: "Hiền",
    text: "Tôi không thể hài lòng hơn với chuyến đi của mình. Dịch vụ khách sạn tuyệt vời và hướng dẫn viên rất nhiệt tình. Tôi chắc chắn sẽ quay lại lần nữa!",
    img: "http://picsum.photos/202",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="1000" className="py-10">
        <div className="container">
          <div className="text-center max-w-[400px] mx-auto">
            <p className=" text-sm ">Đánh giá từ khách hàng</p>
            <h1 className=" text-primary text-3xl font-bold">
              Nhận xét từ khách hàng
            </h1>
            <p className="text-xs text-gray-500">
              Bài viết rất hữu ích và thú vị. Tôi rất hài lòng với trải nghiệm
              của mình và chắc chắn sẽ quay lại!
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="mt-10 grid grid-cols-1 max-w-[800px] mx-auto "
          >
            <Slider {...settings}>
              {testimonialData.map(({ id, name, text, img }) => (
                <div key={id} className="my-4">
                  <div className="flex flex-col items-center gap-4 text-center shadow-lg mx-4 p-4 bg-primary/10 rounded-2xl relative">
                    <img src={img} alt="" className="rounded-full " />
                    <h1 className="text-xl font-bold">{name}</h1>
                    <p className="text-sm text-gray-500">{text}</p>
                    <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                      {" "}
                      ,,
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
