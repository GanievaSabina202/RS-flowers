import React from 'react';
import BackgroundImg from '../../share/components/BackgroundImg';
import styled from './OurTeam.module.css';

export default function OurTeam({ data }) {
    return (
        <>
            <BackgroundImg
                title="Our Team"
                bgImg="https://www.itl.cat/pngfile/big/136-1362245_wallpaper-flower-macro-branch-spring-apricot-buds-bokeh.jpg"
            />

            <div className={styled.Wrapper}>
                {data.map((item) => {
                    return <>
                        <div className={styled.cardContainer} >
                            <div className={styled.card}>
                                <div className={styled.front}>
                                    <img className={styled.img}
                                        src={item.img}
                                        alt="sn"
                                    />
                                </div>
                                <div className={styled.back}>
                                    <div className={styled.ContentWrap}>
                                        <h5 className={styled.h2}>{item.name}</h5>
                                        <p className={styled.desc}>
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                })}
            </div>
        </>
    )
}
