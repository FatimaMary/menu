import React from "react";
import './view.css'

function ViewCart() {
    return (
        <div className="viewcart">
            <div className="view-btn">
                <button>View Cart</button>
            </div>
            <div>
                <img src="images/back.png" alt="back button" />
                
            </div>
        </div>
    );
}

export {ViewCart}