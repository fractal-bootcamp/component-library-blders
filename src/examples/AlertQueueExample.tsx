import { useState } from "react";
import { AlertMessage, AlertQueue } from "../components/AlertQueue";



// array of alert objects
// to add an alert, you can have an "Alert Provider", which is global
// const [alertQueue, setAlertQueue] = useState([])
// const dispatchAlert = (alert) => setAlertQueue([...alertQueue, alert])
// const removeAlert = (alert) => ...
// <Alert onRemove={() => removeAlert()} ...


export const AlertExamples = () => {

    const [alertQueue, setAlertQueue] = useState<AlertMessage[]>([])

    const dispatchAlert = (alert: AlertMessage) => {
        console.log("dispatchAlert clicked");
        setAlertQueue([...alertQueue, alert])
    }

    const removeAlert = (oldAlert: AlertMessage) => {
        setAlertQueue(alertQueue.filter(alert => alert.message !== oldAlert.message));
    }


    const sampleAlert: AlertMessage = { message: "Details Saved!", urgency: "success" }


    const headerStyle = "text-4xl text-teal-500 font-bold m-3";
    const subheadStyle = "text-xl text-purple-700 font-bold m-3";

    return (
        <>
            <div key="text-input component states">
                <div className={headerStyle}>
                    Text Input
                </div>
                <div className={subheadStyle}>
                    Default with minimum props (value & onChange):
                </div>
                <div className={subheadStyle}>
                    Other states:
                </div>
                <div className={subheadStyle}>
                    Button to trigger Alert:
                </div>
                <div>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => dispatchAlert(sampleAlert)}
                    >
                        Show Alert
                    </button>
                </div>
                <AlertQueue alerts={alertQueue} onRemove={(alert) => removeAlert(alert)} />

            </div>
        </>
    )
}
