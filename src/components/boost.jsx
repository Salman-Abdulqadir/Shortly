import React from "react";

import styled from "styled-components";
import { StyledShorten } from "./shorten";

const Boost = () => {
    return (
        <StyledBoost>
            <h2>Boost your links today</h2>
            <button className="round-btn">Get Started</button>
        </StyledBoost>
    )
}

const StyledBoost = styled(StyledShorten)`
    
`

export default Boost;