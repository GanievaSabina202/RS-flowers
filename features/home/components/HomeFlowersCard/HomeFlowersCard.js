import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from "aos";
import "aos/dist/aos.css";
import styled from './HomeFlowersCard.module.css';

export default function HomeFlowersCard() {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (

        <div className={styled.box}>
            <div data-aos="zoom-in"  data-aos-duration="1000" className={styled.card}>
                <div className={styled.imgBx}>
                    <img
                        width="300px"
                        height="300px"
                        src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pink-stocks-high-res-stock-photography-121745471-1544729676.jpg?crop=0.444xw:1.00xh;0.114xw,0&resize=480:*'
                        alt="images"
                    />
                </div>
                <div className={styled.details}>
                    <h2>Lorem Ipsum</h2>
                </div>
            </div>

            <div data-aos="zoom-in"  data-aos-duration="1000" className={styled.card}>
                <div className={styled.imgBx}>
                    <img
                        width="300px"
                        height="300px"
                        src='https://cdn.thewirecutter.com/wp-content/media/2021/01/online-flowers-2048px-0449.jpg?auto=webp&quality=75&width=1024'
                        alt="images"
                    />
                </div>
                <div className={styled.details}>
                    <h2>Lorem Ipsum</h2>
                </div>
            </div>

            <div data-aos="zoom-in"  data-aos-duration="1000" className={styled.card}>
                <div className={styled.imgBx}>
                    <img
                        width="300px"
                        height="300px"
                        src='https://pyxis.nymag.com/v1/imgs/710/b07/39fec5e5b7f6813a44852d44d873fad6d6-the-allie.2x.h473.w710.jpg'
                        alt="images"
                    />
                </div>
                <div className={styled.details}>
                    <h2>Lorem Ipsum</h2>
                </div>
            </div>
        </div>
    )
}
