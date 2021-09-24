/* eslint-disable react/no-array-index-key */
import React from 'react';

// Icons
import { GiHamburgerMenu } from 'react-icons/gi';
// import { Link } from 'react-router-dom';

// styled-components
import * as Elements from './Elements.Sidebar';
// import { SidebarData } from './SidebarData';

const Sidebar = () => {
  return (
    <>
      <Elements.MainWrapper>
        <Elements.Wrapper>
          <div className="logo-section">
            <p className="logo">E-Dashboard</p>
            <GiHamburgerMenu className="ham-menu" />
          </div>
          <div className="line">
            <svg
              fill="none"
              height="1"
              viewBox="0 0 240 1"
              width="240"
              xmlns="http://www.w3.org/2000/svg">
              <line stroke="#7F878A" x2="240" y1="0.5" y2="0.5" />
            </svg>
          </div>
          {/* {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <p>{item.title}</p>
                </Link>
              </li>
            );
          })} */}
        </Elements.Wrapper>
      </Elements.MainWrapper>
    </>
  );
};

export default Sidebar;
