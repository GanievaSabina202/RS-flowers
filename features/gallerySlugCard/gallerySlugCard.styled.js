import styled from "styled-components";

export const IconsPrice = styled.span``;
export const Container = styled.div``;
export const ImgWrapper = styled.div``;
export const SellWrapper = styled.div``;

export const Img = styled.img`
width: 100%;
height: 500px;
object-fit: cover;
`;

export const Content = styled.h5`
font-size: 36px;
font-weight: 400;
margin: 25px 0px 0px 0px;
text-transform: uppercase;
color: ${({ theme }) => theme.colors.black};
`;

export const Price = styled.div`
color: #999;
font-weight: 500;
font-size: 29px;
padding: 20px 0px;
`;


export const IconsWrap = styled.div`
display: flex;
flex-direction: column;
padding: 0px 10px;
cursor: pointer;
`;

export const PriceBtnWrapper = styled.div`
display: flex;
align-items: center;
`;

export const Button = styled.button`
padding: 21px 44px;
background: transparent;
border: 1px solid darkgray;
transition: .3s all;
 &:hover{
     background-color: black;
     color: white;
 }
`;

export const PriceShow = styled.div`
border: 1px solid darkgray;
padding: 18px;
width: 90px;
`;

export const PriceWrap = styled.div`
display: flex;
align-items: center;
`

