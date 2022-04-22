import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import {
    HomeAdvantageItem,
    ItemContent,
    HomeAdvantageWrap,
    LocalFloristIconWrap,
    Title,
    Desc
} from './HomeAdvantage.styled';

export default function HomeAdvantage() {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <HomeAdvantageWrap>
            <Container>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid lg={4} md={6} xs={12}>

                        <HomeAdvantageItem
                            data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000"
                        >
                            <ItemContent>
                                <LocalFloristIconWrap />
                                <Title>READY TO BE IMPRESSED</Title>
                                <Desc>Lorem ipsum dolor sit amet, consecte tur adipiscing elitin uta</Desc>
                            </ItemContent>
                        </HomeAdvantageItem>

                    </Grid>

                    <Grid lg={4} md={6} xs={12}>

                        <HomeAdvantageItem
                            data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1200"
                        >
                            <ItemContent>
                                <LocalFloristIconWrap />
                                <Title>READY TO BE IMPRESSED</Title>
                                <Desc>Lorem ipsum dolor sit amet, consecte tur adipiscing elitin uta</Desc>
                            </ItemContent>
                        </HomeAdvantageItem>

                    </Grid>

                    <Grid lg={4} md={6} xs={12}>

                        <HomeAdvantageItem
                            data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1100"
                        >
                            <ItemContent>
                                <LocalFloristIconWrap />
                                <Title>READY TO BE IMPRESSED</Title>
                                <Desc>Lorem ipsum dolor sit amet, consecte tur adipiscing elitin uta</Desc>
                            </ItemContent>
                        </HomeAdvantageItem>

                    </Grid>
                </Grid>
            </Container>
        </HomeAdvantageWrap>
    )
}
