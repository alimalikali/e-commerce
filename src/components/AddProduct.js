import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function AddProduct() {
  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(false);
  const [filter,setFilter] = useState(data);


  useEffect(()=>{
    const getProducts =async ()=>{
      try {
        const url = `https://fakestoreapi.com/products`;
        setLoading(true);
        const response = await fetch(url);
        const parsedData = await response.json();
        console.log(parsedData);
        setData(parsedData);
        setFilter(parsedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getProducts();
  },[]);




  const Loading =()=>{
    return <>
    <div>
    <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Loading...</button>
    </div>
    </>

  }

  const filterProduct=(cat)=>{
    const newList = data.filter((x)=> x.category ===cat);
    setFilter(newList);
  } 

  const ShowProducts =()=>{
    return <>
      <div>
      <button type="button" onClick={()=>{setFilter(data)}} className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">All</button>
      <button type="button" onClick={()=>{filterProduct("men's clothing")}} className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Men Clothing</button>
      <button type="button" onClick={()=>{filterProduct("women's clothing")}} className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Women Clothing</button>
      <button type="button" onClick={()=>{filterProduct("jewelery")}} className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Jewelery</button>
      <button type="button" onClick={()=>{filterProduct("electronics")}} className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Electronic</button>
 
      </div>
      <div className="grid grid-flow-row md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 mt-5">

      {filter.map((product)=>{
        return <>

         <div key={product.id}   className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
  <div className="relative overflow-hidden bg-cover bg-no-repeat" data-te-ripple-init data-te-ripple-color="light">
    <img className="rounded-t-lg w-[100%] h-[300px]"  src={product.image} alt={product.title} />
    <a href="#!">
      <div
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
    </a>
  </div>
  <div className="p-6">
    <h5
      className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
      {product.title.length>20?product.title.slice(0,20) :product.title} 
    </h5>
    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
      {product.description.slice(1,50)}
    </p>
    <NavLink to={`/products/${product.id}`}>
    <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">{product.price}$</button>
    </NavLink>
  </div>
</div>


            
        
        
        
        
        </>
      })}
      </div>
     
    </>

    
  }
  return (
    <>

    <div className="flex flex-col space-y-5">
      <div className="flex justify-center my-5">
        <h1 className="text-6xl text-white">
          Products
        </h1>
      </div>
      <div className=" flex justify-center px-3 ">
        <div >
           {loading ? <Loading /> : <ShowProducts />}

        </div>
      </div>
    </div>
      



    </>
  );
}
