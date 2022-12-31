import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget prop="user" />
          <Widget prop="product" />
          <Widget prop="order" />
          <Widget prop="earning" />
        </div>
        <div className="charts">
          <Featured />
          <Chart aspect={2 / 1} title="Last 6 Months" />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transaction</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
