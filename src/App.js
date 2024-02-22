import logo from './logo.svg';
import './App.css';
import MainComponent from './Component/MainComponent/MainComponent';
import { Route, Routes } from 'react-router-dom'
import Aboutus from './Component/Aboutus/Aboutus';
import Terms from './Component/Terms&Condition/Terms';
import ContactUs from './Component/Service/ContactUs';
import PrivacyPolicy from './Component/Service/PrivacyPolicy';
import TopCourse from './Component/AllCourse/TopCourse';
import EDIC from './Component/AllCourse/EDIC';
import EDIC2 from './Component/AllCourse/EDIC2';
import IDCCM from './Component/AllCourse/IDCCM';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/Critical-Care' Component={MainComponent}/>
        <Route path='/About-us' Component={Aboutus}/>
        <Route path='/Terms-&-Condition' Component={Terms}/>
        <Route path='/Contact-us' Component={ContactUs}/>
        <Route path='/Privacy-policy' Component={PrivacyPolicy }/>
        <Route path='/TopCourse' Component={TopCourse}/>
        <Route path='/EDIC' Component={EDIC}/>
        <Route path='/EDIC2' Component={EDIC2}/>
        <Route path='/IDCCM' Component={IDCCM}/>
      </Routes>
    </div>
  );
}

export default App;
