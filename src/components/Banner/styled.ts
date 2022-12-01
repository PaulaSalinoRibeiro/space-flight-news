import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 8rem;
`;

export const Title = styled.h2`
  font-family: Roboto;
  color: ${({theme}) => theme.colors.terciaryLight};
`;

export const Line = styled.hr`
  color: red;
  background: red;
  height: 5
`;
