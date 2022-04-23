import styled from "styled-components";

export const FooterWrap = styled.footer`
padding: 40px 0px;
background-color: ${({ theme }) => theme.colors.lightBlack};
display: flex;
align-items: center;
justify-content: space-between;
position: relative;

`
export const UlWrapper = styled.ul`
margin: 0;
padding: 0;
font-weight: 400;
font-size: 17px;
line-height: 32px;
font-weight: 600;

@media(max-width:575.9px){
    text-align: center;
}
`
export const Href = styled.a`
font-size: 16px;
line-height: 30px;
font-weight: 400;
color:"#1b1b1b";
display: flex;
align-items: center;
padding: 0px 20px 0px 0px;
@media(max-width:575.9px){
    justify-content: center;
}
`

export const ListItem = styled.li`
padding-top: 10px;
`

export const Span = styled.span`
font-weight: 500;
padding: 0px 3px;
`

export const SosialNetwork = styled.div`
display: flex;
align-items: center;
@media(max-width:575.9px){
    justify-content: center;
}
`

export const BgImg = styled.img`
width: 300px;
height: 300px;
right: 0;
position: absolute;
bottom: 7px;
filter: contrast(0.2);
opacity: 40%;
`