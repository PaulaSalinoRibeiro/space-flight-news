import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  margin-bottom: 2rem;
  width: 100%;
`;

export const Image = styled.img`
  border-radius: ${({theme}) => theme.borderRadius};
  box-shadow: ${({theme}) => theme.shadow.secondary};
  margin: 2rem;
  width: 18rem;
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 36%;
`;

export const Title = styled.h2`
  color: ${({theme}) => theme.colors.terciary};
  font-family: Roboto;
`;

export const SubContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const Date = styled.p`
  color: ${({theme}) => theme.colors.terciary};
  font-size: .8rem;
  font-weight: bold;
  font-family: Roboto;
`;

export const Tag = styled.p`
  background: ${({theme}) => theme.colors.terciary};
  color: ${({theme}) => theme.colors.main};
  border-radius: 0.5rem;
  font-family: Roboto;
  font-size: .8rem;
  font-weight: bold;
  padding: .4rem;
`;

export const Text = styled.p`
  color: ${({theme}) => theme.colors.terciary};
  font-family: Roboto;
  font-weight: 500;
  font-size: 1rem;
`;

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
  width: 8rem;
`;
