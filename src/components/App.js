import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  // write your code here
  const [initial, setInitial] = useState(0);
  let value=0;
   function onEnter(ev){
    if(ev.keyCode === 13){
      let timeCount = ev.target.value;
      if(isNaN(timeCount)||timeCount<0){
      timeCount=0;
      }
      setInitial(Math.floor(timeCount));
  
    }
  };
  useEffect(() => {
   if(initial>0){
    let timerId = setInterval(()=>{
    let timerRemaining = initial-1;
    setInitial(timerRemaining);
    },1000);

    return ()=>clearInterval(timerId);
    }
  },[initial]);


 return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input type="number" id="timeCount" onKeyDown={onEnter} /> sec.
        </h1>
      </div>
      <div id="current-time">{initial}</div>
    </div>
  );
};

export default App;
