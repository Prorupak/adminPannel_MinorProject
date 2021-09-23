/* eslint-disable arrow-body-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const MainWrapper = styled.section`
  height: 100vh;
  width: ${(props) => props.theme.margins.mr230};
  max-width: 900px;
  background-color: ${(props) => props.theme.colors.bluish};
`;
