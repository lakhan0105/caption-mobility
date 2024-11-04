import React, { useEffect, useState } from "react";

function CounterItem({ count, defaultHeading, symbol, subHeading }) {
  const [countState, setCountState] = useState(0);

  // increase the count value on page load
  useEffect(() => {
    let start = 0;

    const interval = setInterval(() => {
      start += 100;

      if (start > count) {
        setCountState(count);
        clearInterval(interval);
      } else {
        setCountState(start);
      }
    }, 50);
  }, [count]);

  return (
    <div className="text-center">
      <span className="text-3xl font-semibold">
        {countState || defaultHeading}
        {symbol}
      </span>
      <br />
      <span className="text-lg">{subHeading}</span>
    </div>
  );
}

export default CounterItem;
