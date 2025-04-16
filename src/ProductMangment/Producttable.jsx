import React from 'react'

const Producttable = ({products}) => {
    console.log(products)
  return (
    <div>
      <h3>product:{products.length}</h3>
      <table>
        <thead>
             <tr>
                 <th>NO.</th>
                 <th>Product</th>
                 <th>Price</th>
                 <th>Quantity</th>
             </tr>
        </thead>
        <tbody>
           
                {
                    products.map((product,index)=><tr key={index}>
                             <td>{index+1}</td>
                             <td>{product.name}</td>
                             <td>{product.price}</td>
                             <td>{product. qunatity}</td>
                    </tr>)
                }
            
        </tbody>
      </table>
    </div>
  )
}

export default Producttable
