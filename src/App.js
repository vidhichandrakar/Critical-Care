import logo from './logo.svg';
import './App.css';
import MainComponent from './Component/MainComponent/MainComponent';
import { Route, Routes } from 'react-router-dom'
import Aboutus from './Component/Aboutus/Aboutus';
import Terms from './Component/Terms&Condition/Terms';
import ContactUs from './Component/Service/ContactUs';
import PrivacyPolicy from './Component/Service/PrivacyPolicy';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/Critical-Care' Component={MainComponent}/>
        <Route path='/About-us' Component={Aboutus}/>
        <Route path='/Terms-&-Condition' Component={Terms}/>
        <Route path='/Contact-us' Component={ContactUs}/>
        <Route path='/Privacy-policy' Component={PrivacyPolicy }/>
      </Routes>
    </div>
  );
}

export default App;
