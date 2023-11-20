import React, { useState ,useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'


export default function SpecificProduct() {
  const { id } = useParams();
  const [product,setProduct]= useState([])
  const [loading,setLoading]= useState(false)

  useEffect(()=>{
    const getProducts =async ()=>{
      try {
        const url = `https://fakestoreapi.com/products/${id}`;
        setLoading(true);
        const response = await fetch(url);
        const parsedData = await response.json();
        console.log(parsedData);
        setProduct(parsedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getProducts();
  },[id]);

  const Loading =()=>{
    return <>
    <div>
    <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Loading...</button>
    </div>
    </>

  }

  const ShowProduct=()=>{
    return(
      <>
      <div className=' m-7 flex justify-center bg-slate-950 md:h-screen md:flex-row flex-col'>
        <div className='md:w-[400px] w-auto h-[333px] flex justify-center'>
          <img src={product.image} alt={product.title} className='w-[300px] h-[333px] object-cover' />
        </div>
        <div className='text-white space-y-3 flex flex-col justify-start'>
          <h3  className='text-2xl flex justify-start'>
          <p className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
             {product.category}</p>
          </h3>
          <h1 className='text-3xl md:w-[400px] w-auto text-left'>
            {product.title}
          </h1>
          <div className='flex justify-start'>
            <p className="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-3 py-1 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">
            Rating   {product.rating &&   product.rating.rate}

            </p>
          </div>
          <div className='flex justify-start'>
            <p className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"> 
            {product.price}$
            </p>
          </div>
          <div className='flex justify-start max-w-[400px]'>
            <p className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"> 
            {product.description}
            </p>
          </div>
          <div className='justify-between flex'>
              <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg className="w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21"><path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/></svg>
                   Add To Cart 
               </button>
               
                  <NavLink to="/cart" className='text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800'>
                Go To Cart
               </NavLink>
          </div>

        


             
         
        </div>
      </div>
      </>
    )
    
    
  }
  
  

  return (
    <>
    <div>
      <div>
        {loading? <Loading/> : <ShowProduct />}
      </div>
    </div>

    
    
    
    </>
  )
}
