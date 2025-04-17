import React, { createContext, useState } from 'react'
import Grandpa from './Grandpa'
import "./familytree.css"

export  const AssetContext=createContext('');
export const MonyContext=createContext("");
const Framilytree = () => {

    const assets='Diamond'
    const nwAssets='Gold'
    const [money,setMoney]=useState(0)
   
    
    return (
    <div>
       <div className="family-tree">
         <h2>Family tree</h2>
          <h4>Total Family money: {money}</h4>
         <MonyContext value={[money,setMoney]}>
           <AssetContext.Provider value={nwAssets}>
           <Grandpa assets={assets}></Grandpa>
            </AssetContext.Provider>
         </MonyContext>
         
         
       </div>
    </div>
  )
}

export default Framilytree
