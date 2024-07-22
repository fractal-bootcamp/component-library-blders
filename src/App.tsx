import './index.css'
import { FirstButton } from './components/Button'
import { useState } from 'react'

function App() {
  const [isDisabled, setIsDisabled] = useState(false);

  function handleClick() {
    setIsDisabled(true);
    setTimeout(() => { setIsDisabled(false) }, 1000);
    console.log('clicked');
  }

  return (
    <>
      <div className='bg-red-100'>
        <div className="text-3xl text-red font-bold underline">
          Hello world!
        </div>
        <FirstButton disabled={isDisabled} text={'Click me'} onClick={handleClick} />
        <button onClick={() => { setIsDisabled(false) }}>Cancel</button>
      </div>
    </>
  )
}

export default App
