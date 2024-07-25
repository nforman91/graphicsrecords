import './App.css';
// import record from './img/record.jpg';
import GlobalStyle from './components/GlobalStyle';
// import styled from 'styled-components';
import Home from "./pages/Home";
import SpinningRecord from "./components/SpinningRecord";
// Router
import { Switch, Router, Routes, Route, useLocation } from 'react-router-dom';
// Animation
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      {/* <Router> */}
        {/* <Routes> */}
          {/* <Route exact path="/" element={<Home/>}/> */}
            <Home/>
            {/* <SpinningRecord/> */}
          {/* <Route exact path="/record">
            <StyledRecordImg src={record}/>
          </Route> */}
        {/* </Routes> */}
      {/* </Router> */}
    </div>
  );
}

// const StyledRecordImg = styled.img`
//   margin-bottom: 2rem;
//   border-radius: 50%;
// `;

export default App;
