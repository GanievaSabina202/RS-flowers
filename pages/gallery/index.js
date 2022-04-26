import React from 'react';
import BackgroundImg from '../../share/components/BackgroundImg';
import {
    Container,
    Stack,
    Item,
    Grid,
} from '@mui/material';
import Gallery from '../../features/gallery/gallery';

export default function index() {
    return (
        <>
            <BackgroundImg
                title="Gallery"
                bgImg="https://www.legacy.com/wp-content/uploads/2020/01/Sympathy-flowers-orange-1000-shutterstock_694680475.jpg"
            />

            <Container fluid>
                <Grid container pt={2} pb={2}>
                    
                    <Grid p={1} lg={4} md={6} sm={6} xs={12}>
                        <Gallery />
                    </Grid>

                    <Grid p={1} lg={4} md={6} sm={6} xs={12}>
                        <Gallery />
                    </Grid>
                    
                    <Grid p={1} lg={4} md={6} sm={6} xs={12}>
                        <Gallery />
                    </Grid>

                </Grid>
            </Container>
        </>
    )
}
