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
    lock: BiLockAlt,
    at: BiAt,
    cheese: BiCheese,
    card: BiCreditCard,
    dollar: BiDollar,
    euro: BiEuro,
    reddit: BiLogoReddit,
    error: BiSolidMessageAltError,
    check: BiCheck,
    rocket: BiRocket,
    smiley: BiSmile,
    game: BiGame,
}

const iconColors = {
    red: "#ef4444",
    green: "#22c55e",
    black: "#000000"
}

type TextIconProps = {
    type: keyof typeof icons;
    color?: keyof typeof iconColors;
    size?: number;
}

export const TextIcon = ({ type, color = "black", size = 6 }: TextIconProps) => {

    const IconObject = icons[type]

    const iconColor = iconColors[color]

    // DANGER - dynamically constructed tailwind has a habit of failing
    const iconStyle = `h-${size} w-${size} mx-3 flex items-center`

    return (
        <IconObject color={iconColor} className={iconStyle} />
    );
}