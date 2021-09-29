/* eslint-disable react/destructuring-assignment */
import React from 'react';

// styled-components
import * as Elements from './Elements.Navbar';

// Assets
import Images from '../../Assets/Images/Images';
import Badge from '../Badge/Badge';

const Navbar = (page: any) => {
  return (
    <>
      <Elements.MainWrapper>
        <Elements.LeftSection>
          <Elements.PageHeading>{page.heading}</Elements.PageHeading>
        </Elements.LeftSection>
        <Elements.RightSection>
          <Elements.NavIcons>
            <Badge />
            <Elements.Message />
            <Elements.Notification />
            <Elements.Order />
          </Elements.NavIcons>
          <Elements.UserProfile>
            <Elements.UserDetail>
              <Elements.UserName>john doe</Elements.UserName>
              <Elements.Position>admin</Elements.Position>
            </Elements.UserDetail>
            <Elements.ProfilePic src={Images.Profile} />
          </Elements.UserProfile>
        </Elements.RightSection>
      </Elements.MainWrapper>
    </>
  );
};

export default Navbar;
