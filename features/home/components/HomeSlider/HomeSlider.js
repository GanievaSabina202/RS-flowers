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
                    <img layout="fill" width="100%" height="650px" src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>

                <SwiperSlide>
                    <img layout="fill" width="100%" height="650px" src="https://images.theconversation.com/files/393210/original/file-20210401-13-z6rl6z.jpg?ixlib=rb-1.1.0&rect=9%2C0%2C2994%2C1999&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip" />
                </SwiperSlide>
                <SwiperSlide>
                    <img layout="fill" width="100%" height="650px" src="https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=pad%2Cheight=675%2Cmetadata=none%2Conerror=redirect%2Cq=85%2Cwidth=1200/wp-content/uploads/look-up-at-the-sky-day-1.jpg" />
                </SwiperSlide>

            </Swiper>
        </>
    )
}
