import './index.css'
// import { FirstButton } from './components/Button'
import ProgressBar from './components/ProgressBar'


function App() {

  return (
    <>
      <div className='bg-red-100 flex flex-col items-center gap-4 m-5 p-5 rounded-md'>
        {/* <FirstButton
          variant='primary'
          size='medium'
          textContent={'Click me'}
          icon={'rocket'}
          iconPosition='left' /> */}
        <label>Progress Bar</label>
        <ProgressBar value={14} max={100} shape='circular' />
      </div>
    </>
  )
}

export default App
