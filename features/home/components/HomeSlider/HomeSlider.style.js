import styled from "styled-components";

export const Img = styled.img`
    width: 100%;
    height: 100vh;
`
export const SliderWrapper = styled.div`
position: relative;
height: 100vh;
`
export const SliderOvarlay = styled.div`
position: absolute;
width: 100%;
height: 100%;
background-color: ${({ theme }) => theme.colors.overlay};
`
export const SliderContentWrapper = styled.div`
position: absolute;
top: 50%;
left: 50%;
margin: 0;
width: 80%;
text-align: center;
transform: translate(-50%, -50%);
color: ${({ theme }) => theme.colors.white};
`
export const SliderText = styled.p`
font-size: 18px;
margin: 0;
`
export const SliderContent = styled.h2`
margin: 0;
font-size: 77px;
padding: 20px 0px;
font-family: 'Cookie', cursive;
`
