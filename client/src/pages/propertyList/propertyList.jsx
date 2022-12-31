import React from "react";
import useFetch from "../../hooks/useFetch.js";
import "./propertyList.css";

const PropertyList = () => {
  const { data, isLoading, error } = useFetch("/hotels/countByType");

  const images = [
    "https://t-cf.bstatic.com/xdata/images/city/square250/822312.webp?k=f0e5aa24884bf61ddc08284c59807fa7d3a66b72fbdcec15488faf45824143b6&o=",
    "https://t-cf.bstatic.com/xdata/images/city/square250/822312.webp?k=f0e5aa24884bf61ddc08284c59807fa7d3a66b72fbdcec15488faf45824143b6&o=",
    "https://t-cf.bstatic.com/xdata/images/city/square250/822312.webp?k=f0e5aa24884bf61ddc08284c59807fa7d3a66b72fbdcec15488faf45824143b6&o=",
    "https://t-cf.bstatic.com/xdata/images/city/square250/661041.webp?k=9b623dbbbf3f001248b38d9e75f2a71f985b44436b2fd871d2e6153c3d76a9be&o=",
  ];

  return (
    <div className="pList">
      {isLoading ? (
        "Loading please wait..."
      ) : (
        <>
          {data &&
            images.map((img, i) => (
              <div className="pListItem" key={i}>
                <img src={img} alt="" className="pListImg" />
                <div className="pListTitle">
                  <h1>{data[i]?.type}</h1>
                  <h2>
                    {data[i]?.count} {data[i]?.type}
                  </h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
