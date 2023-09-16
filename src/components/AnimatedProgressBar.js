import React, { useState, useEffect } from 'react';

function AnimatedProgressBar({ value,color,duration }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Set the progress to the specified value after the component mounts
        setProgress(value);
    }, [value]);

    const progressStyle = {
        width: `${progress}%`,
        backgroundColor: color, // Use the color prop as the background color
        transition: `width ${duration}ms linear`, // Specify the animation duration
    };

    return (
        <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
            <div className="progress-bar" style={progressStyle}>{progress}%</div>
        </div>
    );
}

export default AnimatedProgressBar;



