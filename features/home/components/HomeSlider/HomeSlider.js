import React from 'react';
import Image from 'next/image';
// import Swiper and modules  START
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import Header from '../../../../share/components/Header/Header';

import {
    SliderWrapper,
    SliderContent,
    SliderText,
    SliderContentWrapper,
    SliderOvarlay,
    Img
} from './HomeSlider.style'

// import Swiper and modules  END

export default function HomeSlider() {
    return (
        <>
            <Header />
            <Swiper
                spaceBetween={30}
                effect={"fade"}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, EffectFade, Navigation, Pagination]}>
                <SwiperSlide>
                    <SliderWrapper>
                        <SliderOvarlay />
                        <Img
                           alt='hs' src="https://wallpapercave.com/wp/wp3054079.jpg"
                        />
                        <SliderContentWrapper>
                            <SliderContent>Go after your dream</SliderContent>
                            <SliderText>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </SliderText>
                        </SliderContentWrapper>
                    </SliderWrapper>
                </SwiperSlide>

                <SwiperSlide>
                    <SliderWrapper>
                        <SliderOvarlay />
                        <Img
                           alt='hs' src="https://wallpaperaccess.com/full/1996541.jpg"
                        />
                        <SliderContentWrapper>
                            <SliderContent>Smile</SliderContent>
                            <SliderText>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </SliderText>
                        </SliderContentWrapper>
                    </SliderWrapper>
                </SwiperSlide>

                <SwiperSlide>
                    <SliderWrapper>
                        <SliderOvarlay />
                        <Img
                           alt='hs' src="https://wallpaperaccess.com/full/733121.jpg"
                        />
                        <SliderContentWrapper>
                            <SliderContent>One day you win</SliderContent>
                            <SliderText>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </SliderText>
                        </SliderContentWrapper>
                    </SliderWrapper>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
