import './index.css'
import { FirstButton } from './components/Button'
import { useState } from 'react'

function App() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleClick() {
    setIsLoading(true);
    setIsDisabled(true);
    console.log('clicked');
    setTimeout(() => {
      setIsDisabled(false);
      setIsLoading(false);
    }
      , 2000);
  }

  return (
    <>
      <div className='bg-red-100'>
        <div className="text-3xl text-red font-bold underline">
          Hello world!
        </div>
        <FirstButton
          variant='primary'
          size='medium'
          disabled={isDisabled}
          loading={isLoading}
          text={'Click me'}
          onClick={handleClick} />
      </div>
    </>
  )
}

export default App
