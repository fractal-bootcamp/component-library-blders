import { BiGame, BiRocket, BiSmile } from "react-icons/bi";

type Icon = 'rocket' | 'smiley' | 'game'
export interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'tertiary';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    loading?: boolean;
    onClick: () => void;
    text: string;
    icon?: Icon;
    iconPosition?: 'left' | 'right';
    // tooltip?: string;
}

export const Icon = ({ name }: { name: Icon }) => {
    if (name === 'rocket') {
        return <BiRocket />
    } else if (name === 'smiley') {
        return <BiSmile />
    } else if (name === 'game') {
        return <BiGame />
    }
}

export const FirstButton = ({ variant = 'primary', size = 'medium', disabled = false, loading = false, onClick, text, icon, iconPosition = 'left' }: ButtonProps) => {

    const baseClasses = 'flex justify-center px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none transition duration-150 ease-in-out transform hover:scale-105 active:scale-95'

    const variantClasses = {
        primary: 'text-white bg-blue-500 hover:bg-blue-700',
        secondary: 'text-gray-500 bg-gray-500 hover:bg-gray-800',
        tertiary: 'text-gray-800 bg-transparent hover:bg-gray-100',
    }

    const sizeClasses = {
        small: 'text-sm px-2 py-1',
        medium: 'text-base px-4 py-2',
        large: 'text-lg px-6 py-3',
    }

    const disabledClasses = 'cursor-not-allowed opacity-50 hover:scale-100 active:scale-100'
    const loadingClasses = 'cursor-wait opacity-50'

    const classes = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${disabled && disabledClasses}
    ${loading && loadingClasses}`;

    const iconClasses = iconPosition === 'left' ? 'mr-2' : 'ml-2';

    return (
        <div>
            <button
                className={classes}
                disabled={disabled || loading}
                onClick={onClick}
            >{loading ? 'Loading...' : (
                <>
                    {icon && iconPosition === 'left' && <span className={iconClasses}><Icon name={icon} /></span>}
                    {text}
                    {icon && iconPosition === 'right' && <span className={iconClasses}><Icon name={icon} /></span>}
                </>
            )}
            </button>
        </div>
    )
}

export default FirstButton