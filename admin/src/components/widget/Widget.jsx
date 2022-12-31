import React, { useEffect } from "react";
import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { useState } from "react";

const Widget = ({ prop }) => {
  const [amount, setAmount] = useState(null);
  const [diff, setDiff] = useState(null);
  let data;

  switch (prop) {
    case "user":
      data = {
        title: "USER",
        isMoney: false,
        link: "See all users",
        query: "users",
        icon: (
          <PersonRoundedIcon
            className="icon"
            style={{
              color: "green",
              backgroundColor: "rgba(77, 219, 20, 0.491)",
            }}
          />
        ),
      };

      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              color: "goldenrod",
              backgroundColor: "rgba(236, 193, 82, 0.719)",
            }}
          />
        ),
      };

      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View all earnings",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{
              color: "lightseagreens",
              backgroundColor: "rgba(40, 159, 159, 1.9)",
            }}
          />
        ),
      };

      break;
    case "product":
      data = {
        title: "PRODUCTS",
        query: "products",
        link: "See details",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              color: "darkgreen",
              backgroundColor: "rgba(7, 134, 7, 0.883)",
            }}
          />
        ),
      };

      break;

    default:
      break;
  }

  useEffect(() => {
    const fecthData = async () => {
      const today = new Date();
      const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));
      const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2));

      const lastMonthQuery = query(
        collection(db, data.query),
        where("timestamp", "<=", today),
        where("timestamp", ">", lastMonth)
      );
      const prevMonthQuery = query(
        collection(db, "users"),
        where("timestamp", "<=", lastMonth),
        where("timestamp", ">", prevMonth)
      );
      const lastMonthData = await getDocs(lastMonthQuery);
      const prevMonthData = await getDocs(prevMonthQuery);

      setAmount(lastMonthData.docs.length);
      setDiff(
        ((lastMonthData.docs.length - prevMonthData.docs.length) /
          prevMonthData.docs.length) *
          100
      );
    };
    fecthData();
  }, []);

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className={`percentage ${diff < 0 ? "negative" : "positive"}`}>
          {diff < 0 ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
