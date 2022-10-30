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

// async function getMenu() {
//     let response = await fetch(menu.json);
//     let menu = await response.json();
//     let n = 1
//     return menu.map(menu => {
//         menu.id = n
//         n += 1
//         return menu
//     })
// }

// function getMenuHtml(menu) {
//     return 
//                `<h4>Recommended (20)</h4>
//                <div className="menu">
//                    <div className="menu-name">
//                        <img src="${menu.veg-symbol}" alt="veg symbol" />
//                        <p>${menu.item-name}</p>
//                        <img className="star" src="${manu.star-rate}" alt="Star Rating" />
//                        <p>${menu.amount}</p>
//                    </div>
//                    <div className="menu-pic">
//                        <img className="food-pic" src="${menu.food-img}" alt="food pic" />
//                        <button className="add-btn">${menu.button}</button>
//                    </div>
//                </div>
//            `
// }

// function displayMenu(menu) {
//     document.body.innerHTML = `<div class="my-menu">
//         ${menu.map(getMenuHtml).join('')}
//     </div>`
// }

// getMenu() 
//     .then(displayMenu)
//     .catch(e => console.log(e))

export default Menu