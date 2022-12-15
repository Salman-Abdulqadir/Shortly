import React from "react";

import styled from "styled-components";

import hero_img from "../images/illustration-working.svg";

const Hero = () => {
  return (
    <StyledHero className="flex">
      <div className="hero-text">
        <h1>More than Just <br/> shorter links</h1>
        <p>
          Build your brand's recognition and get <br /> details insights on how your
          links are performing.
        </p>
        <button className="btn round-btn">Get Started</button>
      </div>
      <div className="hero-image">
        <img src={hero_img} alt="main" />
      </div>
    </StyledHero>
  );
};

const StyledHero = styled.section`
  width: 80%;
  margin: 3rem auto;
  .hero-text{
    flex: 1;
    h1{
      font-size: 4rem;
    }
    p{
      margin-bottom: 2rem;
    }
  }
`;
export default Hero;
