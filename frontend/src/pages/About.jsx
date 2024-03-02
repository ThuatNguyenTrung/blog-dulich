import Location from "../components/Location/Location";

const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Về chúng tôi
          </h1>
          <p>
            Chúng tôi là một đội ngũ chuyên nghiệp trong lĩnh vực du lịch, cam
            kết mang lại những trải nghiệm không quên và độc đáo cho mọi hành
            trình của bạn. Chúng tôi không chỉ đơn thuần là một công ty du lịch,
            mà còn là người bạn đồng hành, giúp bạn khám phá những góc kỳ thú
            trên khắp thế giới.
          </p>
          <br />
          <p>
            Dịch vụ của chúng tôi không chỉ dừng lại ở việc đặt vé và đặt phòng.
            Chúng tôi đi xa hơn, cung cấp các gói trải nghiệm tùy chỉnh, từ hành
            trình mạo hiểm đến kỳ nghỉ thư giãn, đảm bảo rằng mọi người đều có
            cơ hội khám phá và trải nghiệm theo cách riêng của họ.
          </p>
        </div>
      </div>
      <Location />
    </>
  );
};

export default About;
