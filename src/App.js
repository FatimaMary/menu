import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Menu from './components/menu/menu';
// import MenuItems from './components/menu/menuitems';
import {ViewCart} from './components/view cart/view'

function App() {
  return (
    <div>
      <Header />
      <Menu />
      
      <ViewCart /> 
      
    </div>
  );
}

export default App;
