import React, { useContext } from "react";
import "./navbar.scss";
import SeacrhOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../../context/DarkModeContext";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Searching..." />
          <SeacrhOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIUAhQMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAQUGBAMCB//EADUQAAICAQICBggEBwAAAAAAAAABAgMEBREhQTEyUVJhcRITIiM0coHBYpGh4RQkM0KCsdH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/AP1sgMFQAAAAAAAAAAAAAAAAAAEoBACGAwAAAAAAAed91dEPTtkorl4lbdrXHamndcnP9gLYFGtZyE+MKn9H/wBOrH1eqxqN0XW3/d0oCyBCalFSi90+hrmSAAAAAASgEAIYDAAAADyyb4Y1MrZ78OhdrPUo9bvc8hUp+zWuPmwOLIvnkWuy17vl2LyPMgFQJIAHbp2bLFmoTe9L6V3fFGgXFb8mZMvtGvduL6En7VT2+nIUd4AIoAAJQCAEMBgAAABmM2Tll3SffZpzM6hBwzbo/ib/AD4liVzgAAAAJLPQpP19seTj9ysLTQY+8unySSFFyACKAACUAgBDAYAAAAVGuY73jkRXDqz+zLcicYzg4TScZcGmBkgdudgWYrco7zqb4S7PM4ioAE7NtJcwBo9Nx/4bFjGXXk/Sl4M49M05xauyI7NcYw+7LYVQAEAAASgEAIYDAAA+ZzjXBznJRiulsD6Ik1FbyaS7WyoytYe/o4sdvxyX+kVlttl0vStnKT8WMGgs1HEr3TuUuW0FuV19+m2ttUWp9sUo/puVoKOpSwU+MMh/5I7cXM06l+7qnB96Ud3+ZUgDTVZePa9oXR37G9me/mZHlsdOPm5GP/Tse3dlxQwaUHBianTftCz3dj7eh/U7yAAAJQCAEMBgDzvuhRVKyx7RX6+BnsvLsyrN5vaK6sOSPXVcn1+Q4Qfu6+C8X2nCUSQAEAAAAAAAASWemai4ONN8t4PqyfTHz8CrJA1oK7R8l3Uuqb9utdPaixIqUAgBDPPIs9Vj2Wd2La8z0Zz5/wAFd8oGaABpAAEAAAAAAAAAAFHXpdnq86vj1vZf1NEjMYPxtHzo0y6CVY+kAgQNjn1BfyV3yMADMcgAaQABAAAAAAAAAAAHRg/GUfOjTJcCQKQSJAIr/9k="
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
