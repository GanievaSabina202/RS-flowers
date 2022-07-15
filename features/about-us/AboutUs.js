import React from "react";
import BackgroundImg from "../../share/components/BackgroundImg";
import styled from "./AboutUs.module.css";

export default function AboutUs({ data }) {
  return (
    <>
      <BackgroundImg
        title="About Us"
        bgImg="https://wallpapercave.com/wp/HKGW4tj.jpg"
      />
      {data.map((item) => {
        return (
          <>
            <div className={styled.Wrapper}>
              <div className={styled.ContentWrap}>
                <div className={styled.TextWrapper}>
                  <h5 className={styled.Title}>{item.name}</h5>
                  <p className={styled.Paragraph}>{item.desc}</p>
                </div>
              </div>
              <div className={styled.imgWrapper}>
                <img src={item.img} className={styled.img} alt={item.name} />
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
