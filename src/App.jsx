import React from 'react'
import { Home } from './Component.jsx/Home'
import { Routes , Route } from 'react-router-dom'
import { Details } from './Component.jsx/Details'
import { Link } from 'react-router-dom'
import { Create } from './Component.jsx/Create'
import { Edit } from './Component.jsx/Edit'
export function App() {
  

  return (
    <div className='h-screen w-screen flex  '>
         
        <Link to="/" className="  text-red-300 text-2xl rounded-md  absolute text-lime-50 p-2 left-[19%] bg-gradient-to-r from-violet-500 to-fuchsia-500  top-[2.3%] bg-local ">Apna~Mart</Link>
       <Routes>
            <Route path="/" element={<Home />}  />
            <Route path="/create" element={<Create />}  />
             <Route path='/details/:id' element={<Details />}  />
             <Route path="/edit/:id" element={<Edit />}  />

       </Routes>


    </div>
  )
}
