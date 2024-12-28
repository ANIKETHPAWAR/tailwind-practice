import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
   <div className='grid grid-cols-10 '>
   <div className='bg-red-400 sm:col-span-4 col-span-10'>Child 1</div>
   <div className='bg-blue-600 sm:col-span-4 col-span-10'>Child 2</div>
   <div className='bg-green-600 sm:col-span-2 col-span-10'>Child 3</div>
   </div>
    </>
  )
}

export default App
