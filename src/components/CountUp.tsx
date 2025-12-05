
import { useEffect, useState } from "react";

const CountUp = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);

  // Extract numeric part at the start
  const numericValue = parseInt(end.toString().match(/^\d+/)?.[0], 10);

  const isNumber = !isNaN(numericValue);

  useEffect(() => {
    if (!isNumber) return;

    let start = 0;
    const increment = numericValue / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= numericValue) {
        clearInterval(counter);
        setCount(numericValue);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [numericValue, duration, isNumber]);

  return (
    <span>
      {isNumber ? count : end}
      {suffix}
    </span>
  );
};

export default CountUp;
