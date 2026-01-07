import React from 'react'
import Sidebar from './Sidebar'
import Player from './Player'
import DisplayHome from './DisplayHome'

const Home = () => {
  return (
    <>
    <div className='h-screen bg-black'>
<div className='h-[90%] flex'>
<Sidebar/>
<DisplayHome/>
</div>
<Player/>
    </div>
      
    </>
  )
}

export default Home
