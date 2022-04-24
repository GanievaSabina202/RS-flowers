import React from 'react';
import styled from './OurTeam.module.css';

export default function OurTeam() {
    return (
        <>
            <div className={styled.Wrapper}>

                <div className={styled.cardContainer} >
                    <div className={styled.card}>
                        <div className={styled.front}>
                            <img className={styled.img}
                                src='https://d2u8towkwolubl.cloudfront.net/wp-content/uploads/2019/08/44_ACCENTS_NaturalGardener.jpg'
                            />
                        </div>
                        <div className={styled.back}>
                            <div className={styled.ContentWrap}>
                                <h5 className={styled.h2}>Sabina Ganieva</h5>
                                <p className={styled.desc}>
                                    Lorem ipsum sit domin
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styled.cardContainer} >
                    <div className={styled.card}>
                        <div className={styled.front}>
                            <img className={styled.img}
                                src='https://www.onlinedegree.com/wp-content/uploads/2017/02/gardener.jpg'
                            />
                        </div>
                        <div className={styled.back}>
                            <div className={styled.ContentWrap}>
                                <h5 className={styled.h2}>Sabina Ganieva</h5>
                                <p className={styled.desc}>
                                    Lorem ipsum sit domin
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styled.cardContainer} >
                    <div className={styled.card}>
                        <div className={styled.front}>
                            <img className={styled.img}
                                src='https://eieihome.com/articles/wp-content/uploads/2017/04/28646787_l.jpg'
                            />
                        </div>
                        <div className={styled.back}>
                            <div className={styled.ContentWrap}>
                                <h5 className={styled.h2}>Sabina Ganieva</h5>
                                <p className={styled.desc}>
                                    Lorem ipsum sit domin
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
