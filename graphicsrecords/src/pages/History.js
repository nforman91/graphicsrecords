import React from 'react';
import styled from 'styled-components';

const History = () => {
  return (
    <StyledHistory>
        <div>Graphics Records was founded in Boulder, Colorado, USA in 1991.</div>
        <div>The exact location is a mystery, but if you can find it, please let us know! :)</div>
    </StyledHistory>
  )
}

const StyledHistory = styled.div`
    font-size: 1.5rem;
    /* margin-bottom: 50rem; */
`;

export default History;
