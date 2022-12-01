import styled from "styled-components";

export const Container = styled.div`
  background: ${({theme}) => theme.colors.main};
  border-radius: 10px;
  box-shadow: ${({theme}) => theme.shadow.secondary};
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 10rem;
  min-height: 8rem;
  padding: 1rem;
  transform: translate(-50%, -50%);
  z-index: 9999;
`;

export const CloseButton = styled.button`
  background: ${({theme}) => theme.colors.main};
  border: none;
  color: ${({theme}) => theme.background.secondary};
  font-size: 1.2rem;
`;

export const Context = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
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

export const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Link = styled.a`
  background: ${({theme}) => theme.colors.textLight};
  border-radius: 0.5rem;
  color: ${({theme}) => theme.colors.main};
  font-family: Roboto;
  font-weight: bold;
  font-size: 1rem;
  padding: 0.5rem;
  text-decoration: none;
  text-align: center;
  width: 8rem;
`;