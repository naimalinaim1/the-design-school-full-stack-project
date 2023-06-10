import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
const Banner = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/popularClasses")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  return (
    <div className="mt-12 mb-16">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {classes.map((item) => (
          <SwiperSlide key={item._id}>
            <div className="flex justify-center items-center">
              <div className="flex gap-4">
                <figure>
                  <img
                    className="w-[450px] h-[400px]"
                    src={item?.image}
                    alt=""
                  />
                </figure>
                <div className="card-body px-3">
                  <h2 className="card-title">{item?.className}</h2>
                  <div className="space-y-1">
                    <p>Instructor Name: {item?.instructorName}</p>
                    <p>Available seats: {item?.seats}</p>
                    <p>Price: ${item?.price}</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
