import React from 'react';
import './App.css';
import Header from './components/header/Header';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Shop from './components/shop/Shop';


function App() {
  return (
    <div className="container">
      <Header></Header>
      <Shop></Shop>
      
    </div>
  );
}

export default App;
