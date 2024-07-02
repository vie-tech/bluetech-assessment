import React, { createContext, useState, useEffect } from "react";
import fetchProducts, {filterProducts} from "./api/search.api";
export const ProductContext = createContext();

const ProductProvider = ({children}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(null);

  const searchProducts = async(search, limit)=>{
     try{
        setLoading(true);
        const response = await fetchProducts(search);
        setProducts(response);
        
     }catch(err){
        console.log(err)
     }finally{
        setLoading(false)
     }
  }
  
  const searchFilteredProducts = async(search, supplier)=>{
     try{
        setLoading(true);
        if(!search || !supplier){
            throw new Error("Search and Supplier are required");
 
        }
        const response = await filterProducts(search, supplier);
       
        setProducts(response);
        
     }catch(err){
        console.log(err)
     }finally{
        setLoading(false)
     }
  }
  return <>
  <ProductContext.Provider value={{ products, loading, searchProducts, searchFilteredProducts }}>
      {children}
    </ProductContext.Provider>
  </>;
};

export default ProductProvider;
