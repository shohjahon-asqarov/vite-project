import React, { useState } from 'react'
import Shohjahon from './components/Shohjahon'

const App = () => {


  const [num, setNum] = useState(0)

  const increment = () => {
    setNum(num + 1)
  }

  return (
    <>
      <div className='flex justify-center space-x-4 mt-20'>
        <span className='block text-center font-medium text-4xl'>{num}</span>
        <button onClick={increment} className='py-2 px-5 bg-blue-600 text-white rounded-md'>+</button>
      </div>
      <Shohjahon />
    </>
  )
}

export default App