import React, { useEffect } from "react";
import {motion} from "framer-motion";
import {pageAnimation} from "../animation";
import styled from 'styled-components';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return(
        <motion.div
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
        >
            <StyledHomePageTitle>Graphics Records</StyledHomePageTitle>
        </motion.div>
    );
}

const StyledHomePageTitle = styled.h1`
  margin: 2rem;
`;

export default Home;
