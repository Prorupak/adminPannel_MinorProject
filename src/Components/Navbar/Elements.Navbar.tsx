/* eslint-disable arrow-parens */
/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import * as GrIcons from 'react-icons/gr'
import * as BiIcons from 'react-icons/bi'
import * as CgIcons from 'react-icons/cg'

export const MainWrapper = styled.section`
display: flex;
place-items:center;
justify-content: space-between;
padding: ${(props) => props.theme.margins.mr18} ${(props) => props.theme.margins.mr30};
margin-left: ${(props) => props.theme.margins.mr65};
background: ${(props) => props.theme.colors.white};
max-width: 100vw;
min-width: 96.5vw;
`

export const LeftSection = styled.div`
`
export const RightSection = styled.div`
display: flex;
gap: 2em;
`
export const NavIcons = styled.div`
cursor: pointer;
display: flex;
place-content: center;
place-items: center;
gap: 2em;
`

export const Notification = styled(GrIcons.GrNotification)`
color: #000;
font-size:25px;
`

export const Message = styled(BiIcons.BiMessageSquare)`
color: #000;
font-size:25px;
`

export const Order = styled(CgIcons.CgShoppingBag)`
color: #000;
font-size:25px;
`

export const PageHeading = styled.p`
text-transform: capitalize;
font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 600;
font-size: 25px;
/* line-height: 24px; */
display: flex;
align-items: center;
letter-spacing: 0.01em;
color: #000000;

 `

export const UserProfile = styled.div`
display: flex;
gap: 0.95em;
place-content: center;
place-items: center;
 `

export const UserDetail = styled.div`

 `

export const ProfilePic = styled.img`
    cursor: pointer;
    width: 60px;
    height: 60px;
 `
export const UserName = styled.p`
cursor: pointer;
text-transform: capitalize;
font-family: 'poppins', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 1.2rem;
line-height: 21px;
text-align: right;
color: ${props => props.theme.colors.blackish};
`

export const Position = styled.p`
cursor: pointer;;
text-transform: capitalize;
font-family: 'poppins', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 1.1rem;
line-height: 21px;
text-align: right;
color: ${props => props.theme.colors.blackish};
`
