// Importing necessary hooks from React
import { useRef, useEffect } from "react";

/**
 * Custom hook to execute a callback function when a click occurs outside of the specified element.
 *
 * @param {function} callback - The callback function to execute when a click occurs outside.
 * @returns {React.MutableRefObject} - A ref object that should be attached to the element to monitor.
 */
export function useClickAway(callback) {
  // Ref for the element to monitor for outside clicks
  const innerRef = useRef();
  // Ref for storing the current callback function
  const callbackRef = useRef();

  // Effect to update the callback ref whenever the callback changes
  useEffect(() => {
    callbackRef.current = callback;
  });

  // Effect to add and clean up the mousedown event listener
  useEffect(() => {
    document.addEventListener("mousedown", handleMouseDown);
    return () => document.removeEventListener("mousedown", handleMouseDown);

    // Function to handle mousedown event
    function handleMouseDown(e) {
      // If the click is outside the monitored element, call the callback
      if (
        innerRef.current &&
        callbackRef.current &&
        !innerRef.current.contains(e.target)
      ) {
        callbackRef.current(e);
      }
    }
  }, []);

  // Effect to add and clean up the click event listener
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);

    // Function to handle click event
    function handleClick(e) {
      // If the click is outside the monitored element, call the callback
      if (
        innerRef.current &&
        callbackRef.current &&
        !innerRef.current.contains(e.target)
      ) {
        callbackRef.current(e);
      }
    }
  }, []);

  // Return the ref to be attached to the monitored element
  return innerRef;
}

