import React from "react";
import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ item }) => {
  return (
    <div className="seacT">
      <img src={item.photos[0]} alt="" className="sIm" />
      <div className="desI">
        <h1 className="dOne">{item.name}</h1>
        <span className="dTwo">{item.distance}m from the centre</span>
        <span className="dThree">Free airport taxi</span>
        <span className="dFour">Located Giza</span>
        <span className="dFive">{item.desc}</span>
        <span className="dSix">Located Giza</span>
        <span className="dSeve">Located Giza</span>
      </div>
      <div className="detI">
        {item.rating && (
          <div className="dR">
            <span>Excellent</span>
            <button>{item.rating}</button>
          </div>
        )}
        <div className="dText">
          <span className="dPrice">${item.cheapestPrice}</span>
          <span className="dTax">Includes taxes and fees</span>
          <Link to={`/hotels/${item._id}`}>
            <button className="dAva">See Availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
