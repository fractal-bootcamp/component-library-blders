// import Icon
// type IconOption = "lock" | "at" | "cheese" | "card" | "dollar" | "euro" | "reddit" | "error" | "check";

import { fetchIcon } from "../services/fetchIcon";
import { IconType } from "react-icons";


type Urgency = "info" | "success" | "warning" | "error"


type AlertInputProps = {
    message: string;
    urgency?: Urgency;
    multiMessage?: "stack" | "queue"
    fromTop?: boolean;
    duration?: number;
}


const bgColors: Record<Urgency, string> = {
    info: "bg-blue-300",
    success: "bg-green-300",
    warning: "bg-yellow-300",
    error: "bg-red-300"
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

    const icon = (() => {
        switch (urgency) {
            case "success":
                return fetchIcon("check");
            case "warning":
            case "error":
                return fetchIcon("error");
            default:
                return null;
        }
    })();


    const bgColor = bgColors[urgency] || "bg-gray-300";






    const alertClass = `
        fixed 
        bottom-4 
        left-1/2 
        transform 
        -translate-x-1/2 
        bg-white 
        text-black 
        p-4 
        rounded-lg 
        shadow-lg
        ${bgColor}
    `;


    return (
        <>
            <div className={alertClass}>
                {message}
            </div>
        </>
    );
}