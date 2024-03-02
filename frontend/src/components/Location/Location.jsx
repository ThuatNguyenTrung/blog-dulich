const Location = () => {
  return (
    <>
      <div data-aos="fade-up" className="container my-4">
        <div className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold ml-10">
          Địa điểm để thăm
        </div>
        <div className="rounded-xl ml-10 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31127.23606425224!2d109.28210569980216!3d12.784710052944247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31701dea6258746b%3A0x8f84f184b947ab91!2zU8O0bmcgVHUgQsO0bmc!5e0!3m2!1svi!2s!4v1708347394018!5m2!1svi!2s"
            width="100%"
            height="360"
            style={{ borderRadius: "20px" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Location;
