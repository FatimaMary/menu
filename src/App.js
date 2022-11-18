import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Menu from './components/menu/menu';
// import MenuItems from './components/menu/menuitems';
import {ViewCart} from './components/view cart/view'
import Conform from './components/Conform/conform';
import Cart from './components/cart';


function App() {
  return (
    <div className='app'>
      <Header />
      <Menu />
      <ViewCart /> 
      <Conform />
      {/* <Cart/> */}
    </div>
  );
}


export default App;
