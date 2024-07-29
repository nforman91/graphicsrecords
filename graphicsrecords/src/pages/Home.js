import React, { useEffect } from "react";
import SpinningRecord from "../components/SpinningRecord";
import History from "./History";
import Products from "./Products";
import Contact from "./Contact";
import styled from 'styled-components';
// Animations
import { motion } from "framer-motion";
import {
    pageAnimation,
    fade,
    photoAnim,
    lineAnim
} from '../animation';
// import { useScroll } from "framer-motion";
import ScrollTop from "../components/ScrollTop";

const Home = () => {
    // const [element, controls] = useScroll();
    // const [element2, controls2] = useScroll();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return(
        <motion.div
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
            // style={{ background: '#fff' }}
        >
            <StyledHomePageTitleAndRecord>
                <SpinningRecord/>
                <StyledHomePageTitle>Graphics Records</StyledHomePageTitle>
            </StyledHomePageTitleAndRecord>
            <StyledContent>
                <StyledLine/>
                    <History/>
                <StyledLine/>
                    <Products/>
                <StyledLine/>
                    <Contact/>
                <StyledLine/>
            </StyledContent>
            {/* <ScrollTop/> */}
        </motion.div>
    );
}

const StyledHomePageTitleAndRecord = styled.div`
    display: flex;
    /* margin-bottom: 50rem; */
`;

const StyledHomePageTitle = styled.h1`
    /* display: flex; */
    justify-content: center;
    font-family: "Amita";
    font-size: 3rem;
  margin: 2rem;
`;

const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    margin-left: 3rem;
    font-family: "Amita";
`;

const StyledLine = styled.div`
    height: 50rem;
    width: 0.1rem;
    background-color: black;
    margin-top: 2rem;
    margin-bottom: 2rem;
`;

export default Home;
