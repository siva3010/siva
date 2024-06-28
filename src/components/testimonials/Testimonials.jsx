import React from "react";
import { Data } from "./Data";
import "./testimonials.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Testimonials = () => {
  return (
    <section className="test container section">
      <h2 className="section__title">Testimonials</h2>
      <span className="section__subtitle">What People are Saying</span>

      <Swiper
        className="test__container"
        grabCursor={true}
        spaceBetween={24}
        // loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
      
        }}
        modules={[Pagination]}
      >
        {Data.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide className="test__card" key={id}>
              <img src={image} alt="Client" className="test__img" />

              <h3 className="test__name">{title}</h3>
              <p className="test__description">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>

    </section>
  );
};

export default Testimonials;
