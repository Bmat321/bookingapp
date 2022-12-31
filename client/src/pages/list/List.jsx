import React from "react";
import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
import "./list.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";
const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setopenDate] = useState(false);
  const [option, setOption] = useState(location.state.option);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const { data, isLoading, error, refetch } = useFetch(
    `/hotels?city=${destination}&min=${min || 0}&max=${max || 999}`
  );

  const handleSearch = () => {
    refetch();
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listCon">
        <div className="listWra">
          <div className="listSea">
            <h1 className="liTittle">Search</h1>
            <div className="lsItem">
              <label className="dest">Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="lsItem">
              <label className="dest">Check-in Date</label>
              <span onClick={() => setopenDate(!openDate)}>
                {`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                  dates[0].endDate,
                  "MM/dd/yyyy"
                )} `}
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
                />
              )}
            </div>
            <div className="lsItem">
              <label className="dest">Options</label>
              <div className="lsToptn">
                <div className="lstOpts">
                  <span className="lstOp">
                    Min Price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    onChange={(e) => setMin(e.target.value)}
                    className="lsOpIn"
                  />
                </div>
                <div className="lstOpts">
                  <span className="lstOp">
                    Max Price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    onChange={(e) => setMax(e.target.value)}
                    className="lsOpIn"
                  />
                </div>
                <div className="lstOpts">
                  <span className="lstOp">Adult</span>
                  <input
                    type="number"
                    className="lsOpIn"
                    min={1}
                    placeholder={option.adults}
                  />
                </div>
                <div className="lstOpts">
                  <span className="lstOp">Children</span>
                  <input
                    type="number"
                    className="lsOpIn"
                    min={0}
                    placeholder={option.children}
                  />
                </div>
                <div className="lstOpts">
                  <span className="lstOp">Room</span>
                  <input
                    type="number"
                    className="lsOpIn"
                    min={1}
                    placeholder={option.room}
                  />
                </div>
              </div>
              <button onClick={handleSearch}>Search</button>
            </div>
          </div>
          <div className="listRes">
            {isLoading ? (
              "Loading please wait.."
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem item={item} key={item._id} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
