import styled from "styled-components";

export const Wrapper = styled.div`
  border-radius: 10px;
  width: 100%;
  height: 400px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  &:hover p {
    bottom: 0;
  }
  &:hover img {
    transform: scale(1.1);
  }
`;

export const Img = styled.img`
  border-radius: 10px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.3s all;
`;

export const Content = styled.p`
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.overlay};
  position: absolute;
  font-size: 22px;
  font-weight: 600;
  width: 100%;
  bottom: -100px;
  height: 100px;
  transition: 0.3s all;
  display: flex;
  align-items: center;
  justify-content: center;
`;
