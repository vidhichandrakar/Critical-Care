import logo from './logo.svg';
import './App.css';
import MainComponent from './Component/MainComponent/MainComponent';
import ContactUs from './Component/Service/ContactUs';
import PrivacyPolicy from './Component/Service/PrivacyPolicy';


function App() {
  return (
    <div className="App">
      {/* <MainComponent/> */}
      <ContactUs/>
      <PrivacyPolicy/>
    </div>
  );
}

export default App;
