import React, { useContext } from "react";
import "./hotel.css";
import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
import MailList from "../components/mailList/MailList";
import Footer from "../components/footer/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import useFetch from "../../hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import Reserve from "../components/reserve/Reserve";

const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [slider, setSlider] = useState(0);
  const [openImage, setOpenImage] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const { data, isLoading, error } = useFetch(`/hotels/find/${id}`);

  const { dates, option } = useContext(SearchContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // const MILLESECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  // function dayDifference(date1, date2) {
  //   const startDate = new Date(date1);
  //   const endDate = new Date(date2);
  //   const timeDiff = Math.abs(startDate.getTime() - endDate.getTime());
  //   const diffDays = Math.ceil(timeDiff / MILLESECONDS_PER_DAY);
  //   return diffDays;
  // }
  const MILLESECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  const dayDifference = (date1, date2) => {
    // const startDate = new Date(date1);
    // const endDate = new Date(date2);
    const timeDiff = Math.abs(Date.parse(date2) - Date.parse(date1));
    const diffDays = Math.ceil(timeDiff / MILLESECONDS_PER_DAY);
    return diffDays;
  };

  const days = dayDifference(dates[0].endDate, dates[0].startDate);
  const handleSlider = (i) => {
    setSlider(i);
    setOpenImage(true);
  };

  const handleReserve = () => {
    if (user) {
      setOpenModal(true);
    } else {
      navigate("/login");
    }
  };

  const handleMove = (direction) => {
    let newSliderNumber;
    if (direction === "l") {
      newSliderNumber = slider === 0 ? 5 : slider - 1;
    } else {
      newSliderNumber = slider === 5 ? 0 : slider + 1;
    }
    setSlider(newSliderNumber);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      {isLoading ? (
        "Loading please wait"
      ) : (
        <div className="hotelCon">
          {openImage && (
            <div className="slider">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="close"
                onClick={() => setOpenImage(false)}
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="arrow"
                onClick={() => handleMove("l")}
              />
              <div className="sliderWra">
                <img src={data.photos[slider]} alt="" className="sliderImg" />
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow"
                onClick={() => handleMove("r")}
              />
            </div>
          )}
          <div className="hotWra">
            <button className="bookNow">Reserve or Book Now!</button>

            <h1 className="hotTit">{data.name}</h1>
            <div className="hotAdrr">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address}</span>
            </div>
            <span className="hoteDis">
              Excellent location - {data.distance}m from distance
            </span>
            <span className="hotePrHi">
              Book a stay over ${data.cheapestPrice} and get an awesome reward
            </span>
            <div className="hotImges">
              {data.photos?.map((photo, i) => (
                <div onClick={() => handleSlider(i)} className="hotelImgW">
                  <img src={photo} alt="" className="hoteImg" />
                </div>
              ))}
            </div>
            <div className="hotelDetails">
              <div className="hoteDetText">
                <h1 className="hoteTitle">{data.name}</h1>
                <p className="hotelDescrip">{data.desc}</p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>A perfect {days}-Night</h1>
                <span>Located in the heart of Krakow</span>
                <h2>
                  <b>${days * data.cheapestPrice * option.room}</b> ({days}
                  nights)
                </h2>
                <button onClick={handleReserve}>Reserve or Book Now!</button>
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      )}
      {openModal && <Reserve setOpen={setOpenModal} hotelId={id} />}
    </div>
  );
};

export default Hotel;
