/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainWrapper = styled.section`
  /* position: fixed; */
  background: #000;
  width: ${(props) => props.theme.margins.mr300};
  height: 100vh;
  padding: ${(props) => props.theme.padding.pd30};
    ${(props) => props.theme.padding.pr10};
`;
export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  .toggle-menu {
    color: #fff;
    font-size: 1.5rem;
  }
`;

export const Logo = styled.div`
  font-size: 1.4rem;
  color: #fff;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  border-radius: 1px;
  margin: ${(props) => props.theme.margins.mr10} 0;
  background: ${(props) => props.theme.colors.hoverBack};
`;

export const MainMenu = styled.div``;

export const MenuContainer = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const MenuItem = styled(Link)`
  color: #fff;
  display: flex;
  place-items: center;
  padding: 12px 10px;
`;

export const Title = styled.p`
  padding: 0 ${(props) => props.theme.padding.pd5};
  text-transform: capitalize;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 0.9375rem;
  line-height: 18px;
  display: flex;
  align-items: center;
  letter-spacing: 0.01em;
`;

export const Icon = styled.img`
  height: 24px;
  width: 24px;
`;

export const MenuTitle = styled.div`
  padding: ${(props) => props.theme.padding.pd15} 0
    ${(props) => props.theme.padding.pd10};
    ${(props) => props.theme.padding.pd10};
`;

export const Heading = styled.p`
  color: #fff;
  text-transform: uppercase;
  font-family: ' Poppins', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 10px;
  display: flex;
  letter-spacing: 0.01em;
`;
