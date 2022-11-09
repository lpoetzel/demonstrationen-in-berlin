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
  const [demoIndex, setDemoIndex] = useState(null);

  const togglePopup = (i) => {
    setDemoIndex(i);

    setIsOpen(!isOpen);
  };
  console.log(demoIndex);
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
    setByMonths((prevPosts) =>
      posts.filter((post) => post.datum.includes(formattedDate))
    );
  }, [formattedDate, posts]);

  useEffect(() => {
    setDatesInMonth((prevMonths) =>
      byMonth
        .map((ele) => ele.datum)
        .filter((ele, idnx, arr) => arr.indexOf(ele) === idnx)
    );
  }, [byMonth]);

  return (
    <div>
      <h1>Kalendar</h1>
      <div className="textmonths">
        <label htmlFor="months">Wähle einen Monat: </label>
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
      </div>
      <div className="textyear">
        <label htmlFor="year">Wähle ein Jahr: </label>
        <select name="year" id="year" onChange={(e) => setYear(e.target.value)}>
          {yearsArr.map((ele) => {
            return <option value={ele}>{ele}</option>;
          })}
        </select>
      </div>
      {datesInMonth.map((ele) => {
        return (
          <div>
            <span className="textmonths date-above-calender">{ele}</span>
            <span>
              <div className="allCalendarCards">
                {byMonth
                  .filter((obj) => obj.datum === ele)
                  .map((ele, index) => {
                    return (
                      <div className="calendarCard">
                        <p className="datumStyle">{ele.datum}</p>
                        <p>{ele.thema.slice(0, 30) + "..."}</p>
                        {isOpen && index === demoIndex && (
                          <Popup
                            content={
                              <>
                                <p>
                                  {"Dauer:"} {ele.von + " " + ele.bis}
                                </p>
                                <p>{ele.thema}</p>
                                <p>{ele.strasse_nr}</p>
                                <p>
                                  {ele.plz} {"Berlin"}
                                </p>
                                <p>{ele.aufzugsstrecke}</p>
                              </>
                            }
                          />
                        )}
                        <input
                          id="zeigen-button"
                          type="button"
                          value="Alles zeigen"
                          onClick={() => togglePopup(index)}
                        />
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
