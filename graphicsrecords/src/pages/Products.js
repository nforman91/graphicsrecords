import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Products = () => {
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
      <StyledProducts>There are many products that are available for purchase at Graphics Records, including:
          <StyledUl>
              <li>Vinyl Records</li>
              <li>Audio CDs</li>
              <li>Cassettes</li>
              <li>Merchandise</li>
          </StyledUl>
      </StyledProducts>
    </motion.div>
  )
}

const StyledProducts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 1.5rem;
`;

const StyledUl = styled.ul`
    padding-left: 30rem;
`;

export default Products;
