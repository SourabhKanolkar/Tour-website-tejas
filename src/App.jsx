
import './App.css'
import Home from './components/Home'
import AboutUs from './components/AboutUs';
import PrivacyPolicy from './components/PrivacyPolicy';
import { Routes, Route } from "react-router-dom";

function App() {


  return (
    <>
  
  <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
      </Routes>
 
    </>
  )
}

export default App
