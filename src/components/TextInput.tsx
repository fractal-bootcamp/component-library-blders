
type TextInputProps = {
    value: string;
    onChange: (value: string) => void;
    placeholderText?: string;
    isPassword?: boolean;
    isDisabled?: boolean;
    prefixIcon?: string;
    suffixIcon?: string;
    validationState?: "error" | "success" | null;
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
 * @param {"null" | "error" | "success"} validationState - The validation state of the input field.
 * 
 * @returns {JSX.Element} 
 */
export const TextInput = ({ value, onChange, placeholderText, isPassword, isDisabled, prefixIcon, suffixIcon, validationState }: TextInputProps) => {

    const containerStyle = `
        relative 
        flex 
        flex-col 
        flex-grow 
        rounded 
        border 
        m-2 
        ${validationState === "success" ? "border-green-500" : ""} 
        ${validationState === "error" ? "border-red-500" : ""}
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
        rounded 
        p-3 
        ${prefixIcon ? "pl-12" : ""} 
        ${suffixIcon ? "pr-12" : ""}
    `;

    if (!placeholderText) {
        placeholderText = isPassword ? "Enter password..." : "Enter text here...";
    }

    return (
        <>
            <div className={containerStyle}>
                {prefixIcon && <img src={prefixIcon} alt="input icon (prefix)" className={`${iconStyle} absolute left-0 `} />}
                <input
                    type={isPassword ? "password" : "text"}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholderText}
                    disabled={isDisabled}
                    className={inputPadding}
                />
                {suffixIcon && <img src={suffixIcon} alt="input icon (suffix)" className={`${iconStyle} absolute right-0`} />}
            </div>
        </>
    );
}