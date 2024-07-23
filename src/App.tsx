import './index.css'
import { FirstButton } from './components/Button'
import { LuiExamples } from './LuiExamples'

function App() {

  return (
    <>
      <div className='bg-red-100'>
        <div className="text-3xl text-red font-bold underline">
          Hello world!
        </div>
        <FirstButton />
      </div>
      <div>
        <LuiExamples />
      </div>


    </>
  )
}

export default App
