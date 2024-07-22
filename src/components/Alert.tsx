// import Icon
// type IconOption = "lock" | "at" | "cheese" | "card" | "dollar" | "euro" | "reddit" | "error" | "check";

import { fetchIcon } from "../services/fetchIcon";
import { IconType } from "react-icons";








type AlertInputProps = {
    message: string;
    urgency?: "info" | "success" | "warning" | "error";
    multiMessage?: "stack" | "queue"
    fromTop?: boolean;
    duration?: number;
}


/**
 * A toast for transient messages.

- Different type defaults (success, error, warning, info)
- Auto-dismiss with customizable duration
- Manual dismiss button
- Display options for multiple notifications (all at once, queue, etc)
- Slide-in from the top or bottom on show
- Slide-out on dismiss
 * @param name 
 * @returns 
 */
export const TextInput = ({
    message,
    urgency = "info",
    multiMessage = "stack",
    fromTop = false,
    duration = 3000
}: AlertInputProps) => {


    let icon = null

    if (urgency === "success") {
        icon = fetchIcon("check")
    }

    if (urgency === "warning") {
        icon = fetchIcon("error")
    }

    if (urgency === "error") {
        icon = fetchIcon("error")
    }


    return (
        <>
            <div>
                {message}
            </div>
        </>
    );
}