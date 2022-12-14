import React from "react";
import { useState, useEffect } from "react";
import Popup from "../components/Popup";
import { yyyy } from "../components/searchbar";
import { mm } from "../components/searchbar";
import { formattedToday } from "../components/searchbar";
function Calendar({ posts }) {
  const [byMonth, setByMonths] = useState([]);
  const [month, setMonth] = useState(mm);
  const [year, setYear] = useState(yyyy);
  const [formattedDate, setFormattedDate] = useState(month + year);
  const [datesInMonth, setDatesInMonth] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [demoIndex, setDemoIndex] = useState(null);

  const togglePopup = (i) => {
    setDemoIndex(i);

    setIsOpen(!isOpen);
  };
  const yearsArr = [];
  for (let i = yyyy; i < yyyy + 11; i++) {
    const anYear = `${i}`;
    yearsArr.push(anYear);
  }

  useEffect(() => {
    setFormattedDate(month + "." + year);
  }, [month, year]);

  useEffect(() => {
    setByMonths((prevPosts) =>
      posts
        .filter((post) => post.datum.includes(formattedDate))
        .filter((post) => {
          if (post.datum.slice(3, 5) === String(mm)) {
            return post.datum >= formattedToday;
          } else {
            return post;
          }
        })
    );
  }, [formattedDate, posts]);

  useEffect(() => {
    setDatesInMonth((_prevMonths) =>
      byMonth
        .sort((a, b) => new Date(a.datum) - new Date(b.datum))
        .map((ele) => ele.datum)
        .filter((ele, idnx, arr) => arr.indexOf(ele) === idnx)
    );
  }, [byMonth]);

  return (
    <div>
      <h1>Kalendar</h1>
      <div className="month-year">
        <div className="textmonths">
          <label htmlFor="months">Wähle einen Monat: </label>
          <select
            name="months"
            id="months"
            onChange={(e) => setMonth(e.target.value)}
          >
            <option>-Monate-</option>
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
          <select
            name="year"
            id="year"
            onChange={(e) => setYear(e.target.value)}
          >
            {yearsArr.map((ele, i) => {
              return (
                <option key={i} value={ele}>
                  {ele}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      {datesInMonth.map((ele, i) => {
        return (
          <div key={i}>
            <span className="date-above-calender">{ele}</span>
            <span>
              <div className="allCalendarCards">
                {byMonth
                  .sort((a, b) => new Date(a.datum) - new Date(b.datum))
                  .filter((obj) => obj.datum === ele)
                  .map((ele, index) => {
                    return (
                      <div key={index} className="calendarCard">
                        <p className="datumStyle">
                          {ele.von}-{ele.bis}
                        </p>
                        <p>{ele.thema.slice(0, 30) + "..."}</p>
                        {isOpen && index === demoIndex && (
                          <Popup
                            content={
                              <>
                                <p>{ele.thema.slice(30)}</p>
                                <hr />
                                <p>
                                  <strong>{ele.strasse_nr}</strong>
                                </p>

                                <p>
                                  <strong>
                                    {ele.plz} {"Berlin"}
                                  </strong>
                                </p>
                                <p>
                                  <strong>{ele.aufzugsstrecke}</strong>
                                </p>
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
