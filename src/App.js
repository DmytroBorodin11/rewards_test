import React from 'react';
import './App.css';
import Header from './Header/Header';
import StepsBlock from './Steps/StepsBlock';
import CustomersSerach from './CustomersSearch/CustomersSerach';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <StepsBlock />
      <CustomersSerach />
      <Footer />  
    </div>
  );
}

export default App;
