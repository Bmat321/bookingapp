import React from "react";
import "./home.css";
import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
import Feacture from "../components/features/Feature";
import PropertyList from "../propertyList/propertyList";
import PropertyTwo from "../propertyTwo/propertyTwo";
import MailList from "../components/mailList/MailList";
import Footer from "../components/footer/footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Feacture />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Home guests love</h1>
        <PropertyTwo />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};
export default Home;
