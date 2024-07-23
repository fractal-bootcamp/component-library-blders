import { useEffect, useState } from "react";
import { TextIcon } from "./TextIcon";
import { AnimatePresence, motion } from "framer-motion";


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

// I want a queue of alert messages
// it should show a message that has been added to the queue
// it will either go away after a set duration or be dismissed manually
// multiple message may arrive and be shown at the same time
// there may be some ordering that occurs
// They will not affect each other

// array of alert objects
// to add an alert, you can have an "Alert Provider", which is global
// const [alertQueue, setAlertQueue] = useState([])
// const dispatchAlert = (alert) => setAlertQueue([...alertQueue, alert])
// const removeAlert = (alert) => ...
// <Alert onRemove={() => removeAlert()} ...




/**
 * A toast for transient messages.

- Different type defaults (success, error, warning, info)
- Auto-dismiss with customizable duration
- Manual dismiss button
- Display options for multiple notifications (all at once, queue, etc)
- Slide-in from the top or bottom on show
- Slide-out on dismiss
 */
export const AlertQueue = ({
    message,
    urgency = "info",
    multiMessage = "stack",
    fromTop = false,
    duration = 3000
}: AlertInputProps) => {

    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, duration);

        return () => clearTimeout(timer);
    }, [duration]);

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

    const offscreenPosition = fromTop ? { y: -100, opacity: 0 } : { y: 100, opacity: 0 }

    const position = fromTop ? "top-4" : "bottom-4"


    const alertClass = `
        fixed 
        ${position}
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
        <AnimatePresence>
            {isVisible &&
                (<motion.div
                    initial={offscreenPosition}
                    animate={{ y: 0, opacity: 1 }}
                    exit={offscreenPosition}
                    transition={{ duration: 0.5 }}
                    className={alertClass}
                >
                    <div className="flex flex-row">
                        {ActiveIcon ?? ActiveIcon}
                        {message}
                    </div>

                </motion.div>)
            }
        </AnimatePresence>
    );
}