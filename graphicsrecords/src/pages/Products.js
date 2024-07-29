import React from 'react';
import styled from 'styled-components';

const Products = () => {
  return (
    <StyledProducts>There are many products that are available for purchase at Graphics Records, including:
        <StyledUl>
            <li>Vinyl Records</li>
            <li>CDs</li>
            <li>Cassettes</li>
            <li>Merchandise</li>
        </StyledUl>
    </StyledProducts>
  )
}

const StyledProducts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 2rem;
    font-size: 1.5rem;
`;

const StyledUl = styled.ul`
    /* margin-right: 30rem; */
    padding-left: 30rem;
`;

export default Products;
