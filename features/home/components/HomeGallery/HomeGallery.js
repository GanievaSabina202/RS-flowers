import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import styled from "./HomeGallery.module.css";

export default function HomeGallery() {

    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={3}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                },
            }}
            className={styled.SwiperWrapper}
        >
            <SwiperSlide>
                <img className={styled.ImgaWrap}
                    src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pink-stocks-high-res-stock-photography-121745471-1544729676.jpg?crop=0.444xw:1.00xh;0.114xw,0&resize=480:*" />
            </SwiperSlide>
            <SwiperSlide>
                <img className={styled.ImgaWrap}
                    src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pink-stocks-high-res-stock-photography-121745471-1544729676.jpg?crop=0.444xw:1.00xh;0.114xw,0&resize=480:*" />
            </SwiperSlide>
            <SwiperSlide>
                <img className={styled.ImgaWrap}
                    src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pink-stocks-high-res-stock-photography-121745471-1544729676.jpg?crop=0.444xw:1.00xh;0.114xw,0&resize=480:*" />
            </SwiperSlide>
            <SwiperSlide>
                <img className={styled.ImgaWrap}
                    src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pink-stocks-high-res-stock-photography-121745471-1544729676.jpg?crop=0.444xw:1.00xh;0.114xw,0&resize=480:*" />
            </SwiperSlide>
            <SwiperSlide>
                <img className={styled.ImgaWrap}
                    src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pink-stocks-high-res-stock-photography-121745471-1544729676.jpg?crop=0.444xw:1.00xh;0.114xw,0&resize=480:*" />
            </SwiperSlide>
            <SwiperSlide>
                <img className={styled.ImgaWrap}
                    src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pink-stocks-high-res-stock-photography-121745471-1544729676.jpg?crop=0.444xw:1.00xh;0.114xw,0&resize=480:*" />
            </SwiperSlide>
            <SwiperSlide>
                <img className={styled.ImgaWrap}
                    src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pink-stocks-high-res-stock-photography-121745471-1544729676.jpg?crop=0.444xw:1.00xh;0.114xw,0&resize=480:*" />
            </SwiperSlide>
            <SwiperSlide>
                <img className={styled.ImgaWrap}
                    src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pink-stocks-high-res-stock-photography-121745471-1544729676.jpg?crop=0.444xw:1.00xh;0.114xw,0&resize=480:*" />
            </SwiperSlide>
        </Swiper>
    )
}
