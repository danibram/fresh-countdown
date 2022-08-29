import { useInterval } from "./useInterval.ts";

import { useCallback, useEffect, useState } from "preact/hooks";

function useCountdown(initialCount: number): [
  number,
  boolean,
  {
    startCountdown: () => void;
    stopCountdown: () => void;
  }
] {
  const [count, setCount] = useState(initialCount);
  const decrement = () => setCount((c) => c - 1);

  useEffect(() => {
    setCount(initialCount);
  }, [initialCount]);

  const [isRunning, setIsRunning] = useState(false);
  const startCountdown = () => setIsRunning(true);
  const stopCountdown = () => setIsRunning(false);

  const countdownCallback = useCallback(() => {
    if (count < 0) {
      stopCountdown();
      return;
    }

    decrement();
  }, [count, decrement]);

  useInterval(countdownCallback, isRunning ? 1000 : null);

  return [
    count,
    isRunning,
    {
      startCountdown,
      stopCountdown,
    },
  ];
}

export default useCountdown;
