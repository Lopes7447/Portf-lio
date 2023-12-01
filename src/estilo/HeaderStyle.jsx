import styled from "styled-components"
import {Link} from "react-router-dom"

export const Header = styled.header `
background-color: orangered;
border: yellow solid;
display: flex;
align-items: center;
justify-content: flex-end;
`
export const Ul = styled.ul `
width: 30vw;
display: flex;
justify-content: space-around;
`

export const H1 = styled.h1 `
position: relative;
right: 1200px;
color: #F9F9F9;
font-family: DM Sans;
font-size: 26px;
font-style: normal;
font-weight: 700;
line-height: normal;
`

export const StyledLink = styled(Link)`
color: #F9F9F9;
font-family: DM Sans;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
`