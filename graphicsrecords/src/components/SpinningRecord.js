import record from '../img/record.jpg';
import styled from 'styled-components';

const SpinningRecord = () => {
  return (
    <StyledRecordImg src={record}/>
  );
}

const StyledRecordImg = styled.img`
    height: 20rem;
    width: 20rem;
    margin-top: 2rem;
  margin-left: 2rem;
  border-radius: 50%;
  &:hover {
    animation: rotation 2s infinite linear;
    
    @keyframes rotation {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(359deg);
        }
    }
}
`;

export default SpinningRecord;
