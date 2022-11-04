import React from "react";
import './view.css'

function ViewCart() {
    return (
        <div className="viewcart">
            <div className="view-btn">
                <button type="button">View Cart</button> 
            </div>
            <div className="back">
                {/* <img src="images/back.png" alt="back button" /> */}
                <p className="view-back">  Back</p>
                <h6>Table No: 10</h6>
                <p className="orsum">Order summary</p>
                <div className="order-items">
                    <div className="item1">
                        <img src="images/veg.png" alt="veg symbol" className="view-veg"/>
                        <p className="item-ordered">Veg Fried Rice</p>
                    </div>
                    <div>
                        <input className="num" type="number" />
                    </div>
                </div>
                <button className="conform-btn">Conform Your Order</button>
            </div>
        </div>
    );
}

export {ViewCart}