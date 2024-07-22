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
 * TextInput Component
 * 
 * Still to add in Animations:
 * 
 * - Focus: border color change, shadow effect.
 * - Error: shake animation.
 * 
 * @param {string} value - Current input value.
 * @param {Function} onChange - Handles input changes.
 * @param {string} placeholderText - Placeholder text.
 * @param {boolean} isPassword - Password input type.
 * @param {boolean} isDisabled - Disabled input field.
 * @param {string} prefixIcon - Prefix icon.
 * @param {string} suffixIcon - Suffix icon.
 * @param {"error" | "success" | null } validationState - Validation state.
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

    // Use placeholder text if provided, otherwise use something appropriate
    const placeholderTextFinal = placeholderText
        ? placeholderText
        : isPassword
            ? "Enter password..."
            : "Enter text here...";

    // Use prefix icon on the Left if provided, or else another icon if appropriate
    const LeftIcon = prefixIcon ? (
        <TextIcon type={prefixIcon} />
    ) : (autoIcons && isPassword ? (
        <TextIcon type="lock" />
    ) : null
    );

    // Use suffix icon on the Right if provided, or else another icon if appropriate
    const RightIcon = suffixIcon ? (
        <TextIcon type={suffixIcon} />
    ) : (autoIcons && validationState === "success" ? (
        <TextIcon type="check" color="green" />
    ) : (autoIcons && validationState === "error" ? (
        <TextIcon type="error" color="red" />
    ) : null));

    // Border is green for success, red for problems
    const borderColor = validationState === "success"
        ? "border-green-500"
        : validationState === "error"
            ? "border-red-500"
            : "border-slate-500";

    const containerStyle = `
        relative 
        flex 
        flex-col 
        flex-grow 
    
        

    `;

    const inputPadding = `
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
        <>
            <div className={containerStyle}>
                <div className="relative flex flex-row items-center">
                    {LeftIcon && <div className="absolute left-3">{LeftIcon}</div>}
                    <input
                        type={isPassword ? "password" : "text"}
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        placeholder={placeholderTextFinal}
                        disabled={isDisabled}
                        className={`${inputPadding} ${LeftIcon ? "pl-12" : ""} ${RightIcon ? "pr-12" : ""}`}
                    />
                    {RightIcon && <div className="absolute right-3">{RightIcon}</div>}
                </div>
            </div>
        </>
    );
}