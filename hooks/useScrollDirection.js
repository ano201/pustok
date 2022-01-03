import { useState, useEffect } from 'react';
import { throttle } from 'lodash';

export function useScrollDirection() {
  const [direction, setDirection] = useState('up');

  let prevScrollY = 0;

  useEffect(() => {
    // Using lodash, we set a throttle to the scroll event
    // making it not fire more than once every 500 ms.
    window.onscroll = throttle(() => {
      // This value keeps the latest scrollY position
      const { scrollY } = window;

      // Checks if previous scrollY is less than latest scrollY
      // If true, we are scrolling downwards, else scrollig upwards
      const direction = prevScrollY < scrollY ? 'down' : 'up';

      // Updates the previous scroll variable AFTER the direction is set.
      // The order of events is key to making this work, as assigning
      // the previous scroll before checking the direction will result
      // in the direction always being 'up'.
      prevScrollY = scrollY;

      // Set the state to trigger re-rendering
      setDirection(direction);
    }, 500);

    return () => {
      // Remove scroll event on unmount
      window.onscroll = null;
    };
  }, []);

  return direction;
}
