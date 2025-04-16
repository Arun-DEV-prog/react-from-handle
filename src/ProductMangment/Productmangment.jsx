import React, { useState } from 'react'
import Proudctform from './Proudctform'
import Producttable from './Producttable'

const Productmangment = () => {
    const [products,setProducts]=useState([])

   const handleAddProduct=nwproduct=>{
       const newProducts=[...products,nwproduct]
        setProducts(newProducts)
   }
  return (
    <div>
       <Proudctform handleAddProduct={handleAddProduct}></Proudctform>
       <Producttable products={products}></Producttable>
    </div>
  )
}

export default Productmangment
