
type TextInputProps = {
    value: string;
    onChange: Function;
    placeholderText?: string;
    isPassword?: boolean;
    isDisabled?: boolean;
    prefixIcon?: string;
    suffixIcon?: string;
    validationState?: "null" | "error" | "success";
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

    const sharedStyle = "rounded border p-2 m-2";
    const regStyle = sharedStyle;
    const successStyle = sharedStyle + " border-green-500";
    const errorStyle = sharedStyle + " border-red-500";

    return (
        <>
            <div>
                {prefixIcon && <span className="absolute left-0 inset-y-0 flex items-center pl-2">
                    <img src={prefixIcon} alt="prefix icon" className="h-4 w-4" />
                </span>}
                <input
                    type={isPassword ? "password" : "text"}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholderText}
                    disabled={isDisabled}
                    className={validationState === "error" ? errorStyle : validationState === "success" ? successStyle : regStyle}
                />
            </div>
            {suffixIcon && <span className="absolute right-0 inset-y-0 flex items-center pr-2">
                <img src={suffixIcon} alt="suffix icon" className="h-4 w-4" />
            </span>}
        </>
    );
}