import React, { useContext, useState } from 'react'
import { ProductContext } from '../utils/Context';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


export function Create() {
    const navigate = useNavigate();
    const [products,setproducts] = useContext(ProductContext);
    const [title,settitle] = useState("");
    const [image, setimage]= useState("");
    const [category,setcategory] = useState("");
    const [price,setprice] = useState("");
    const [description,setdescription] = useState("");

    const AddProductHandler = (e) =>{
         e.preventDefault();
         if(title.trim().length < 5 ||image.trim().length < 5 || category.trim().length < 5 ||price.trim().length < 1 ||description.trim().length < 5){
            alert("Each and every input must have atleast 4 characters");
            return;
         }



         const product ={
            id:nanoid(),
            title,
            image,
            category,
            price,
            description,
         };
         setproducts([...products,product]);
         localStorage.setItem("products",JSON.stringify([...products,product]));
         toast.success("Product Added Successfully");
          navigate("/");

    }; 




    return (
         <form  onSubmit={AddProductHandler} className='flex flex-col items-center p-[5%] w-screen h-screen'>
            <h1 className='mb-5 w-1/2  text-3xl'>Add New Product</h1>
            <input type="url" placeholder='image link' className='text-1xl bg-zinc-100 rounded p-3  w-1/2   mb-3 '  onChange={(e)=>setimage(e.target.value)} value={image}    />
            <input type="text" placeholder='title' className='text-1xl bg-zinc-100 rounded p-3  w-1/2   mb-3 '  onChange={(e)=>settitle(e.target.value)} value={title}    />

            <div className='w-1/2 flex justify-between '>
            <input type="text" placeholder=' Category' className='text-1xl bg-zinc-100 rounded p-3  w-[48%]    mb-3 '  onChange={(e)=>setcategory(e.target.value)} value={category}    />
            <input type="number" placeholder='Price' className='text-1xl bg-zinc-100 rounded p-3  w-[48%]   mb-3'  onChange={(e)=>setprice(e.target.value)} value={price}    />
            </div>
            <textarea  placeholder='Enter Product description here..'    className='text-1xl bg-zinc-100 rounded p-3  w-[50%]   mb-3' rows="10" onChange={(e)=>setdescription(e.target.value)} value={description} ></textarea>
            <button href="/Create" className=' self-start ml-[25%] py-3 px-5 border rounded border-blue-500 text-blue-300'>Add The Product</button>


         </form>
    ) 
}
