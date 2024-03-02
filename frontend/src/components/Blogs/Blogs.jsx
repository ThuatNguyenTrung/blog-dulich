import BlogCard from "./BlogCard";
import Img1 from "../../assets/places/nhatrang.jpg";
import Img2 from "../../assets/places/ninhhoa.jpg";
import Img3 from "../../assets/places/vanninh.jpg";
const BlogsData = [
  {
    id: 1,
    img: Img1,
    title: "Top 10 các điểm du lịch phổ biến nhất của đất nước",
    description:
      "Nha Trang là thành phố du lịch nổi tiếng tại Việt Nam, thuộc tỉnh Khánh Hòa, nằm ở miền Trung của đất nước. Thành phố này nổi tiếng với những bãi biển tuyệt đẹp, cát trắng mịn và nước biển trong xanh, là điểm đến lý tưởng cho những chuyến du lịch nghỉ dưỡng.Nha Trang cũng có nhiều điểm tham quan và hoạt động giải trí khác như vui chơi nước, lặn biển, tham quan các đảo như đảo Hòn Mun, Hòn Tằm, và Hòn Tre. Thành phố còn có nhiều di tích lịch sử và kiến trúc độc đáo như Tháp Po Nagar, đền Chúa Cầu, và Bảo tàng Nha Trang.Nha Trang cũng nổi tiếng với ẩm thực phong phú và đa dạng, từ các món hải sản tươi ngon đến các món ăn đặc sản của vùng miền. Thành phố cũng có nền văn hóa sôi động, với các lễ hội truyền thống và các sự kiện nghệ thuật diễn ra thường xuyên.Với những điều này, Nha Trang đã trở thành một trong những điểm đến hàng đầu của du lịch tại Việt Nam, thu hút hàng triệu du khách mỗi năm. Thiên đường biển nằm dọc theo bờ cát trắng dài, kết hợp với những điểm tham quan độc đáo, ẩm thực phong phú và không gian giải trí sôi động, tạo nên một thành phố biển đầy màu sắc, sức sống và tiềm năng du lịch vô tận cho mọi du khách khám phá và trải nghiệm.",
    author: "Thuật Nguyễn",
    date: "February 19, 2024",
  },
  {
    id: 2,
    img: Img2,
    title: "Ninh Hòa một trong những điểm đến hàng đầu ở Việt Nam",
    description:
      "Ninh Hòa là một thị xã thuộc tỉnh Khánh Hòa, Việt Nam. Thị xã này nằm ở vùng ven biển phía nam của tỉnh, cách thành phố Nha Trang khoảng 50 km về phía bắc. Ninh Hòa có vị trí địa lý đắc địa, được bao bọc bởi nhiều bãi biển đẹp và có nền kinh tế phát triển dựa vào nông nghiệp, thủy sản và du lịch.Với cảnh quan thiên nhiên đa dạng từ biển đến núi rừng, Ninh Hòa là điểm đến hấp dẫn cho du khách muốn tận hưởng không khí trong lành và những cảnh đẹp hoang sơ. Bãi biển Ninh Hòa có bãi cát trắng mịn và nước biển trong xanh, thu hút du khách đến đây thư giãn và tham gia các hoạt động như lướt sóng, lặn biển, và thăm các điểm du lịch lân cận như Vịnh Vân Phong.Ngoài ra, Ninh Hòa còn nổi tiếng với các sản phẩm nông sản như xoài và dừa, cùng với đó là các món ăn đặc sản hấp dẫn của vùng miền. Đây là nơi thích hợp để khám phá văn hóa và ẩm thực đặc trưng của vùng đất miền Trung Việt Nam. Thị trấn ven biển yên bình với bãi cát trắng mịn, nước biển trong xanh và không khí trong lành. Nơi đây là điểm đến lý tưởng cho những ai muốn tận hưởng cuộc sống bình dị giữa thiên nhiên hoang sơ và tận hưởng những khoảnh khắc thư giãn và tĩnh lặng.",
    author: "Thuật Nguyễn",
    date: "February 19, 2024",
  },
  {
    id: 3,
    img: Img3,
    title: "Vạn Ninh là điểm đến yên bình, đẹp tự nhiên ở Việt Nam.",
    description:
      "Vạn Ninh là một huyện nằm ở phía đông bắc của tỉnh Khánh Hòa, Việt Nam. Huyện này có vị trí địa lý thuận lợi, giáp biển Đông và giáp với huyện Ninh Hòa và thị xã Ninh Hòa. Vạn Ninh có cảnh quan đa dạng, từ những bãi biển đẹp, núi non, đến những cánh đồng xanh mướt.Bãi biển Vạn Ninh được biết đến với cát trắng mịn và nước biển trong xanh, thu hút nhiều du khách đến thăm và tận hưởng không gian biển tuyệt vời. Ngoài ra, huyện còn có các điểm tham quan như đảo Điệp Sơn, nơi nổi tiếng với đờn ca tài tử và các loại hải sản tươi ngon.Vạn Ninh cũng là một địa điểm lý tưởng cho du khách muốn khám phá văn hóa dân tộc Việt Nam thông qua các lễ hội truyền thống, nghệ thuật dân gian và ẩm thực đặc sản của vùng miền. Vùng quê yên bình và thơ mộng, nằm giữa cánh đồng lúa xanh mướt và dãy núi uốn lượn. Với không gian thanh tịnh và văn hóa dân gian đậm đà, Vạn Ninh là nơi lý tưởng để tìm lại bình yên và tận hưởng những trải nghiệm gần gũi với thiên nhiên và đời sống quê hương.",
    author: "Thuật Nguyễn",
    date: "February 19, 2024",
  },
];

const Blogs = () => {
  return (
    <>
      <div className="bg-gray-50 py-10">
        <div className="container">
          <h1 className=" text-primary my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Những bài viết mới nhất
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
