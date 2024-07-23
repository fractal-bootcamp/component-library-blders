import './index.css'
import { FirstButton } from './components/Button'
import { LuiExamples } from './LuiExamples'


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
      <div>
        <LuiExamples />
      </div>


    </>
  )
}

export default App
