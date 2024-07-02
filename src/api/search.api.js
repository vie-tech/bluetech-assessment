import axios from "axios";

const BASE_URL = "http://3.88.1.181:8000/products/public/catalog?supplier=FragranceNet&first=20"

const fetchProducts = async (search) => {
   try{
    const response = await axios.get(`${BASE_URL}&search=${search}`)
    if(!response){
        throw new Error("Failed to fetch data") 
    }
    return response.data
   }catch(err){
      console.log(err)
   }
} 

export const filterProducts = async (search, supplier)=>{
    try{
        const response = await axios.get(`http://3.88.1.181:8000/products/public/catalog?supplier=${supplier}&first=2&search=${search}`)
        console.log(response)
        if(!response){
            throw new Error("Failed to fetch data") 
        }
        return response.data
       }catch(err){
          console.log(err)
       }
}

export default fetchProducts;