export interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'tertiary';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    loading?: boolean;
    onClick: () => void;
    text: string;
    // tooltip?: string;
}

export const FirstButton = ({ variant = 'primary', size = 'medium', disabled = false, loading = false, onClick, text }: ButtonProps) => {

    const baseClasses = 'flex justify-center px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none'

    const variantClasses = {
        primary: 'text-white bg-blue-500 hover:bg-blue-700',
        secondary: 'text-gray-500 bg-gray-200 hover:bg-gray-300',
        tertiary: 'text-blue-500 bg-transparent hover:bg-blue-100',
    }

    const sizeClasses = {
        small: 'text-sm px-2 py-1',
        medium: 'text-base px-4 py-2',
        large: 'text-lg px-6 py-3',
    }

    const disabledClasses = 'cursor-not-allowed opacity-50'
    const loadingClasses = 'cursor-wait opacity-50'

    const classes = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${disabled && disabledClasses}
    ${loading && loadingClasses}`;

    return (
        <div>
            <button
                className={classes}
                disabled={disabled || loading}
                onClick={onClick}
            >{loading ? 'Loading...' : text}</button>
        </div>
    )
}

export default FirstButton