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


export default function ContactUs() {
    return (
        <Container>
            <ContactWrapper>
                <Grid container>

                    <Grid lg={6} md={6} sm={12} xs={12}>
                        <ImgWrapper>
                            <Img
                                src="https://www.lampviews.com/wp-content/uploads/2020/11/Tips-for-flower-shop-lighting-design-2.jpeg">
                            </Img>
                        </ImgWrapper>
                    </Grid>

                    <Grid lg={6} md={6} sm={12} xs={12}>
                        <Input placeholder="Your email"
                            radius="md"
                            size="sm"
                        />
                        <Space h="sm" />
                        <Input placeholder="Your email"
                            radius="md"
                            size="sm"
                        />
                        <Space h="sm" />
                        <Textarea placeholder="Your comment"
                            radius="md"
                            required
                        />
                        <Space h="sm" />
                        <Button
                            color="gray"
                            size="md">
                            Send
                        </Button>

                    </Grid>
                </Grid>
            </ContactWrapper>
        </Container>

    )
}
