
interface ProgressBarProps {
    color?: string;
    // shape?: 'linear' | 'circular';
    percentage: number;
    progress?: 'first' | 'second' | 'third';
    // striped?: boolean;
    // animated?: boolean;
}

export const ProgressBar = ({ color, percentage = 0, progress = 'first' }: ProgressBarProps) => {
    const baseClass = 'h-6 w-full bg-gray-200 rounded-md border border-gray-400'

    const progressClasses = {
        first: 'bg-red-500',
        second: 'bg-yellow-500',
        third: 'bg-green-500',
    }

    const classes = `
        ${baseClass}
        ${progressClasses[progress]}`


    return (
        <div className={classes}>
            <div style={{ width: `${percentage}% `, backgroundColor: color }}
                className='h-full rounded-md'>
            </div>
            <div className="text-black text-sm font-bold px-3 p-1">
                {percentage}%
            </div>
        </div>
    );
}

export default ProgressBar