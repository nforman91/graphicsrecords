import './App.css';
import GlobalStyle from './components/GlobalStyle';
import Home from "./pages/Home";
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
          {/* <Route exact path="/record">
          </Route> */}
        {/* </Routes> */}
      {/* </Router> */}
    </div>
  );
};

export default App;
