import React from "react";
import styled from "styled-components";

//importing icons
import detailed from "../images/icon-detailed-records.svg";
import customizable from "../images/icon-fully-customizable.svg";
import recognition from "../images/icon-brand-recognition.svg";

const Card = ({ icon, title, description }) => {
  return (
    <StyledCard>
      <img src={icon} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </StyledCard>
  );
};

const Statistics = () => {
  return (
    <StyledStatistics>
      <h2>Advanced Statistics</h2>
      <p>
        Track how your links are performing across the web with our advanced
        statistics dashboard
      </p>
      <Cards>
        <Card
          icon={recognition}
          title={"Brand Recognition"}
          description="Boost your brand recogntion with each click. Generic links don't mean a thing. Branded links help instil confidence in your content"
        />
        <Card
          icon={detailed}
          title={"Detailed Records"}
          description="Boost your brand recogntion with each click. Generic links don't mean a thing. Branded links help instil confidence in your content"
        />
        <Card
          icon={customizable}
          title={"Fully Customizable"}
          description="Boost your brand recogntion with each click. Generic links don't mean a thing. Branded links help instil confidence in your content"
        />
      </Cards>
    </StyledStatistics>
  );
};
const StyledStatistics = styled.section``;
const StyledCard = styled.div``;
const Cards = styled.div``;

export default Statistics;
