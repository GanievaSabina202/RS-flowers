import styled from "styled-components";

export const ContactWrapper = styled.div`
padding: 100px 0px;
`
export const ImgWrapper = styled.div``

export const Img = styled.img`
    --_g: no-repeat linear-gradient(#000 0 0);
    --_s: 10% /45% 45%;
    --m:
        var(--_g) left var(--_i, 0%) top var(--_s),
        var(--_g) bottom var(--_i, 0%) left var(--_s),
        var(--_g) top var(--_i, 0%) right var(--_s),
        var(--_g) right var(--_i, 0%) bottom var(--_s);
    -webkit-mask: var(--m);
    mask: var(--m);
    filter: grayscale();
    transition: .3s linear;
    width: 500px;
    height: auto;
    object-fit: cover;
    &:hover{
    --_i: 10%;
    filter: grayscale(0);
    }
    @media(max-width:991.9px){
        width: 370px;
    }
    @media(max-width:450px){
        width: 300px;
    }
`