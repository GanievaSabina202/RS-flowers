import React from 'react';

import { useRouter } from "next/router";
import BackgroundImg from '../../share/components/BackgroundImg';
import { Container, Grid, } from '@mui/material';
import { Content, Img, Wrapper } from '../../features/gallerycard/GalleryCard.styled';

const Gallery = () => {
    const router = useRouter();
    return (
        <>
            <BackgroundImg
                title="Gallery"
                bgImg="https://www.legacy.com/wp-content/uploads/2020/01/Sympathy-flowers-orange-1000-shutterstock_694680475.jpg"
            />

            <Container fluid='true'>
                <Grid container pt={2} pb={2}>
                    <Grid p={1} lg={4} md={6} sm={6} xs={12}>
                        <Wrapper
                            onClick={() => router.push(`/gallery/a`)}
                        >
                            <Img src="https://www.about-flowers.co.uk/upload/mt/ab99/upload/files/images/homeGifts.jpg" />
                            <Content>
                                Filan gul
                            </Content>
                        </Wrapper>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}






export default Gallery