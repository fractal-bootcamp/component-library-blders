import './index.css'
import { FirstButton } from './components/Button'
import { useState } from 'react'
import { BiGame, BiRocket, BiSmile } from 'react-icons/bi'


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
      <div className='bg-red-100 flex flex-col items-center gap-4 m-5 p-5 rounded-md'>
        <FirstButton
          variant='primary'
          size='medium'
          disabled={isDisabled}
          loading={isLoading}
          textContent={'Click me'}
          icon={'rocket'}
          iconPosition='left'
          onClick={handleClick} />
        <FirstButton textContent="OnlyTextAsProps" />
      </div>
    </>
  )
}

export default App
