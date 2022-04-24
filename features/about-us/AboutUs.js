import React from 'react';
import BackgroundImg from '../../share/components/BackgroundImg';
import styled from './AboutUs.module.css'

export default function AboutUs() {
    return (
        <>
            <BackgroundImg
                title="About Us"
                bgImg="https://wallpapercave.com/wp/HKGW4tj.jpg"
            />
            <div className={styled.Wrapper}>
                <div className={styled.ContentWrap}>
                    <div className={styled.TextWrapper}>
                        <h5 className={styled.Title}>Wonderful gift</h5>
                        <p className={styled.Paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                            optio, eaque rerum! Provident similique accusantium nemo autem.</p>
                    </div>
                </div>
                <div className={styled.imgWrapper}>
                    <img className={styled.img}
                        src="https://www.lampviews.com/wp-content/uploads/2020/11/Tips-for-flower-shop-lighting-design-2.jpeg" />
                </div>
            </div>
        </>
    )
}
