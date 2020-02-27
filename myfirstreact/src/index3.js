import React from 'react';
import ReactDOM from 'react-dom';

function tick(){
  var week = new Array("Sunday","Monday","Tuesday","Wednesday",
                              "Thursday","Friday","Saturday")
  const element = (
    <div>
       <h1>Cherish EVERY MOMENT!</h1>
       <div id="calendar">
          <h3 id="date">{new Date().getDate()}</h3>
          <h2 id="day">{new Date().getFullYear()} / {new Date().getMonth()+1}</h2>
          <h2 id="weekday">{week[new Date().getDay()]}</h2>
          <h2 id="time_now">{new Date().toLocaleTimeString().split("上午")}</h2>
          </div>
    </div>
  )



    ReactDOM.render(
      element,
      document.getElementById('root')
    );
  }
setInterval(tick, 1000);