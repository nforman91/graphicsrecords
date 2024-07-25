import './App.css';
import record from './img/record.jpg';
import GlobalStyle from './components/GlobalStyle';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <StyledHomePageTitle>Graphics Records</StyledHomePageTitle>
      <StyledRecordImg src={record}/>
    </div>
  );
}

const StyledHomePageTitle = styled.h1`
  margin: 2rem;
`;

const StyledRecordImg = styled.img`
  margin-bottom: 2rem;
`;

export default App;
