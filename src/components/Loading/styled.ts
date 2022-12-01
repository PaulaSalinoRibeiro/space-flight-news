import styled from "styled-components";

export const Button = styled.button`
  background: ${({theme}) => theme.colors.textLight};
  border: none;
  border-radius: 0.5rem;
  color: ${({theme}) => theme.colors.main};
  display: flex;
  justify-content: center;
  font-family: Roboto;
  font-weight: bold;
  font-size: 1rem;
  padding: 0.5rem;
  margin: 0 auto;
  margin-bottom: 1rem;
  width: 8rem;
`;