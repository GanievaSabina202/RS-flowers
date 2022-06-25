import React from 'react';
// FIREBASE START
import { db } from '../../config/firebase';
import { collection, doc, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
// FIREBASE END

import BackgroundImg from '../../share/components/BackgroundImg';

import {
    Container,
    Grid,
} from '@mui/material';
import {
    Content,
    Img,
    Wrapper
} from '../../features/gallerycard/GalleryCard.styled';

const Gallery = ({ data }) => {

    const router = useRouter();

    return (
        <>
            <BackgroundImg
                title="Gallery"
                bgImg="https://www.legacy.com/wp-content/uploads/2020/01/Sympathy-flowers-orange-1000-shutterstock_694680475.jpg"
            />

            <Container fluid='true'>
                <Grid container pt={2} pb={2}>
                    {data.map((item) => {
                        return <>
                            <Grid p={1} lg={4} md={6} sm={6} xs={12}>
                                <Wrapper
                                    onClick={() => router.push(`/gallery/${item.name}`)}
                                >
                                    <Img src={item.img} alt=""/>
                                    <Content>
                                        {item.name}
                                    </Content>
                                </Wrapper>
                            </Grid>
                        </>
                    })}
                </Grid>
            </Container>
        </>
    )
}

export async function getServerSideProps() {
    const product = await getDocs(collection(db, "gallery"));
    const data = product.docs.map(doc => {
        return {
            ...doc.data(),
            id: doc.id
        }
    })
    return {
        props: {
            data: data
        }
    }
}

export default Gallery