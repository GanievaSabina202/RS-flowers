import React, { useState } from 'react';
import BackgroundImg from '../../share/components/BackgroundImg';
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
    SellWrapper
} from '../../features/gallerySlugCard/gallerySlugCard.styled';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Grid } from '@mui/material';

const Gallery = () => {
    const [PriceCount, setPriceCount] = useState(0);

    const addCountHandler = () => {
        setPriceCount(PriceCount + 1);
    };

    const removeCountHandler = () => {
        if (PriceCount === 0) {
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
                <Grid container>

                    <Grid lg={6} md={6} sm={12} xs={12}>
                        <ImgWrapper>
                            <Img
                                src="https://www.lampviews.com/wp-content/uploads/2020/11/Tips-for-flower-shop-lighting-design-2.jpeg">
                            </Img>
                        </ImgWrapper>
                    </Grid>

                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        lg={6} md={6} sm={12} xs={12}>
                        <SellWrapper>
                            <Content>
                                RHAPSODIES
                            </Content>
                            <Price>
                                <IconsPrice>$</IconsPrice>
                                40
                            </Price>
                            <PriceBtnWrapper>
                                <PriceWrap>
                                    <PriceShow>{PriceCount}</PriceShow>
                                    <IconsWrap>
                                        <AddIcon
                                            onClick={addCountHandler}
                                        />
                                        <RemoveIcon
                                            onClick={removeCountHandler}
                                        />
                                    </IconsWrap>
                                </PriceWrap>
                                <Button>Add to Cart</Button>
                            </PriceBtnWrapper>
                        </SellWrapper>
                    </Grid>

                </Grid>
            </Container>
        </>
    )
}
export default Gallery;




