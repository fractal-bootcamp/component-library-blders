import { IconType } from "react-icons";
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
} from "react-icons/bi";

type IconOption = "lock" | "at" | "cheese" | "card" | "dollar" | "euro" | "reddit" | "error" | "check";


const iconLookup = (name: string | undefined): IconType | null => {

    if (!name) return null

    const icons: { [key in IconOption]: IconType } = {
        lock: BiLockAlt,
        at: BiAt,
        cheese: BiCheese,
        card: BiCreditCard,
        dollar: BiDollar,
        euro: BiEuro,
        reddit: BiLogoReddit,
        error: BiSolidMessageAltError,
        check: BiCheck,
    };

    return icons[name as IconOption] || null;
}

type TextInputProps = {
    value: string;
    onChange: (value: string) => void;
    placeholderText?: string;
    isPassword?: boolean;
    isDisabled?: boolean;
    prefixIcon?: IconOption;
    suffixIcon?: IconOption;
    validationState?: "error" | "success" | null;
    autoIcons?: boolean;
}

/**
 * Features and Props:
 * 
 * - Supports validation states such as error and success.
 * - Allows toggling of hidden password option.
 * - Ability to set the input field as disabled.
 * - Option to include prefix and suffix icons.
 * - Supports popover info icon.
 * - Placeholder text can be customized.
 * - Provides value and onChange handler for input control.
 * 
 * Default Animations:
 * 
 * - Focus animation includes border color change and slight shadow effect.
 * - Shake animation triggered on validation error.
 * 
 * @param {string} value - The current value of the input field.
 * @param {Function} onChange - The function to handle changes in the input field.
 * @param {string} placeholderText - The text to display as a placeholder in the input field.
 * @param {boolean} isPassword - Indicates if the input field should be of type password.
 * @param {boolean} isDisabled - Indicates if the input field should be disabled.
 * @param {string} prefixIcon - The icon to display as a prefix in the input field.
 * @param {string} suffixIcon - The icon to display as a suffix in the input field.
 * @param {"error" | "success" | null } validationState - The validation state of the input field.
 * 
 * @returns {JSX.Element} 
 */
export const TextInput = ({
    value,
    onChange,
    placeholderText,
    isPassword,
    isDisabled,
    prefixIcon,
    suffixIcon,
    validationState = null,
    autoIcons = true
}: TextInputProps) => {



    // Let's show a lock for password input
    if (autoIcons && !prefixIcon && isPassword) {
        prefixIcon = "lock"
    }

    const PrefixIconObject: IconType | null = iconLookup(prefixIcon)

    const SuffixIconObject: IconType | null = iconLookup(suffixIcon)



    const containerStyle = `
        relative 
        flex 
        flex-col 
        flex-grow 
        rounded-lg 
        m-2 

    `;

    // Padding notes:
    // w-6 + m-3 + m-3 = *-12 (48px) on the icon
    // this must equal the pl-12 or pr-12 padding used in inputPadding box when icon appears
    // 
    // Transform notes:
    // top-1/2 puts top edge at 50% of containing element's height
    // transform -translate-y-1/2 ...translates element vertically by -50% of its own height
    const iconStyle = "h-6 w-6 mx-3 top-1/2 transform -translate-y-1/2";

    const inputPadding = `
        rounded-lg 
        p-3 
        ${prefixIcon ? "pl-12" : ""} 
        ${suffixIcon ? "pr-12" : ""}
        border border-2
        ${validationState === "success" ? "border-green-500" : ""} 
        ${validationState === "error" ? "border-red-500" : ""}
        ${!validationState ? "border-slate-500" : ""}


    `;

    if (!placeholderText) {
        placeholderText = isPassword ? "Enter password..." : "Enter text here...";
    }


    return (
        <>
            <div className={containerStyle}>
                {prefixIcon && PrefixIconObject && <PrefixIconObject className={`${iconStyle} absolute left-0`} />}
                <input
                    type={isPassword ? "password" : "text"}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholderText}
                    disabled={isDisabled}
                    className={inputPadding}
                />
                {suffixIcon && SuffixIconObject && <SuffixIconObject className={`${iconStyle} absolute right-0`} />}
            </div>
        </>
    );
}