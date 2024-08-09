import React from "react";
import backgroundimg from "../img/background.jpg";
import SpinningRecord from "../components/SpinningRecord";
import History from "./History";
import Products from "./Products";
import Contact from "./Contact";
import styled from 'styled-components';

const Home = () => {
    return(
        <StyledPage style={{ backgroundImage: `url(${backgroundimg})` }}>
            <StyledHomePageTitleAndRecord>
                <SpinningRecord/>
                <StyledHomePageTitle>Graphics Records</StyledHomePageTitle>
            </StyledHomePageTitleAndRecord>
            <StyledHomePageSubtitle>Make sure your volume is turned low, then hover over the record to scratch it!</StyledHomePageSubtitle>
            <StyledContent>
                <StyledLine/>
                    <History/>
                <StyledLine/>
                    <Products/>
                <StyledLine/>
                    <Contact/>
                <StyledLine/>
            </StyledContent>
        </StyledPage>
    );
}

const StyledPage = styled.div`
    margin: 0;
`;

const StyledHomePageTitleAndRecord = styled.div`
    display: flex;
`;

const StyledHomePageTitle = styled.h1`
    justify-content: center;
    font-family: "Amita";
    font-size: 3rem;
  margin: 2rem;
`;

const StyledHomePageSubtitle = styled.h1`
    justify-content: center;
    font-family: "Amita";
    font-size: 2rem;
  margin: 2rem;
`;

const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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
