import TravelImg from "../../assets/travel.png";
import { MdFlight, MdOutlineLocalHotel } from "react-icons/md";
import { IoIosWifi } from "react-icons/io";
import { IoFastFoodSharp } from "react-icons/io5";

const Banner = () => {
  return (
    <>
      <div className="min-h-[550px] bg-gray-100">
        <div className="min-h-[550px] flex items-center justify-center py-12 sm:py-0 ">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              <div data-aos="flip-up">
                <img
                  src={TravelImg}
                  alt=""
                  className="max-w-[350px] h-[300px] w-full mx-auto drop-shadow-[5px_5px_12px_rgba(0,0,0,0.7)] object-cover"
                />
              </div>
              <div className="flex flex-col justify-center gap-6 lg:px-16 pt-10 sm:pt-0 ">
                <h1
                  data-aos="fade-up"
                  className="text-3xl sm:text-4xl font-bold text-primary"
                >
                  Khám phá mọi góc cạnh của thế giới cùng chúng tôi.
                </h1>
                <p
                  data-aos="fade-up"
                  className="text-sm text-gray-500 tracking-wide leading-8"
                >
                  Thả hồn vào những hành trình đầy mê hoặc và khám phá những
                  điều kỳ diệu mà thế giới dành cho bạn
                </p>
                <div data-aos="zoom-in" className="grid grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <MdFlight className="text-4xl h-12 w-12 shadow-sm rounded-full p-4 bg-violet-300" />
                      <p>Chuyến bay</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <IoIosWifi className="text-4xl h-12 w-12 shadow-sm rounded-full p-4 bg-green-300" />
                      <p>Wifi</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <MdOutlineLocalHotel className="text-4xl h-12 w-12 shadow-sm rounded-full p-4 bg-yellow-300" />
                      <p>Khách sạn</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <IoFastFoodSharp className="text-4xl h-12 w-12 shadow-sm rounded-full p-4 bg-red-300" />
                      <p>Đồ ăn</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
