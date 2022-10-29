import React from "react";
import './menu.css'


function Menu() {
    return (
        <div className="menubar">
            <h4>Recommended (20)</h4>
            <div className="menu">
                <div className="menu-name">
                    <img src="images/veg.png" alt="veg symbol" />
                    <p>Veg Briyani</p>
                    <img className="star" src="images/star.png" alt="Star Rating" />
                    <p>Rs.80</p>
                </div>
                <div className="menu-pic">
                    <img className="food-pic" src="images/food.png" alt="food pic" />
                    <button className="add-btn">ADD</button>
                </div>
            </div>
        </div>
    );
}


export default Menu