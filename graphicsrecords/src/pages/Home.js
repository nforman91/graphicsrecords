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
            <StyledHomePageTitleAndRecord>
                <StyledRecordImg src={record}/>
                <StyledHomePageTitle>Graphics Records</StyledHomePageTitle>
                {/* <SpinningRecord/> */}
            </StyledHomePageTitleAndRecord>
        </motion.div>
    );
}

const StyledHomePageTitleAndRecord = styled.div`
    display: flex;
`;

const StyledHomePageTitle = styled.h1`
    font-family: "Amita";
    font-size: 2rem;
  margin: 2rem;
`;

const StyledRecordImg = styled.img`
    height: 5rem;
    width: 5rem;
    margin-top: 2rem;
  margin-left: 2rem;
  border-radius: 50%;
  &:hover {
    animation: rotation 2s infinite linear;
    
    @keyframes rotation {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(359deg);
        }
    }
}
`;

export default Home;
