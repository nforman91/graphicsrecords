import record from '../img/record2.png';
import styled from 'styled-components';
import SoundPlayer from 'react-native-sound-player';
import buttonHoverSound from '../sounds/record_scratch.mp3';

const SpinningRecord = () => {
  const soundUrl = buttonHoverSound;

  return (
    <StyledRecordImg 
      src={record} 
      onMouseEnter={
        SoundPlayer.playAsset(require(soundUrl))
      }
    />
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
