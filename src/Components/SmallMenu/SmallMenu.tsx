/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import styled from 'styled-components';
// import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import * as CgIcons from 'react-icons/cg';
import { Search } from '../SearchBar/SearchBar';
import { Divider, MenuTitle } from '../SideMenu/Elements.SideMenu';
import Icons from '../../Assets/Icons/Icons';

export const MainWrapper = styled.section`
  position: fixed;
  background-color: ${(props) => props.theme.colors.bluish};
  width: 65px;
  padding: 30px 10px;
  height: 100vh;
`;
export const TopSection = styled.div`
  display: flex;
  place-content: center;
`;

export const SearchController = styled.div`
  cursor: text;
  display: flex;
  place-content: center;
  place-items: center;
  width: 100%;
  background: ${(props) => props.theme.colors.hoverBack};
  height: 39px;
  border-radius: 5px;
  margin: 2.6em 0;
`;

export const Logo = styled.div``;
export const SmallSearch = styled(Search)``;

export const HamMenu = styled(GiHamburgerMenu)`
  cursor: pointer;
  color: #fff;
  font-size: 25px;
`;

export const MainMenu = styled.div``;

export const MenuContainer = styled.ul`
  display: flex;
  flex-direction: column;
  place-content: center;
  border-radius: 5px;
`;

export const MenuItem = styled(Link)`
  margin: 12px 10px;
  width: 100%;
`;

export const Icon = styled.img`
  height: 24px;
  width: 24px;
`;

export const MenuTitleSmall = styled(MenuTitle)``;

export const Order = styled(CgIcons.CgShoppingBag)`
  color: #c2cfe0;
  font-size: 25px;
`;

const SmallMenu = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <MainWrapper>
        <TopSection>
          <HamMenu onClick={() => setActive(true)} />
          {active === true && <Link to="/SideMenu" />}
        </TopSection>
        <SearchController>
          <SmallSearch />
        </SearchController>
        <Divider />
        <MainMenu>
          <MenuContainer>
            <MenuTitleSmall />

            <MenuItem to="/">
              <Icon alt="Dashboard" src={Icons.Dashboard} />
            </MenuItem>
            <MenuItem to="/">
              <Icon alt="Products" src={Icons.Products} />
            </MenuItem>
            <MenuItem to="/">
              <Order />
            </MenuItem>
            <MenuItem to="/">
              <Icon alt="Tasks" src={Icons.Tasks} />
            </MenuItem>

            <Divider />
            <MenuTitleSmall />

            <MenuItem to="/">
              <Icon alt="Conversation" src={Icons.Conversation} />
            </MenuItem>
            <MenuItem to="/">
              <Icon alt="Clients" src={Icons.Clients} />
            </MenuItem>
            <MenuItem to="/">
              <Icon alt="Users" src={Icons.Users} />
            </MenuItem>

            <Divider />
            <MenuTitleSmall />

            <MenuItem to="/">
              <Icon alt="Documents" src={Icons.Documents} />
            </MenuItem>
            <MenuItem to="/">
              <Icon alt="Timesheet" src={Icons.TimeSheet} />
            </MenuItem>
            <MenuItem to="/">
              <Icon alt="Reports" src={Icons.Reports} />
            </MenuItem>

            <MenuTitleSmall />
            <Divider />

            <MenuItem to="/">
              <Icon alt="Setting" src={Icons.Setting} />
            </MenuItem>
          </MenuContainer>
        </MainMenu>
      </MainWrapper>
    </>
  );
};

export default SmallMenu;
