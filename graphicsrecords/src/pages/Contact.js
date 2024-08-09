import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            amount: "all",
          }}
        >
      <StyledContact>You can contact Graphics Records at: 
          <StyledContactDetails>Address: Somewhere, CO, USA</StyledContactDetails>
          <StyledContactDetails>Phone #: (303) 579-4398</StyledContactDetails>
          <StyledContactDetails>E-mail Address: nathan.forman@gmail.com</StyledContactDetails>
      </StyledContact>
    </motion.div>
  )
}

const StyledContact = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 1.5rem;
`;

const StyledContactDetails = styled.div`
    margin-left: 2rem;
`;

export default Contact;
