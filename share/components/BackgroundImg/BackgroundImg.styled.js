import styled from "styled-components";

export const Wrapper = styled.div`
    background: ${(props) => `url(${props.bgImg})`}; 
    height               : 100vh;
    background-attachment: fixed;
    position             : relative;
    background-size      : cover;
    background-position  : center;
    background-repeat    : no-repeat;

    @media (max-width:991.9px) {
        height               : 450px;
        background-attachment: unset;
    }

    @media (max-width:767.9px) {
        height: 350px;
    }

    @media (max-width:567.9px) {
        height: 290px;
    }
`


export const Title = styled.div`
    position   : absolute;
    left       : 50%;
    top        : 50%;
    transform  : translate(-50%, -50%);
    font-size  : 65px;
    line-height: 1em;
    color      : #ffffff;
    white-space: nowrap;
`

export const Overlay = styled.div`
position: absolute;
width: 100%;
height: 100%;
background-color: ${({ theme }) => theme.colors.overlay};
`