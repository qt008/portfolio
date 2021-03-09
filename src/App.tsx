import React from 'react';
import './App.css';
import AboutUs from './pages/Aboutus';
import Hompage from './pages/Homepage';
import Fab from '@material-ui/core/Fab';
import Portfolio from './pages/Portfolio';
import Connect from './pages/Connect';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="App">
      <Hompage />
      <AboutUs/>
      <Portfolio />
      <Connect />
      <Footer />
      
      

    </div>
  );
}

export default App;
