import './index.css'
import { FirstButton } from './components/Button'
import { useState } from 'react'
import { BiGame, BiRocket, BiSmile } from 'react-icons/bi'


function App() {

  return (
    <>
      <div className='bg-red-100 flex flex-col items-center gap-4 m-5 p-5 rounded-md'>
        <FirstButton
          variant='primary'
          size='medium'
          textContent='Click me'
          icon={'rocket'}
          iconPosition='left'
        />
      </div>
    </>
  )
}

export default App
