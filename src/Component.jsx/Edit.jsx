import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { ProductContext } from '../utils/Context';


export function Edit() {
    const [products,setproducts] = useContext(ProductContext);
    const navigate = useNavigate();
     const { id }=useParams();
    const [product,setproduct]= useState({
            title:"",
            description:"",
            image:"", 
            price:"",
            category:"",
    });
   const ChangeHandler = (e) =>{
      // console.log(e.target.name, e.target.value);
      products.findIndex((p) => p.id == id)[0];
      setproduct({...product,[e.target.name]: e.target.value});
   }





    useEffect(() =>{
              setproduct(products.filter((p) => 
                p.id == id)[0]);
    },[id]);
    



    const AddProductHandler = (e) =>{
         e.preventDefault();
         if(product.title.trim().length < 5 ||
            product.image.trim().length < 5 ||
            product.category.trim().length < 5 ||
            product.price.trim().length < 1 ||
            product.description.trim().length < 5
         ){
            alert("Each and every input must have atleast 4 characters");
            return;
         }
         const pi = products.findIndex((p) => p.id == id);
         const copyData = [...products];
         copyData[pi] = {...products[pi], ...product} 
         // console.log(copyData); 
       setproducts(copyData);
 
         // setproducts([...products,product]);
         localStorage.setItem("products",JSON.stringify(copyData));
          navigate(-1);
    }; 

    console.log(products);
    

    return (
        <form  onSubmit={AddProductHandler} className='flex flex-col items-center p-[5%] w-screen h-screen'>
        <h1 className='mb-5 w-1/2  text-3xl'>Edit New Product</h1>
        <input type="url" placeholder='image link' className='text-1xl bg-zinc-100 rounded p-3  w-1/2   mb-3 ' name='image' onChange={ChangeHandler} value={product && product.image}    />
        <input type="text" placeholder='title' className='text-1xl bg-zinc-100 rounded p-3  w-1/2   mb-3 ' name='title' onChange={ChangeHandler} value={product && product.title}    />

        <div className='w-1/2 flex justify-between '>
        <input type="text" placeholder=' Category' className='text-1xl bg-zinc-100 rounded p-3  w-[48%]    mb-3 ' name='category' onChange={ChangeHandler} value={product && product.category}    />
        <input type="number" placeholder='Price' className='text-1xl bg-zinc-100 rounded p-3  w-[48%]   mb-3' name='price' onChange={ChangeHandler} value={product && product.price}    />
        </div>
        <textarea  placeholder='Enter Product description here..'    className='text-1xl bg-zinc-100 rounded p-3  w-[50%]   mb-3' rows="10" name='description' onChange={ChangeHandler} value={product && product.description} ></textarea>
        <button href="/Create" className=' self-start ml-[25%] py-3 px-5 border rounded border-blue-500 text-blue-300'>Edit The Product</button>


     </form>
    )
}
