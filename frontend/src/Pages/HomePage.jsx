import { Link } from "react-router-dom";
import Card from "../component/card.jsx";
import React, { useEffect, useState } from "react";
import { useProductStore } from "../store/product.js";
import UpdateProduct from "./UpdateProduct.jsx";

function HomePage() {
  const { fetchProducts, products } = useProductStore();
  const [isModelOpen , setIsModelOpen] = useState(false);
  const [selectedProduct , setSelectedProduct]=useState(null)

  function handleOpenModel(product){
    setIsModelOpen(true)
    setSelectedProduct(product)
  }

function handleCloseModel(){
  setIsModelOpen(false);
  setSelectedProduct(null)
}

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="bg-slate-700 m-10 rounded-md h-4/5 overflow-auto  p-4">
      {products.length ? (
        <div className="grid grid-cols-3 md:grid-cols-4 max-[600px]:grid-cols-1 gap-4 mt-4">
          {products.map((product) => {
            return <Card key={product._id} product={product} onEdit={handleOpenModel} />;
          })}
        </div>
      ) : (
        <div className="w-full flex gap-2 text-white font-mono font-bold text-lg justify-center">
          <h1>You dont have any product</h1>
          <Link to="/create" className="underline">
            Please create
          </Link>
        </div>
      )}

     {isModelOpen && <UpdateProduct product={selectedProduct} closeModel={handleCloseModel}/>}
    </div>
  );
}

export default HomePage;
