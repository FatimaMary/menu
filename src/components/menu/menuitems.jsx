import React from "react";
import './menu1.css';
import  Data from './data.json';



function MenuItems() {
    return ( <div>{ 
        Data && Data.map( menuItem => {
            return (   <div className="menu-item">
                           <div className="menu-item-name">
                                <img src={ menuItem.vegSymbol } alt="veg symbol" />
                                <p>{ menuItem.itemName}</p>
                               <img className="star" src={ menuItem.starRate } alt="Star Rating" />
                               <p>{ menuItem.amount }</p>
                            </div>
                           <div className="menu-item-pic">
                               <img className="food-pic" src={ menuItem.foodImg } alt="food pic" />
                               <button className="add-btn">{ menuItem.button }</button>
                           </div>
                       </div>);
        })
}</div>);
}

export default MenuItems