import React, { useEffect, useState } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const internaldate = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(internaldate);
  }, []);

  //    console.log(date)
  //    const hours = date.getHours()
  //    console.log(hours)
  //    const minintes  = date.getMinutes()
  //    console.log(minintes)
  //    const seconds = date.getSeconds()
  //    console.log(seconds)

  return (
    <div>
      <h1>Digital Clock Demo</h1>
      <h2>{time.toLocaleTimeString()}</h2>
    </div>
  );
}

export default DigitalClock;
