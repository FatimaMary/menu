import React from "react";
import './menu1.css'
// import Menu from './menu'

function MenuItem() {
    return (
        <div className="menubar">
            {/* <h4>Recommended (20)</h4> */}
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

// function MenuItem() {
//     return (
//         Menu && Menu.map( menu => {
//             return (   <div className="menu">
//                            <div className="menu-name">
//                                   <img src="{[menu.veg-symbol]}" alt="veg symbol" />
//                                   <p>{[menu.item]}</p>
//                                <img className="star" src="{[menu.star-rate]}" alt="Star Rating" />
//                                <p>{[menu.amount]}</p>
//                             </div>
//                            <div className="menu-pic">
//                                <img className="food-pic" src="{[menu.food-img]}" alt="food pic" />
//                                <button className="add-btn">{[menu.button]}</button>
//                            </div>
//                        </div>);
//         })
//     )
// }

export default MenuItem