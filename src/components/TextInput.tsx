
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
 * Behavior/props:

- Validation states (error, success)
- Toggle hidden password option
- Disabled state
- Prefix and suffix icons
- Popover info icon
- Placeholder text
- Value and onChange handler

Default Animation:

- Focus animation with border color change and slight shadow.
- Shake animation on validation error.
 * @returns 
 */
export const TextInput = ({ value, onChange, placeholderText, isPassword, isDisabled, prefixIcon, suffixIcon, validationState }: TextInputProps) => {
    return (
        <input
            type={isPassword ? "password" : "text"}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholderText}
            disabled={isDisabled}
            className={validationState === "error" ? "error" : validationState === "success" ? "success" : ""}
        />
    );
}