
interface ProgressBarProps {
    shape: 'linear' | 'circular';
    value: number;
    max: number;
    // striped?: boolean;
    // animated?: boolean;
}

export const ProgressBar = ({ shape, value, max }: ProgressBarProps) => {
    const baseClass = 'h-6 w-full bg-gray-200 rounded-md border border-gray-400'

    const progressClassesLinear = {
        first: 'bg-red-500',
        second: 'bg-orange-500',
        third: 'bg-yellow-500',
        fourth: 'bg-green-500',
    };

    const progressClassesCircular = {
        first: 'text-red-500',
        second: 'text-orange-500',
        third: 'text-yellow-500',
        fourth: 'text-green-500',
    };

    const percentage = Math.round((value / max) * 100);

    const getProgressBarColorLinear = () => {
        if (percentage < 25) return progressClassesLinear.first;
        if (percentage < 50) return progressClassesLinear.second;
        if (percentage < 75) return progressClassesLinear.third;
        return progressClassesLinear.fourth;
    }

    const getProgressBarColorCircular = () => {
        if (percentage < 25) return progressClassesCircular.first;
        if (percentage < 50) return progressClassesCircular.second;
        if (percentage < 75) return progressClassesCircular.third;
        return progressClassesCircular.fourth;
    }

    return (
        <>
            {shape === 'circular' &&
                <div className={`radial-progress bg-gray-200 ${getProgressBarColorCircular()}`} style={{ "--value": `${percentage}` } as React.CSSProperties} role="progressbar">
                    <div className="text-black text-sm font-bold px-3 p-1">
                        {percentage}%
                    </div>
                </div>
            }
            {shape === 'linear' &&
                <div className={baseClass}>
                    <div style={{ width: `${percentage}% ` }}
                        className={` h-full rounded-md transition-all duration-399 ease-in-out ${getProgressBarColorLinear()}`}>
                    </div>
                    <div className="text-black text-sm font-bold px-3 p-1">
                        {percentage}%
                    </div>
                </div>
            }

        </>
    );
}

export default ProgressBar