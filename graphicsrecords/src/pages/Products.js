import React from 'react';
import styled from 'styled-components';

const Products = () => {
  return (
    <StyledProducts>There are many products that are available for purchase at Graphics Records, including:
        <ul>
            <li>Vinyl Records</li>
            <li>CDs</li>
            <li>Cassettes</li>
            <li>Merchandise</li>
        </ul>
    </StyledProducts>
  )
}

const StyledProducts = styled.div`
    margin-bottom: 2rem;
`;

export default Products;
