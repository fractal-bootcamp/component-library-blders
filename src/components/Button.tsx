interface ButtonProps {
    // variant?: 'primary' | 'secondary' | 'tertiary';
    // size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    // loading?: boolean;
    onClick: () => void;
    text: string;
    // tooltip?: string;
}

export const FirstButton = ({ disabled = false, onClick, text }: ButtonProps) => {

    const baseClasses = 'flex justify-center px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none'

    const disabledClasses = 'cursor-not-allowed opacity-50'

    const classes = `
    ${baseClasses}
    ${disabled && disabledClasses}`;

    return (
        <div>
            <button
                className={classes}
                disabled={disabled}
                onClick={onClick}
            >{text}</button>
        </div>
    )
}

export default FirstButton