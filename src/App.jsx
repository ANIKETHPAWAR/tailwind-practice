
import { useState } from 'react'
import './App.css'

import { SidebarClass1 } from './components/BasicProject.jsx'
function App() {
  
const[sideBarOpen,setSidebarOpen] = useState(true);
  return (
   <div className="flex">
    <SideBar sideBarOpen={sideBarOpen} setSidebarOpen={setSidebarOpen}/>
    <MainContent sideBarOpen={sideBarOpen}/>
   </div>
  )  
}
function SideBar({sideBarOpen,setSidebarOpen}){
  return <div className='h-screen w-64 bg-blue-50'></div>
}
function MainContent(){
  return <div className='w-full'>
<div className='h-64 bg-black'></div>
<div className='grid grid-cols-10 gap-4 p-8'>
<div className='col-span-2 h-64 rounded-2xl bg-gray-400 -translate-y-24 shadow-lg'></div>
<div className='col-span-5 h-96 shadow-lg rounded-2xl'></div>
<div className='col-span-3 shadow-lg  rounded-2xl'></div>

</div>
  </div>
}
export default App
