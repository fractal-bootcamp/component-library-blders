import { useState } from "react";
import { TextInput } from "./components/TextInput";
import { AlertQueue } from "./components/Alert";

export const LuiExamples = () => {

    const [dummyInputText, setDummyInputText] = useState<string>("")
    const headerStyle = "text-4xl text-teal-500 font-bold m-3";
    const subheadStyle = "text-xl text-purple-700 font-bold m-3";
    const sampleIcon = "cheese"

    const [showAlert, setShowAlert] = useState<boolean>(false);

    const handleShowAlert = () => {
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 4000); // Reset showAlert after 2 seconds
    };


    return (
        <>
            <div key="text-input component states">
                <div className={headerStyle}>
                    Text Input
                </div>
                <div className={subheadStyle}>
                    Default with minimum props (value & onChange):
                </div>
                <div>
                    <TextInput value={dummyInputText} onChange={setDummyInputText} />
                </div>
                <div className={subheadStyle}>
                    Other states:
                </div>
                <div>
                    <TextInput value={dummyInputText} onChange={setDummyInputText} placeholderText='Disabled state' isDisabled={true} />
                </div>
                <div>
                    <TextInput value={dummyInputText} onChange={setDummyInputText} placeholderText='Password version' isPassword={true} />
                </div>
                <div>
                    <TextInput value={dummyInputText} onChange={setDummyInputText} placeholderText='State = Error :(' validationState="error" />
                </div>
                <div>
                    <TextInput value={dummyInputText} onChange={setDummyInputText} placeholderText='State = Success :)' validationState="success" />
                </div>
                <div>
                    <TextInput value={dummyInputText} onChange={setDummyInputText} placeholderText='prefixIcon' prefixIcon={sampleIcon} />
                </div>
                <div>
                    <TextInput value={dummyInputText} onChange={setDummyInputText} placeholderText='suffixIcon' suffixIcon={sampleIcon} />
                </div>
                <AlertQueue message="hello" urgency="success" />
                <div className={subheadStyle}>
                    Button to trigger Alert:
                </div>
                <div>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleShowAlert()}
                    >
                        Show Alert
                    </button>
                </div>
                {showAlert && <AlertQueue message="hello" urgency="success" duration={2000} fromTop={true} />}

            </div>
        </>
    )
}
