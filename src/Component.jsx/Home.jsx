import React, { useContext, useEffect, useState } from 'react';
import { Nav } from './Nav';
import { Link, useLocation } from 'react-router-dom';
import { ProductContext } from '../utils/Context';
import { Loading } from './Loading';
import axios from '../utils/axios';

export function Home() {
   const [products] = useContext(ProductContext);
   const {search} = useLocation();
   const category = decodeURIComponent(search.split("=")[1]);
    
   
   
    const [filteredProducts,setfiliteredProducts] = useState(null);

   const getproductscategory = async () => {

       try{
        const {data} = await axios.get(`/products/category/${category}`);
        setfiliteredProducts(data);

       } catch(error){
          console.log(error);
       }
   }

    useEffect(() => {
        if(!filteredProducts || category == "undefined") setfiliteredProducts(products);
       if(category != "undefined") {
        
        // getproductscategory();
        setfiliteredProducts(products.filter(p => p.category == category ));
        
        
        
    }
    },[category, products]);

   

   return products ? (
       <>
              
           <Nav />
           <div className='w-[85%]  h-full p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto'>
               {filteredProducts && filteredProducts.map((p, i) => (
                   <Link key={p.id} to={`/details/${p.id}`} className='mr-3 mb-3 card p-3 border shadow rounded w-[18%] h-[30vh] flex-col flex justify-center items-center'>
                       <div className='mb-3 w-full h-[70%] bg-contain rounded bg-no-repeat bg-center hover:scale-110' style={{ backgroundImage: `url(${p.image})` }}></div>
                       <h1 className='hover:text-blue-300'>{p.title}</h1>
                   </Link>
               ))}
           </div>
       </>
   ) : (
       <Loading />
   );
};
