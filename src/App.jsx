import { useState } from 'react'

import './App.css'

function App() {
  const [value, setValue] = useState('')

  return (
    <>
      <div className='body' >

        <div className='calcu'>
          <form action="">
            <div className='display'>
              <input type="text" value={value} className='input' />
            </div>
            <div className='buttons'>
            <div>
              <input type="button" value="AC" className='ac-btn' onClick={e=>setValue('')}/>
              <input type="button" value="DE" className='de-btn' onClick={e=>setValue(value.slice(0,-1))}/>
              <input type="button" value="." className='btn' onClick={e => setValue(value + e.target.value)} />
              <input type="button" value="/" className='btn' onClick={e => setValue(value + e.target.value)} />
            </div>
            <div>
              <input type="button" value="1" className='btn' onClick={e => setValue(value + e.target.value)} />
              <input type="button" value="2" className='btn' onClick={e => setValue(value + e.target.value)} />
              <input type="button" value="3" className='btn' onClick={e => setValue(value + e.target.value)} />
              <input type="button" value="*" className='btn' onClick={e => setValue(value + e.target.value)} />
            </div>
            <div>
              <input type="button" value="6" className='btn' onClick={e => setValue(value + e.target.value)} />
              <input type="button" value="5" className='btn' onClick={e => setValue(value + e.target.value)} />
              <input type="button" value="4" className='btn' onClick={e => setValue(value + e.target.value)} />
              <input type="button" value="+" className='btn' onClick={e => setValue(value + e.target.value)} />
            </div>
            <div>
              <input type="button" value="9" className='btn' onClick={e => setValue(value + e.target.value)} />
              <input type="button" value="8" className='btn' onClick={e => setValue(value + e.target.value)} />
              <input type="button" value="7" className='btn' onClick={e => setValue(value + e.target.value)} />
              <input type="button" value="-" className='btn' onClick={e => setValue(value + e.target.value)} />
            </div>
            <div>
              <input type="button" value="00" className='btn' onClick={e => setValue(value + e.target.value)} />
              <input type="button" value="0" className='btn' onClick={e => setValue(value + e.target.value)} />
              <input type="button" value="=" className='equal-btn' onClick={e => setValue(eval(value))} />

            </div>
            </div>
          </form>
        </div>

      </div>
    </>
  )
}

export default App
