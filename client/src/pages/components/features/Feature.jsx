import React from "react";
import useFetch from "../../../hooks/useFetch";

import "./feature.css";

const Feacture = () => {
  const { data, isLoading, error } = useFetch(
    "/hotels/countByCity?cities=usa,berlin.london,madrid"
  );

  return (
    <div className="feature">
      {isLoading ? (
        "Loading please wait..."
      ) : (
        <>
          <div className="featureItem">
            <img
              src="https://t-cf.bstatic.com/xdata/images/city/square250/815261.webp?k=96c6465292cad5f9afffb2925a9f76b126d4675423300a6e63917f1fcf459a19&o="
              alt=""
              className="featureImg"
            />
            <div className="featureTitle">
              <h1>Berlin</h1>
              <h3>{data[0]} property</h3>
            </div>
          </div>
          <div className="featureItem">
            <img
              src="https://t-cf.bstatic.com/xdata/images/city/square250/684500.webp?k=df54bcea224564a0a00497a2076d5338316a0b56692498eddb3c02c9a6cdde64&o="
              alt=""
              className="featureImg"
            />
            <div className="featureTitle">
              <h1>London</h1>
              <h3>{data[2]} property</h3>
            </div>
          </div>
          <div className="featureItem">
            <img
              src="https://t-cf.bstatic.com/xdata/images/city/square250/661041.webp?k=9b623dbbbf3f001248b38d9e75f2a71f985b44436b2fd871d2e6153c3d76a9be&o="
              alt=""
              className="featureImg"
            />
            <div className="featureTitle">
              <h1>Madrid</h1>
              <h3>{data[3]} property</h3>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Feacture;
