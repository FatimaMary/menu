import React from "react";
import './menu.css';
import  Data from './data.json';



function MenuItems() {
    return ( <div>{ 
        Data && Data.map( menuItem => {
            return (   <div className="menu-item">
                           <div className="menu-item-name">
                                <img className="veg" src={ menuItem.vegSymbol } alt="veg symbol" />
                                <p className="name">{ menuItem.itemName}</p>
                               <img className="star" src={ menuItem.starRate } alt="Star Rating" />
                               <p className="rate">{ menuItem.amount }</p>
                            </div>
                           <div className="menu-item-pic">
                               <img className="food-pic" src={ menuItem.foodImg } alt="food pic" />
                               <button className="add-btn" id="add-btn">{ menuItem.button }</button>
                           </div>
                       </div>);
        })
}</div>);
}

// function select () {
//     console.log("add btn clicked");
//     document.getElementById("view-btn").classList.toggle("active");
// }
// document.getElementById("add-btn").addEventListener('click', select)

export default MenuItems