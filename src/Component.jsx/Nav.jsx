import React, { useContext } from 'react';
import { ProductContext } from '../utils/Context';
import { Link } from 'react-router-dom';


export function Nav() {
  const [products]   = useContext( ProductContext);
  let distinct_category = products && products.reduce((acc, cv) =>[...acc,cv.category], []);
      distinct_category = [...new Set(distinct_category)];
     
      

   const color = ()=>{
    return `rgba(${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()}, 0.6)`;
   }



``


  return (
    <nav className='w-[15%]  h-full bg-zinc-50 pt-5 flex flex-col items-center bg-gradient-to-r from-sky-100 to-indigo-100'>

      <a href="/Create" className='py-3 px-5 border rounded border-blue-500 text-blue-300'>Add New Product</a>
      <hr className='my-3 w-[80%]'/>
      <h3 className='text-2xl mb-3 w-[80%]'>Category Filter</h3>
      <div className='w-[80%]'>

             {distinct_category.map((c,i) =>(
                              <Link key={i}  to={`/?category=${c}`} className='flex items-center mb-3'>
                                 <span style={{backgroundColor:color()}} className='h-[15px] w-[15px]   mr-2 rounded-full'></span>{" "} {c}
                              </Link>
             ) )} 
      </div>
    </nav>
  );
}