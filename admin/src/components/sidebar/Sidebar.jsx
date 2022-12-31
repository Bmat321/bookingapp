import React, { useContext } from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import AirportShuttleOutlinedIcon from "@mui/icons-material/AirportShuttleOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";
import ManageAccountsRoundedIcon from "@mui/icons-material/ManageAccountsRounded";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/DarkModeContext";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">bmatadmin</span>
        </Link>
      </div>
      <hr />
      <div className="centre">
        <ul className="list">
          <p className="tittle">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="tittle">LISTS</p>

          <li>
            <PersonRoundedIcon className="icon" />
            <Link to="/users" style={{ textDecoration: "none" }}>
              <span>Users</span>
            </Link>
          </li>

          <li>
            <ProductionQuantityLimitsIcon className="icon" />
            <Link to="/hotels" style={{ textDecoration: "none" }}>
              <span>Hotels</span>
            </Link>
          </li>

          <li>
            <CardGiftcardIcon className="icon" />
            <Link to="/rooms" style={{ textDecoration: "none" }}>
              <span>Rooms</span>
            </Link>
          </li>

          <li>
            <AirportShuttleOutlinedIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="tittle">USEFUL</p>

          <li>
            <QueryStatsOutlinedIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsOutlinedIcon className="icon" />
            <span>Notifications</span>
          </li>
          <li>
            <SettingsSystemDaydreamIcon className="icon" />
            <span>System Health</span>
          </li>
          <p className="tittle">SERVICES</p>

          <li>
            <PsychologyRoundedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsRoundedIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="tittle">USERS</p>
          <li>
            <ManageAccountsRoundedIcon className="icon" />
            <span>Profile</span>
          </li>

          <li>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
