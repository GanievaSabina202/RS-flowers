import React, { useState } from "react";
import BackgroundImg from "../../share/components/BackgroundImg";

import { db } from "../../config/firebase";

import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  query,
  where,
} from "@firebase/firestore";

import {
  Container,
  ImgWrapper,
  Img,
  Content,
  Price,
  PriceBtnWrapper,
  Button,
  PriceShow,
  PriceWrap,
  IconsPrice,
  IconsWrap,
  SellWrapper,
  TotalPrice,
} from "../../features/gallerySlugCard/gallerySlugCard.styled";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Grid } from "@mui/material";

const Gallery = ({ data }) => {
  const [PriceCount, setPriceCount] = useState(1);
  const [TotalCount, setTotalCount] = useState(1);

  const addTobas = (item) => {
    let productsData = JSON.parse(localStorage.getItem("data")) || [];
    localStorage.setItem("data", JSON.stringify([...productsData, item]));
  };

  const addCountHandler = () => {
    setPriceCount(PriceCount + 1);
  };

  const removeCountHandler = () => {
    if (PriceCount === 1) {
      return;
    }
    setPriceCount(PriceCount - 1);
  };

  return (
    <>
      <BackgroundImg
        title="Gallery"
        bgImg="https://cdn.shopify.com/s/files/1/0070/0687/9859/files/blanklogoimage_8f7bea01-a1ef-49a3-92e1-0bf37d10c0c2_2048x.jpg?v=1630590234"
      />

      <Container>
        <Grid container alignItems="center">
          {data.map((item) => {
            return (
              <>
                <Grid lg={6} md={6} sm={12} xs={12}>
                  <ImgWrapper>
                    <Img src={item.img}></Img>
                  </ImgWrapper>
                </Grid>

                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  lg={6}
                  md={6}
                  sm={12}
                  xs={12}
                >
                  <SellWrapper>
                    <Content>{item.name}</Content>
                    <Price>
                      <IconsPrice>$</IconsPrice>
                      {item.desc}
                    </Price>
                    <PriceBtnWrapper>
                      <PriceWrap>
                        <PriceShow>{PriceCount}</PriceShow>
                        <IconsWrap>
                          <AddIcon onClick={addCountHandler} />
                          <RemoveIcon onClick={removeCountHandler} />
                        </IconsWrap>
                      </PriceWrap>
                      <Button onClick={() => addTobas(item)}>
                        Add to Cart
                      </Button>
                    </PriceBtnWrapper>

                    <TotalPrice>
                      Total Price :<IconsPrice> $</IconsPrice>
                      {PriceCount * TotalCount * item.desc}
                    </TotalPrice>
                  </SellWrapper>
                </Grid>
              </>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};
export default Gallery;

export async function getServerSideProps(context) {
  const slug = context.query.slug;
  const product = await getDocs(
    query(collection(db, "gallery"), where("name", "==", slug))
  );

  const data = product.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });

  return {
    props: {
      data,
    },
  };
}
