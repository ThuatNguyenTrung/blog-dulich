import { useState } from "react";

const Hero = ({ handleOrderPopup }) => {
  const [priceValue, setPriceValue] = useState(1000000);
  const formattedPrice = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(priceValue);
  return (
    <div className="h-[700px] bg-green/20">
      <div className="h-full flex items-center justify-center bg-primary/10 ">
        <div className="container grid grid-cols-1 gap-4">
          <div className="text-white">
            <p data-aos="fade-up" className="text-sm">
              Gói Dịch Vụ Của Chúng Tôi
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="font-bold text-3xl"
            >
              Tìm Kiếm Điểm Đến Của Bạn
            </p>
          </div>
          <div
            className="bg-white p-4 rounded-md relative space-y-4"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-3">
              <div className="space-y-3 flex flex-col justify-center items-center">
                <label htmlFor="destination" className="opacity-70">
                  Tìm kiếm điểm đến
                </label>
                <input
                  type="text"
                  id="destination"
                  name="destination"
                  className="w-full bg-gray-200  focus:outline-primary outline-1 rounded-full p-2"
                  placeholder="Nha Trang"
                />
              </div>
              <div className="space-y-3 flex flex-col justify-center items-center">
                <label htmlFor="date" className="opacity-70">
                  Thời gian
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="w-full bg-gray-200  focus:outline-primary outline-1 rounded-full p-2"
                />
              </div>
              <div className="space-y-3 flex flex-col justify-center ">
                <label htmlFor="money" className="opacity-70 block">
                  <div className="flex justify-between w-full">
                    <p>Giá cao nhất</p>
                    <p className="font-bold text-xl">{formattedPrice}</p>
                  </div>
                </label>
                <div className="bg-gray-200 p-2 rounded-full">
                  <input
                    type="range"
                    id="money"
                    name="money"
                    className="appearance-none w-full bg-gradient-to-r from-primary to-secondary  rounded-full my-2 h-2"
                    min="300000"
                    max="10000000"
                    value={priceValue}
                    step="100000"
                    onChange={(e) => setPriceValue(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <button
              onClick={handleOrderPopup}
              className="absolute left-1/2 -translate-x-1/2 -bottom-5 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full hover:scale-105 duration-200"
            >
              Tìm kiếm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
