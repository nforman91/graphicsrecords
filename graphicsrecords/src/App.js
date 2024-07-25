import './App.css';
import record from './img/record.jpg';
import GlobalStyle from './components/GlobalStyle';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <h1>Graphics Records</h1>
      <img src={record}/>
    </div>
  );
}

export default App;
