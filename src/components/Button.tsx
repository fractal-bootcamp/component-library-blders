import { BiGame, BiRocket, BiSmile } from "react-icons/bi";
// import Tooltip from "./Tooltip";
import { useState } from "react";

type Icon = 'rocket' | 'smiley' | 'game'
export interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'tertiary';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    loading?: boolean;
    onClick?: () => void;
    textContent: string;
    icon?: Icon;
    iconPosition?: 'left' | 'right';
    tooltip?: string;
    tooltipPosition?: 'top' | 'bottom' | 'left' | 'right';
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

export const FirstButton = ({ tooltip = "", tooltipPosition = "top", variant = 'primary', size = 'medium', disabled = false, loading = false, onClick, textContent, icon, iconPosition = 'left' }: ButtonProps) => {
    const [isDisabled, setIsDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    function handleClick() {
        setIsLoading(true);
        setIsDisabled(true);
        console.log('clicked');
        setTimeout(() => {
            setIsDisabled(false);
            setIsLoading(false);
        }
            , 2000);
    }


    const baseClasses = 'flex justify-center items-center px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none transition-scale duration-150 ease-in-out transform hover:scale-[102%] active:scale-[97%]'

    const variantClasses = {
        primary: 'text-white bg-blue-500 hover:bg-blue-700',
        secondary: 'text-gray-500 bg-gray-500 hover:bg-gray-800',
        tertiary: 'text-gray-800 bg-white hover:bg-gray-100',
    }

    const sizeClasses = {
        small: 'text-sm px-2 py-1',
        medium: 'text-base px-4 py-2',
        large: 'text-lg px-6 py-3',
    }

    const disabledClasses = 'cursor-not-allowed opacity-50 hover:scale-100 active:scale-100'
    const loadingClasses = 'cursor-wait opacity-50'

    const buttonClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${isDisabled && disabledClasses}
    ${isLoading && loadingClasses}`;

    const iconClasses = iconPosition === 'left' ? 'mr-2' : 'ml-2';

    return (
        // <Tooltip tipContent={tooltip} position={tooltipPosition}>
        <button
            className={buttonClasses}
            disabled={isDisabled || isLoading}
            onClick={handleClick}
        >{loading ? 'Loading...' : (
            <>
                {icon && iconPosition === 'left' && <span className={iconClasses}><Icon name={icon} /></span>}
                {textContent}
                {icon && iconPosition === 'right' && <span className={iconClasses}><Icon name={icon} /></span>}
            </>
        )}
        </button>
        // </Tooltip>
    )
}

export default FirstButton
