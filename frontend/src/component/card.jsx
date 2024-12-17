import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { MdCurrencyRupee } from "react-icons/md";
import { useProductStore } from "../store/product";
import UpdateProduct from "../Pages/UpdateProduct.jsx";

function Card({ product , onEdit  }) {

const {deleteProduct}=useProductStore();
const handleDeleteProduct = async(pid)=>{
    deleteProduct(pid)
}


  return (
    
      <div className='w-full  max-w-lg bg-white border-2 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      
      <img
        className="w-full h-32  rounded-t-lg bg-cover"
        src={product.image}
        alt="product image"
      />

      <div className="px-5 pb-5 flex flex-col justify-center gap-2">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white pt-2">
          {product.name}
        </h5>

        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white flex items-center">
            {`${product.price}`}
            <MdCurrencyRupee />{" "}
          </span>

        </div>
        
        <div className="flex gap-2 text-xl text-white items-center">
        <button className="rounded-lg p-2 text-blue-300 hover:bg-blue-600 hover:text-blue-200" onClick={()=>onEdit(product)}>
           <FiEdit /> 
           </button>            
            <button className="rounded-lg  p-2 text-red-400 hover:bg-red-600 hover:text-red-200"
            onClick={()=>handleDeleteProduct(product._id)}
            >
              
              <MdDelete />
            </button>
          </div>
      </div>

    
    </div>
    
   
);
}

export default Card;
