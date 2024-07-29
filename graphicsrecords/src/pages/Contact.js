import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <StyledContact>You can contact Graphics Records at: 
        <div>Address: Boulder, CO, USA</div>
        <div>Phone #: TBD</div>
        <div>E-mail Address: TBD</div>
    </StyledContact>
  )
}

const StyledContact = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 1.5rem;
`;

export default Contact;
