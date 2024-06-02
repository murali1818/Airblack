import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Image from './components/Image';
import AirblackPromo from './components/AirblackPromo';
import Hero from './components/Hero';
import Certified from './components/Certified';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Router>
        <Image></Image>
        <Hero></Hero>
        <AirblackPromo></AirblackPromo>
        <Certified></Certified>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
