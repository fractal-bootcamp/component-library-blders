import {
    BiLockAlt,
    BiAt,
    BiCheese,
    BiCreditCard,
    BiDollar,
    BiEuro,
    BiLogoReddit,
    BiSolidMessageAltError,
    BiCheck,
    BiRocket,
    BiSmile,
    BiGame,
} from "react-icons/bi";


export const icons = {
    at: BiAt,
    card: BiCreditCard,
    cheese: BiCheese,
    check: BiCheck,
    dollar: BiDollar,
    euro: BiEuro,
    error: BiSolidMessageAltError,
    game: BiGame,
    lock: BiLockAlt,
    reddit: BiLogoReddit,
    rocket: BiRocket,
    smiley: BiSmile,
    success: BiCheck, // same as check
    warning: BiSolidMessageAltError // same as error
}

const iconColors = {
    red: "#ef4444",
    green: "#22c55e",
    black: "#000000"
}

type TextIconProps = {
    type: keyof typeof icons;
    color?: keyof typeof iconColors;
    size?: "s" | "m" | 'l'
}

export const TextIcon = ({ type, color = "black", size = "m" }: TextIconProps) => {

    const IconObject = icons[type]

    const iconColor = iconColors[color]

    const sizeClass = size === "s" ? "h-3 w-3" : size === "m" ? "h-6 w-6" : "h-12 w-12";

    const iconStyle = `${sizeClass} mx-3 flex items-center`

    return (
        <IconObject color={iconColor} className={iconStyle} />
    );
}