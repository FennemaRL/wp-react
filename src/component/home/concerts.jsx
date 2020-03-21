import React, { useState, useEffect } from "react";
import "./concerts.css";
import axios from "axios";

const Components = () => {
  const [concerts, setConcerts] = useState([]);

  useEffect(() => {
    axios
      .get("https://kanban-api-node.herokuapp.com/cbm")
      .then(r => setConcerts(r.data.concerts))
      .catch(e => new Error(e));
  }, []); /*falta completar las fechas  */
  return (
    !!concerts.length && (
      <div className="concerts">
        <h1>Concerts</h1>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Place</th>
              <th>Event</th>
            </tr>
          </thead>
          <tbody>
            {concerts.map((concert, k) => {
              return (
                <React.Fragment key={concert.date}>
                  <tr>
                    <td>{new Date(concert.date).toDateString()}</td>
                    <td>{concert.place}</td>
                    <td>{concert.eventName}</td>
                  </tr>
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    )
  );
};

export default Components;
