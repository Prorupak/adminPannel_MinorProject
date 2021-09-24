/* eslint-disable arrow-body-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const MainWrapper = styled.section`
  height: 100vh;
  width: ${(props) => props.theme.margins.mr240};
  /* max-width: 900px; */
  background-color: ${(props) => props.theme.colors.bluish};

  .logo-section {
    display: flex;
    align-items: center;

    .logo {
      margin: ${(props) => props.theme.margins.mr25} 0 0
        ${(props) => props.theme.margins.mr10};
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 1.4rem;
      line-height: 20px;
      display: flex;
      align-items: center;
      letter-spacing: 0.01em;
      color: #ffffff;
    }
    .ham-menu {
      position: relative;
      left: ${(props) => props.theme.margins.mr25};
      margin: ${(props) => props.theme.margins.mr25} 0 0 0;

      font-size: ${(props) => props.theme.margins.mr20};
      color: ${(props) => props.theme.colors.grey};
    }
  }

  .line {
    position: absolute;
    left: 0;
    margin-top: ${(props) => props.theme.margins.mr70};
    width: ${(props) => props.theme.margins.mr240};
  }
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const Line = styled.hr`
  stroke: 1.5px;
  transform: rotate(180deg);
`;
