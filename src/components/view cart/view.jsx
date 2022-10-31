import React from "react";
import './view.css'

function ViewCart() {
    return (
        <div className="viewcart">
            <div className="view-btn">
                <button>View Cart</button>
            </div>
            <div className="back">
                {/* <img src="images/back.png" alt="back button" /> */}
                <p>  Back</p>
                <h6>Table No: 10</h6>
                <p>Order summary</p>
                <div className="order-items">
                    <img src="images/veg.png" alt="veg symbol" className="veg"/>
                    <p className="item">Veg Fried Rice</p>
                    <input className="num" type="number" />
                </div>
                <button className="conform-btn">Conform Your Order</button>
            </div>
        </div>
    );
}

export {ViewCart}