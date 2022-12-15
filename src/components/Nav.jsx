import React from "react";

import styled from "styled-components";

import logo from "../images/logo.svg";

const Nav = () => {
  return (
    <StyledNav className="flex">
      <div className="links flex">
        <img src={logo} alt="" className="logo" />
        <ul className="flex">
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
      </div>
      <div className="btns flex">
        <button className="btn white-btn">Login</button>
        <button className="btn round-btn">Sign up</button>
      </div>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  padding: 3rem 0rem;
  width: 80%;
  margin: auto;
  .links{
    gap: 3rem;
  }
`;
export default Nav;
