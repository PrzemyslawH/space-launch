import React, { useState, useEffect } from 'react';

const LaunchDate = ({ upcomingLaunchDate }) => {
  const [launchDate, setLaunchDate] = useState({
    day: '--',
    month: '--',
    year: '--',
  });

  const getDate = (endDate) => {
    let launchDate = new Date(Date.parse(endDate));

    let day = launchDate.getUTCDate();
    let month = launchDate.getUTCMonth() + 1;
    let year = launchDate.getUTCFullYear();

    setLaunchDate({
      day: ('0' + day).slice(-2),
      month: ('0' + month).slice(-2),
      year,
    });
  };

  useEffect(() => {
    getDate(upcomingLaunchDate);
  }, []);

  const { day, month, year } = launchDate;

  return (
    <span>
      {day}/{month}/{year}
    </span>
  );
};

export default LaunchDate;
