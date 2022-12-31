import React from "react";
import useFetch from "../../hooks/useFetch";
import "./propertyTwo.css";

const PropertyTwo = () => {
  const { data, isLoading, error } = useFetch("/hotels?featured=true&limit=4");

  return (
    <div className="pTwo">
      {isLoading ? (
        "Loading please wait..."
      ) : (
        <>
          {data.map((item) => (
            <div className="pItem" key={item._id}>
              {item.photos[0] ? (
                ""
              ) : (
                <img
                  src="https://t-cf.bstatic.com/xdata/images/hotel/max500/71184956.jpg?k=4f0dd080f161eb3d2631565c7df9b6e634442addd10dc715b8dd519092a4517f&o="
                  alt=""
                  className="fImg"
                />
              )}
              <span className="pName">{item.name}</span>
              <span className="pCity">{item.city}</span>
              <span className="pPrice">
                Starting from ${item.cheapestPrice}
              </span>
              {item.rating && (
                <div className="pRating">
                  <button>{item.rate}</button>
                  <span>Good</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default PropertyTwo;
