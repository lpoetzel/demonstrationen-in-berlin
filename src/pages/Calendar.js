import React from "react";
import { useState, useEffect } from "react";
import Popup from "../components/Popup";



function Calendar({ posts }) {
  const [byMonth, setByMonths] = useState([]);
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [formattedDate, setFormattedDate] = useState(null);
  const [datesInMonth, setDatesInMonth] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const yearsArr = [];
  for (let i = 22; i < 40; i++) {
    const anYear = `20${i}`;
    yearsArr.push(anYear);
  }

  useEffect(() => {
    setFormattedDate(month + "." + year);
  }, [month, year]);

  useEffect(() => {
    console.log("setter working now");
    setByMonths((prevPosts) => posts.filter((post) => post.datum.includes(formattedDate))
    );
  }, [formattedDate, posts]);

  useEffect(() => {
    setDatesInMonth((prevMonths) => byMonth
      .map((ele) => ele.datum)
      .filter((ele, idnx, arr) => arr.indexOf(ele) === idnx)
    );
  }, [byMonth]);

  return (
    <div>
      <h1>Calendar</h1>

      <label htmlFor="months">Select a months</label>
      <select
        name="months"
        id="months"
        onChange={(e) => setMonth(e.target.value)}
      >
        <option value="01">Januar</option>
        <option value="02">Februar</option>
        <option value="03">März</option>
        <option value="04">April</option>
        <option value="05">Mai</option>
        <option value="06">Juni</option>
        <option value="07">Juli</option>
        <option value="08">August</option>
        <option value="09">September</option>
        <option value="10">Oktober</option>
        <option value="11">November</option>
        <option value="12">Dezember</option>
      </select>
      <label htmlFor="year">Select an year</label>
      <select name="year" id="year" onChange={(e) => setYear(e.target.value)}>
        {yearsArr.map((ele) => {
          return <option value={ele}>{ele}</option>;
        })}
      </select>

      {datesInMonth.map((ele) => {
        return (
          <div>
            <span>{ele}</span>
            <span >
              <div className="allCalendarCards">
              {byMonth
                .filter((obj) => obj.datum === ele)
                .map((ele) => {
                  return (
                    <div className="calendarCard">
                      <input
                        type="button"
                        value="Click to Open"
                        onClick={togglePopup} />
                      <p>{ele.datum}</p>
                      <p>{ele.thema.slice(0, 30) + "..."}</p>
                      {isOpen && <Popup
                        content={<>
                          <p className="datumStyle">{ele.datum}</p>
                          <p>
                            {"Dauer:"} {ele.von + " " + ele.bis}
                          </p>
                          <p>{ele.thema}</p>
                          <p>{ele.strasse_nr}</p>
                          <p>{ele.plz}</p>
                          <p>{ele.aufzugsstrecke}</p>
                          
                        </>}
                        handleClose={togglePopup} />}
                    </div>
                  );
                })}
              </div>
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default Calendar;
