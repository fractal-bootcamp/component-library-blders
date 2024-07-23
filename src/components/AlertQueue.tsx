import { useEffect, useState } from "react";
import { TextIcon } from "./TextIcon";
import { AnimatePresence, motion } from "framer-motion";

type Urgency = "info" | "success" | "warning" | "error"

export type AlertMessage = {
    message: string;
    urgency?: Urgency;
}

type AlertQueueProps = {
    alerts: AlertMessage[];
    onRemove: (alert: AlertMessage) => void
    stacking?: boolean;
    fromTop?: boolean;
    duration?: number;
}

type SingleAlertProps = {
    message: string;
    urgency: Urgency;
    fromTop: boolean;
    duration: number;
    onRemove: (alert: AlertMessage) => void;
    stackIndex: number;
}

const bgColors: Record<Urgency, string> = {
    info: "bg-blue-200",
    success: "bg-green-200",
    warning: "bg-yellow-200",
    error: "bg-red-200"
}


/**
 * Queue of alerts (toast messages).
 * 
 * Alerts default to "info" level of urgency. Other options are "success", "warning", "error".
 * 
 * Alerts disappear after 3 seconds by default, or can be dismissed. They stack by default.
 */
export const AlertQueue = ({
    alerts,
    onRemove,
    stacking = true,
    fromTop = false,
    duration = 3000
}: AlertQueueProps) => {

    return (
        <div className={`fixed ${fromTop ? 'top-4' : 'bottom-4'} left-1/2 transform -translate-x-1/2`}>
            <AnimatePresence>
                {alerts.map((alert, index) => (
                    <motion.div
                        key={alert.message + index}
                        initial={{ y: fromTop ? -100 : 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: fromTop ? -100 : 100, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className={`mb-4 ${fromTop ? `mt-${index * 60}` : `mb-${index * 60}`}`}
                    >
                        <Alert
                            key={alert.message + index}
                            message={alert.message}
                            urgency={alert.urgency || "info"}
                            fromTop={fromTop}
                            duration={duration}
                            onRemove={onRemove}
                            stackIndex={10}
                        />
                    </motion.div>
                ))
                }
            </AnimatePresence>
        </div>
    );
}

const Alert = ({ message, urgency = "info", fromTop = false, duration = 3000, onRemove, stackIndex }: SingleAlertProps) => {

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

    const stackOffset = stackIndex * 60; // Adjust this value based on the height of your alerts and desired spacing


    const alertClass = `
        
        py-3 
        pr-3
        rounded-lg 
        shadow-lg
        min-w-[200px]
        ${bgColor}
        ${fromTop ? `mt-${stackOffset}` : `mb-${stackOffset}`}

    `;


    return (
        <>
            {isVisible && (
                <div className={alertClass}>
                    <div className="flex flex-row pb-2">
                        {ActiveIcon ?? ActiveIcon}
                        {message}
                    </div>
                    <div className="flex flex-row justify-center">
                        <button
                            className="text-gray-400 text-xs text-bold border border-gray-400 rounded p-1 px-2"
                            onClick={() => onRemove({ message: message })}
                        >
                            Dismiss
                        </button>
                    </div>
                </div>
            )}
        </>
    );
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







// PROB DELETABLE

// const [isVisible, setIsVisible] = useState(true);

// useEffect(() => {
//     const timer = setTimeout(() => {
//         setIsVisible(false);
//     }, duration);

//     return () => clearTimeout(timer);
// }, [duration]);
