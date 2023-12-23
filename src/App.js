import logo from './logo.svg';
import './App.css';
import MainComponent from './Component/MainComponent/MainComponent';
import { Route, Routes } from 'react-router-dom'
import Aboutus from './Component/Aboutus/Aboutus';
import Terms from './Component/Terms&Condition/Terms';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' Component={MainComponent}/>
        <Route path='/About-us' Component={Aboutus}/>
        <Route path='/Terms-&-Condition' Component={Terms}/>
        <Route path='/Contact-us' Component={MainComponent}/>
        <Route path='/Privacy-policy' Component={MainComponent}/>
      </Routes>
    </div>
  );
}

export default App;
