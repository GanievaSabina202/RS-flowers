import React from 'react';
import Image from 'next/image';
// import Swiper and modules  START
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper";
import Header from '../../../../share/components/Header/Header';


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
                modules={[EffectFade, Navigation, Pagination]}>

                <SwiperSlide>
                    <img layout="fill" width="100%" height="650px"
                        src="https://wallpaperaccess.com/full/250472.jpg"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img layout="fill" width="100%" height="650px"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTxzjjRb7mpxVZ6b0lD9233Py4_z16LSb01Q&usqp=CAU"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img layout="fill" width="100%" height="650px"
                        src="https://i.pinimg.com/originals/a4/6c/4d/a46c4dea15a013d3f779e8cf97a09a46.jpg"
                    />
                </SwiperSlide>

            </Swiper>
        </>
    )
}
