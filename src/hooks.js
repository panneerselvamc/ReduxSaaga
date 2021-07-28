import React from 'react';
export const useTimer = (seconds) => {
    const [timer, setTimer] = React.useState(seconds);
    const setTimerInterval = (newTimer) => {
      let tempTimer = timer || newTimer;
      setTimer(tempTimer);
      const interval = setInterval(() => {
        if (tempTimer > 0) {
          setTimer((t) => t - 1);
          tempTimer -= 1;
        } else {
          clearInterval(interval);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
    return [timer, setTimerInterval]
  };