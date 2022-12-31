import React from "react";
import "./mailList.css";

const MailList = () => {
  return (
    <div className="mL">
      <h1 className="mT">Save time, save Money!</h1>
      <span className="mD">Sign up and we'll send the best deals to you</span>
      <div className="mailCont">
        <input type="text" placeholder="Your Email" />
        <button>Subscription</button>
      </div>
    </div>
  );
};

export default MailList;
