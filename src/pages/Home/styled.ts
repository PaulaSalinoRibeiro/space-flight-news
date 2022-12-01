import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;

  div {
    align-items: center;
    display: flex;
    justify-content: end;
    padding: 0.5rem;
    margin-right: 0.5rem;
  }
`;

export const Line = styled.hr`
  color: ${({theme}) => theme.colors.terciary};
  background: ${({theme}) => theme.colors.terciary};
  width: 90%;
  height: .1rem;
`;