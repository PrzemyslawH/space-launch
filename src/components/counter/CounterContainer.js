import React, { useState, useEffect } from 'react';

import CounterFlip from './CounterFlip';

const CounterContainer = ({ upcomingLaunchDate }) => {
  const [remainingTime, setRemainingTime] = useState({
    days: '-',
    hours: '-',
    min: '-',
    sec: '-',
  });

  const calculateCountdown = (endDate) => {
    let launchTime = Date.parse(endDate);
    let currentTime = new Date().getTime();
    let timeToLaunch = launchTime - currentTime;

    let days = Math.floor(timeToLaunch / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeToLaunch / (1000 * 60 * 60)) % 24);
    let min = Math.floor((timeToLaunch / 1000 / 60) % 60);
    let sec = Math.floor((timeToLaunch / 1000) % 60);

    setRemainingTime({
      days,
      hours: ('0' + hours).slice(-2),
      min: ('0' + min).slice(-2),
      sec: ('0' + sec).slice(-2),
    });
  };

  useEffect(() => {
    let counter = setInterval(
      () => calculateCountdown(upcomingLaunchDate),
      1000
    );

    return () => clearInterval(counter);
  });

  const { days, hours, min, sec } = remainingTime;

  return (
    <>
      <CounterFlip label={'Days'} value={days} />
      <CounterFlip label={'Hours'} value={hours} />
      <CounterFlip label={'Minutes'} value={min} />
      <CounterFlip label={'Seconds'} value={sec} />
    </>
  );
};

export default CounterContainer;
