import styled from "styled-components";

export const BgImg = styled.div`
background-image: url("https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/h1-parallax-img-1.jpg");
width: 100%;
height: auto;
display: flex;
align-items: center;
justify-content: center;
padding: 70px 0px 70px 0px;
`

export const BannerContent = styled.div`
color: ${({ theme }) => theme.colors.white};
text-align: center;
`

export const Title = styled.h3`
margin: 0;
text-transform: uppercase;
letter-spacing: .075em;
font-size: 36px;
`
export const Desc = styled.p`
font-weight: 400;
text-transform: uppercase;
font-size: 17px;
margin: 0;
`