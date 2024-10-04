// import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import PostingCard from "../../../features/Posting/PostingCard";

// import required modules
// import { Navigation } from "swiper/modules";
import NewsNavigation from "../../Navigation";

export default function PostingSwiper() {
  return (
  <Swiper
    slidesPerView={4}
    spaceBetween={30}
    pagination={{
      clickable: true,
    }}
    navigation={{
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }} // 커스텀 네비게이션 설정
  >
    <SwiperSlide><PostingCard /></SwiperSlide>
    <SwiperSlide><PostingCard /></SwiperSlide>
    <SwiperSlide><PostingCard /></SwiperSlide>
    <SwiperSlide><PostingCard /></SwiperSlide>
    <SwiperSlide><PostingCard /></SwiperSlide>
    <SwiperSlide><PostingCard /></SwiperSlide>
    <SwiperSlide><PostingCard /></SwiperSlide>
    <SwiperSlide><PostingCard /></SwiperSlide>
    <SwiperSlide><PostingCard /></SwiperSlide>
    <NewsNavigation />
  </Swiper>
  );
}
