import React, { useState } from 'react'

const Proudctform = ({handleAddProduct}) => {
    const [error,setError]=useState('')
    
     const handleProductSubmit=(e)=>{
       
         e.preventDefault();
        const name=e.target.name.value;
        const price=e.target.price.value;
        const qunatity=e.target.qunatity.value;
        

        // validation
        if(name.length ===0){
             setError('Please provied product name')
        }else if(price.length ===0){
             setError('please provide price')
        }else if(price <0){
             setError('product can not be negetice')
        }else{
             setError('')
        }

        const newProduct={
             name,
             price,
             qunatity
        }

        if(!error){
            handleAddProduct(newProduct);
        }

     }
  return (
    <div>
         <h3>Add a Product</h3>
       <form onSubmit={handleProductSubmit}>
         <input  type="text" name='name' placeholder='Product name' /><br />
         <input  type="text" name='price' placeholder='Product price' /><br />
         <input type="text" name='qunatity' placeholder='Product qunatity' /><br/>
         <input type="submit" value="submit" />
       </form>
       <p>{error}</p>
    </div>
  )
}

export default Proudctform
