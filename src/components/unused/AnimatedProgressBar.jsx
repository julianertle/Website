import React, { useState, useEffect, useRef } from "react";

function AnimatedProgressBar({ value, color, offset, duration }) {
  const [progress, setProgress] = useState(0);
  const ref = useRef();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry], observerInstance) => {
        if (entry.isIntersecting) {
          // When element is visible, start the animation after offset delay
          setTimeout(() => {
            setProgress(value);
          }, offset);

          observerInstance.unobserve(element); // stop observing after triggered
        }
      },
      {
        threshold: 0.1, // trigger when 10% visible
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [value, offset]);

  const progressStyle = {
    width: `${progress}%`,
    backgroundColor: color,
    transition: `width ${duration}ms ease-out`,
  };

  return (
    <div
      ref={ref}
      className="progress"
      role="progressbar"
      aria-label="Progress bar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div className="progress-bar" style={progressStyle}>
        {progress}%
      </div>
    </div>
  );
}

export default AnimatedProgressBar;
