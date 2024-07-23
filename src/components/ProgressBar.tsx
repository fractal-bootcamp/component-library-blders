
interface ProgressBarProps {
    shape: 'linear' | 'circular'; // Shape of the progress bar, either linear or circular
    value: number; // Current value of the progress
    max: number; // Maximum value of the progress
    // striped?: boolean; // Optional: If the progress bar should be striped
    // animated?: boolean; // Optional: If the progress bar should be animated
}

// Define the ProgressBar component
export const ProgressBar = ({ shape, value, max }: ProgressBarProps) => {
    // Base class for the linear progress bar container
    const baseClass = 'h-6 w-full bg-gray-200 rounded-md border border-gray-400';

    // Define the colors for different progress levels
    const progressColors = {
        first: '#EF4444', // red-500
        second: '#F97316', // orange-500
        third: '#EAB308', // yellow-500
        fourth: '#22C55E', // green-500
    };

    // derive the percentage of the progress
    const percentage = Math.round((value / max) * 100);

    // Function to determine the color of the progress bar based on the percentage
    const getProgressBarColor = () => {
        if (percentage < 25) return progressColors.first; // Less than 25% progress
        if (percentage < 50) return progressColors.second; // Between 25% and 50% progress
        if (percentage < 75) return progressColors.third; // Between 50% and 75% progress
        return progressColors.fourth; // More than 75% progress
    }

    // Define the CircularProgressBar component for circular progress bars
    const CircularProgressBar = () => {
        const size = 100; // Size of the SVG element
        const strokeWidth = 10; // Width of the stroke
        const radius = (size - strokeWidth) / 2; // Radius of the circle
        const circumference = radius * 2 * Math.PI; // Circumference of the circle
        const offset = circumference - (percentage / 100) * circumference; // Offset for the stroke-dashoffset

        return (
            <div className="relative inline-flex items-center justify-center">
                <svg width={size} height={size} className="transform -rotate-90">
                    <circle
                        className="text-gray-200" // Background circle color
                        strokeWidth={strokeWidth} // Width of the stroke
                        stroke="currentColor" // Stroke color
                        fill="transparent" // Fill color
                        r={radius} // Radius of the circle
                        cx={size / 2} // X-coordinate of the center
                        cy={size / 2} // Y-coordinate of the center
                    />
                    <circle
                        className="transition-all duration-300 ease-in-out" // Transition properties
                        strokeWidth={strokeWidth} // Width of the stroke
                        strokeDasharray={circumference} // Dash array for the stroke
                        strokeDashoffset={offset} // Dash offset for the stroke
                        strokeLinecap="round" // Line cap style
                        stroke={getProgressBarColor()} // Stroke color based on progress
                        fill="transparent" // Fill color
                        r={radius} // Radius of the circle
                        cx={size / 2} // X-coordinate of the center
                        cy={size / 2} // Y-coordinate of the center
                    />
                </svg>
                <span className="absolute text-sm font-bold">{percentage}%</span> {/* Display the percentage */}
            </div>
        );
    }

    return (
        <>
            {shape === 'circular' && <CircularProgressBar />} {/* Render circular progress bar if shape is circular */}
            {shape === 'linear' &&
                <div className={baseClass}> {/* Render linear progress bar if shape is linear */}
                    <div style={{ width: `${percentage}%`, backgroundColor: getProgressBarColor() }}
                        className={"h-full rounded-md transition-all duration-399 ease-in-out"}>
                    </div>
                    <div className="text-black text-sm font-bold px-3 p-1">
                        {percentage}% {/* Display the percentage */}
                    </div>
                </div>
            }
        </>
    );
}

// Export the ProgressBar component as the default export
export default ProgressBar