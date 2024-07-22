import './index.css'
import { FirstButton } from './components/Button'
import { TextInput } from './components/TextInput'
import { useState } from 'react'

function App() {

  const [dummyInputText, setDummyInputText] = useState<string>("")
  const headerStyle = "text-4xl text-blue-500 font-bold underline";
  const subheadStyle = "text-xl text-purple-700 font-bold";
  const sampleIcon = "icon.png"


  return (
    <>
      <div className='bg-red-100'>
        <div className="text-3xl text-red font-bold underline">
          Hello world!
        </div>
        <FirstButton />
      </div>
      <div key="text-input component states">
        <div className={headerStyle}>
          Text Input
        </div>
        <div className={subheadStyle}>
          Absolute bare minimum:
        </div>
        <div>
          <TextInput value="Simple" onChange={() => { }} />
        </div>
        <div className={subheadStyle}>
          Other states:
        </div>
        <div>
          <TextInput value={dummyInputText} onChange={setDummyInputText} placeholderText='Enter text here' />
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
      </div>


    </>
  )
}

export default App
