import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./Carousel.css";

const InfiniteCarousel = () => {
  const images = [
    "https://dummyimage.com/150/FF0000/FFFFFF?text=1",
    "https://dummyimage.com/150/00FF00/FFFFFF?text=2",
    "https://dummyimage.com/150/0000FF/FFFFFF?text=3",
    "https://dummyimage.com/150/FFFF00/FFFFFF?text=4",
    "https://dummyimage.com/150/FF00FF/FFFFFF?text=5",
  ];

  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation]}
        navigation
        loop={true}
        spaceBetween={10}
        slidesPerView={3}
        centeredSlides={true}
        className="swiper-container"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Slide ${index + 1}`} className="carousel-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default InfiniteCarousel;
