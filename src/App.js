import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Startpage from './pages/Startpage';
import ContactUs from './pages/ContactUs';
import FindUs from './pages/FindUs';
import Gallery from './pages/Gallery';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Api from './pages/ApiTest';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Startpage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/findus" element={<FindUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/api" element={<Api />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
