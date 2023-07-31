"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from "swiper";
import "../../../node_modules/swiper/swiper-bundle.css";
import styles from "./styles.module.css";
import "./custom-swiper.css";
const Slider2 = ({ announcements }) => {
  return (
    <div>
      <Swiper
        className={styles.swiperContainer}
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
        spaceBetween={50}
        slidesPerView={3}
        speed={800}
        navigation={true}
        loop={true}
        autoplay={{ delay: 5000 }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        effect={"cube"}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
      >
        {announcements &&
          announcements.map((announcement) => (
            <SwiperSlide key={announcement._id}>
              <img src={announcement.image_urls[0]} alt={announcement.title} style={{ width: "100%", height: "100%" }} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Slider2;
