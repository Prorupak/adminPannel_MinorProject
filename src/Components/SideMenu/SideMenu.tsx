/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-shadow */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Icons
import { MdArrowBack } from 'react-icons/md';
import SearchBar from '../SearchBar/SearchBar';
import Icons from '../../Assets/Icons/Icons';

// Styled-Components
import * as Elements from './Elements.SideMenu';

const SideMenu = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <Elements.MainWrapper>
        <Elements.TopSection>
          <Elements.Logo>
            <p>Logo</p>
          </Elements.Logo>
          <div className="toggle-menu">
            <MdArrowBack onClick={() => setToggle(true)} />
            {toggle === true && <Link to="/smallMenu" />}
          </div>
        </Elements.TopSection>
        <SearchBar />
        <Elements.Divider />
        <Elements.MainMenu>
          <Elements.MenuTitle>
            <Elements.Heading>menu</Elements.Heading>
          </Elements.MenuTitle>
          <Elements.MenuContainer>
            <Elements.MenuItem to="/">
              <Elements.Icon alt="Dashboard" src={Icons.Dashboard} />
              <Elements.Title>dashboard</Elements.Title>
            </Elements.MenuItem>
            <Elements.MenuItem to="/">
              <Elements.Icon alt="Products" src={Icons.Products} />
              <Elements.Title>Products</Elements.Title>
            </Elements.MenuItem>
            <Elements.MenuItem to="/">
              <Elements.Icon
                alt="Order"
                src={Icons.Order}
                style={{ color: '#c2cfe0' }}
              />
              <Elements.Title>Order</Elements.Title>
            </Elements.MenuItem>
            <Elements.MenuItem to="/">
              <Elements.Icon alt="Tasks" src={Icons.Tasks} />
              <Elements.Title>Tasks</Elements.Title>
            </Elements.MenuItem>

            <Elements.Divider />

            <Elements.MenuTitle>
              <Elements.Heading>people</Elements.Heading>
            </Elements.MenuTitle>
            <Elements.MenuItem to="/">
              <Elements.Icon alt="Conversation" src={Icons.Conversation} />
              <Elements.Title>Conversation</Elements.Title>
            </Elements.MenuItem>
            <Elements.MenuItem to="/">
              <Elements.Icon alt="Clients" src={Icons.Clients} />
              <Elements.Title>Clients</Elements.Title>
            </Elements.MenuItem>
            <Elements.MenuItem to="/">
              <Elements.Icon alt="Users" src={Icons.Users} />
              <Elements.Title>Users</Elements.Title>
            </Elements.MenuItem>

            <Elements.Divider />

            <Elements.MenuTitle>
              <Elements.Heading>accounting</Elements.Heading>
            </Elements.MenuTitle>
            <Elements.MenuItem to="/">
              <Elements.Icon alt="Documents" src={Icons.Documents} />
              <Elements.Title>Documents</Elements.Title>
            </Elements.MenuItem>
            <Elements.MenuItem to="/">
              <Elements.Icon alt="Timesheet" src={Icons.TimeSheet} />
              <Elements.Title>Timesheet</Elements.Title>
            </Elements.MenuItem>
            <Elements.MenuItem to="/">
              <Elements.Icon alt="Reports" src={Icons.Reports} />
              <Elements.Title>Reports</Elements.Title>
            </Elements.MenuItem>

            <Elements.Divider />

            <Elements.MenuTitle>
              <Elements.Heading>others</Elements.Heading>
            </Elements.MenuTitle>
            <Elements.MenuItem to="/">
              <Elements.Icon alt="Setting" src={Icons.Setting} />
              <Elements.Title>Setting</Elements.Title>
            </Elements.MenuItem>
          </Elements.MenuContainer>
        </Elements.MainMenu>
      </Elements.MainWrapper>
    </>
  );
};

export default SideMenu;
