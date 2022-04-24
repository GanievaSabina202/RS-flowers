import React from 'react';
import { Wrapper, Title, Overlay } from './BackgroundImg.styled'

export default function BackgroundImg({ title, bgImg }) {
    return (
        <Wrapper bgImg={bgImg}>
            <Overlay />
            <Title>
                {title}
            </Title>
        </Wrapper>
    )
}
