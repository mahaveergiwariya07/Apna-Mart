import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'; 
import axios from '../utils/axios';
import { Loading } from './Loading';
import { ProductContext } from '../utils/Context';

export function Details() {
    const navigate = useNavigate();
    const [products,setproducts] = useContext(ProductContext);
    const [product, setproduct] = useState(null);

    const {id} = useParams();

    // const getsingleproduct = async () => {
    //   try{
    //         const {data} = await axios.get(`/products/${id}`);
    //         setproduct(data);
    //   } catch{
    //        console.log(error);
    //   }
    // };

    useEffect(() =>{
        if(!product){
            setproduct(products.filter((p) => p.id == id)[0]);
        }
        //    getsingleproduct();

    },[]);
    const ProductDeleteHandler = (id)=>{
        const FilteredProducts = products.filter((p)=> p.id !== id);
        setproducts(FilteredProducts);
        localStorage.setItem("products", JSON.stringify(FilteredProducts));
        navigate("/");
    }


 
    return (product ?(
        <div className='h-[100vh] h-full items-center  flex m-auto py-[11%] px-[15%]'>
             <img src= {`${product.image}`} alt="" className='w-[120%] h-[130%] object-contain  mr-10' />
             <div className='content  '>
                <h1 className='text-3xl '>{product.title}</h1>
                <h3 className='text-blue-300 py-[5%]'>{product.category} </h3>
                <h2 className='text-red-400 mb-5'>$ {product.price}</h2>
                <p className='mb-8 w-[100%]'> <span className='text-1xl text-yellow-600'>Description:</span>
                    <br />{product.description} </p>
                <Link to={`/edit/${product.id}`} className='py-3 px-5 border rounded text-blue-300 mr-4 bg-green-900 border-none text-zinc-50' >Edit</Link>
                <button onClick ={() =>  ProductDeleteHandler(product.id)} className='py-3 px-5 border rounded  text-blue-300 bg-red-900 border-none text-zinc-50'>Delete</button>
             </div>
        </div> ): <Loading />
    );
};
