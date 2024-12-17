import React, { useState } from 'react'
import { useProductStore } from '../store/product';

function CreatePage() {
const [newProduct , setNewProduct]=useState({
  name:'',
  price:'',
  image:''
})



const {createProduct}=useProductStore()

const handleAddButton = async()=>{
 const {success , message}=await createProduct(newProduct);
 console.log("success" , success);
 console.log("message" , message);
 setNewProduct({name:"",price:"",image:""})
}

  return (
    <div className='w-full flex items-center justify-center p-5'>
      
    <div className='bg-slate-900 m-12 rounded-md h-auto flex flex-col p-5 gap-5 w-3/4'>
     <h1 className='text-center font-mono font-bold text-white text-2xl'>Create New Product </h1>
        <input type='text'
         className='rounded-md p-3 '
          placeholder='Enter Your Product Name'
          value={newProduct.name}
          onChange={(e)=>setNewProduct({...newProduct , name:e.target.value})}/>
        <input type='number'
         className='rounded-md p-3 '
          placeholder='Enter Price'
          value={newProduct.price}
          onChange={(e)=>setNewProduct({...newProduct , price:e.target.value})}/>
        <input type='text' 
        className='rounded-md p-3 ' 
        placeholder='Ente Image URL'
        value={newProduct.image}
        onChange={(e)=>setNewProduct({...newProduct , image:e.target.value})}/>

<div className='w-full flex items-center justify-center'>
        <button className='bg-slate-200 text-center max-[600px]:px-6 rounded-md py-2 mx-48 hover:bg-slate-400 font-bold'
        onClick={()=>handleAddButton()}
        >Add Product</button>
        </div>
       </div>
       </div>
  )
}

export default CreatePage