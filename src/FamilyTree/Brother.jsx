import React, { use } from 'react'
import { MonyContext } from './Framilytree'

const Brother = () => {

  const[money,setMoney] = use(MonyContext)
  return (
    <div>
       <h3>Brother</h3>
       <button onClick={()=>setMoney(money+1000)}>Add 1000 tk</button>
    </div>
  )
}

export default Brother
