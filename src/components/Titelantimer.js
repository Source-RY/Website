import React, { useState, useEffect } from "react";

function TitelanTimer({ endDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    if (!endDate) {
      return;
    }

    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const distance = endDate - currentTime;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });

      if (distance < 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [endDate]);

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div>
      {endDate ? (
        minutes < 0 ? (
            <p>Käynnissä!</p>
        ) : (
          <p>
            {days} päivää {hours} tuntia {minutes} minuuttia {seconds} sekuntia
          </p>
        )
      ) : null}
    </div>
  );
}

export default TitelanTimer;
