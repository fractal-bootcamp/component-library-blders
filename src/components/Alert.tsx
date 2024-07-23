import { TextIcon } from "./TextIcon";


type Urgency = "info" | "success" | "warning" | "error"


type AlertInputProps = {
    message: string;
    urgency?: Urgency;
    multiMessage?: "stack" | "queue"
    fromTop?: boolean;
    duration?: number;
}


const bgColors: Record<Urgency, string> = {
    info: "bg-blue-200",
    success: "bg-green-200",
    warning: "bg-yellow-200",
    error: "bg-red-200"
}


/**
 * A toast for transient messages.

- Different type defaults (success, error, warning, info)
- Auto-dismiss with customizable duration
- Manual dismiss button
- Display options for multiple notifications (all at once, queue, etc)
- Slide-in from the top or bottom on show
- Slide-out on dismiss
 */
export const Alert = ({
    message,
    urgency = "info",
    multiMessage = "stack",
    fromTop = false,
    duration = 3000
}: AlertInputProps) => {

    const ActiveIcon = (() => {
        switch (urgency) {
            case "success":
                return <TextIcon type={urgency} color="green" />;
            case "warning":
            case "error":
                return <TextIcon type={urgency} color="red" />;
            default:
                return null;
        }
    })();


    const bgColor = bgColors[urgency] || "bg-gray-200";


    const alertClass = `
        fixed 
        bottom-4 
        left-1/2 
        transform 
        -translate-x-1/2 
        py-3 
        pr-3
        rounded-lg 
        shadow-lg
        ${bgColor}
    `;


    return (
        <>
            <div className={alertClass}>
                <div className="flex flex-row">
                    {ActiveIcon ?? ActiveIcon}
                    {message}
                </div>
            </div>
        </>
    );
}