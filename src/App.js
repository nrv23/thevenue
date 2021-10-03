import React from 'react';
import Featured from './Components/feature';
import Footer from './Components/header_footer/Footer';
import Header from './Components/header_footer/Header';
import VenueNFO from './Components/venueNFO';
import Highlights from './Components/highlights';
import Pricing from './Components/pricing';
import Location from './Components/location';
import { Element } from 'react-scroll';
import './resources/styles.css';

const App = () => {
  return (
    <div className="App">
      <Header />

      <Element name="featured">
        <Featured/>
      </Element>

      <Element name="venuenfo">
        <VenueNFO/>
      </Element>

      <Element name="highlights">
        <Highlights/>
      </Element>

      <Element name="pricing">
        <Pricing/>
      </Element>

      <Element name="location">
        <Location/>
      </Element>

 
      <Footer />
    </div>
  );
}

export default App;
