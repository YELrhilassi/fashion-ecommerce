import { useEffect, useState } from "react";

export default function useCounter(isVisible = false, end, increment = 100) {
  const [counter, setCounter] = useState(0);
  const count = ClosureCounter();

  function ClosureCounter() {
    let t = 0;
    const average = end / increment;
    return () => {
      if (t < end) {
        t = Math.ceil(t + average);
        t > end ? setCounter(end) : setCounter(t); // result tend to overshoot. without the condition the result might be 1005 instead of 1000 for example
      }
    };
  }

  useEffect(() => {
    if (isVisible) {
      setInterval(count, 20);
    }
  }, [isVisible]);

  return counter;
}
