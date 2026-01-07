import React from 'react'
import DisplayHome from './DisplayHome'
import {Routes,Route} from "react-router-dom"

const Display = () => {
  return (
    <>
      <div className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overleaf-auto lg:w-[75%] lg:ml-0'>
<Routes>
    <Route path='/d' element={<DisplayHome/>}></Route>
</Routes>
      </div>
    </>
  )
}

export default Display
