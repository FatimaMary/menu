import React from "react";
import './header.css';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

function Header() {
    return(
        <div className="header">
            {/* <div className="input-icon">
                <img src="images/search.png" alt="search button" />
                <input type="text" placeholder="search for dishes"  />
            </div> */}
                <div className="search">
                    <input type="text" placeholder="Search for Dishes..." />
                    <SearchOutlinedIcon className="icon"/>
                </div>
            <div className="head-btn">
                <button className="btn1">
                    <img className="btn-img1" src="images/veg.png" alt="Vegitarion Symbol" />
                    veg <img className="btn-img2" src="images/int.png" alt="cancel symbol" />
                </button>
                <button className="btn2">Bestseller</button>
                <button className="btn3">New</button>
            </div>
        </div>
    );
}

export default Header