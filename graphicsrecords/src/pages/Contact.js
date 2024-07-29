import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <StyledContact>You can contact Graphics Records at: 
        <div>Address: City, State, Country</div>
        <div>Phone #: TBD</div>
        <div>E-mail Address: TBD</div>
    </StyledContact>
  )
}

const StyledContact = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export default Contact;