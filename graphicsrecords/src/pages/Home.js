import React, { useEffect } from "react";
// import SpinningRecord from "../components/SpinningRecord";
import record from '../img/record.jpg';
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
            {/* <SpinningRecord/> */}
            <StyledRecordImg src={record}/>
        </motion.div>
    );
}

const StyledHomePageTitle = styled.h1`
  margin: 2rem;
`;

const StyledRecordImg = styled.img`
  margin-bottom: 2rem;
  border-radius: 50%;
  /* hover: {
    transform: rotate(45deg);
  } */
`;

export default Home;
