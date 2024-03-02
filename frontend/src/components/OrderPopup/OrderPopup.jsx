import { IoCloseOutline } from "react-icons/io5";

const OrderPopup = ({ orderPopup, setOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-50 flex justify-center items-center backdrop:blur-sm">
          <div className="bg-white p-4 rounded-md w-[300px] shadow-md space-y-4">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-semibold text-black/70">
                Đặt chuyến
              </h1>
              <div>
                <IoCloseOutline
                  className="text-2xl cursor-pointer"
                  onClick={() => setOrderPopup(false)}
                />
              </div>
            </div>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Họ và tên"
                className="w-full border border-gray-300 rounded-full px-2 py-1 focus:outline-primary"
              />
              <input
                type="mail"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-full px-2 py-1 focus:outline-primary"
              />
              <input
                type="text"
                placeholder="Địa chỉ"
                className="w-full border border-gray-300 rounded-full px-2 py-1 focus:outline-primary"
              />
              <div className="flex justify-center">
                <button className=" bg-gradient-to-r from-primary to-secondary text-white rounded-full px-2 py-1 hover:scale-110 hover:bg-gradient-to-l duration-200">
                  Đặt ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderPopup;
