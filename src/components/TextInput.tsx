import { TextIcon, icons } from "./TextIcon";

type TextInputProps = {
    value: string;
    onChange: (value: string) => void;
    placeholderText?: string;
    isPassword?: boolean;
    isDisabled?: boolean;
    prefixIcon?: keyof typeof icons;
    suffixIcon?: keyof typeof icons;
    validationState?: "error" | "success" | null;
    autoIcons?: boolean;
}

/** 
 * Icon options include "lock", "error", "euro", "at" (@).
 * 
 * Obvious icons (e.g. for password input) are added automatically.
 * Send autoIcons = false to switch this off.
 * 
 * Features still to be added:
 * 
 * - Focus: border color change, shadow effect.
 * - Error: shake animation.
 * 
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

    // Use placeholder text if provided, or use something appropriate
    const placeholderTextFinal = placeholderText
        ? placeholderText
        : isPassword
            ? "Enter password..."
            : "Enter text here...";

    // Use prefix icon on the Left if provided, or use another icon if appropriate
    const LeftIcon = prefixIcon
        ? <TextIcon type={prefixIcon} />
        : (autoIcons && isPassword && <TextIcon type="lock" />);


    // Use suffix icon on the Right if provided, or use another icon if appropriate
    const getRightIcon = () => {
        if (suffixIcon) return <TextIcon type={suffixIcon} />;
        if (autoIcons) {
            if (validationState === "success") return <TextIcon type="check" color="green" />;
            if (validationState === "error") return <TextIcon type="error" color="red" />;
        }
        return null;
    };
    const RightIcon = getRightIcon();

    // Border is green for success, red for problems
    const borderColor = validationState === "success"
        ? "border-green-500"
        : validationState === "error"
            ? "border-red-500"
            : "border-slate-500";

    // Icons get absolute placement over the input box
    // Padding on left or right should accommodate presence of an Icon if present
    const inputBoxStyle = `
        rounded-lg 
        p-3 
        m-3
        flex-grow 
        ${LeftIcon ? "pl-12" : ""} 
        ${RightIcon ? "pr-12" : ""}
        border border-2
        ${borderColor} 
    `;

    return (

        <div className="flex flex-row items-center">
            {LeftIcon && <div className="absolute left-3">{LeftIcon}</div>}
            <input
                type={isPassword ? "password" : "text"}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholderTextFinal}
                disabled={isDisabled}
                className={inputBoxStyle}
            />
            {RightIcon && <div className="absolute right-3">{RightIcon}</div>}
        </div>

    );
}