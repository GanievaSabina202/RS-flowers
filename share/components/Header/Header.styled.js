import styled from "styled-components";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

export const Headers = styled.div`
    position: absolute;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 10px 15px 0px 15px;
`

export const Logo = styled.div`
    display: flex;
    align-items: center;
    z-index: 2;
    @media(max-width:767.9px){
        width: 100%;
        justify-content: space-between;
    }
`

export const Img = styled.img`
    width: 140px;
    height: 60px;
    object-fit: cover;
    z-index: 2;
`

export const HeaderList = styled.ul`
    margin: 0;
    padding: 0;

    @media(max-width:767.9px){
        padding-top: 130px;
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 0;
        width: 100%;
        background: ${({ theme }) => theme.colors.lightBlack};
        left: 0;
        height: 100vh;
        align-items: center;
    }
    
`
export const HeaderListWeb = styled.ul`
    margin: 0;
    padding: 0;

    @media(max-width:767.9px){
      display: none;
    }
    
`

export const DensityMediumIcons = styled(DensityMediumIcon)`
    color: ${({ theme }) => theme.colors.white};
    @media(min-width:767.9px){
     visibility: hidden;
     opacity: 0;
    }
`

export const Hreff = styled.a`
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 26px;
    letter-spacing: .15em;
    padding: 10px;
    color:${({ theme }) => theme.colors.white};
`
