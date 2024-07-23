import { useState } from "react";
import { TextInput } from "./components/TextInput";
import { Alert } from "./components/Alert";




export const LuiExamples = () => {

    const [dummyInputText, setDummyInputText] = useState<string>("")
    const headerStyle = "text-4xl text-teal-500 font-bold m-3";
    const subheadStyle = "text-xl text-purple-700 font-bold m-3";
    const sampleIcon = "cheese"

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
                <Alert message="Woah" />
            </div>
        </>
    )
}