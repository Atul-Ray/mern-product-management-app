import React, { useState } from 'react'
import { useProductStore } from '../store/product.js'

function UpdateProduct({product , closeModel}) {

const [productName , setProductName]=useState(product.name)
const [productPrice , setProductPrice]=useState(product.price)
const [productImage , setProductImage]=useState(product.image)
const {updateProduct} =useProductStore();

async function  handleUpdate(){
const updatedProduct ={name:productName , price:productPrice , image:productImage}
const result = await updateProduct(product._id , updatedProduct);
console.log(result);

}

return (
    <div className="fixed inset-0 flex items-center justify-center  bg-opacity-50 z-50" >
    <div className='relative z-60'>
    <div className='w-full flex items-center justify-center p-5 '>
    <div className='bg-slate-900 m-12 rounded-md h-auto flex flex-col p-5 gap-5 w-3/4'>
    <div className='flex justify-end'><button className='mr-4 text-lg font-bold text-red-500 p-2 hover:text-2xl transition' onClick={closeModel}>X</button></div>

     <h1 className='text-center font-mono font-bold text-white text-2xl'>Update Product </h1>
        <input type='text'
         className='rounded-md p-3 '
          placeholder='Enter Your Product Name'
          value={productName}
          onChange={(e)=>setProductName(e.target.value)}/>
        <input type='number'
         className='rounded-md p-3 '
          placeholder='Enter Price'
          value={productPrice}
          onChange={(e)=>setProductPrice(e.target.value)}/>
        <input type='text' 
        className='rounded-md p-3 ' 
        placeholder='Ente Image URL'
        value={productImage}
        onChange={(e)=>setProductImage(e.target.value)}/>

    <div className='w-full flex items-center justify-center'>
        <button className='bg-slate-200 text-center max-[600px]:px-6 rounded-md py-2 mx-48 hover:bg-slate-400 font-bold'
        onClick={()=>handleUpdate()}
        >Update Product</button>
        </div>
       </div>
       </div>
       </div>
       </div>
  )
}

export default UpdateProduct