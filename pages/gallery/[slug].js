import React, { useEffect, useState } from "react";
import BackgroundImg from "../../share/components/BackgroundImg";

import { db } from "../../config/firebase";

import {
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
  Button,
  IconsPrice,
  SellWrapper,
} from "../../features/gallerySlugCard/gallerySlugCard.styled";

import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, fillBasket } from "../../features/basket/Basket";

const Gallery = ({ data }) => {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket.basket);

  const addTobas = (item) => {
    const cart = localStorage.getItem("data")
      ? JSON.parse(localStorage.getItem("data"))
      : [];

    const duplicate = cart.filter((cartitem) => cartitem.id === item.id);
    if (duplicate.length === 0) {
      const productToAdd = {
        ...item,
        count: 1,
      };
      cart.push(productToAdd);
      localStorage.setItem("data", JSON.stringify(cart));
      dispatch(addToBasket(item));
    }
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
                    <Button onClick={() => addTobas(item)}>Add to Cart</Button>
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
