import Img1 from "../../assets/places/nhatrang.jpg";
import Img2 from "../../assets/places/ninhhoa.jpg";
import Img3 from "../../assets/places/vanninh.jpg";
import Img4 from "../../assets/places/khanhvinh.jpg";
import Img5 from "../../assets/places/khanhson.jpg";
import Img6 from "../../assets/places/vinpearl.jpg";
import PlaceCard from "./PlaceCard";

const PlaceData = [
  {
    id: 1,
    title: "Du lịch Nha Trang",
    img: Img1,
    location: "Nha Trang",
    description:
      "Thành phố biển tuyệt đẹp với bờ biển dài, cát trắng và nước biển trong xanh. Nơi đây không chỉ nổi tiếng với vẻ đẹp tự nhiên mà còn là điểm đến với nhiều hoạt động giải trí, ẩm thực đa dạng và các điểm tham quan lịch sử văn hóa. Du khách có thể thưởng ngoạn vẻ đẹp của những đảo, ngắm nhìn những công trình kiến trúc nổi tiếng, hay tham gia các hoạt động thú vị trên biển.",
    price: 9000000,
    type: "Thư giãn",
  },
  {
    id: 2,
    title: "Tham quan Ninh Hòa",
    img: Img2,
    location: "Ninh Hòa",
    description:
      "Nơi thuần túy của sự bình yên và thanh bình, với bờ biển dịu dàng và cuộc sống sinh hoạt đời thường chậm rãi. Đây là điểm đến lý tưởng cho những ai muốn tránh xa khỏi sự ồn ào của thành phố và tận hưởng không gian yên bình giữa thiên nhiên hoang sơ. Du khách có thể thư giãn trên bãi biển, khám phá những làng chài truyền thống, và thưởng thức những món ăn địa phương đậm đà hương vị.",
    price: 4000000,
    type: "Tham quan",
  },
  {
    id: 3,
    title: "Trải nghiệm Vạn Ninh",
    img: Img3,
    location: "Vạn Ninh",
    description:
      "Một vùng đất yên bình và thanh tịnh, nơi khám phá sự đẹp mộng mơ của thiên nhiên và di sản văn hóa độc đáo. Với cảnh quan phong phú từ đồng ruộng, sông nước đến núi non, Vạn Ninh là điểm đến lý tưởng cho những ai muốn tìm lại bình yên trong cuộc sống hàng ngày. Du khách có thể tham gia các hoạt động trải nghiệm văn hóa, tham quan các điểm du lịch nổi tiếng, và thưởng thức ẩm thực địa phương độc đáo.",
    price: 5000000,
    type: "Trải nghiệm",
  },
  {
    id: 4,
    title: "Phiêu lưu Khánh Vĩnh",
    img: Img4,
    location: "Khánh Vĩnh",
    description:
      "Một điểm dừng chân yên bình giữa biển cả và rừng xanh ngát. Với khung cảnh hòa quyện giữa biển xanh và dãy núi đầy nắng, Khánh Vĩnh là nơi lý tưởng cho những cuộc phiêu lưu khám phá. Du khách có thể khám phá những con đường rợp bóng, thăm những ngôi chùa cổ kính và thư giãn trong không gian yên bình của các bãi biển tuyệt đẹp ở đây.",
    price: 8000000,
    type: "Phiêu lưu",
  },
  {
    id: 5,
    title: "Khám phá Khánh Sơn",
    img: Img5,
    location: "Khánh Sơn",
    description:
      "Nằm giữa thiên nhiên hùng vĩ, đây là điểm đến thanh bình với cảnh đẹp tự nhiên tuyệt vời. Cuộc sống giản dị và trải nghiệm gần gũi với thiên nhiên làm nổi bật sự hấp dẫn của nơi này. Khám phá các đỉnh núi, thác nước, và con đường quanh co để khám phá vẻ đẹp không ngờ của Khánh Sơn.",
    price: 2000000,
    type: "Khám phá",
  },
  {
    id: 6,
    title: "Vinpearl Nha Trang",
    img: Img6,
    location: "Nha Trang",
    description:
      "Một thiên đường nghỉ dưỡng trên đảo tuyệt vời, nơi du khách có thể trải nghiệm không gian sang trọng và tiện nghi cao cấp. Với bãi biển trắng mịn, các khu vui chơi giải trí, spa thư giãn và các hoạt động thể thao trên biển, Vinpearl Nha Trang hứa hẹn mang đến cho du khách những kỷ niệm đáng nhớ trong chuyến du lịch của mình.",
    price: 10000000,
    type: "Tận hưởng",
  },
];

PlaceData.forEach((item) => {
  item.pricevnd = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(item.price);
});

const Places = () => {
  return (
    <>
      <div className="bg-gray-50 py-10">
        <div className="container">
          <h1 className="text-primary my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Những Địa Điểm Tốt Nhất để Ghé Thăm
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlaceData.map((item) => (
              <PlaceCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Places;
