import { Link } from 'gatsby'
import styled from "styled-components"

const StyledLink = styled(Link)`

  box-shadow: 'none';
  text-decoration: none;
  background-image: none;
  text-shadow: 1px 1px 1px black;
  color: #fcc11d;

  &:hover {
    color: #84daf8;
    text-decoration: underline;
  }
`

export default StyledLink
