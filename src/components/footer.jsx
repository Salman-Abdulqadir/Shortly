import React from "react";
import styled from "styled-components";

//importing images
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";
import logo from "../images/logo.svg";

const Footer = () => {
  return (
    <StyledFooter>
      <img src={logo} alt="logo" />
      <ul>
        <h5>Features</h5>
        <li>Link Shortening</li>
        <li>Branded links</li>
        <li>Analytics</li>
      </ul>
      <ul>
        <h5>Resources</h5>
        <li>Blog</li>
        <li>Developers</li>
        <li>Support</li>
      </ul>
      <ul>
        <h5>Company</h5>
        <li>About</li>
        <li>Our Team</li>
        <li>Careers</li>
        <li>Contact</li>
      </ul>
      <ul>
        <img src={facebook} alt="facebook" />

        <img src={twitter} alt="twitter" />

        <img src={pinterest} alt="pinterest" />

        <img src={instagram} alt="instagram" />
      </ul>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer``;

export default Footer;
