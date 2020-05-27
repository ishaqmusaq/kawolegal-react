import React from 'react';
import './App.css';
import Navbar from './maincomponent/navbar';
import Home from './maincomponent/Home';
import Footer from './maincomponent/footer';


function App() {
  return (
    <div className='App'>
      
      <Home />
    <Navbar />
    
    <Footer />
    </div>    

  );
}
export default App;
