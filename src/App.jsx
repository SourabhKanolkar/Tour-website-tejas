
import './App.css'
import Home from './components/Home'
import AboutUs from './components/AboutUs';
import PrivacyPolicy from './components/PrivacyPolicy';
import ContactUs from './components/ContactUs';
import { Routes, Route } from "react-router-dom";

function App() {


  return (
    <>
  
  <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
 
    </>
  )
}

export default App
