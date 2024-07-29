import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <StyledContact>You can contact Graphics Records at: 
        <StyledContactDetails>Address: Boulder, CO, USA</StyledContactDetails>
        <StyledContactDetails>Phone #: TBD</StyledContactDetails>
        <StyledContactDetails>E-mail Address: TBD</StyledContactDetails>
    </StyledContact>
  )
}

const StyledContact = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 1.5rem;
    margin-bottom: 50rem;
`;

const StyledContactDetails = styled.div`
    margin-left: 2rem;
`;

export default Contact;
