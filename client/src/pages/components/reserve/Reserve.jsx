import "./reserve.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import useFetch from "../../../hooks/useFetch";
import { useContext, useState } from "react";
import { SearchContext } from "../../../context/SearchContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Reserve = ({ setOpen, hotelId }) => {
  const [checkRooms, setCheckRooms] = useState([]);
  const { data, isLoading, error } = useFetch(`/hotels/room/${hotelId}`);
  const { dates } = useContext(SearchContext);
  const navigate = useNavigate();

  const getDateInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const date = new Date(start.getTime());
    const dates = [];

    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }
    return dates;
  };

  const allDates = getDateInRange(dates[0].startDate, dates[0].endDate);
  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      allDates.includes(new Date(date).getTime())
    );
    return !isFound;
  };

  const handleCheck = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setCheckRooms(
      checked
        ? [...checkRooms, value]
        : checkRooms.filter((item) => item !== value)
    );
  };

  const handleClick = async () => {
    try {
      await Promise.all(
        checkRooms.map((roomId) => {
          const res = axios.put(`/rooms/availability/${roomId}`, {
            dates: allDates,
          });
          return res.data;
        })
      );
      setOpen(false);
      navigate("/");
    } catch (error) {}
  };
  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClosed"
          onClick={() => setOpen(false)}
        />
        <span>Select your Room:</span>
        {data.map((item) => (
          <div className="rItem">
            <div className="rItemInfo">
              <div className="rTitle">{item.title}</div>
              <div className="rDesc"> {item.desc}</div>
              <div className="rMax">
                Max people : <b>{item.maxPerson}</b>
              </div>
              <div className="rPrice">Price: {item.price}</div>
            </div>
            <div className="rSelectRooms">
              {item.roomNumbers.map((roomNumber) => (
                <div className="room">
                  <label>{roomNumber.number}</label>
                  <input
                    type="checkbox"
                    value={roomNumber._id}
                    disabled={!isAvailable(roomNumber)}
                    onChange={handleCheck}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <button onClick={handleClick} className="rButton">
          Reserve Now!
        </button>
      </div>
    </div>
  );
};

export default Reserve;
