import React from 'react';

import {
    Input,
    Textarea,
    Button,
    Space
} from '@mantine/core';

import {
    Container,
    Grid
} from '@mui/material';


import {
    ContactWrapper,
    ImgWrapper,
    Img,
} from './ContactUs.styled';
import BackgroundImg from '../../share/components/BackgroundImg';


export default function ContactUs() {

    return (
        <>
            <BackgroundImg
                title="Contact Us"
                bgImg="https://wallpaperaccess.com/full/2009856.jpg"
            />
            <Container>
                <ContactWrapper>
                    <Grid container>

                        <Grid lg={6} md={6} sm={12} xs={12}>
                            <ImgWrapper>
                                <Img
                                    alt="Contact"
                                    src="https://www.lampviews.com/wp-content/uploads/2020/11/Tips-for-flower-shop-lighting-design-2.jpeg">
                                </Img>
                            </ImgWrapper>
                        </Grid>

                        <Grid lg={6} md={6} sm={12} xs={12}>
                            <Input placeholder="Name"
                                radius="md"
                                size="sm"
                            />
                            <Space h="sm" />
                            <Input placeholder="Email"
                                radius="md"
                                size="sm"
                            />
                            <Space h="sm" />
                            <Textarea placeholder="Comment"
                                radius="md"
                                required
                            />
                            <Space h="sm" />
                            <Button
                                color="gray"
                                size="md"
                            >
                                Send
                            </Button>

                        </Grid>

                    </Grid>
                </ContactWrapper>
            </Container>
        </>
    )
}
