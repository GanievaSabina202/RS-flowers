import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import {
    BgImg,
    BannerContent,
    Title,
    Desc
} from './HomeBanner.styled';

export default function HomeBanner() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <BgImg>
            <Container>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}>
                    <Grid xs={6} md={3}>
                        <BannerContent
                            data-aos="fade-up"
                        >
                            <Title>90</Title>
                            <Desc>FLOWERS SORTS</Desc>
                        </BannerContent>
                    </Grid>
                    <Grid xs={6} md={3}>
                        <BannerContent
                            data-aos="fade-down"
                        >
                            <Title>90</Title>
                            <Desc>FLOWERS SORTS</Desc>
                        </BannerContent>
                    </Grid>
                    <Grid xs={6} md={3}>
                        <BannerContent
                            data-aos="fade-up"
                        >
                            <Title>90</Title>
                            <Desc>FLOWERS SORTS</Desc>
                        </BannerContent>
                    </Grid>
                    <Grid xs={6} md={3}>
                        <BannerContent
                            data-aos="fade-down"
                        >
                            <Title>90</Title>
                            <Desc>FLOWERS SORTS</Desc>
                        </BannerContent>
                    </Grid>
                </Grid>
            </Container>
        </BgImg>
    )
}
