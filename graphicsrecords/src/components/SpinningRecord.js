import record from '../img/record2.png';
import styled from 'styled-components';
import useSound from 'use-sound';
import buttonHoverSound from '../sounds/record_scratch.mp3';

const SpinningRecord = () => {
  const soundUrl = buttonHoverSound;
  const [play] = useSound(soundUrl);

  return (
    <StyledRecordImg src={record} onMouseEnter={play}/>
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
