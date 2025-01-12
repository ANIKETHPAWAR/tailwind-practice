
import './App.css'

import { SidebarClass1 } from './components/BasicProject.jsx'
function App() {
  

  return (
   <div className='h-screen bg-blue-400 dark:bg-black'>
    <h1>Dark / Light mode</h1>
    <button onClick={() => {document.querySelector("html").classList.toggle("dark")}} className='dark:text-white '>Toggle</button>
   </div>
  )  
}

export default App
