import React, { useState, useEffect } from 'react';

function AnimatedProgressBar({ value, color, offset, duration }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Use setTimeout to delay setting the progress state by the specified offset
        const timeoutId = setTimeout(() => {
            setProgress(value);
        }, offset);

        return () => {
            // Clear the timeout if the component unmounts before the offset is reached
            clearTimeout(timeoutId);
        };
    }, [value, offset]);

    const progressStyle = {
        width: `${progress}%`,
        backgroundColor: color,
        transition: `width ${duration}ms ease-out`,
    };

    return (
        <div
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
