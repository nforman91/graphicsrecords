import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const History = () => {
  return (
    <StyledHistory>
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
          <div>Graphics Records was founded somewhere in Colorado, USA in 1991.</div>
          <div>The exact location is a mystery, but if you can find it, please let us know! :)</div>
        </motion.div>
    </StyledHistory>
  )
}

const StyledHistory = styled.div`
    font-size: 1.5rem;
`;

export default History;
