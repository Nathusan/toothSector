import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const App = () => {

  const [time, setTime] = useState({
    timeNow: '00:00:00',
  })

  const [interval, setTimer] = useState({
    currentInterval: 10,
    currentTime: 0,
  })

  function updateTime() {
    setTime({
      ...time,
      timeNow: new Date().toLocaleTimeString(),
    });
  }

  function intervalComposer () {
    setTimer({
      ...interval,
      currentTime: interval.currentTime + 1,
    })

    if (interval.currentTime > interval.currentInterval) {
      console.log('hi')
      setTimer({
        ...interval,
        currentTime: 0
      })
    }
  }

  useEffect(() => {
    const timer = setInterval(intervalComposer, 1000);

    return () => {
      clearInterval(timer)
    }
  },[]);

  useEffect(() => {
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  },[]);

  return (
    <div>
      {time.timeNow}
    </div>
  )
}

ReactDOM.render(
  <App />,

  document.getElementById("root")
);
