// import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import PostingCard from "../../../features/Posting/PostingCard";

// import required modules


export default function PostingSwiper() {
  return (
      <Swiper slidesPerView={4}
      spaceBetween={30}
      >
      <SwiperSlide><PostingCard /></SwiperSlide>
      <SwiperSlide><PostingCard /></SwiperSlide>
      <SwiperSlide><PostingCard /></SwiperSlide>
      <SwiperSlide><PostingCard /></SwiperSlide>
      <SwiperSlide><PostingCard /></SwiperSlide>
      <SwiperSlide><PostingCard /></SwiperSlide>
      </Swiper>
  );
}
